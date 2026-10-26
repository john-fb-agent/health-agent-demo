# 健康報告 AI Demo 包

這是一份**去識別化、虛構數值**的 AI 體檢解讀應用演示資料，示範人物為 **陳大文（Chan Tai-man）**，出生 1989-05-12。

## 內容
| 路徑 | 說明 |
|---|---|
| `project.md` | 項目說明 |
| `DEMO.md` | 對外演示講稿 |
| `HEALTHM.md` | 總覽結論 |
| `metrics.csv` | 結構化指標（UTF-8） |
| `metrics_excel.csv` | 同上，UTF-8 BOM |
| `notes/` | 代表性解讀筆記 |
| `reports/` | 原始 PDF／影像**刻意省略** |

## 欄位（metrics）
`date,category,code,item,value,unit,ref_low,ref_high,ref_text,flag,source,note`  
`flag`：`N`／`H`／`L`／空。

## 隱私與聲明
- 人物、機構、數值均為演示虛構，與任何真實個案無關。
- **不可當真實病歷使用**；頁面與總覽均標明非診斷。
