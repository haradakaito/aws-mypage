import os
import json
import boto3

# DynamoDBクライアントまたはリソース
dynamodb   = boto3.resource('dynamodb')
table_name = os.environ['VIEWTABLE_NAME']
table      = dynamodb.Table(table_name)
webtype    = "aws-mypage"

def lambda_handler(event, context):
    try:
        # DynamoDBからアイテムを取得
        response = table.get_item(Key={'webtype': webtype})
        item = response.get('Item')
        # DynamoDBから取得したアイテムが存在しない場合の処理
        if not item:
            return {'statusCode': 404, 'body': json.dumps({'message': 'Item not found'})}
        # DynamoDBから取得したアイテムの'count'属性を取得
        # 'count'属性が存在しない場合は0を返す
        count = item.get('count', 0)
        return {'statusCode': 200, 'body': json.dumps({'count': count})}

    except Exception as e:
        print(f"Error fetching item: {e}")
        return {'statusCode': 500, 'body': json.dumps({'message': 'Internal Server Error'})}