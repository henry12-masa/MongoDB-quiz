window.quizData = window.quizData || {};
window.quizData.mongodbAssociateDba = [
  {
    "question": "【MongoDB Associate DBA No.001／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "TTLだけ",
      "レプリカセット",
      "CSVエクスポート",
      "単一mongodのみ"
    ],
    "answer": "レプリカセット",
    "explanation": "基礎論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.002／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "物理メモリダンプ",
      "OSイメージのみ",
      "DNSゾーン転送",
      "論理バックアップ"
    ],
    "answer": "論理バックアップ",
    "explanation": "実務論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.003／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ポートコメント",
      "シャードキー",
      "ログファイル名",
      "ユーザー名"
    ],
    "answer": "シャードキー",
    "explanation": "試験対策論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.004／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "認定ロゴの取得",
      "障害予兆と性能劣化の検知",
      "DNS登録",
      "HTMLの装飾"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "運用論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.005／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "最小権限の原則",
      "全員root",
      "パスワード共有",
      "権限なしで運用"
    ],
    "answer": "最小権限の原則",
    "explanation": "設計論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.006／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "インデックスを全削除",
      "クライアントを停止不可にする",
      "全データを削除",
      "選挙により新Primaryを選出"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "基礎論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.007／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "TTLだけ",
      "単一mongodのみ",
      "レプリカセット",
      "CSVエクスポート"
    ],
    "answer": "レプリカセット",
    "explanation": "実務論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.008／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "論理バックアップ",
      "OSイメージのみ",
      "DNSゾーン転送",
      "物理メモリダンプ"
    ],
    "answer": "論理バックアップ",
    "explanation": "試験対策論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.009／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "シャードキー",
      "ユーザー名",
      "ログファイル名",
      "ポートコメント"
    ],
    "answer": "シャードキー",
    "explanation": "運用論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.010／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "DNS登録",
      "認定ロゴの取得",
      "HTMLの装飾",
      "障害予兆と性能劣化の検知"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "設計論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.011／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "最小権限の原則",
      "全員root",
      "権限なしで運用",
      "パスワード共有"
    ],
    "answer": "最小権限の原則",
    "explanation": "基礎論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.012／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "選挙により新Primaryを選出",
      "クライアントを停止不可にする",
      "全データを削除",
      "インデックスを全削除"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "実務論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.013／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "TTLだけ",
      "レプリカセット",
      "単一mongodのみ",
      "CSVエクスポート"
    ],
    "answer": "レプリカセット",
    "explanation": "試験対策論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.014／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "物理メモリダンプ",
      "DNSゾーン転送",
      "OSイメージのみ",
      "論理バックアップ"
    ],
    "answer": "論理バックアップ",
    "explanation": "運用論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.015／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ポートコメント",
      "ログファイル名",
      "シャードキー",
      "ユーザー名"
    ],
    "answer": "シャードキー",
    "explanation": "設計論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.016／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "障害予兆と性能劣化の検知",
      "DNS登録",
      "HTMLの装飾",
      "認定ロゴの取得"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "基礎論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.017／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "最小権限の原則",
      "権限なしで運用",
      "全員root",
      "パスワード共有"
    ],
    "answer": "最小権限の原則",
    "explanation": "実務論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.018／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "クライアントを停止不可にする",
      "インデックスを全削除",
      "選挙により新Primaryを選出",
      "全データを削除"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "試験対策論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.019／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "単一mongodのみ",
      "TTLだけ",
      "CSVエクスポート",
      "レプリカセット"
    ],
    "answer": "レプリカセット",
    "explanation": "運用論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.020／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "OSイメージのみ",
      "論理バックアップ",
      "DNSゾーン転送",
      "物理メモリダンプ"
    ],
    "answer": "論理バックアップ",
    "explanation": "設計論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.021／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "シャードキー",
      "ログファイル名",
      "ポートコメント",
      "ユーザー名"
    ],
    "answer": "シャードキー",
    "explanation": "基礎論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.022／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "DNS登録",
      "認定ロゴの取得",
      "障害予兆と性能劣化の検知",
      "HTMLの装飾"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "実務論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.023／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "全員root",
      "パスワード共有",
      "最小権限の原則",
      "権限なしで運用"
    ],
    "answer": "最小権限の原則",
    "explanation": "試験対策論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.024／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "全データを削除",
      "選挙により新Primaryを選出",
      "クライアントを停止不可にする",
      "インデックスを全削除"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "運用論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.025／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "単一mongodのみ",
      "CSVエクスポート",
      "レプリカセット",
      "TTLだけ"
    ],
    "answer": "レプリカセット",
    "explanation": "設計論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.026／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "DNSゾーン転送",
      "論理バックアップ",
      "OSイメージのみ",
      "物理メモリダンプ"
    ],
    "answer": "論理バックアップ",
    "explanation": "基礎論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.027／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "シャードキー",
      "ユーザー名",
      "ログファイル名",
      "ポートコメント"
    ],
    "answer": "シャードキー",
    "explanation": "実務論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.028／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "HTMLの装飾",
      "DNS登録",
      "認定ロゴの取得",
      "障害予兆と性能劣化の検知"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "試験対策論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.029／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "パスワード共有",
      "権限なしで運用",
      "全員root",
      "最小権限の原則"
    ],
    "answer": "最小権限の原則",
    "explanation": "運用論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.030／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "全データを削除",
      "選挙により新Primaryを選出",
      "インデックスを全削除",
      "クライアントを停止不可にする"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "設計論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.031／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "CSVエクスポート",
      "TTLだけ",
      "単一mongodのみ",
      "レプリカセット"
    ],
    "answer": "レプリカセット",
    "explanation": "基礎論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.032／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "物理メモリダンプ",
      "OSイメージのみ",
      "DNSゾーン転送",
      "論理バックアップ"
    ],
    "answer": "論理バックアップ",
    "explanation": "実務論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.033／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ポートコメント",
      "シャードキー",
      "ログファイル名",
      "ユーザー名"
    ],
    "answer": "シャードキー",
    "explanation": "試験対策論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.034／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "HTMLの装飾",
      "障害予兆と性能劣化の検知",
      "DNS登録",
      "認定ロゴの取得"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "運用論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.035／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "パスワード共有",
      "全員root",
      "最小権限の原則",
      "権限なしで運用"
    ],
    "answer": "最小権限の原則",
    "explanation": "設計論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.036／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "全データを削除",
      "インデックスを全削除",
      "選挙により新Primaryを選出",
      "クライアントを停止不可にする"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "基礎論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.037／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "単一mongodのみ",
      "TTLだけ",
      "CSVエクスポート",
      "レプリカセット"
    ],
    "answer": "レプリカセット",
    "explanation": "実務論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.038／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "OSイメージのみ",
      "論理バックアップ",
      "物理メモリダンプ",
      "DNSゾーン転送"
    ],
    "answer": "論理バックアップ",
    "explanation": "試験対策論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.039／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "シャードキー",
      "ログファイル名",
      "ポートコメント",
      "ユーザー名"
    ],
    "answer": "シャードキー",
    "explanation": "運用論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.040／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "HTMLの装飾",
      "障害予兆と性能劣化の検知",
      "認定ロゴの取得",
      "DNS登録"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "設計論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.041／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "権限なしで運用",
      "最小権限の原則",
      "全員root",
      "パスワード共有"
    ],
    "answer": "最小権限の原則",
    "explanation": "基礎論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.042／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "クライアントを停止不可にする",
      "全データを削除",
      "インデックスを全削除",
      "選挙により新Primaryを選出"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "実務論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.043／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "CSVエクスポート",
      "TTLだけ",
      "単一mongodのみ",
      "レプリカセット"
    ],
    "answer": "レプリカセット",
    "explanation": "試験対策論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.044／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "物理メモリダンプ",
      "論理バックアップ",
      "OSイメージのみ",
      "DNSゾーン転送"
    ],
    "answer": "論理バックアップ",
    "explanation": "運用論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.045／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "シャードキー",
      "ポートコメント",
      "ユーザー名",
      "ログファイル名"
    ],
    "answer": "シャードキー",
    "explanation": "設計論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.046／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "認定ロゴの取得",
      "DNS登録",
      "HTMLの装飾",
      "障害予兆と性能劣化の検知"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "基礎論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.047／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "パスワード共有",
      "全員root",
      "最小権限の原則",
      "権限なしで運用"
    ],
    "answer": "最小権限の原則",
    "explanation": "実務論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.048／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "インデックスを全削除",
      "全データを削除",
      "選挙により新Primaryを選出",
      "クライアントを停止不可にする"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "試験対策論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.049／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "TTLだけ",
      "CSVエクスポート",
      "単一mongodのみ",
      "レプリカセット"
    ],
    "answer": "レプリカセット",
    "explanation": "運用論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.050／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "論理バックアップ",
      "OSイメージのみ",
      "物理メモリダンプ",
      "DNSゾーン転送"
    ],
    "answer": "論理バックアップ",
    "explanation": "設計論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.051／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ポートコメント",
      "シャードキー",
      "ログファイル名",
      "ユーザー名"
    ],
    "answer": "シャードキー",
    "explanation": "基礎論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.052／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "DNS登録",
      "HTMLの装飾",
      "障害予兆と性能劣化の検知",
      "認定ロゴの取得"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "実務論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.053／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "最小権限の原則",
      "権限なしで運用",
      "パスワード共有",
      "全員root"
    ],
    "answer": "最小権限の原則",
    "explanation": "試験対策論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.054／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "選挙により新Primaryを選出",
      "クライアントを停止不可にする",
      "インデックスを全削除",
      "全データを削除"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "運用論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.055／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "単一mongodのみ",
      "CSVエクスポート",
      "TTLだけ",
      "レプリカセット"
    ],
    "answer": "レプリカセット",
    "explanation": "設計論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.056／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "DNSゾーン転送",
      "OSイメージのみ",
      "物理メモリダンプ",
      "論理バックアップ"
    ],
    "answer": "論理バックアップ",
    "explanation": "基礎論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.057／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ログファイル名",
      "ポートコメント",
      "ユーザー名",
      "シャードキー"
    ],
    "answer": "シャードキー",
    "explanation": "実務論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.058／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "DNS登録",
      "認定ロゴの取得",
      "障害予兆と性能劣化の検知",
      "HTMLの装飾"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "試験対策論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.059／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "権限なしで運用",
      "パスワード共有",
      "最小権限の原則",
      "全員root"
    ],
    "answer": "最小権限の原則",
    "explanation": "運用論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.060／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "インデックスを全削除",
      "選挙により新Primaryを選出",
      "全データを削除",
      "クライアントを停止不可にする"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "設計論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.061／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "単一mongodのみ",
      "CSVエクスポート",
      "レプリカセット",
      "TTLだけ"
    ],
    "answer": "レプリカセット",
    "explanation": "基礎論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.062／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "DNSゾーン転送",
      "OSイメージのみ",
      "論理バックアップ",
      "物理メモリダンプ"
    ],
    "answer": "論理バックアップ",
    "explanation": "実務論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.063／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "シャードキー",
      "ログファイル名",
      "ユーザー名",
      "ポートコメント"
    ],
    "answer": "シャードキー",
    "explanation": "試験対策論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.064／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "認定ロゴの取得",
      "HTMLの装飾",
      "障害予兆と性能劣化の検知",
      "DNS登録"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "運用論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.065／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "最小権限の原則",
      "権限なしで運用",
      "全員root",
      "パスワード共有"
    ],
    "answer": "最小権限の原則",
    "explanation": "設計論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.066／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "インデックスを全削除",
      "クライアントを停止不可にする",
      "全データを削除",
      "選挙により新Primaryを選出"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "基礎論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.067／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "CSVエクスポート",
      "単一mongodのみ",
      "TTLだけ",
      "レプリカセット"
    ],
    "answer": "レプリカセット",
    "explanation": "実務論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.068／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "物理メモリダンプ",
      "論理バックアップ",
      "OSイメージのみ",
      "DNSゾーン転送"
    ],
    "answer": "論理バックアップ",
    "explanation": "試験対策論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.069／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ユーザー名",
      "ログファイル名",
      "ポートコメント",
      "シャードキー"
    ],
    "answer": "シャードキー",
    "explanation": "運用論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.070／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "DNS登録",
      "認定ロゴの取得",
      "HTMLの装飾",
      "障害予兆と性能劣化の検知"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "設計論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.071／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "全員root",
      "最小権限の原則",
      "パスワード共有",
      "権限なしで運用"
    ],
    "answer": "最小権限の原則",
    "explanation": "基礎論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.072／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "全データを削除",
      "インデックスを全削除",
      "クライアントを停止不可にする",
      "選挙により新Primaryを選出"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "実務論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.073／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "TTLだけ",
      "単一mongodのみ",
      "レプリカセット",
      "CSVエクスポート"
    ],
    "answer": "レプリカセット",
    "explanation": "試験対策論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.074／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "OSイメージのみ",
      "DNSゾーン転送",
      "物理メモリダンプ",
      "論理バックアップ"
    ],
    "answer": "論理バックアップ",
    "explanation": "運用論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.075／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "シャードキー",
      "ユーザー名",
      "ログファイル名",
      "ポートコメント"
    ],
    "answer": "シャードキー",
    "explanation": "設計論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.076／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "障害予兆と性能劣化の検知",
      "DNS登録",
      "HTMLの装飾",
      "認定ロゴの取得"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "基礎論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.077／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "パスワード共有",
      "最小権限の原則",
      "全員root",
      "権限なしで運用"
    ],
    "answer": "最小権限の原則",
    "explanation": "実務論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.078／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "クライアントを停止不可にする",
      "インデックスを全削除",
      "選挙により新Primaryを選出",
      "全データを削除"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "試験対策論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.079／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "レプリカセット",
      "CSVエクスポート",
      "TTLだけ",
      "単一mongodのみ"
    ],
    "answer": "レプリカセット",
    "explanation": "運用論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.080／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "論理バックアップ",
      "DNSゾーン転送",
      "物理メモリダンプ",
      "OSイメージのみ"
    ],
    "answer": "論理バックアップ",
    "explanation": "設計論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.081／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "シャードキー",
      "ログファイル名",
      "ユーザー名",
      "ポートコメント"
    ],
    "answer": "シャードキー",
    "explanation": "基礎論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.082／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "障害予兆と性能劣化の検知",
      "認定ロゴの取得",
      "DNS登録",
      "HTMLの装飾"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "実務論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.083／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "権限なしで運用",
      "最小権限の原則",
      "全員root",
      "パスワード共有"
    ],
    "answer": "最小権限の原則",
    "explanation": "試験対策論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.084／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "インデックスを全削除",
      "全データを削除",
      "選挙により新Primaryを選出",
      "クライアントを停止不可にする"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "運用論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.085／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "TTLだけ",
      "レプリカセット",
      "CSVエクスポート",
      "単一mongodのみ"
    ],
    "answer": "レプリカセット",
    "explanation": "設計論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.086／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "DNSゾーン転送",
      "物理メモリダンプ",
      "OSイメージのみ",
      "論理バックアップ"
    ],
    "answer": "論理バックアップ",
    "explanation": "基礎論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.087／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ポートコメント",
      "シャードキー",
      "ログファイル名",
      "ユーザー名"
    ],
    "answer": "シャードキー",
    "explanation": "実務論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.088／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "認定ロゴの取得",
      "HTMLの装飾",
      "障害予兆と性能劣化の検知",
      "DNS登録"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "試験対策論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.089／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "パスワード共有",
      "全員root",
      "権限なしで運用",
      "最小権限の原則"
    ],
    "answer": "最小権限の原則",
    "explanation": "運用論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.090／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "インデックスを全削除",
      "選挙により新Primaryを選出",
      "クライアントを停止不可にする",
      "全データを削除"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "設計論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.091／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "単一mongodのみ",
      "TTLだけ",
      "CSVエクスポート",
      "レプリカセット"
    ],
    "answer": "レプリカセット",
    "explanation": "基礎論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.092／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "論理バックアップ",
      "物理メモリダンプ",
      "OSイメージのみ",
      "DNSゾーン転送"
    ],
    "answer": "論理バックアップ",
    "explanation": "実務論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.093／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "シャードキー",
      "ユーザー名",
      "ログファイル名",
      "ポートコメント"
    ],
    "answer": "シャードキー",
    "explanation": "試験対策論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.094／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "認定ロゴの取得",
      "DNS登録",
      "障害予兆と性能劣化の検知",
      "HTMLの装飾"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "運用論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.095／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "権限なしで運用",
      "最小権限の原則",
      "パスワード共有",
      "全員root"
    ],
    "answer": "最小権限の原則",
    "explanation": "設計論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.096／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "選挙により新Primaryを選出",
      "インデックスを全削除",
      "全データを削除",
      "クライアントを停止不可にする"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "基礎論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.097／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "レプリカセット",
      "CSVエクスポート",
      "TTLだけ",
      "単一mongodのみ"
    ],
    "answer": "レプリカセット",
    "explanation": "実務論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.098／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "物理メモリダンプ",
      "論理バックアップ",
      "DNSゾーン転送",
      "OSイメージのみ"
    ],
    "answer": "論理バックアップ",
    "explanation": "試験対策論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.099／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ログファイル名",
      "シャードキー",
      "ユーザー名",
      "ポートコメント"
    ],
    "answer": "シャードキー",
    "explanation": "運用論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.100／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "障害予兆と性能劣化の検知",
      "認定ロゴの取得",
      "DNS登録",
      "HTMLの装飾"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "設計論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.101／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "最小権限の原則",
      "パスワード共有",
      "権限なしで運用",
      "全員root"
    ],
    "answer": "最小権限の原則",
    "explanation": "基礎論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.102／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "選挙により新Primaryを選出",
      "インデックスを全削除",
      "クライアントを停止不可にする",
      "全データを削除"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "実務論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.103／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "単一mongodのみ",
      "レプリカセット",
      "CSVエクスポート",
      "TTLだけ"
    ],
    "answer": "レプリカセット",
    "explanation": "試験対策論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.104／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "物理メモリダンプ",
      "OSイメージのみ",
      "DNSゾーン転送",
      "論理バックアップ"
    ],
    "answer": "論理バックアップ",
    "explanation": "運用論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.105／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ユーザー名",
      "シャードキー",
      "ポートコメント",
      "ログファイル名"
    ],
    "answer": "シャードキー",
    "explanation": "設計論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.106／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "認定ロゴの取得",
      "HTMLの装飾",
      "障害予兆と性能劣化の検知",
      "DNS登録"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "基礎論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.107／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "最小権限の原則",
      "パスワード共有",
      "権限なしで運用",
      "全員root"
    ],
    "answer": "最小権限の原則",
    "explanation": "実務論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.108／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "インデックスを全削除",
      "選挙により新Primaryを選出",
      "クライアントを停止不可にする",
      "全データを削除"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "試験対策論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.109／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "TTLだけ",
      "単一mongodのみ",
      "レプリカセット",
      "CSVエクスポート"
    ],
    "answer": "レプリカセット",
    "explanation": "運用論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.110／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "物理メモリダンプ",
      "論理バックアップ",
      "OSイメージのみ",
      "DNSゾーン転送"
    ],
    "answer": "論理バックアップ",
    "explanation": "設計論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.111／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "シャードキー",
      "ログファイル名",
      "ポートコメント",
      "ユーザー名"
    ],
    "answer": "シャードキー",
    "explanation": "基礎論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.112／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "障害予兆と性能劣化の検知",
      "HTMLの装飾",
      "認定ロゴの取得",
      "DNS登録"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "実務論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.113／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "パスワード共有",
      "全員root",
      "権限なしで運用",
      "最小権限の原則"
    ],
    "answer": "最小権限の原則",
    "explanation": "試験対策論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.114／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "インデックスを全削除",
      "選挙により新Primaryを選出",
      "クライアントを停止不可にする",
      "全データを削除"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "運用論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.115／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "単一mongodのみ",
      "TTLだけ",
      "レプリカセット",
      "CSVエクスポート"
    ],
    "answer": "レプリカセット",
    "explanation": "設計論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.116／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "物理メモリダンプ",
      "DNSゾーン転送",
      "論理バックアップ",
      "OSイメージのみ"
    ],
    "answer": "論理バックアップ",
    "explanation": "基礎論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.117／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ポートコメント",
      "ログファイル名",
      "シャードキー",
      "ユーザー名"
    ],
    "answer": "シャードキー",
    "explanation": "実務論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.118／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "認定ロゴの取得",
      "障害予兆と性能劣化の検知",
      "DNS登録",
      "HTMLの装飾"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "試験対策論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.119／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "パスワード共有",
      "全員root",
      "最小権限の原則",
      "権限なしで運用"
    ],
    "answer": "最小権限の原則",
    "explanation": "運用論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.120／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "クライアントを停止不可にする",
      "インデックスを全削除",
      "選挙により新Primaryを選出",
      "全データを削除"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "設計論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.121／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "CSVエクスポート",
      "単一mongodのみ",
      "TTLだけ",
      "レプリカセット"
    ],
    "answer": "レプリカセット",
    "explanation": "基礎論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.122／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "論理バックアップ",
      "DNSゾーン転送",
      "OSイメージのみ",
      "物理メモリダンプ"
    ],
    "answer": "論理バックアップ",
    "explanation": "実務論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.123／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ログファイル名",
      "ポートコメント",
      "ユーザー名",
      "シャードキー"
    ],
    "answer": "シャードキー",
    "explanation": "試験対策論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.124／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "HTMLの装飾",
      "障害予兆と性能劣化の検知",
      "DNS登録",
      "認定ロゴの取得"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "運用論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.125／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "権限なしで運用",
      "パスワード共有",
      "最小権限の原則",
      "全員root"
    ],
    "answer": "最小権限の原則",
    "explanation": "設計論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.126／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "インデックスを全削除",
      "全データを削除",
      "クライアントを停止不可にする",
      "選挙により新Primaryを選出"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "基礎論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.127／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "単一mongodのみ",
      "TTLだけ",
      "CSVエクスポート",
      "レプリカセット"
    ],
    "answer": "レプリカセット",
    "explanation": "実務論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.128／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "論理バックアップ",
      "OSイメージのみ",
      "DNSゾーン転送",
      "物理メモリダンプ"
    ],
    "answer": "論理バックアップ",
    "explanation": "試験対策論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.129／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ポートコメント",
      "ユーザー名",
      "シャードキー",
      "ログファイル名"
    ],
    "answer": "シャードキー",
    "explanation": "運用論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.130／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "障害予兆と性能劣化の検知",
      "認定ロゴの取得",
      "HTMLの装飾",
      "DNS登録"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "設計論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.131／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "パスワード共有",
      "最小権限の原則",
      "全員root",
      "権限なしで運用"
    ],
    "answer": "最小権限の原則",
    "explanation": "基礎論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.132／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "クライアントを停止不可にする",
      "全データを削除",
      "選挙により新Primaryを選出",
      "インデックスを全削除"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "実務論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.133／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "レプリカセット",
      "CSVエクスポート",
      "単一mongodのみ",
      "TTLだけ"
    ],
    "answer": "レプリカセット",
    "explanation": "試験対策論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.134／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "物理メモリダンプ",
      "論理バックアップ",
      "OSイメージのみ",
      "DNSゾーン転送"
    ],
    "answer": "論理バックアップ",
    "explanation": "運用論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.135／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "シャードキー",
      "ユーザー名",
      "ポートコメント",
      "ログファイル名"
    ],
    "answer": "シャードキー",
    "explanation": "設計論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.136／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "HTMLの装飾",
      "障害予兆と性能劣化の検知",
      "認定ロゴの取得",
      "DNS登録"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "基礎論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.137／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "権限なしで運用",
      "全員root",
      "パスワード共有",
      "最小権限の原則"
    ],
    "answer": "最小権限の原則",
    "explanation": "実務論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.138／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "選挙により新Primaryを選出",
      "クライアントを停止不可にする",
      "インデックスを全削除",
      "全データを削除"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "試験対策論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.139／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "TTLだけ",
      "単一mongodのみ",
      "CSVエクスポート",
      "レプリカセット"
    ],
    "answer": "レプリカセット",
    "explanation": "運用論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.140／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "OSイメージのみ",
      "物理メモリダンプ",
      "DNSゾーン転送",
      "論理バックアップ"
    ],
    "answer": "論理バックアップ",
    "explanation": "設計論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.141／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ポートコメント",
      "ユーザー名",
      "ログファイル名",
      "シャードキー"
    ],
    "answer": "シャードキー",
    "explanation": "基礎論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.142／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "認定ロゴの取得",
      "HTMLの装飾",
      "障害予兆と性能劣化の検知",
      "DNS登録"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "実務論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.143／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "パスワード共有",
      "権限なしで運用",
      "最小権限の原則",
      "全員root"
    ],
    "answer": "最小権限の原則",
    "explanation": "試験対策論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.144／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "クライアントを停止不可にする",
      "全データを削除",
      "選挙により新Primaryを選出",
      "インデックスを全削除"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "運用論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.145／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "単一mongodのみ",
      "レプリカセット",
      "CSVエクスポート",
      "TTLだけ"
    ],
    "answer": "レプリカセット",
    "explanation": "設計論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.146／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "OSイメージのみ",
      "DNSゾーン転送",
      "論理バックアップ",
      "物理メモリダンプ"
    ],
    "answer": "論理バックアップ",
    "explanation": "基礎論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.147／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "シャードキー",
      "ログファイル名",
      "ポートコメント",
      "ユーザー名"
    ],
    "answer": "シャードキー",
    "explanation": "実務論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.148／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "HTMLの装飾",
      "障害予兆と性能劣化の検知",
      "認定ロゴの取得",
      "DNS登録"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "試験対策論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.149／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "権限なしで運用",
      "全員root",
      "パスワード共有",
      "最小権限の原則"
    ],
    "answer": "最小権限の原則",
    "explanation": "運用論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.150／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "インデックスを全削除",
      "選挙により新Primaryを選出",
      "全データを削除",
      "クライアントを停止不可にする"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "設計論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.151／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "単一mongodのみ",
      "レプリカセット",
      "CSVエクスポート",
      "TTLだけ"
    ],
    "answer": "レプリカセット",
    "explanation": "基礎論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.152／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "物理メモリダンプ",
      "論理バックアップ",
      "OSイメージのみ",
      "DNSゾーン転送"
    ],
    "answer": "論理バックアップ",
    "explanation": "実務論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.153／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ユーザー名",
      "ログファイル名",
      "シャードキー",
      "ポートコメント"
    ],
    "answer": "シャードキー",
    "explanation": "試験対策論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.154／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "障害予兆と性能劣化の検知",
      "認定ロゴの取得",
      "DNS登録",
      "HTMLの装飾"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "運用論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.155／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "最小権限の原則",
      "全員root",
      "パスワード共有",
      "権限なしで運用"
    ],
    "answer": "最小権限の原則",
    "explanation": "設計論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.156／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "クライアントを停止不可にする",
      "選挙により新Primaryを選出",
      "全データを削除",
      "インデックスを全削除"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "基礎論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.157／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "単一mongodのみ",
      "CSVエクスポート",
      "レプリカセット",
      "TTLだけ"
    ],
    "answer": "レプリカセット",
    "explanation": "実務論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.158／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "DNSゾーン転送",
      "OSイメージのみ",
      "論理バックアップ",
      "物理メモリダンプ"
    ],
    "answer": "論理バックアップ",
    "explanation": "試験対策論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.159／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ログファイル名",
      "ユーザー名",
      "シャードキー",
      "ポートコメント"
    ],
    "answer": "シャードキー",
    "explanation": "運用論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.160／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "DNS登録",
      "HTMLの装飾",
      "認定ロゴの取得",
      "障害予兆と性能劣化の検知"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "設計論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.161／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "パスワード共有",
      "最小権限の原則",
      "権限なしで運用",
      "全員root"
    ],
    "answer": "最小権限の原則",
    "explanation": "基礎論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.162／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "全データを削除",
      "インデックスを全削除",
      "クライアントを停止不可にする",
      "選挙により新Primaryを選出"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "実務論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.163／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "単一mongodのみ",
      "レプリカセット",
      "CSVエクスポート",
      "TTLだけ"
    ],
    "answer": "レプリカセット",
    "explanation": "試験対策論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.164／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "DNSゾーン転送",
      "物理メモリダンプ",
      "OSイメージのみ",
      "論理バックアップ"
    ],
    "answer": "論理バックアップ",
    "explanation": "運用論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.165／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ログファイル名",
      "ユーザー名",
      "ポートコメント",
      "シャードキー"
    ],
    "answer": "シャードキー",
    "explanation": "設計論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.166／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "障害予兆と性能劣化の検知",
      "DNS登録",
      "認定ロゴの取得",
      "HTMLの装飾"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "基礎論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.167／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "権限なしで運用",
      "パスワード共有",
      "最小権限の原則",
      "全員root"
    ],
    "answer": "最小権限の原則",
    "explanation": "実務論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.168／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "インデックスを全削除",
      "全データを削除",
      "クライアントを停止不可にする",
      "選挙により新Primaryを選出"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "試験対策論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.169／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "単一mongodのみ",
      "レプリカセット",
      "TTLだけ",
      "CSVエクスポート"
    ],
    "answer": "レプリカセット",
    "explanation": "運用論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.170／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "論理バックアップ",
      "物理メモリダンプ",
      "DNSゾーン転送",
      "OSイメージのみ"
    ],
    "answer": "論理バックアップ",
    "explanation": "設計論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.171／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "ログファイル名",
      "シャードキー",
      "ユーザー名",
      "ポートコメント"
    ],
    "answer": "シャードキー",
    "explanation": "基礎論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.172／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "HTMLの装飾",
      "DNS登録",
      "障害予兆と性能劣化の検知",
      "認定ロゴの取得"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "実務論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.173／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "最小権限の原則",
      "パスワード共有",
      "全員root",
      "権限なしで運用"
    ],
    "answer": "最小権限の原則",
    "explanation": "試験対策論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.174／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "クライアントを停止不可にする",
      "インデックスを全削除",
      "全データを削除",
      "選挙により新Primaryを選出"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "運用論点。選挙で新しいPrimaryが選ばれます。"
  },
  {
    "question": "【MongoDB Associate DBA No.175／レプリカセット】MongoDBで自動フェイルオーバーを提供する構成はどれですか？",
    "choices": [
      "単一mongodのみ",
      "CSVエクスポート",
      "レプリカセット",
      "TTLだけ"
    ],
    "answer": "レプリカセット",
    "explanation": "設計論点。レプリカセットは冗長化とフェイルオーバーを提供します。"
  },
  {
    "question": "【MongoDB Associate DBA No.176／バックアップ】mongodumpで取得するバックアップの種類として近いものはどれですか？",
    "choices": [
      "物理メモリダンプ",
      "OSイメージのみ",
      "DNSゾーン転送",
      "論理バックアップ"
    ],
    "answer": "論理バックアップ",
    "explanation": "基礎論点。mongodumpはBSON形式の論理バックアップです。"
  },
  {
    "question": "【MongoDB Associate DBA No.177／シャーディング】データを複数シャードへ分散するために重要な選択はどれですか？",
    "choices": [
      "シャードキー",
      "ログファイル名",
      "ポートコメント",
      "ユーザー名"
    ],
    "answer": "シャードキー",
    "explanation": "実務論点。シャードキーは分散とクエリ効率に大きく影響します。"
  },
  {
    "question": "【MongoDB Associate DBA No.178／監視】運用でディスク使用量や接続数などを継続確認する目的はどれですか？",
    "choices": [
      "DNS登録",
      "HTMLの装飾",
      "認定ロゴの取得",
      "障害予兆と性能劣化の検知"
    ],
    "answer": "障害予兆と性能劣化の検知",
    "explanation": "試験対策論点。監視は安定運用の基本です。"
  },
  {
    "question": "【MongoDB Associate DBA No.179／セキュリティ】ユーザーに必要最小限の権限だけを与える考え方はどれですか？",
    "choices": [
      "パスワード共有",
      "権限なしで運用",
      "最小権限の原則",
      "全員root"
    ],
    "answer": "最小権限の原則",
    "explanation": "運用論点。最小権限により被害範囲を抑えます。"
  },
  {
    "question": "【MongoDB Associate DBA No.180／復旧】レプリカセットでPrimaryが停止した場合に通常発生する処理はどれですか？",
    "choices": [
      "インデックスを全削除",
      "クライアントを停止不可にする",
      "選挙により新Primaryを選出",
      "全データを削除"
    ],
    "answer": "選挙により新Primaryを選出",
    "explanation": "設計論点。選挙で新しいPrimaryが選ばれます。"
  }
];
