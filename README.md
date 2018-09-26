# DB
---

## uersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: false|
|user_name|varchar|null: false, foreign_key: false|

### Association
- has_many :members
- has_many :chats
- has_many :comments

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: false|
|group_name|varchar|null: false, foreign_key: false|

### Association
- has_many :members

## chatsテーブル

|Column|Type|Options|
|------|----|-------|
|chat_id|integer|null: false, foreign_key: false|
|chat_text|varchar|null: false, foreign_key: false|
|chat_user|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- has_many :comments

## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|chat_id|integer|null: false, foreign_key: true|
|comment_id|integer|null: false, foreign_key: false|
|comment_text|varchar|null: false, foreign_key: false|
|comment_user|integer|null: false, foreign_key: true|

### Association
- belongs_to :chat
- belongs_to :user


# その他今後記載予定
---

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
