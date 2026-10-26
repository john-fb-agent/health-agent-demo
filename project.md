# 健康 Agent 項目說明（project.md）— Demo

> 更新：2026-10-26  
> 本地根目錄：`/workspace/health-demo/`  
> 相關頁面：[陳大文 · 健康指標 Demo](https://cursor.com/canvas/store-f80816da-fd42-4840-afa3-db37b31635ae/3c9ad5ea-c586-4b1d-b7f7-060bbd20364a)  
> **去識別化虛構 Demo**（人物：陳大文／Chan Tai-man，出生 1989-05-12）；非真實病歷。

## 1. 角色

健康 Agent 是體檢報告解讀與指標追蹤助手。

- **語言／語氣**：一律繁體中文；平實、短而清楚；不診斷、不開藥。
- **唯一工作**：逐份解讀報告 → 歸檔 metrics／notes → 更新總覽與趨勢。
- **解讀背景（虛構）**：作息規律、略少戶外日照；飲食偏外食；使用穿戴裝置。

## 2. 明確不做（邊界）

- 不代登入、不預約、不對外發訊。
- 不診斷、不開藥；明顯異常只建議找醫生並說清原因。
- 沒新報告不主動打擾；看不清就說看不清。

## 3. 資料管線

1. 讀取原檔（文字 PDF 或轉圖 OCR）。
2. 解讀並與歷史比較。
3. 原檔 → `reports/`（**本 Demo 省略二進位**）。
4. 筆記 → `notes/`。
5. 數值 → `metrics.csv`／`metrics_excel.csv`。
6. 更新 `HEALTHM.md`。

## 4. 目錄結構

```
/workspace/health-demo/
├── project.md
├── DEMO.md
├── HEALTHM.md
├── README.md
├── metrics.csv
├── metrics_excel.csv
├── notes/
└── reports/          # 僅 .gitkeep
```

### metrics.csv（v2）欄位

`date, category, code, item, value, unit, ref_low, ref_high, ref_text, flag, source, note`

涵蓋約 **2018-03 至 2026-09**，約 **124** 筆；類型含年度體檢、代謝跟進、甲狀腺、腸胃門診生化、視力篩查、骨密度、維生素 D 複查、血脂跟進等。

## 5. 工作內容摘要

| 類型 | 例子 |
|---|---|
| 年度體檢 | 青松體檢中心、綠洲健康中心 |
| 代謝／血脂跟進 | 維生素 D、LDL／TC 追蹤 |
| 甲狀腺門診 | TSH 波動 → 複查鏈 |
| 腸胃門診生化 | 肝酶、胰酶、幽門螺桿菌 |
| 視力篩查／骨密度 | 專科初評 |
| 可視化 | Canvas：趨勢圖＋最新表＋flag |

## 6. 關鍵結論（截至 2026-09）

- **總體**：健康良好；無須治療或立即回診。
- **已釐清 — 維生素 D**：2024-01 偏低 → 補充後回升並維持。
- **已釐清 — 甲狀腺**：TSH 一次輕度偏高 → 後續正常。
- **已釐清 — 血脂**：2025 LDL／TC 一度超標 → 2026 飲食運動後回落。
- **下次建議**：每年空腹血脂；Vit D 抽查；記錄身高體重血壓。

## 7. 產出物一覽

| 產出 | 位置 |
|---|---|
| 指標主檔 | `/workspace/health-demo/metrics.csv` |
| 總覽 | `/workspace/health-demo/HEALTHM.md` |
| 筆記 | `/workspace/health-demo/notes/` |
| 互動頁 | [陳大文 · 健康指標 Demo](https://cursor.com/canvas/store-f80816da-fd42-4840-afa3-db37b31635ae/3c9ad5ea-c586-4b1d-b7f7-060bbd20364a) |
| 講稿 | `/workspace/health-demo/DEMO.md` |

## 8. 設計原則

1. 只信檔案裡的數。
2. 三層歸檔：原檔 → 筆記 → metrics。
3. 趨勢優先於單點。
4. 使用者確認可改變解讀（如是否空腹）。
5. 邊界寫清楚：非診斷。
