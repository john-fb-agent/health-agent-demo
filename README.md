# 健康報告 AI Demo 包

這是一份**去識別化**的 AI 體檢解讀應用演示資料，示範人物為虛構的 **陳大文（Chan Tai-man）**，出生 1989-05-12，地點澳門。

## 內容
| 路徑 | 說明 |
|---|---|
| `HEALTHM.md` | 總覽結論（每次新報告後更新的樣貌） |
| `metrics.csv` | 結構化指標（約 173 筆），UTF-8 |
| `metrics_excel.csv` | 同上，UTF-8 BOM，Excel 可直接開 |
| `notes/` | 代表性解讀筆記（精選 5 份） |
| `reports/` | 原始 PDF／影像**刻意省略**（僅 `.gitkeep`） |
| `DEMO.md` | 對外演示講稿與能力邊界 |

## 欄位（metrics）
`date,category,code,item,value,unit,ref_low,ref_high,ref_text,flag,source,note`  
`flag`：`N` 正常／`H` 偏高／`L` 偏低／空＝無參考範圍。

## 隱私
- 真實姓名、生日、醫院名稱、Drive 連結、原始掃描件均已移除或替換。
- 臨床數值與日期大致保留，僅供產品演示，**不可當真實病歷使用**。
