window.quizData = window.quizData || {};
window.quizData.postgresqlAssociate = [
  {
    "question": "【PostgreSQL Associate Certification No.001／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "CREATE",
      "WHERE",
      "ORDER BY",
      "GROUP BY"
    ],
    "answer": "WHERE",
    "explanation": "基礎論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.002／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "重複とNULLを必ず許す",
      "表を削除する",
      "接続を暗号化する",
      "行を一意に識別しNULLを許さない"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "実務論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.003／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "DNS委任",
      "等価検索や範囲検索",
      "メール送信",
      "画像生成"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "試験対策論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.004／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "VACUUM SELECT;",
      "GRANT SELECT ON table_name TO user_name;",
      "COMMIT SELECT;",
      "DROP SELECT table_name;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "運用論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.005／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "pg_dump",
      "ps",
      "chmod",
      "curl"
    ],
    "answer": "pg_dump",
    "explanation": "設計論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.006／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ANALYZE",
      "EXPLAIN",
      "ROLLBACK",
      "COMMIT"
    ],
    "answer": "COMMIT",
    "explanation": "基礎論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.007／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "CREATE",
      "GROUP BY",
      "WHERE",
      "ORDER BY"
    ],
    "answer": "WHERE",
    "explanation": "実務論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.008／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "行を一意に識別しNULLを許さない",
      "表を削除する",
      "接続を暗号化する",
      "重複とNULLを必ず許す"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "試験対策論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.009／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "等価検索や範囲検索",
      "画像生成",
      "メール送信",
      "DNS委任"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "運用論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.010／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "COMMIT SELECT;",
      "VACUUM SELECT;",
      "DROP SELECT table_name;",
      "GRANT SELECT ON table_name TO user_name;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "設計論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.011／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "pg_dump",
      "ps",
      "curl",
      "chmod"
    ],
    "answer": "pg_dump",
    "explanation": "基礎論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.012／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "COMMIT",
      "EXPLAIN",
      "ROLLBACK",
      "ANALYZE"
    ],
    "answer": "COMMIT",
    "explanation": "実務論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.013／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "CREATE",
      "WHERE",
      "GROUP BY",
      "ORDER BY"
    ],
    "answer": "WHERE",
    "explanation": "試験対策論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.014／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "重複とNULLを必ず許す",
      "接続を暗号化する",
      "表を削除する",
      "行を一意に識別しNULLを許さない"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "運用論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.015／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "DNS委任",
      "メール送信",
      "等価検索や範囲検索",
      "画像生成"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "設計論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.016／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "GRANT SELECT ON table_name TO user_name;",
      "COMMIT SELECT;",
      "DROP SELECT table_name;",
      "VACUUM SELECT;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "基礎論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.017／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "pg_dump",
      "curl",
      "ps",
      "chmod"
    ],
    "answer": "pg_dump",
    "explanation": "実務論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.018／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "EXPLAIN",
      "ANALYZE",
      "COMMIT",
      "ROLLBACK"
    ],
    "answer": "COMMIT",
    "explanation": "試験対策論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.019／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "GROUP BY",
      "CREATE",
      "ORDER BY",
      "WHERE"
    ],
    "answer": "WHERE",
    "explanation": "運用論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.020／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "表を削除する",
      "行を一意に識別しNULLを許さない",
      "接続を暗号化する",
      "重複とNULLを必ず許す"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "設計論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.021／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "等価検索や範囲検索",
      "メール送信",
      "DNS委任",
      "画像生成"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "基礎論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.022／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "COMMIT SELECT;",
      "VACUUM SELECT;",
      "GRANT SELECT ON table_name TO user_name;",
      "DROP SELECT table_name;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "実務論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.023／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "ps",
      "chmod",
      "pg_dump",
      "curl"
    ],
    "answer": "pg_dump",
    "explanation": "試験対策論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.024／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ROLLBACK",
      "COMMIT",
      "EXPLAIN",
      "ANALYZE"
    ],
    "answer": "COMMIT",
    "explanation": "運用論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.025／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "GROUP BY",
      "ORDER BY",
      "WHERE",
      "CREATE"
    ],
    "answer": "WHERE",
    "explanation": "設計論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.026／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "接続を暗号化する",
      "行を一意に識別しNULLを許さない",
      "表を削除する",
      "重複とNULLを必ず許す"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "基礎論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.027／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "等価検索や範囲検索",
      "画像生成",
      "メール送信",
      "DNS委任"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "実務論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.028／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "DROP SELECT table_name;",
      "COMMIT SELECT;",
      "VACUUM SELECT;",
      "GRANT SELECT ON table_name TO user_name;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "試験対策論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.029／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "chmod",
      "curl",
      "ps",
      "pg_dump"
    ],
    "answer": "pg_dump",
    "explanation": "運用論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.030／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ROLLBACK",
      "COMMIT",
      "ANALYZE",
      "EXPLAIN"
    ],
    "answer": "COMMIT",
    "explanation": "設計論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.031／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "ORDER BY",
      "CREATE",
      "GROUP BY",
      "WHERE"
    ],
    "answer": "WHERE",
    "explanation": "基礎論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.032／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "重複とNULLを必ず許す",
      "表を削除する",
      "接続を暗号化する",
      "行を一意に識別しNULLを許さない"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "実務論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.033／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "DNS委任",
      "等価検索や範囲検索",
      "メール送信",
      "画像生成"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "試験対策論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.034／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "DROP SELECT table_name;",
      "GRANT SELECT ON table_name TO user_name;",
      "COMMIT SELECT;",
      "VACUUM SELECT;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "運用論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.035／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "chmod",
      "ps",
      "pg_dump",
      "curl"
    ],
    "answer": "pg_dump",
    "explanation": "設計論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.036／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ROLLBACK",
      "ANALYZE",
      "COMMIT",
      "EXPLAIN"
    ],
    "answer": "COMMIT",
    "explanation": "基礎論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.037／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "GROUP BY",
      "CREATE",
      "ORDER BY",
      "WHERE"
    ],
    "answer": "WHERE",
    "explanation": "実務論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.038／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "表を削除する",
      "行を一意に識別しNULLを許さない",
      "重複とNULLを必ず許す",
      "接続を暗号化する"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "試験対策論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.039／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "等価検索や範囲検索",
      "メール送信",
      "DNS委任",
      "画像生成"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "運用論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.040／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "DROP SELECT table_name;",
      "GRANT SELECT ON table_name TO user_name;",
      "VACUUM SELECT;",
      "COMMIT SELECT;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "設計論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.041／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "curl",
      "pg_dump",
      "ps",
      "chmod"
    ],
    "answer": "pg_dump",
    "explanation": "基礎論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.042／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "EXPLAIN",
      "ROLLBACK",
      "ANALYZE",
      "COMMIT"
    ],
    "answer": "COMMIT",
    "explanation": "実務論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.043／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "ORDER BY",
      "CREATE",
      "GROUP BY",
      "WHERE"
    ],
    "answer": "WHERE",
    "explanation": "試験対策論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.044／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "重複とNULLを必ず許す",
      "行を一意に識別しNULLを許さない",
      "表を削除する",
      "接続を暗号化する"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "運用論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.045／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "等価検索や範囲検索",
      "DNS委任",
      "画像生成",
      "メール送信"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "設計論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.046／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "VACUUM SELECT;",
      "COMMIT SELECT;",
      "DROP SELECT table_name;",
      "GRANT SELECT ON table_name TO user_name;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "基礎論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.047／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "chmod",
      "ps",
      "pg_dump",
      "curl"
    ],
    "answer": "pg_dump",
    "explanation": "実務論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.048／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ANALYZE",
      "ROLLBACK",
      "COMMIT",
      "EXPLAIN"
    ],
    "answer": "COMMIT",
    "explanation": "試験対策論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.049／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "CREATE",
      "ORDER BY",
      "GROUP BY",
      "WHERE"
    ],
    "answer": "WHERE",
    "explanation": "運用論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.050／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "行を一意に識別しNULLを許さない",
      "表を削除する",
      "重複とNULLを必ず許す",
      "接続を暗号化する"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "設計論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.051／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "DNS委任",
      "等価検索や範囲検索",
      "メール送信",
      "画像生成"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "基礎論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.052／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "COMMIT SELECT;",
      "DROP SELECT table_name;",
      "GRANT SELECT ON table_name TO user_name;",
      "VACUUM SELECT;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "実務論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.053／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "pg_dump",
      "curl",
      "chmod",
      "ps"
    ],
    "answer": "pg_dump",
    "explanation": "試験対策論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.054／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "COMMIT",
      "EXPLAIN",
      "ANALYZE",
      "ROLLBACK"
    ],
    "answer": "COMMIT",
    "explanation": "運用論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.055／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "GROUP BY",
      "ORDER BY",
      "CREATE",
      "WHERE"
    ],
    "answer": "WHERE",
    "explanation": "設計論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.056／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "接続を暗号化する",
      "表を削除する",
      "重複とNULLを必ず許す",
      "行を一意に識別しNULLを許さない"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "基礎論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.057／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "メール送信",
      "DNS委任",
      "画像生成",
      "等価検索や範囲検索"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "実務論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.058／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "COMMIT SELECT;",
      "VACUUM SELECT;",
      "GRANT SELECT ON table_name TO user_name;",
      "DROP SELECT table_name;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "試験対策論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.059／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "curl",
      "chmod",
      "pg_dump",
      "ps"
    ],
    "answer": "pg_dump",
    "explanation": "運用論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.060／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ANALYZE",
      "COMMIT",
      "ROLLBACK",
      "EXPLAIN"
    ],
    "answer": "COMMIT",
    "explanation": "設計論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.061／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "GROUP BY",
      "ORDER BY",
      "WHERE",
      "CREATE"
    ],
    "answer": "WHERE",
    "explanation": "基礎論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.062／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "接続を暗号化する",
      "表を削除する",
      "行を一意に識別しNULLを許さない",
      "重複とNULLを必ず許す"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "実務論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.063／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "等価検索や範囲検索",
      "メール送信",
      "画像生成",
      "DNS委任"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "試験対策論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.064／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "VACUUM SELECT;",
      "DROP SELECT table_name;",
      "GRANT SELECT ON table_name TO user_name;",
      "COMMIT SELECT;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "運用論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.065／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "pg_dump",
      "curl",
      "ps",
      "chmod"
    ],
    "answer": "pg_dump",
    "explanation": "設計論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.066／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ANALYZE",
      "EXPLAIN",
      "ROLLBACK",
      "COMMIT"
    ],
    "answer": "COMMIT",
    "explanation": "基礎論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.067／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "ORDER BY",
      "GROUP BY",
      "CREATE",
      "WHERE"
    ],
    "answer": "WHERE",
    "explanation": "実務論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.068／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "重複とNULLを必ず許す",
      "行を一意に識別しNULLを許さない",
      "表を削除する",
      "接続を暗号化する"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "試験対策論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.069／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "画像生成",
      "メール送信",
      "DNS委任",
      "等価検索や範囲検索"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "運用論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.070／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "COMMIT SELECT;",
      "VACUUM SELECT;",
      "DROP SELECT table_name;",
      "GRANT SELECT ON table_name TO user_name;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "設計論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.071／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "ps",
      "pg_dump",
      "chmod",
      "curl"
    ],
    "answer": "pg_dump",
    "explanation": "基礎論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.072／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ROLLBACK",
      "ANALYZE",
      "EXPLAIN",
      "COMMIT"
    ],
    "answer": "COMMIT",
    "explanation": "実務論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.073／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "CREATE",
      "GROUP BY",
      "WHERE",
      "ORDER BY"
    ],
    "answer": "WHERE",
    "explanation": "試験対策論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.074／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "表を削除する",
      "接続を暗号化する",
      "重複とNULLを必ず許す",
      "行を一意に識別しNULLを許さない"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "運用論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.075／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "等価検索や範囲検索",
      "画像生成",
      "メール送信",
      "DNS委任"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "設計論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.076／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "GRANT SELECT ON table_name TO user_name;",
      "COMMIT SELECT;",
      "DROP SELECT table_name;",
      "VACUUM SELECT;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "基礎論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.077／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "chmod",
      "pg_dump",
      "ps",
      "curl"
    ],
    "answer": "pg_dump",
    "explanation": "実務論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.078／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "EXPLAIN",
      "ANALYZE",
      "COMMIT",
      "ROLLBACK"
    ],
    "answer": "COMMIT",
    "explanation": "試験対策論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.079／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "WHERE",
      "ORDER BY",
      "CREATE",
      "GROUP BY"
    ],
    "answer": "WHERE",
    "explanation": "運用論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.080／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "行を一意に識別しNULLを許さない",
      "接続を暗号化する",
      "重複とNULLを必ず許す",
      "表を削除する"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "設計論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.081／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "等価検索や範囲検索",
      "メール送信",
      "画像生成",
      "DNS委任"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "基礎論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.082／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "GRANT SELECT ON table_name TO user_name;",
      "VACUUM SELECT;",
      "COMMIT SELECT;",
      "DROP SELECT table_name;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "実務論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.083／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "curl",
      "pg_dump",
      "ps",
      "chmod"
    ],
    "answer": "pg_dump",
    "explanation": "試験対策論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.084／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ANALYZE",
      "ROLLBACK",
      "COMMIT",
      "EXPLAIN"
    ],
    "answer": "COMMIT",
    "explanation": "運用論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.085／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "CREATE",
      "WHERE",
      "ORDER BY",
      "GROUP BY"
    ],
    "answer": "WHERE",
    "explanation": "設計論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.086／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "接続を暗号化する",
      "重複とNULLを必ず許す",
      "表を削除する",
      "行を一意に識別しNULLを許さない"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "基礎論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.087／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "DNS委任",
      "等価検索や範囲検索",
      "メール送信",
      "画像生成"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "実務論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.088／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "VACUUM SELECT;",
      "DROP SELECT table_name;",
      "GRANT SELECT ON table_name TO user_name;",
      "COMMIT SELECT;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "試験対策論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.089／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "chmod",
      "ps",
      "curl",
      "pg_dump"
    ],
    "answer": "pg_dump",
    "explanation": "運用論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.090／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ANALYZE",
      "COMMIT",
      "EXPLAIN",
      "ROLLBACK"
    ],
    "answer": "COMMIT",
    "explanation": "設計論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.091／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "GROUP BY",
      "CREATE",
      "ORDER BY",
      "WHERE"
    ],
    "answer": "WHERE",
    "explanation": "基礎論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.092／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "行を一意に識別しNULLを許さない",
      "重複とNULLを必ず許す",
      "表を削除する",
      "接続を暗号化する"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "実務論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.093／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "等価検索や範囲検索",
      "画像生成",
      "メール送信",
      "DNS委任"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "試験対策論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.094／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "VACUUM SELECT;",
      "COMMIT SELECT;",
      "GRANT SELECT ON table_name TO user_name;",
      "DROP SELECT table_name;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "運用論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.095／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "curl",
      "pg_dump",
      "chmod",
      "ps"
    ],
    "answer": "pg_dump",
    "explanation": "設計論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.096／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "COMMIT",
      "ANALYZE",
      "ROLLBACK",
      "EXPLAIN"
    ],
    "answer": "COMMIT",
    "explanation": "基礎論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.097／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "WHERE",
      "ORDER BY",
      "CREATE",
      "GROUP BY"
    ],
    "answer": "WHERE",
    "explanation": "実務論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.098／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "重複とNULLを必ず許す",
      "行を一意に識別しNULLを許さない",
      "接続を暗号化する",
      "表を削除する"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "試験対策論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.099／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "メール送信",
      "等価検索や範囲検索",
      "画像生成",
      "DNS委任"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "運用論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.100／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "GRANT SELECT ON table_name TO user_name;",
      "VACUUM SELECT;",
      "COMMIT SELECT;",
      "DROP SELECT table_name;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "設計論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.101／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "pg_dump",
      "chmod",
      "curl",
      "ps"
    ],
    "answer": "pg_dump",
    "explanation": "基礎論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.102／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "COMMIT",
      "ANALYZE",
      "EXPLAIN",
      "ROLLBACK"
    ],
    "answer": "COMMIT",
    "explanation": "実務論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.103／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "GROUP BY",
      "WHERE",
      "ORDER BY",
      "CREATE"
    ],
    "answer": "WHERE",
    "explanation": "試験対策論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.104／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "重複とNULLを必ず許す",
      "表を削除する",
      "接続を暗号化する",
      "行を一意に識別しNULLを許さない"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "運用論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.105／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "画像生成",
      "等価検索や範囲検索",
      "DNS委任",
      "メール送信"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "設計論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.106／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "VACUUM SELECT;",
      "DROP SELECT table_name;",
      "GRANT SELECT ON table_name TO user_name;",
      "COMMIT SELECT;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "基礎論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.107／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "pg_dump",
      "chmod",
      "curl",
      "ps"
    ],
    "answer": "pg_dump",
    "explanation": "実務論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.108／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ANALYZE",
      "COMMIT",
      "EXPLAIN",
      "ROLLBACK"
    ],
    "answer": "COMMIT",
    "explanation": "試験対策論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.109／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "CREATE",
      "GROUP BY",
      "WHERE",
      "ORDER BY"
    ],
    "answer": "WHERE",
    "explanation": "運用論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.110／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "重複とNULLを必ず許す",
      "行を一意に識別しNULLを許さない",
      "表を削除する",
      "接続を暗号化する"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "設計論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.111／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "等価検索や範囲検索",
      "メール送信",
      "DNS委任",
      "画像生成"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "基礎論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.112／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "GRANT SELECT ON table_name TO user_name;",
      "DROP SELECT table_name;",
      "VACUUM SELECT;",
      "COMMIT SELECT;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "実務論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.113／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "chmod",
      "ps",
      "curl",
      "pg_dump"
    ],
    "answer": "pg_dump",
    "explanation": "試験対策論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.114／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ANALYZE",
      "COMMIT",
      "EXPLAIN",
      "ROLLBACK"
    ],
    "answer": "COMMIT",
    "explanation": "運用論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.115／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "GROUP BY",
      "CREATE",
      "WHERE",
      "ORDER BY"
    ],
    "answer": "WHERE",
    "explanation": "設計論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.116／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "重複とNULLを必ず許す",
      "接続を暗号化する",
      "行を一意に識別しNULLを許さない",
      "表を削除する"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "基礎論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.117／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "DNS委任",
      "メール送信",
      "等価検索や範囲検索",
      "画像生成"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "実務論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.118／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "VACUUM SELECT;",
      "GRANT SELECT ON table_name TO user_name;",
      "COMMIT SELECT;",
      "DROP SELECT table_name;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "試験対策論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.119／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "chmod",
      "ps",
      "pg_dump",
      "curl"
    ],
    "answer": "pg_dump",
    "explanation": "運用論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.120／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "EXPLAIN",
      "ANALYZE",
      "COMMIT",
      "ROLLBACK"
    ],
    "answer": "COMMIT",
    "explanation": "設計論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.121／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "ORDER BY",
      "GROUP BY",
      "CREATE",
      "WHERE"
    ],
    "answer": "WHERE",
    "explanation": "基礎論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.122／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "行を一意に識別しNULLを許さない",
      "接続を暗号化する",
      "表を削除する",
      "重複とNULLを必ず許す"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "実務論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.123／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "メール送信",
      "DNS委任",
      "画像生成",
      "等価検索や範囲検索"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "試験対策論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.124／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "DROP SELECT table_name;",
      "GRANT SELECT ON table_name TO user_name;",
      "COMMIT SELECT;",
      "VACUUM SELECT;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "運用論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.125／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "curl",
      "chmod",
      "pg_dump",
      "ps"
    ],
    "answer": "pg_dump",
    "explanation": "設計論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.126／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ANALYZE",
      "ROLLBACK",
      "EXPLAIN",
      "COMMIT"
    ],
    "answer": "COMMIT",
    "explanation": "基礎論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.127／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "GROUP BY",
      "CREATE",
      "ORDER BY",
      "WHERE"
    ],
    "answer": "WHERE",
    "explanation": "実務論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.128／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "行を一意に識別しNULLを許さない",
      "表を削除する",
      "接続を暗号化する",
      "重複とNULLを必ず許す"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "試験対策論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.129／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "DNS委任",
      "画像生成",
      "等価検索や範囲検索",
      "メール送信"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "運用論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.130／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "GRANT SELECT ON table_name TO user_name;",
      "VACUUM SELECT;",
      "DROP SELECT table_name;",
      "COMMIT SELECT;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "設計論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.131／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "chmod",
      "pg_dump",
      "ps",
      "curl"
    ],
    "answer": "pg_dump",
    "explanation": "基礎論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.132／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "EXPLAIN",
      "ROLLBACK",
      "COMMIT",
      "ANALYZE"
    ],
    "answer": "COMMIT",
    "explanation": "実務論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.133／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "WHERE",
      "ORDER BY",
      "GROUP BY",
      "CREATE"
    ],
    "answer": "WHERE",
    "explanation": "試験対策論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.134／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "重複とNULLを必ず許す",
      "行を一意に識別しNULLを許さない",
      "表を削除する",
      "接続を暗号化する"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "運用論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.135／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "等価検索や範囲検索",
      "画像生成",
      "DNS委任",
      "メール送信"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "設計論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.136／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "DROP SELECT table_name;",
      "GRANT SELECT ON table_name TO user_name;",
      "VACUUM SELECT;",
      "COMMIT SELECT;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "基礎論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.137／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "curl",
      "ps",
      "chmod",
      "pg_dump"
    ],
    "answer": "pg_dump",
    "explanation": "実務論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.138／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "COMMIT",
      "EXPLAIN",
      "ANALYZE",
      "ROLLBACK"
    ],
    "answer": "COMMIT",
    "explanation": "試験対策論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.139／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "CREATE",
      "GROUP BY",
      "ORDER BY",
      "WHERE"
    ],
    "answer": "WHERE",
    "explanation": "運用論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.140／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "表を削除する",
      "重複とNULLを必ず許す",
      "接続を暗号化する",
      "行を一意に識別しNULLを許さない"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "設計論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.141／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "DNS委任",
      "画像生成",
      "メール送信",
      "等価検索や範囲検索"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "基礎論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.142／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "VACUUM SELECT;",
      "DROP SELECT table_name;",
      "GRANT SELECT ON table_name TO user_name;",
      "COMMIT SELECT;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "実務論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.143／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "chmod",
      "curl",
      "pg_dump",
      "ps"
    ],
    "answer": "pg_dump",
    "explanation": "試験対策論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.144／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "EXPLAIN",
      "ROLLBACK",
      "COMMIT",
      "ANALYZE"
    ],
    "answer": "COMMIT",
    "explanation": "運用論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.145／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "GROUP BY",
      "WHERE",
      "ORDER BY",
      "CREATE"
    ],
    "answer": "WHERE",
    "explanation": "設計論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.146／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "表を削除する",
      "接続を暗号化する",
      "行を一意に識別しNULLを許さない",
      "重複とNULLを必ず許す"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "基礎論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.147／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "等価検索や範囲検索",
      "メール送信",
      "DNS委任",
      "画像生成"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "実務論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.148／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "DROP SELECT table_name;",
      "GRANT SELECT ON table_name TO user_name;",
      "VACUUM SELECT;",
      "COMMIT SELECT;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "試験対策論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.149／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "curl",
      "ps",
      "chmod",
      "pg_dump"
    ],
    "answer": "pg_dump",
    "explanation": "運用論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.150／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ANALYZE",
      "COMMIT",
      "ROLLBACK",
      "EXPLAIN"
    ],
    "answer": "COMMIT",
    "explanation": "設計論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.151／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "GROUP BY",
      "WHERE",
      "ORDER BY",
      "CREATE"
    ],
    "answer": "WHERE",
    "explanation": "基礎論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.152／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "重複とNULLを必ず許す",
      "行を一意に識別しNULLを許さない",
      "表を削除する",
      "接続を暗号化する"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "実務論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.153／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "画像生成",
      "メール送信",
      "等価検索や範囲検索",
      "DNS委任"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "試験対策論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.154／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "GRANT SELECT ON table_name TO user_name;",
      "VACUUM SELECT;",
      "COMMIT SELECT;",
      "DROP SELECT table_name;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "運用論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.155／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "pg_dump",
      "ps",
      "chmod",
      "curl"
    ],
    "answer": "pg_dump",
    "explanation": "設計論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.156／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "EXPLAIN",
      "COMMIT",
      "ROLLBACK",
      "ANALYZE"
    ],
    "answer": "COMMIT",
    "explanation": "基礎論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.157／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "GROUP BY",
      "ORDER BY",
      "WHERE",
      "CREATE"
    ],
    "answer": "WHERE",
    "explanation": "実務論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.158／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "接続を暗号化する",
      "表を削除する",
      "行を一意に識別しNULLを許さない",
      "重複とNULLを必ず許す"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "試験対策論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.159／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "メール送信",
      "画像生成",
      "等価検索や範囲検索",
      "DNS委任"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "運用論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.160／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "COMMIT SELECT;",
      "DROP SELECT table_name;",
      "VACUUM SELECT;",
      "GRANT SELECT ON table_name TO user_name;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "設計論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.161／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "chmod",
      "pg_dump",
      "curl",
      "ps"
    ],
    "answer": "pg_dump",
    "explanation": "基礎論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.162／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ROLLBACK",
      "ANALYZE",
      "EXPLAIN",
      "COMMIT"
    ],
    "answer": "COMMIT",
    "explanation": "実務論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.163／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "GROUP BY",
      "WHERE",
      "ORDER BY",
      "CREATE"
    ],
    "answer": "WHERE",
    "explanation": "試験対策論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.164／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "接続を暗号化する",
      "重複とNULLを必ず許す",
      "表を削除する",
      "行を一意に識別しNULLを許さない"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "運用論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.165／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "メール送信",
      "画像生成",
      "DNS委任",
      "等価検索や範囲検索"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "設計論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.166／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "GRANT SELECT ON table_name TO user_name;",
      "COMMIT SELECT;",
      "VACUUM SELECT;",
      "DROP SELECT table_name;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "基礎論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.167／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "curl",
      "chmod",
      "pg_dump",
      "ps"
    ],
    "answer": "pg_dump",
    "explanation": "実務論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.168／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ANALYZE",
      "ROLLBACK",
      "EXPLAIN",
      "COMMIT"
    ],
    "answer": "COMMIT",
    "explanation": "試験対策論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.169／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "GROUP BY",
      "WHERE",
      "CREATE",
      "ORDER BY"
    ],
    "answer": "WHERE",
    "explanation": "運用論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.170／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "行を一意に識別しNULLを許さない",
      "重複とNULLを必ず許す",
      "接続を暗号化する",
      "表を削除する"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "設計論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.171／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "メール送信",
      "等価検索や範囲検索",
      "画像生成",
      "DNS委任"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "基礎論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.172／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "DROP SELECT table_name;",
      "COMMIT SELECT;",
      "GRANT SELECT ON table_name TO user_name;",
      "VACUUM SELECT;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "実務論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.173／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "pg_dump",
      "chmod",
      "ps",
      "curl"
    ],
    "answer": "pg_dump",
    "explanation": "試験対策論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.174／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "EXPLAIN",
      "ANALYZE",
      "ROLLBACK",
      "COMMIT"
    ],
    "answer": "COMMIT",
    "explanation": "運用論点。COMMITでトランザクションを確定します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.175／SQL】条件に合う行だけを取得する句はどれですか？",
    "choices": [
      "GROUP BY",
      "ORDER BY",
      "WHERE",
      "CREATE"
    ],
    "answer": "WHERE",
    "explanation": "設計論点。WHEREは行の絞り込みに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.176／制約】主キー制約の説明として正しいものはどれですか？",
    "choices": [
      "重複とNULLを必ず許す",
      "表を削除する",
      "接続を暗号化する",
      "行を一意に識別しNULLを許さない"
    ],
    "answer": "行を一意に識別しNULLを許さない",
    "explanation": "基礎論点。PRIMARY KEYは一意性と非NULLを保証します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.177／インデックス】B-treeインデックスが一般に向いている検索はどれですか？",
    "choices": [
      "等価検索や範囲検索",
      "メール送信",
      "DNS委任",
      "画像生成"
    ],
    "answer": "等価検索や範囲検索",
    "explanation": "実務論点。B-treeは多くの一般的検索に使われます。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.178／権限】ユーザーへSELECT権限を付与するSQLはどれですか？",
    "choices": [
      "COMMIT SELECT;",
      "DROP SELECT table_name;",
      "VACUUM SELECT;",
      "GRANT SELECT ON table_name TO user_name;"
    ],
    "answer": "GRANT SELECT ON table_name TO user_name;",
    "explanation": "試験対策論点。GRANTで権限を付与します。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.179／バックアップ】PostgreSQLの論理バックアップ取得でよく使うコマンドはどれですか？",
    "choices": [
      "chmod",
      "curl",
      "pg_dump",
      "ps"
    ],
    "answer": "pg_dump",
    "explanation": "運用論点。pg_dumpは論理バックアップに使います。"
  },
  {
    "question": "【PostgreSQL Associate Certification No.180／トランザクション】変更を確定するSQLはどれですか？",
    "choices": [
      "ANALYZE",
      "EXPLAIN",
      "COMMIT",
      "ROLLBACK"
    ],
    "answer": "COMMIT",
    "explanation": "設計論点。COMMITでトランザクションを確定します。"
  }
];
