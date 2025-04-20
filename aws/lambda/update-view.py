import os
import json
import boto3
from botocore.exceptions import ClientError

# DynamoDBクライアントまたはリソース
dynamodb   = boto3.resource('dynamodb')
table_name = os.environ['VIEWTABLE_NAME']
table      = dynamodb.Table(table_name)
webtype    = "aws-mypage"

def lambda_handler(event, context):
    try:
        # DynamoDBのアイテムを更新
        # 'count'属性が存在しない場合は0を初期値として加算
        # 'count'属性が存在する場合はその値に1を加算
        response = table.update_item(
            Key={'webtype': webtype},
            UpdateExpression='SET #c = if_not_exists(#c, :zero) + :inc',
            ExpressionAttributeNames={'#c': 'count'},
            ExpressionAttributeValues={':inc': 1, ':zero': 0},
            ReturnValues='UPDATED_NEW'
        )
        # 更新されたアイテムの'count'属性を取得
        updated_count = response['Attributes']['count']
        return {'statusCode': 200, 'body': json.dumps({'count': updated_count})}

    except ClientError as e:
        print(f"DynamoDB ClientError: {e.response['Error']['Message']}")
        return {'statusCode': 500, 'body': json.dumps({'message': 'Internal Server Error'})}
    except Exception as e:
        print(f"Unexpected error: {e}")
        return {'statusCode': 500, 'body': json.dumps({'message': 'Internal Server Error'})}