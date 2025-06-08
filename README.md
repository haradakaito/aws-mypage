# マイページ

## システム概要図

![システム概要図](https://github.com/user-attachments/assets/79a68145-22fd-409f-9f4b-3d5b8d036c10)

## クラウド環境

- AWS Cloud（クラウドサーバー）

|Webサーバー | APIサーバー         | データベース | アクセス制限 | 監視       |
|----       |----                 |----         |----         |----
| Amplify   | API Gateway, Lambda | DynamoDB    | WAF         | CloudWatch |

※ 2025.06.05にRoute53のドメインを削除し，現在はAmplifyからの直接アクセスに変更しました
