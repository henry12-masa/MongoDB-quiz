window.quizData = window.quizData || {};
window.quizData.mongodbProfessional = [
  {
    "question": "【MongoDB Professional No.001／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "暗号化が不要になる",
      "ドキュメントサイズ上限や更新コスト",
      "DNS解決が速くなる",
      "SQL構文が短くなる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "基礎論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.002／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "必ず全クエリが高速化する",
      "バックアップ不要になる",
      "認証が無効になる",
      "効果が小さく更新コストが増える"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "実務論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.003／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "ユーザー削除",
      "書き込みホットスポット",
      "全件圧縮不可",
      "自動暗号化解除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "試験対策論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.004／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "READMEの文字数",
      "メトリクス・ログ・直近変更",
      "CSSの余白だけ",
      "ロゴの色"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "運用論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.005／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "readConcernとreadPreference",
      "favicon",
      "広告スロット",
      "HTML title"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "設計論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.006／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "フォント変更",
      "コメント削除",
      "作業者の好みだけ",
      "手順・ロールバック・検証計画"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "基礎論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.007／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "暗号化が不要になる",
      "SQL構文が短くなる",
      "ドキュメントサイズ上限や更新コスト",
      "DNS解決が速くなる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "実務論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.008／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "効果が小さく更新コストが増える",
      "バックアップ不要になる",
      "認証が無効になる",
      "必ず全クエリが高速化する"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "試験対策論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.009／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "書き込みホットスポット",
      "自動暗号化解除",
      "全件圧縮不可",
      "ユーザー削除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "運用論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.010／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "CSSの余白だけ",
      "READMEの文字数",
      "ロゴの色",
      "メトリクス・ログ・直近変更"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "設計論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.011／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "readConcernとreadPreference",
      "favicon",
      "HTML title",
      "広告スロット"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "基礎論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.012／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "手順・ロールバック・検証計画",
      "コメント削除",
      "作業者の好みだけ",
      "フォント変更"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "実務論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.013／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "暗号化が不要になる",
      "ドキュメントサイズ上限や更新コスト",
      "SQL構文が短くなる",
      "DNS解決が速くなる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "試験対策論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.014／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "必ず全クエリが高速化する",
      "認証が無効になる",
      "バックアップ不要になる",
      "効果が小さく更新コストが増える"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "運用論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.015／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "ユーザー削除",
      "全件圧縮不可",
      "書き込みホットスポット",
      "自動暗号化解除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "設計論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.016／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "メトリクス・ログ・直近変更",
      "CSSの余白だけ",
      "ロゴの色",
      "READMEの文字数"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "基礎論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.017／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "readConcernとreadPreference",
      "HTML title",
      "favicon",
      "広告スロット"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "実務論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.018／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "コメント削除",
      "フォント変更",
      "手順・ロールバック・検証計画",
      "作業者の好みだけ"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "試験対策論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.019／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "SQL構文が短くなる",
      "暗号化が不要になる",
      "DNS解決が速くなる",
      "ドキュメントサイズ上限や更新コスト"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "運用論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.020／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "バックアップ不要になる",
      "効果が小さく更新コストが増える",
      "認証が無効になる",
      "必ず全クエリが高速化する"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "設計論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.021／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "書き込みホットスポット",
      "全件圧縮不可",
      "ユーザー削除",
      "自動暗号化解除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "基礎論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.022／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "CSSの余白だけ",
      "READMEの文字数",
      "メトリクス・ログ・直近変更",
      "ロゴの色"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "実務論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.023／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "favicon",
      "広告スロット",
      "readConcernとreadPreference",
      "HTML title"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "試験対策論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.024／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "作業者の好みだけ",
      "手順・ロールバック・検証計画",
      "コメント削除",
      "フォント変更"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "運用論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.025／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "SQL構文が短くなる",
      "DNS解決が速くなる",
      "ドキュメントサイズ上限や更新コスト",
      "暗号化が不要になる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "設計論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.026／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "認証が無効になる",
      "効果が小さく更新コストが増える",
      "バックアップ不要になる",
      "必ず全クエリが高速化する"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "基礎論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.027／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "書き込みホットスポット",
      "自動暗号化解除",
      "全件圧縮不可",
      "ユーザー削除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "実務論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.028／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "ロゴの色",
      "CSSの余白だけ",
      "READMEの文字数",
      "メトリクス・ログ・直近変更"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "試験対策論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.029／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "広告スロット",
      "HTML title",
      "favicon",
      "readConcernとreadPreference"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "運用論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.030／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "作業者の好みだけ",
      "手順・ロールバック・検証計画",
      "フォント変更",
      "コメント削除"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "設計論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.031／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "DNS解決が速くなる",
      "暗号化が不要になる",
      "SQL構文が短くなる",
      "ドキュメントサイズ上限や更新コスト"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "基礎論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.032／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "必ず全クエリが高速化する",
      "バックアップ不要になる",
      "認証が無効になる",
      "効果が小さく更新コストが増える"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "実務論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.033／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "ユーザー削除",
      "書き込みホットスポット",
      "全件圧縮不可",
      "自動暗号化解除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "試験対策論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.034／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "ロゴの色",
      "メトリクス・ログ・直近変更",
      "CSSの余白だけ",
      "READMEの文字数"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "運用論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.035／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "広告スロット",
      "favicon",
      "readConcernとreadPreference",
      "HTML title"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "設計論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.036／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "作業者の好みだけ",
      "フォント変更",
      "手順・ロールバック・検証計画",
      "コメント削除"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "基礎論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.037／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "SQL構文が短くなる",
      "暗号化が不要になる",
      "DNS解決が速くなる",
      "ドキュメントサイズ上限や更新コスト"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "実務論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.038／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "バックアップ不要になる",
      "効果が小さく更新コストが増える",
      "必ず全クエリが高速化する",
      "認証が無効になる"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "試験対策論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.039／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "書き込みホットスポット",
      "全件圧縮不可",
      "ユーザー削除",
      "自動暗号化解除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "運用論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.040／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "ロゴの色",
      "メトリクス・ログ・直近変更",
      "READMEの文字数",
      "CSSの余白だけ"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "設計論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.041／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "HTML title",
      "readConcernとreadPreference",
      "favicon",
      "広告スロット"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "基礎論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.042／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "コメント削除",
      "作業者の好みだけ",
      "フォント変更",
      "手順・ロールバック・検証計画"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "実務論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.043／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "DNS解決が速くなる",
      "暗号化が不要になる",
      "SQL構文が短くなる",
      "ドキュメントサイズ上限や更新コスト"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "試験対策論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.044／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "必ず全クエリが高速化する",
      "効果が小さく更新コストが増える",
      "バックアップ不要になる",
      "認証が無効になる"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "運用論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.045／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "書き込みホットスポット",
      "ユーザー削除",
      "自動暗号化解除",
      "全件圧縮不可"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "設計論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.046／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "READMEの文字数",
      "CSSの余白だけ",
      "ロゴの色",
      "メトリクス・ログ・直近変更"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "基礎論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.047／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "広告スロット",
      "favicon",
      "readConcernとreadPreference",
      "HTML title"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "実務論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.048／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "フォント変更",
      "作業者の好みだけ",
      "手順・ロールバック・検証計画",
      "コメント削除"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "試験対策論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.049／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "暗号化が不要になる",
      "DNS解決が速くなる",
      "SQL構文が短くなる",
      "ドキュメントサイズ上限や更新コスト"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "運用論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.050／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "効果が小さく更新コストが増える",
      "バックアップ不要になる",
      "必ず全クエリが高速化する",
      "認証が無効になる"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "設計論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.051／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "ユーザー削除",
      "書き込みホットスポット",
      "全件圧縮不可",
      "自動暗号化解除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "基礎論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.052／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "CSSの余白だけ",
      "ロゴの色",
      "メトリクス・ログ・直近変更",
      "READMEの文字数"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "実務論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.053／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "readConcernとreadPreference",
      "HTML title",
      "広告スロット",
      "favicon"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "試験対策論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.054／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "手順・ロールバック・検証計画",
      "コメント削除",
      "フォント変更",
      "作業者の好みだけ"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "運用論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.055／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "SQL構文が短くなる",
      "DNS解決が速くなる",
      "暗号化が不要になる",
      "ドキュメントサイズ上限や更新コスト"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "設計論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.056／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "認証が無効になる",
      "バックアップ不要になる",
      "必ず全クエリが高速化する",
      "効果が小さく更新コストが増える"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "基礎論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.057／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "全件圧縮不可",
      "ユーザー削除",
      "自動暗号化解除",
      "書き込みホットスポット"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "実務論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.058／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "CSSの余白だけ",
      "READMEの文字数",
      "メトリクス・ログ・直近変更",
      "ロゴの色"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "試験対策論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.059／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "HTML title",
      "広告スロット",
      "readConcernとreadPreference",
      "favicon"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "運用論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.060／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "フォント変更",
      "手順・ロールバック・検証計画",
      "作業者の好みだけ",
      "コメント削除"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "設計論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.061／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "SQL構文が短くなる",
      "DNS解決が速くなる",
      "ドキュメントサイズ上限や更新コスト",
      "暗号化が不要になる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "基礎論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.062／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "認証が無効になる",
      "バックアップ不要になる",
      "効果が小さく更新コストが増える",
      "必ず全クエリが高速化する"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "実務論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.063／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "書き込みホットスポット",
      "全件圧縮不可",
      "自動暗号化解除",
      "ユーザー削除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "試験対策論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.064／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "READMEの文字数",
      "ロゴの色",
      "メトリクス・ログ・直近変更",
      "CSSの余白だけ"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "運用論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.065／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "readConcernとreadPreference",
      "HTML title",
      "favicon",
      "広告スロット"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "設計論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.066／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "フォント変更",
      "コメント削除",
      "作業者の好みだけ",
      "手順・ロールバック・検証計画"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "基礎論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.067／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "DNS解決が速くなる",
      "SQL構文が短くなる",
      "暗号化が不要になる",
      "ドキュメントサイズ上限や更新コスト"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "実務論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.068／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "必ず全クエリが高速化する",
      "効果が小さく更新コストが増える",
      "バックアップ不要になる",
      "認証が無効になる"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "試験対策論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.069／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "自動暗号化解除",
      "全件圧縮不可",
      "ユーザー削除",
      "書き込みホットスポット"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "運用論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.070／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "CSSの余白だけ",
      "READMEの文字数",
      "ロゴの色",
      "メトリクス・ログ・直近変更"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "設計論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.071／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "favicon",
      "readConcernとreadPreference",
      "広告スロット",
      "HTML title"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "基礎論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.072／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "作業者の好みだけ",
      "フォント変更",
      "コメント削除",
      "手順・ロールバック・検証計画"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "実務論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.073／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "暗号化が不要になる",
      "SQL構文が短くなる",
      "ドキュメントサイズ上限や更新コスト",
      "DNS解決が速くなる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "試験対策論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.074／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "バックアップ不要になる",
      "認証が無効になる",
      "必ず全クエリが高速化する",
      "効果が小さく更新コストが増える"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "運用論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.075／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "書き込みホットスポット",
      "自動暗号化解除",
      "全件圧縮不可",
      "ユーザー削除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "設計論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.076／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "メトリクス・ログ・直近変更",
      "CSSの余白だけ",
      "ロゴの色",
      "READMEの文字数"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "基礎論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.077／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "広告スロット",
      "readConcernとreadPreference",
      "favicon",
      "HTML title"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "実務論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.078／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "コメント削除",
      "フォント変更",
      "手順・ロールバック・検証計画",
      "作業者の好みだけ"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "試験対策論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.079／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "ドキュメントサイズ上限や更新コスト",
      "DNS解決が速くなる",
      "暗号化が不要になる",
      "SQL構文が短くなる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "運用論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.080／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "効果が小さく更新コストが増える",
      "認証が無効になる",
      "必ず全クエリが高速化する",
      "バックアップ不要になる"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "設計論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.081／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "書き込みホットスポット",
      "全件圧縮不可",
      "自動暗号化解除",
      "ユーザー削除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "基礎論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.082／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "メトリクス・ログ・直近変更",
      "READMEの文字数",
      "CSSの余白だけ",
      "ロゴの色"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "実務論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.083／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "HTML title",
      "readConcernとreadPreference",
      "favicon",
      "広告スロット"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "試験対策論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.084／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "フォント変更",
      "作業者の好みだけ",
      "手順・ロールバック・検証計画",
      "コメント削除"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "運用論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.085／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "暗号化が不要になる",
      "ドキュメントサイズ上限や更新コスト",
      "DNS解決が速くなる",
      "SQL構文が短くなる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "設計論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.086／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "認証が無効になる",
      "必ず全クエリが高速化する",
      "バックアップ不要になる",
      "効果が小さく更新コストが増える"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "基礎論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.087／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "ユーザー削除",
      "書き込みホットスポット",
      "全件圧縮不可",
      "自動暗号化解除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "実務論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.088／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "READMEの文字数",
      "ロゴの色",
      "メトリクス・ログ・直近変更",
      "CSSの余白だけ"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "試験対策論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.089／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "広告スロット",
      "favicon",
      "HTML title",
      "readConcernとreadPreference"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "運用論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.090／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "フォント変更",
      "手順・ロールバック・検証計画",
      "コメント削除",
      "作業者の好みだけ"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "設計論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.091／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "SQL構文が短くなる",
      "暗号化が不要になる",
      "DNS解決が速くなる",
      "ドキュメントサイズ上限や更新コスト"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "基礎論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.092／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "効果が小さく更新コストが増える",
      "必ず全クエリが高速化する",
      "バックアップ不要になる",
      "認証が無効になる"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "実務論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.093／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "書き込みホットスポット",
      "自動暗号化解除",
      "全件圧縮不可",
      "ユーザー削除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "試験対策論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.094／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "READMEの文字数",
      "CSSの余白だけ",
      "メトリクス・ログ・直近変更",
      "ロゴの色"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "運用論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.095／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "HTML title",
      "readConcernとreadPreference",
      "広告スロット",
      "favicon"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "設計論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.096／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "手順・ロールバック・検証計画",
      "フォント変更",
      "作業者の好みだけ",
      "コメント削除"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "基礎論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.097／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "ドキュメントサイズ上限や更新コスト",
      "DNS解決が速くなる",
      "暗号化が不要になる",
      "SQL構文が短くなる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "実務論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.098／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "必ず全クエリが高速化する",
      "効果が小さく更新コストが増える",
      "認証が無効になる",
      "バックアップ不要になる"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "試験対策論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.099／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "全件圧縮不可",
      "書き込みホットスポット",
      "自動暗号化解除",
      "ユーザー削除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "運用論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.100／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "メトリクス・ログ・直近変更",
      "READMEの文字数",
      "CSSの余白だけ",
      "ロゴの色"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "設計論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.101／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "readConcernとreadPreference",
      "広告スロット",
      "HTML title",
      "favicon"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "基礎論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.102／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "手順・ロールバック・検証計画",
      "フォント変更",
      "コメント削除",
      "作業者の好みだけ"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "実務論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.103／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "SQL構文が短くなる",
      "ドキュメントサイズ上限や更新コスト",
      "DNS解決が速くなる",
      "暗号化が不要になる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "試験対策論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.104／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "必ず全クエリが高速化する",
      "バックアップ不要になる",
      "認証が無効になる",
      "効果が小さく更新コストが増える"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "運用論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.105／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "自動暗号化解除",
      "書き込みホットスポット",
      "ユーザー削除",
      "全件圧縮不可"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "設計論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.106／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "READMEの文字数",
      "ロゴの色",
      "メトリクス・ログ・直近変更",
      "CSSの余白だけ"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "基礎論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.107／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "readConcernとreadPreference",
      "広告スロット",
      "HTML title",
      "favicon"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "実務論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.108／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "フォント変更",
      "手順・ロールバック・検証計画",
      "コメント削除",
      "作業者の好みだけ"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "試験対策論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.109／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "暗号化が不要になる",
      "SQL構文が短くなる",
      "ドキュメントサイズ上限や更新コスト",
      "DNS解決が速くなる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "運用論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.110／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "必ず全クエリが高速化する",
      "効果が小さく更新コストが増える",
      "バックアップ不要になる",
      "認証が無効になる"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "設計論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.111／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "書き込みホットスポット",
      "全件圧縮不可",
      "ユーザー削除",
      "自動暗号化解除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "基礎論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.112／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "メトリクス・ログ・直近変更",
      "ロゴの色",
      "READMEの文字数",
      "CSSの余白だけ"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "実務論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.113／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "広告スロット",
      "favicon",
      "HTML title",
      "readConcernとreadPreference"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "試験対策論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.114／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "フォント変更",
      "手順・ロールバック・検証計画",
      "コメント削除",
      "作業者の好みだけ"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "運用論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.115／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "SQL構文が短くなる",
      "暗号化が不要になる",
      "ドキュメントサイズ上限や更新コスト",
      "DNS解決が速くなる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "設計論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.116／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "必ず全クエリが高速化する",
      "認証が無効になる",
      "効果が小さく更新コストが増える",
      "バックアップ不要になる"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "基礎論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.117／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "ユーザー削除",
      "全件圧縮不可",
      "書き込みホットスポット",
      "自動暗号化解除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "実務論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.118／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "READMEの文字数",
      "メトリクス・ログ・直近変更",
      "CSSの余白だけ",
      "ロゴの色"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "試験対策論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.119／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "広告スロット",
      "favicon",
      "readConcernとreadPreference",
      "HTML title"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "運用論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.120／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "コメント削除",
      "フォント変更",
      "手順・ロールバック・検証計画",
      "作業者の好みだけ"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "設計論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.121／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "DNS解決が速くなる",
      "SQL構文が短くなる",
      "暗号化が不要になる",
      "ドキュメントサイズ上限や更新コスト"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "基礎論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.122／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "効果が小さく更新コストが増える",
      "認証が無効になる",
      "バックアップ不要になる",
      "必ず全クエリが高速化する"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "実務論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.123／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "全件圧縮不可",
      "ユーザー削除",
      "自動暗号化解除",
      "書き込みホットスポット"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "試験対策論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.124／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "ロゴの色",
      "メトリクス・ログ・直近変更",
      "CSSの余白だけ",
      "READMEの文字数"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "運用論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.125／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "HTML title",
      "広告スロット",
      "readConcernとreadPreference",
      "favicon"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "設計論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.126／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "フォント変更",
      "作業者の好みだけ",
      "コメント削除",
      "手順・ロールバック・検証計画"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "基礎論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.127／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "SQL構文が短くなる",
      "暗号化が不要になる",
      "DNS解決が速くなる",
      "ドキュメントサイズ上限や更新コスト"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "実務論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.128／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "効果が小さく更新コストが増える",
      "バックアップ不要になる",
      "認証が無効になる",
      "必ず全クエリが高速化する"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "試験対策論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.129／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "ユーザー削除",
      "自動暗号化解除",
      "書き込みホットスポット",
      "全件圧縮不可"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "運用論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.130／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "メトリクス・ログ・直近変更",
      "READMEの文字数",
      "ロゴの色",
      "CSSの余白だけ"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "設計論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.131／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "広告スロット",
      "readConcernとreadPreference",
      "favicon",
      "HTML title"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "基礎論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.132／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "コメント削除",
      "作業者の好みだけ",
      "手順・ロールバック・検証計画",
      "フォント変更"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "実務論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.133／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "ドキュメントサイズ上限や更新コスト",
      "DNS解決が速くなる",
      "SQL構文が短くなる",
      "暗号化が不要になる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "試験対策論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.134／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "必ず全クエリが高速化する",
      "効果が小さく更新コストが増える",
      "バックアップ不要になる",
      "認証が無効になる"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "運用論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.135／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "書き込みホットスポット",
      "自動暗号化解除",
      "ユーザー削除",
      "全件圧縮不可"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "設計論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.136／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "ロゴの色",
      "メトリクス・ログ・直近変更",
      "READMEの文字数",
      "CSSの余白だけ"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "基礎論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.137／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "HTML title",
      "favicon",
      "広告スロット",
      "readConcernとreadPreference"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "実務論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.138／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "手順・ロールバック・検証計画",
      "コメント削除",
      "フォント変更",
      "作業者の好みだけ"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "試験対策論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.139／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "暗号化が不要になる",
      "SQL構文が短くなる",
      "DNS解決が速くなる",
      "ドキュメントサイズ上限や更新コスト"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "運用論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.140／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "バックアップ不要になる",
      "必ず全クエリが高速化する",
      "認証が無効になる",
      "効果が小さく更新コストが増える"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "設計論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.141／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "ユーザー削除",
      "自動暗号化解除",
      "全件圧縮不可",
      "書き込みホットスポット"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "基礎論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.142／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "READMEの文字数",
      "ロゴの色",
      "メトリクス・ログ・直近変更",
      "CSSの余白だけ"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "実務論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.143／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "広告スロット",
      "HTML title",
      "readConcernとreadPreference",
      "favicon"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "試験対策論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.144／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "コメント削除",
      "作業者の好みだけ",
      "手順・ロールバック・検証計画",
      "フォント変更"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "運用論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.145／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "SQL構文が短くなる",
      "ドキュメントサイズ上限や更新コスト",
      "DNS解決が速くなる",
      "暗号化が不要になる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "設計論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.146／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "バックアップ不要になる",
      "認証が無効になる",
      "効果が小さく更新コストが増える",
      "必ず全クエリが高速化する"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "基礎論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.147／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "書き込みホットスポット",
      "全件圧縮不可",
      "ユーザー削除",
      "自動暗号化解除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "実務論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.148／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "ロゴの色",
      "メトリクス・ログ・直近変更",
      "READMEの文字数",
      "CSSの余白だけ"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "試験対策論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.149／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "HTML title",
      "favicon",
      "広告スロット",
      "readConcernとreadPreference"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "運用論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.150／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "フォント変更",
      "手順・ロールバック・検証計画",
      "作業者の好みだけ",
      "コメント削除"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "設計論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.151／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "SQL構文が短くなる",
      "ドキュメントサイズ上限や更新コスト",
      "DNS解決が速くなる",
      "暗号化が不要になる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "基礎論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.152／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "必ず全クエリが高速化する",
      "効果が小さく更新コストが増える",
      "バックアップ不要になる",
      "認証が無効になる"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "実務論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.153／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "自動暗号化解除",
      "全件圧縮不可",
      "書き込みホットスポット",
      "ユーザー削除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "試験対策論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.154／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "メトリクス・ログ・直近変更",
      "READMEの文字数",
      "CSSの余白だけ",
      "ロゴの色"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "運用論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.155／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "readConcernとreadPreference",
      "favicon",
      "広告スロット",
      "HTML title"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "設計論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.156／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "コメント削除",
      "手順・ロールバック・検証計画",
      "作業者の好みだけ",
      "フォント変更"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "基礎論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.157／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "SQL構文が短くなる",
      "DNS解決が速くなる",
      "ドキュメントサイズ上限や更新コスト",
      "暗号化が不要になる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "実務論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.158／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "認証が無効になる",
      "バックアップ不要になる",
      "効果が小さく更新コストが増える",
      "必ず全クエリが高速化する"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "試験対策論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.159／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "全件圧縮不可",
      "自動暗号化解除",
      "書き込みホットスポット",
      "ユーザー削除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "運用論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.160／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "CSSの余白だけ",
      "ロゴの色",
      "READMEの文字数",
      "メトリクス・ログ・直近変更"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "設計論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.161／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "広告スロット",
      "readConcernとreadPreference",
      "HTML title",
      "favicon"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "基礎論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.162／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "作業者の好みだけ",
      "フォント変更",
      "コメント削除",
      "手順・ロールバック・検証計画"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "実務論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.163／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "SQL構文が短くなる",
      "ドキュメントサイズ上限や更新コスト",
      "DNS解決が速くなる",
      "暗号化が不要になる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "試験対策論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.164／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "認証が無効になる",
      "必ず全クエリが高速化する",
      "バックアップ不要になる",
      "効果が小さく更新コストが増える"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "運用論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.165／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "全件圧縮不可",
      "自動暗号化解除",
      "ユーザー削除",
      "書き込みホットスポット"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "設計論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.166／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "メトリクス・ログ・直近変更",
      "CSSの余白だけ",
      "READMEの文字数",
      "ロゴの色"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "基礎論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.167／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "HTML title",
      "広告スロット",
      "readConcernとreadPreference",
      "favicon"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "実務論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.168／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "フォント変更",
      "作業者の好みだけ",
      "コメント削除",
      "手順・ロールバック・検証計画"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "試験対策論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.169／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "SQL構文が短くなる",
      "ドキュメントサイズ上限や更新コスト",
      "暗号化が不要になる",
      "DNS解決が速くなる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "運用論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.170／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "効果が小さく更新コストが増える",
      "必ず全クエリが高速化する",
      "認証が無効になる",
      "バックアップ不要になる"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "設計論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.171／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "全件圧縮不可",
      "書き込みホットスポット",
      "自動暗号化解除",
      "ユーザー削除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "基礎論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.172／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "ロゴの色",
      "CSSの余白だけ",
      "メトリクス・ログ・直近変更",
      "READMEの文字数"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "実務論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.173／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "readConcernとreadPreference",
      "広告スロット",
      "favicon",
      "HTML title"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "試験対策論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.174／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "コメント削除",
      "フォント変更",
      "作業者の好みだけ",
      "手順・ロールバック・検証計画"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "運用論点。変更管理は障害リスクを下げます。"
  },
  {
    "question": "【MongoDB Professional No.175／高度設計】巨大配列を単一ドキュメントに無制限に増やす設計で懸念される点はどれですか？",
    "choices": [
      "SQL構文が短くなる",
      "DNS解決が速くなる",
      "ドキュメントサイズ上限や更新コスト",
      "暗号化が不要になる"
    ],
    "answer": "ドキュメントサイズ上限や更新コスト",
    "explanation": "設計論点。MongoDBにはドキュメントサイズ上限があり、巨大配列は注意が必要です。"
  },
  {
    "question": "【MongoDB Professional No.176／性能】低選択性のフィールドだけにインデックスを作る場合の懸念はどれですか？",
    "choices": [
      "必ず全クエリが高速化する",
      "バックアップ不要になる",
      "認証が無効になる",
      "効果が小さく更新コストが増える"
    ],
    "answer": "効果が小さく更新コストが増える",
    "explanation": "基礎論点。選択性が低いとインデックス効果は限定的です。"
  },
  {
    "question": "【MongoDB Professional No.177／分散】シャードキーが単調増加値に偏る場合に起こりやすい問題はどれですか？",
    "choices": [
      "書き込みホットスポット",
      "全件圧縮不可",
      "ユーザー削除",
      "自動暗号化解除"
    ],
    "answer": "書き込みホットスポット",
    "explanation": "実務論点。単調増加キーは特定シャードへ書き込みが集中しやすいです。"
  },
  {
    "question": "【MongoDB Professional No.178／障害対応】本番障害で最初に確認すべき情報として適切なのはどれですか？",
    "choices": [
      "CSSの余白だけ",
      "ロゴの色",
      "READMEの文字数",
      "メトリクス・ログ・直近変更"
    ],
    "answer": "メトリクス・ログ・直近変更",
    "explanation": "試験対策論点。事実確認と変更履歴の把握が重要です。"
  },
  {
    "question": "【MongoDB Professional No.179／一貫性】読み取りの整合性やレイテンシに影響する設定はどれですか？",
    "choices": [
      "広告スロット",
      "HTML title",
      "readConcernとreadPreference",
      "favicon"
    ],
    "answer": "readConcernとreadPreference",
    "explanation": "運用論点。読み取り動作に関わる設定です。"
  },
  {
    "question": "【MongoDB Professional No.180／運用設計】本番DBの変更作業で重要なものはどれですか？",
    "choices": [
      "フォント変更",
      "コメント削除",
      "手順・ロールバック・検証計画",
      "作業者の好みだけ"
    ],
    "answer": "手順・ロールバック・検証計画",
    "explanation": "設計論点。変更管理は障害リスクを下げます。"
  }
];
