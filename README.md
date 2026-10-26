# 健康報告 AI Demo

把零散的體檢 PDF／照片，變成可追蹤的健康指標檔案與趨勢頁。

這是一份**去識別化、虛構數值**的 AI 體檢解讀演示包，用來展示「上傳 → 解讀 → 歸檔 → 趨勢」完整迴圈。人物、機構、數值均為演示虛構，**非真實病歷、非醫療診斷**。

| | |
|---|---|
| **人物** | 陳大文（Chan Tai-man） |
| **出生** | 1989-05-12 |
| **涵蓋** | 2018-03 ～ 2026-09 · 約 12 次檢查類型 · 約 124 筆指標 |
| **語言** | 繁體中文 |
| **Harness** | Grok Bot |
| **Model** | Grok |
| **製作日期** | 2026-10-26 |
| **互動頁** | [陳大文 · 健康指標 Demo](https://cursor.com/canvas/store-f80816da-fd42-4840-afa3-db37b31635ae/3c9ad5ea-c586-4b1d-b7f7-060bbd20364a) |
| **GitHub Pages** | [john-fb-agent.github.io/health-agent-demo](https://john-fb-agent.github.io/health-agent-demo/) |


## GitHub Pages

- **線上站**：[https://john-fb-agent.github.io/health-agent-demo/](https://john-fb-agent.github.io/health-agent-demo/)（Chart.js 靜態趨勢頁）
- **來源**：`docs/`（`index.html` + `styles.css` + `app.js` + `metrics.csv`）
- **部署**：`.github/workflows/pages.yml`（push `main` → upload-pages-artifact → deploy-pages）

> **目前狀態（2026-10-26）**：repo 已 **public**，Pages Source = GitHub Actions，站點已上線。
>
> 線上站：https://john-fb-agent.github.io/health-agent-demo/


## 統計圖 Page（Canvas）

- **線上頁面**：[陳大文 · 健康指標 Demo](https://cursor.com/canvas/store-f80816da-fd42-4840-afa3-db37b31635ae/3c9ad5ea-c586-4b1d-b7f7-060bbd20364a)（LDL／總膽固醇／維生素 D／TSH／血糖折線、最新值表、歷史 flag）
- **倉庫原始碼**：[`dashboard.canvas.tsx`](./dashboard.canvas.tsx)（`grok/canvas` Page 模組；與線上頁同源匯出）
- **Canvas id**：`3c9ad5ea-c586-4b1d-b7f7-060bbd20364a`

本檔僅供版本控管與演示說明；實際渲染仍以 Cursor Canvas 為準。

## AI 管線

1. **Intake** — 上傳或貼上報告（PDF、截圖、數字）
2. **OCR／Vision** — 掃描件或無文字 PDF 先轉圖再讀；看不清就說看不清
3. **Interpret** — 對照參考範圍：在範圍內／偏高偏低、可能代表什麼、要不要回診
4. **Archive** — 寫入 `metrics.csv`、補 `notes/`、更新 `HEALTHM.md`
5. **Trend** — 互動頁展示跨年折線、最新數值表、歷史 H／L flag

助手角色：平實、短而清楚；逐份解讀後歸檔與比對趨勢。不代登入、不預約、不對外發訊、不診斷、不開藥；明顯異常只建議找醫生並說清原因。

## 目錄

```
health-demo/
├── README.md              # 本文件（說明＋演示講稿）
├── HEALTHM.md             # 健康總覽（結論、清單、留意項）
├── dashboard.canvas.tsx   # 趨勢圖 Page 原始碼（Cursor Canvas）
├── docs/                  # GitHub Pages 靜態站（Chart.js）
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── metrics.csv
├── .github/workflows/pages.yml
├── metrics.csv            # 指標主檔（UTF-8）
├── metrics_excel.csv      # 同上，UTF-8 BOM（Excel 可直接開）
├── notes/                 # 代表性解讀筆記
└── reports/               # 原始 PDF／影像刻意省略（僅 .gitkeep）
```

### metrics 欄位

`date, category, code, item, value, unit, ref_low, ref_high, ref_text, flag, source, note`

- `flag`：`N` 正常／`H` 偏高／`L` 偏低／空＝無參考範圍或僅備註
- 血壓拆成 `SBP`／`DBP`

## 故事線（演示用）

**總體結論**：健康良好；無須治療或立即回診。

| 線索 | 經過 | 現況 |
|---|---|---|
| **維生素 D** | 2024-01 為 18 ng/mL（偏低）→ 補充後回升 | 維持 36–38，正常 |
| **血脂（LDL／TC）** | 2025 一度超標（LDL 3.48、TC 5.45） | 飲食＋有氧後 2026-09 回落至範圍內 |
| **甲狀腺（TSH）** | 2022 一次輕度偏高（4.85） | 複查正常；TPO 抗體陰性 |

檢查類型刻意多樣：年度體檢、代謝／血脂跟進、甲狀腺門診、腸胃門診生化、視力篩查、骨密度初評、維生素 D 複查等（虛構機構如青松體檢中心、綠洲健康中心、市立綜合醫院）。

詳細結論與清單見 `HEALTHM.md`；圖表見 [統計圖 Page](#統計圖-pagecanvas) 與 `dashboard.canvas.tsx`。

## 演示提示（約 2–3 分鐘）

1. 說明一句話目標與管線五步。
2. 打開 GitHub Pages（或 Canvas），帶過「Vit D → 血脂 → TSH」三條已釐清鏈。
3. 點開 `metrics.csv`／一則 `notes/`，展示三層歸檔。
4. 強調邊界：不診斷、不開藥；最終判斷交給醫生。

**建議結束句**：「這不是電子病歷，是協助整理報告與提醒追蹤的 AI 助手；最終判斷仍交給醫生。」

演示時不要秀：真實姓名、真實醫院、真實雲端備份連結、含個資掃描件。

## 設計原則

1. **只信檔案裡的數** — 解讀與圖表不得捏造數值。
2. **三層歸檔** — 原檔 → 筆記 → 結構化 metrics，方便合併分析。
3. **趨勢優先於單點** — 異常後要能串起「發現 → 複查 → 結論」。
4. **使用者確認可改變解讀** — 例如是否空腹，會影響甘油三酯可信度。
5. **邊界寫清楚** — 助手不是醫生；頁面與總覽都標明「非診斷」。

## 能力強調

- 跨年趨勢與「發現 → 複查 → 結論」敘事
- 結構化 CSV＋總覽 MD＋逐次 note
- 使用者確認會改變解讀可信度
- 明確邊界：不清楚就說不清楚

---

*Harness: Grok Bot · Model: Grok · 製作日期: 2026-10-26 · 本地根目錄 `/workspace/health-demo/`*
