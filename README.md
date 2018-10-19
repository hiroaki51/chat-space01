# DB
---

## uersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: false|
|user_name|varchar|null: false, foreign_key: false|

### Association
- has_many :members
- has_many :messages
- has_many :comments

## group_usersテーブル

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

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|message_id|integer|null: false, foreign_key: false|
|body|text|null: false, foreign_key: false|
|image|string|null: false, foreign_key: false|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- has_many :comments

## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|message_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|comment_id|integer|null: false, foreign_key: false|
|comment_text|text|null: false, foreign_key: false|

### Association
- belongs_to :message
- belongs_to :user


# その他今後記載予定
---

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
