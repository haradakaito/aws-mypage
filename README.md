# マイページ

## システム概要図

![システム概要図](https://github.com/user-attachments/assets/79a68145-22fd-409f-9f4b-3d5b8d036c10)

## クラウド環境

- AWS Cloud（クラウドサーバー）

|Webサーバー | APIサーバー         | データベース | アクセス制限 | 監視       |
|----       |----                 |----         |----         |----
| Amplify   | API Gateway, Lambda | DynamoDB    | WAF         | CloudWatch |
