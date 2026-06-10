window.quizData = window.quizData || {};
window.quizData.mongodbAssociateDeveloper = [
  {
    "question": "【MongoDB Associate Developer No.001／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "全フィールドを文字列化",
      "埋め込みドキュメント",
      "CSVファイルで管理",
      "常に別コレクションへ分割"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "基礎論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.002／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "findOne()",
      "insertOne()",
      "dropDatabase()",
      "updateMany()"
    ],
    "answer": "updateMany()",
    "explanation": "実務論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.003／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$lookup",
      "$match",
      "$project",
      "$group"
    ],
    "answer": "$match",
    "explanation": "試験対策論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.004／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "データベースコメント",
      "インデックス",
      "ドライバ名",
      "コレクション名"
    ],
    "answer": "インデックス",
    "explanation": "運用論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.005／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "トランザクション",
      "TTLインデックス",
      "readPreference",
      " capped collection"
    ],
    "answer": "トランザクション",
    "explanation": "設計論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.006／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "SSH config",
      "DNSSEC",
      "HTMLバリデーション",
      "JSON Schemaバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "基礎論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.007／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "全フィールドを文字列化",
      "常に別コレクションへ分割",
      "埋め込みドキュメント",
      "CSVファイルで管理"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "実務論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.008／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "updateMany()",
      "insertOne()",
      "dropDatabase()",
      "findOne()"
    ],
    "answer": "updateMany()",
    "explanation": "試験対策論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.009／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$match",
      "$group",
      "$project",
      "$lookup"
    ],
    "answer": "$match",
    "explanation": "運用論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.010／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "ドライバ名",
      "データベースコメント",
      "コレクション名",
      "インデックス"
    ],
    "answer": "インデックス",
    "explanation": "設計論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.011／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "トランザクション",
      "TTLインデックス",
      " capped collection",
      "readPreference"
    ],
    "answer": "トランザクション",
    "explanation": "基礎論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.012／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "JSON Schemaバリデーション",
      "DNSSEC",
      "HTMLバリデーション",
      "SSH config"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "実務論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.013／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "全フィールドを文字列化",
      "埋め込みドキュメント",
      "常に別コレクションへ分割",
      "CSVファイルで管理"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "試験対策論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.014／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "findOne()",
      "dropDatabase()",
      "insertOne()",
      "updateMany()"
    ],
    "answer": "updateMany()",
    "explanation": "運用論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.015／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$lookup",
      "$project",
      "$match",
      "$group"
    ],
    "answer": "$match",
    "explanation": "設計論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.016／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "インデックス",
      "ドライバ名",
      "コレクション名",
      "データベースコメント"
    ],
    "answer": "インデックス",
    "explanation": "基礎論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.017／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "トランザクション",
      " capped collection",
      "TTLインデックス",
      "readPreference"
    ],
    "answer": "トランザクション",
    "explanation": "実務論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.018／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "DNSSEC",
      "SSH config",
      "JSON Schemaバリデーション",
      "HTMLバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "試験対策論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.019／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "常に別コレクションへ分割",
      "全フィールドを文字列化",
      "CSVファイルで管理",
      "埋め込みドキュメント"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "運用論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.020／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "insertOne()",
      "updateMany()",
      "dropDatabase()",
      "findOne()"
    ],
    "answer": "updateMany()",
    "explanation": "設計論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.021／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$match",
      "$project",
      "$lookup",
      "$group"
    ],
    "answer": "$match",
    "explanation": "基礎論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.022／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "ドライバ名",
      "データベースコメント",
      "インデックス",
      "コレクション名"
    ],
    "answer": "インデックス",
    "explanation": "実務論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.023／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "TTLインデックス",
      "readPreference",
      "トランザクション",
      " capped collection"
    ],
    "answer": "トランザクション",
    "explanation": "試験対策論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.024／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "HTMLバリデーション",
      "JSON Schemaバリデーション",
      "DNSSEC",
      "SSH config"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "運用論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.025／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "常に別コレクションへ分割",
      "CSVファイルで管理",
      "埋め込みドキュメント",
      "全フィールドを文字列化"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "設計論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.026／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "dropDatabase()",
      "updateMany()",
      "insertOne()",
      "findOne()"
    ],
    "answer": "updateMany()",
    "explanation": "基礎論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.027／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$match",
      "$group",
      "$project",
      "$lookup"
    ],
    "answer": "$match",
    "explanation": "実務論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.028／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "コレクション名",
      "ドライバ名",
      "データベースコメント",
      "インデックス"
    ],
    "answer": "インデックス",
    "explanation": "試験対策論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.029／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "readPreference",
      " capped collection",
      "TTLインデックス",
      "トランザクション"
    ],
    "answer": "トランザクション",
    "explanation": "運用論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.030／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "HTMLバリデーション",
      "JSON Schemaバリデーション",
      "SSH config",
      "DNSSEC"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "設計論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.031／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "CSVファイルで管理",
      "全フィールドを文字列化",
      "常に別コレクションへ分割",
      "埋め込みドキュメント"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "基礎論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.032／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "findOne()",
      "insertOne()",
      "dropDatabase()",
      "updateMany()"
    ],
    "answer": "updateMany()",
    "explanation": "実務論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.033／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$lookup",
      "$match",
      "$project",
      "$group"
    ],
    "answer": "$match",
    "explanation": "試験対策論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.034／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "コレクション名",
      "インデックス",
      "ドライバ名",
      "データベースコメント"
    ],
    "answer": "インデックス",
    "explanation": "運用論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.035／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "readPreference",
      "TTLインデックス",
      "トランザクション",
      " capped collection"
    ],
    "answer": "トランザクション",
    "explanation": "設計論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.036／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "HTMLバリデーション",
      "SSH config",
      "JSON Schemaバリデーション",
      "DNSSEC"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "基礎論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.037／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "常に別コレクションへ分割",
      "全フィールドを文字列化",
      "CSVファイルで管理",
      "埋め込みドキュメント"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "実務論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.038／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "insertOne()",
      "updateMany()",
      "findOne()",
      "dropDatabase()"
    ],
    "answer": "updateMany()",
    "explanation": "試験対策論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.039／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$match",
      "$project",
      "$lookup",
      "$group"
    ],
    "answer": "$match",
    "explanation": "運用論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.040／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "コレクション名",
      "インデックス",
      "データベースコメント",
      "ドライバ名"
    ],
    "answer": "インデックス",
    "explanation": "設計論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.041／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      " capped collection",
      "トランザクション",
      "TTLインデックス",
      "readPreference"
    ],
    "answer": "トランザクション",
    "explanation": "基礎論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.042／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "DNSSEC",
      "HTMLバリデーション",
      "SSH config",
      "JSON Schemaバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "実務論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.043／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "CSVファイルで管理",
      "全フィールドを文字列化",
      "常に別コレクションへ分割",
      "埋め込みドキュメント"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "試験対策論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.044／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "findOne()",
      "updateMany()",
      "insertOne()",
      "dropDatabase()"
    ],
    "answer": "updateMany()",
    "explanation": "運用論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.045／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$match",
      "$lookup",
      "$group",
      "$project"
    ],
    "answer": "$match",
    "explanation": "設計論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.046／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "データベースコメント",
      "ドライバ名",
      "コレクション名",
      "インデックス"
    ],
    "answer": "インデックス",
    "explanation": "基礎論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.047／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "readPreference",
      "TTLインデックス",
      "トランザクション",
      " capped collection"
    ],
    "answer": "トランザクション",
    "explanation": "実務論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.048／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "SSH config",
      "HTMLバリデーション",
      "JSON Schemaバリデーション",
      "DNSSEC"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "試験対策論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.049／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "全フィールドを文字列化",
      "CSVファイルで管理",
      "常に別コレクションへ分割",
      "埋め込みドキュメント"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "運用論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.050／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "updateMany()",
      "insertOne()",
      "findOne()",
      "dropDatabase()"
    ],
    "answer": "updateMany()",
    "explanation": "設計論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.051／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$lookup",
      "$match",
      "$project",
      "$group"
    ],
    "answer": "$match",
    "explanation": "基礎論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.052／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "ドライバ名",
      "コレクション名",
      "インデックス",
      "データベースコメント"
    ],
    "answer": "インデックス",
    "explanation": "実務論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.053／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "トランザクション",
      " capped collection",
      "readPreference",
      "TTLインデックス"
    ],
    "answer": "トランザクション",
    "explanation": "試験対策論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.054／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "JSON Schemaバリデーション",
      "DNSSEC",
      "SSH config",
      "HTMLバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "運用論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.055／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "常に別コレクションへ分割",
      "CSVファイルで管理",
      "全フィールドを文字列化",
      "埋め込みドキュメント"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "設計論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.056／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "dropDatabase()",
      "insertOne()",
      "findOne()",
      "updateMany()"
    ],
    "answer": "updateMany()",
    "explanation": "基礎論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.057／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$project",
      "$lookup",
      "$group",
      "$match"
    ],
    "answer": "$match",
    "explanation": "実務論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.058／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "ドライバ名",
      "データベースコメント",
      "インデックス",
      "コレクション名"
    ],
    "answer": "インデックス",
    "explanation": "試験対策論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.059／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      " capped collection",
      "readPreference",
      "トランザクション",
      "TTLインデックス"
    ],
    "answer": "トランザクション",
    "explanation": "運用論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.060／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "SSH config",
      "JSON Schemaバリデーション",
      "HTMLバリデーション",
      "DNSSEC"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "設計論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.061／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "常に別コレクションへ分割",
      "CSVファイルで管理",
      "埋め込みドキュメント",
      "全フィールドを文字列化"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "基礎論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.062／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "dropDatabase()",
      "insertOne()",
      "updateMany()",
      "findOne()"
    ],
    "answer": "updateMany()",
    "explanation": "実務論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.063／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$match",
      "$project",
      "$group",
      "$lookup"
    ],
    "answer": "$match",
    "explanation": "試験対策論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.064／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "データベースコメント",
      "コレクション名",
      "インデックス",
      "ドライバ名"
    ],
    "answer": "インデックス",
    "explanation": "運用論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.065／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "トランザクション",
      " capped collection",
      "TTLインデックス",
      "readPreference"
    ],
    "answer": "トランザクション",
    "explanation": "設計論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.066／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "SSH config",
      "DNSSEC",
      "HTMLバリデーション",
      "JSON Schemaバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "基礎論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.067／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "CSVファイルで管理",
      "常に別コレクションへ分割",
      "全フィールドを文字列化",
      "埋め込みドキュメント"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "実務論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.068／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "findOne()",
      "updateMany()",
      "insertOne()",
      "dropDatabase()"
    ],
    "answer": "updateMany()",
    "explanation": "試験対策論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.069／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$group",
      "$project",
      "$lookup",
      "$match"
    ],
    "answer": "$match",
    "explanation": "運用論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.070／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "ドライバ名",
      "データベースコメント",
      "コレクション名",
      "インデックス"
    ],
    "answer": "インデックス",
    "explanation": "設計論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.071／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "TTLインデックス",
      "トランザクション",
      "readPreference",
      " capped collection"
    ],
    "answer": "トランザクション",
    "explanation": "基礎論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.072／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "HTMLバリデーション",
      "SSH config",
      "DNSSEC",
      "JSON Schemaバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "実務論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.073／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "全フィールドを文字列化",
      "常に別コレクションへ分割",
      "埋め込みドキュメント",
      "CSVファイルで管理"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "試験対策論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.074／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "insertOne()",
      "dropDatabase()",
      "findOne()",
      "updateMany()"
    ],
    "answer": "updateMany()",
    "explanation": "運用論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.075／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$match",
      "$group",
      "$project",
      "$lookup"
    ],
    "answer": "$match",
    "explanation": "設計論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.076／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "インデックス",
      "ドライバ名",
      "コレクション名",
      "データベースコメント"
    ],
    "answer": "インデックス",
    "explanation": "基礎論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.077／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "readPreference",
      "トランザクション",
      "TTLインデックス",
      " capped collection"
    ],
    "answer": "トランザクション",
    "explanation": "実務論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.078／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "DNSSEC",
      "SSH config",
      "JSON Schemaバリデーション",
      "HTMLバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "試験対策論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.079／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "埋め込みドキュメント",
      "CSVファイルで管理",
      "全フィールドを文字列化",
      "常に別コレクションへ分割"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "運用論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.080／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "updateMany()",
      "dropDatabase()",
      "findOne()",
      "insertOne()"
    ],
    "answer": "updateMany()",
    "explanation": "設計論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.081／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$match",
      "$project",
      "$group",
      "$lookup"
    ],
    "answer": "$match",
    "explanation": "基礎論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.082／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "インデックス",
      "データベースコメント",
      "ドライバ名",
      "コレクション名"
    ],
    "answer": "インデックス",
    "explanation": "実務論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.083／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      " capped collection",
      "トランザクション",
      "TTLインデックス",
      "readPreference"
    ],
    "answer": "トランザクション",
    "explanation": "試験対策論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.084／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "SSH config",
      "HTMLバリデーション",
      "JSON Schemaバリデーション",
      "DNSSEC"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "運用論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.085／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "全フィールドを文字列化",
      "埋め込みドキュメント",
      "CSVファイルで管理",
      "常に別コレクションへ分割"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "設計論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.086／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "dropDatabase()",
      "findOne()",
      "insertOne()",
      "updateMany()"
    ],
    "answer": "updateMany()",
    "explanation": "基礎論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.087／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$lookup",
      "$match",
      "$project",
      "$group"
    ],
    "answer": "$match",
    "explanation": "実務論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.088／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "データベースコメント",
      "コレクション名",
      "インデックス",
      "ドライバ名"
    ],
    "answer": "インデックス",
    "explanation": "試験対策論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.089／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "readPreference",
      "TTLインデックス",
      " capped collection",
      "トランザクション"
    ],
    "answer": "トランザクション",
    "explanation": "運用論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.090／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "SSH config",
      "JSON Schemaバリデーション",
      "DNSSEC",
      "HTMLバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "設計論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.091／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "常に別コレクションへ分割",
      "全フィールドを文字列化",
      "CSVファイルで管理",
      "埋め込みドキュメント"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "基礎論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.092／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "updateMany()",
      "findOne()",
      "insertOne()",
      "dropDatabase()"
    ],
    "answer": "updateMany()",
    "explanation": "実務論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.093／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$match",
      "$group",
      "$project",
      "$lookup"
    ],
    "answer": "$match",
    "explanation": "試験対策論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.094／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "データベースコメント",
      "ドライバ名",
      "インデックス",
      "コレクション名"
    ],
    "answer": "インデックス",
    "explanation": "運用論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.095／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      " capped collection",
      "トランザクション",
      "readPreference",
      "TTLインデックス"
    ],
    "answer": "トランザクション",
    "explanation": "設計論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.096／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "JSON Schemaバリデーション",
      "SSH config",
      "HTMLバリデーション",
      "DNSSEC"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "基礎論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.097／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "埋め込みドキュメント",
      "CSVファイルで管理",
      "全フィールドを文字列化",
      "常に別コレクションへ分割"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "実務論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.098／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "findOne()",
      "updateMany()",
      "dropDatabase()",
      "insertOne()"
    ],
    "answer": "updateMany()",
    "explanation": "試験対策論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.099／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$project",
      "$match",
      "$group",
      "$lookup"
    ],
    "answer": "$match",
    "explanation": "運用論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.100／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "インデックス",
      "データベースコメント",
      "ドライバ名",
      "コレクション名"
    ],
    "answer": "インデックス",
    "explanation": "設計論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.101／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "トランザクション",
      "readPreference",
      " capped collection",
      "TTLインデックス"
    ],
    "answer": "トランザクション",
    "explanation": "基礎論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.102／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "JSON Schemaバリデーション",
      "SSH config",
      "DNSSEC",
      "HTMLバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "実務論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.103／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "常に別コレクションへ分割",
      "埋め込みドキュメント",
      "CSVファイルで管理",
      "全フィールドを文字列化"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "試験対策論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.104／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "findOne()",
      "insertOne()",
      "dropDatabase()",
      "updateMany()"
    ],
    "answer": "updateMany()",
    "explanation": "運用論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.105／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$group",
      "$match",
      "$lookup",
      "$project"
    ],
    "answer": "$match",
    "explanation": "設計論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.106／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "データベースコメント",
      "コレクション名",
      "インデックス",
      "ドライバ名"
    ],
    "answer": "インデックス",
    "explanation": "基礎論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.107／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "トランザクション",
      "readPreference",
      " capped collection",
      "TTLインデックス"
    ],
    "answer": "トランザクション",
    "explanation": "実務論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.108／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "SSH config",
      "JSON Schemaバリデーション",
      "DNSSEC",
      "HTMLバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "試験対策論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.109／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "全フィールドを文字列化",
      "常に別コレクションへ分割",
      "埋め込みドキュメント",
      "CSVファイルで管理"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "運用論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.110／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "findOne()",
      "updateMany()",
      "insertOne()",
      "dropDatabase()"
    ],
    "answer": "updateMany()",
    "explanation": "設計論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.111／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$match",
      "$project",
      "$lookup",
      "$group"
    ],
    "answer": "$match",
    "explanation": "基礎論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.112／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "インデックス",
      "コレクション名",
      "データベースコメント",
      "ドライバ名"
    ],
    "answer": "インデックス",
    "explanation": "実務論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.113／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "readPreference",
      "TTLインデックス",
      " capped collection",
      "トランザクション"
    ],
    "answer": "トランザクション",
    "explanation": "試験対策論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.114／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "SSH config",
      "JSON Schemaバリデーション",
      "DNSSEC",
      "HTMLバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "運用論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.115／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "常に別コレクションへ分割",
      "全フィールドを文字列化",
      "埋め込みドキュメント",
      "CSVファイルで管理"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "設計論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.116／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "findOne()",
      "dropDatabase()",
      "updateMany()",
      "insertOne()"
    ],
    "answer": "updateMany()",
    "explanation": "基礎論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.117／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$lookup",
      "$project",
      "$match",
      "$group"
    ],
    "answer": "$match",
    "explanation": "実務論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.118／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "データベースコメント",
      "インデックス",
      "ドライバ名",
      "コレクション名"
    ],
    "answer": "インデックス",
    "explanation": "試験対策論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.119／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "readPreference",
      "TTLインデックス",
      "トランザクション",
      " capped collection"
    ],
    "answer": "トランザクション",
    "explanation": "運用論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.120／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "DNSSEC",
      "SSH config",
      "JSON Schemaバリデーション",
      "HTMLバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "設計論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.121／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "CSVファイルで管理",
      "常に別コレクションへ分割",
      "全フィールドを文字列化",
      "埋め込みドキュメント"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "基礎論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.122／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "updateMany()",
      "dropDatabase()",
      "insertOne()",
      "findOne()"
    ],
    "answer": "updateMany()",
    "explanation": "実務論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.123／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$project",
      "$lookup",
      "$group",
      "$match"
    ],
    "answer": "$match",
    "explanation": "試験対策論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.124／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "コレクション名",
      "インデックス",
      "ドライバ名",
      "データベースコメント"
    ],
    "answer": "インデックス",
    "explanation": "運用論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.125／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      " capped collection",
      "readPreference",
      "トランザクション",
      "TTLインデックス"
    ],
    "answer": "トランザクション",
    "explanation": "設計論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.126／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "SSH config",
      "HTMLバリデーション",
      "DNSSEC",
      "JSON Schemaバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "基礎論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.127／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "常に別コレクションへ分割",
      "全フィールドを文字列化",
      "CSVファイルで管理",
      "埋め込みドキュメント"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "実務論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.128／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "updateMany()",
      "insertOne()",
      "dropDatabase()",
      "findOne()"
    ],
    "answer": "updateMany()",
    "explanation": "試験対策論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.129／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$lookup",
      "$group",
      "$match",
      "$project"
    ],
    "answer": "$match",
    "explanation": "運用論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.130／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "インデックス",
      "データベースコメント",
      "コレクション名",
      "ドライバ名"
    ],
    "answer": "インデックス",
    "explanation": "設計論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.131／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "readPreference",
      "トランザクション",
      "TTLインデックス",
      " capped collection"
    ],
    "answer": "トランザクション",
    "explanation": "基礎論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.132／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "DNSSEC",
      "HTMLバリデーション",
      "JSON Schemaバリデーション",
      "SSH config"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "実務論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.133／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "埋め込みドキュメント",
      "CSVファイルで管理",
      "常に別コレクションへ分割",
      "全フィールドを文字列化"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "試験対策論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.134／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "findOne()",
      "updateMany()",
      "insertOne()",
      "dropDatabase()"
    ],
    "answer": "updateMany()",
    "explanation": "運用論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.135／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$match",
      "$group",
      "$lookup",
      "$project"
    ],
    "answer": "$match",
    "explanation": "設計論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.136／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "コレクション名",
      "インデックス",
      "データベースコメント",
      "ドライバ名"
    ],
    "answer": "インデックス",
    "explanation": "基礎論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.137／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      " capped collection",
      "TTLインデックス",
      "readPreference",
      "トランザクション"
    ],
    "answer": "トランザクション",
    "explanation": "実務論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.138／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "JSON Schemaバリデーション",
      "DNSSEC",
      "SSH config",
      "HTMLバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "試験対策論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.139／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "全フィールドを文字列化",
      "常に別コレクションへ分割",
      "CSVファイルで管理",
      "埋め込みドキュメント"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "運用論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.140／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "insertOne()",
      "findOne()",
      "dropDatabase()",
      "updateMany()"
    ],
    "answer": "updateMany()",
    "explanation": "設計論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.141／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$lookup",
      "$group",
      "$project",
      "$match"
    ],
    "answer": "$match",
    "explanation": "基礎論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.142／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "データベースコメント",
      "コレクション名",
      "インデックス",
      "ドライバ名"
    ],
    "answer": "インデックス",
    "explanation": "実務論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.143／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "readPreference",
      " capped collection",
      "トランザクション",
      "TTLインデックス"
    ],
    "answer": "トランザクション",
    "explanation": "試験対策論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.144／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "DNSSEC",
      "HTMLバリデーション",
      "JSON Schemaバリデーション",
      "SSH config"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "運用論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.145／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "常に別コレクションへ分割",
      "埋め込みドキュメント",
      "CSVファイルで管理",
      "全フィールドを文字列化"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "設計論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.146／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "insertOne()",
      "dropDatabase()",
      "updateMany()",
      "findOne()"
    ],
    "answer": "updateMany()",
    "explanation": "基礎論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.147／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$match",
      "$project",
      "$lookup",
      "$group"
    ],
    "answer": "$match",
    "explanation": "実務論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.148／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "コレクション名",
      "インデックス",
      "データベースコメント",
      "ドライバ名"
    ],
    "answer": "インデックス",
    "explanation": "試験対策論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.149／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      " capped collection",
      "TTLインデックス",
      "readPreference",
      "トランザクション"
    ],
    "answer": "トランザクション",
    "explanation": "運用論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.150／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "SSH config",
      "JSON Schemaバリデーション",
      "HTMLバリデーション",
      "DNSSEC"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "設計論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.151／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "常に別コレクションへ分割",
      "埋め込みドキュメント",
      "CSVファイルで管理",
      "全フィールドを文字列化"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "基礎論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.152／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "findOne()",
      "updateMany()",
      "insertOne()",
      "dropDatabase()"
    ],
    "answer": "updateMany()",
    "explanation": "実務論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.153／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$group",
      "$project",
      "$match",
      "$lookup"
    ],
    "answer": "$match",
    "explanation": "試験対策論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.154／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "インデックス",
      "データベースコメント",
      "ドライバ名",
      "コレクション名"
    ],
    "answer": "インデックス",
    "explanation": "運用論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.155／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "トランザクション",
      "TTLインデックス",
      "readPreference",
      " capped collection"
    ],
    "answer": "トランザクション",
    "explanation": "設計論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.156／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "DNSSEC",
      "JSON Schemaバリデーション",
      "HTMLバリデーション",
      "SSH config"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "基礎論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.157／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "常に別コレクションへ分割",
      "CSVファイルで管理",
      "埋め込みドキュメント",
      "全フィールドを文字列化"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "実務論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.158／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "dropDatabase()",
      "insertOne()",
      "updateMany()",
      "findOne()"
    ],
    "answer": "updateMany()",
    "explanation": "試験対策論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.159／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$project",
      "$group",
      "$match",
      "$lookup"
    ],
    "answer": "$match",
    "explanation": "運用論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.160／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "ドライバ名",
      "コレクション名",
      "データベースコメント",
      "インデックス"
    ],
    "answer": "インデックス",
    "explanation": "設計論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.161／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "readPreference",
      "トランザクション",
      " capped collection",
      "TTLインデックス"
    ],
    "answer": "トランザクション",
    "explanation": "基礎論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.162／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "HTMLバリデーション",
      "SSH config",
      "DNSSEC",
      "JSON Schemaバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "実務論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.163／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "常に別コレクションへ分割",
      "埋め込みドキュメント",
      "CSVファイルで管理",
      "全フィールドを文字列化"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "試験対策論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.164／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "dropDatabase()",
      "findOne()",
      "insertOne()",
      "updateMany()"
    ],
    "answer": "updateMany()",
    "explanation": "運用論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.165／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$project",
      "$group",
      "$lookup",
      "$match"
    ],
    "answer": "$match",
    "explanation": "設計論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.166／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "インデックス",
      "ドライバ名",
      "データベースコメント",
      "コレクション名"
    ],
    "answer": "インデックス",
    "explanation": "基礎論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.167／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      " capped collection",
      "readPreference",
      "トランザクション",
      "TTLインデックス"
    ],
    "answer": "トランザクション",
    "explanation": "実務論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.168／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "SSH config",
      "HTMLバリデーション",
      "DNSSEC",
      "JSON Schemaバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "試験対策論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.169／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "常に別コレクションへ分割",
      "埋め込みドキュメント",
      "全フィールドを文字列化",
      "CSVファイルで管理"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "運用論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.170／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "updateMany()",
      "findOne()",
      "dropDatabase()",
      "insertOne()"
    ],
    "answer": "updateMany()",
    "explanation": "設計論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.171／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$project",
      "$match",
      "$group",
      "$lookup"
    ],
    "answer": "$match",
    "explanation": "基礎論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.172／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "コレクション名",
      "ドライバ名",
      "インデックス",
      "データベースコメント"
    ],
    "answer": "インデックス",
    "explanation": "実務論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.173／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "トランザクション",
      "readPreference",
      "TTLインデックス",
      " capped collection"
    ],
    "answer": "トランザクション",
    "explanation": "試験対策論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.174／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "DNSSEC",
      "SSH config",
      "HTMLバリデーション",
      "JSON Schemaバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "運用論点。コレクションにバリデーションルールを設定できます。"
  },
  {
    "question": "【MongoDB Associate Developer No.175／ドキュメント設計】MongoDBで関連データを同じ読み取りでよく使う場合、基本的に検討する設計はどれですか？",
    "choices": [
      "常に別コレクションへ分割",
      "CSVファイルで管理",
      "埋め込みドキュメント",
      "全フィールドを文字列化"
    ],
    "answer": "埋め込みドキュメント",
    "explanation": "設計論点。同時に読むデータは埋め込みが有効です。"
  },
  {
    "question": "【MongoDB Associate Developer No.176／CRUD】MongoDBで条件に一致する複数ドキュメントを更新するメソッドはどれですか？",
    "choices": [
      "findOne()",
      "insertOne()",
      "dropDatabase()",
      "updateMany()"
    ],
    "answer": "updateMany()",
    "explanation": "基礎論点。updateMany()は複数件更新に使います。"
  },
  {
    "question": "【MongoDB Associate Developer No.177／集約】集約パイプラインで条件に合う文書だけを次段へ渡すステージはどれですか？",
    "choices": [
      "$match",
      "$project",
      "$lookup",
      "$group"
    ],
    "answer": "$match",
    "explanation": "実務論点。$matchはSQLのWHEREに近い絞り込みです。"
  },
  {
    "question": "【MongoDB Associate Developer No.178／インデックス】頻繁に検索するフィールドに作成すると検索性能を改善しやすいものはどれですか？",
    "choices": [
      "ドライバ名",
      "コレクション名",
      "データベースコメント",
      "インデックス"
    ],
    "answer": "インデックス",
    "explanation": "試験対策論点。検索条件に合うインデックスは走査量削減に役立ちます。"
  },
  {
    "question": "【MongoDB Associate Developer No.179／トランザクション】複数操作をまとめて成功または失敗にしたい場合に使う機能はどれですか？",
    "choices": [
      "readPreference",
      " capped collection",
      "トランザクション",
      "TTLインデックス"
    ],
    "answer": "トランザクション",
    "explanation": "運用論点。トランザクションは原子性を確保します。"
  },
  {
    "question": "【MongoDB Associate Developer No.180／スキーマ】MongoDBでスキーマ検証に使える仕組みはどれですか？",
    "choices": [
      "SSH config",
      "DNSSEC",
      "JSON Schemaバリデーション",
      "HTMLバリデーション"
    ],
    "answer": "JSON Schemaバリデーション",
    "explanation": "設計論点。コレクションにバリデーションルールを設定できます。"
  }
];
