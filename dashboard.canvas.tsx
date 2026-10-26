import {
  Page,
  Section,
  Text,
  Callout,
  LineChart,
  Table,
  Grid,
  Metrics,
  Steps,
  Divider,
  Properties,
} from "grok/canvas";

const ldl = [
  { label: "2018-03", value: 2.55 },
  { label: "2021-04", value: 2.78 },
  { label: "2024-01", value: 2.95 },
  { label: "2025-03", value: 3.18 },
  { label: "2025-11", value: 3.48 },
  { label: "2026-09", value: 3.05 },
];

const tc = [
  { label: "2018-03", value: 4.6 },
  { label: "2021-04", value: 4.85 },
  { label: "2024-01", value: 5.05 },
  { label: "2025-03", value: 5.28 },
  { label: "2025-11", value: 5.45 },
  { label: "2026-09", value: 4.95 },
];

const vitd = [
  { label: "2024-01", value: 18 },
  { label: "2024-08", value: 34 },
  { label: "2025-03", value: 36 },
  { label: "2026-09", value: 38 },
];

const tsh = [
  { label: "2022-09", value: 4.85 },
  { label: "2024-08", value: 2.15 },
  { label: "2026-04", value: 1.92 },
];

const gluF = [
  { label: "2018-03", value: 5.1 },
  { label: "2021-04", value: 5.2 },
  { label: "2022-09", value: 5.0 },
  { label: "2024-01", value: 5.3 },
  { label: "2025-03", value: 5.2 },
  { label: "2025-11", value: 5.4 },
  { label: "2026-09", value: 5.1 },
];

export default function App() {
  return (
    <Page
      title="陳大文 · 健康指標 Demo"
      summary="虛構去識別化演示：維生素 D 偏低已恢復、血脂一度升高後回落、甲狀腺一過性波動。非醫療診斷。"
      width="wide"
      sources={["匿名虛構 metrics（Demo 人物：陳大文 / Chan Tai-man）"]}
    >
      <Callout tone="success" lead="總結">
        整體健康良好，目前無須治療或立即回診。本頁為 AI 應用演示資料，不可當作真實病歷或診斷依據。
      </Callout>

      <Section heading="人物與範圍">
        <Properties
          items={[
            { label: "姓名", value: "陳大文（Chan Tai-man）" },
            { label: "出生", value: "1989-05-12" },
            { label: "地點", value: "澳門（虛構）" },
            { label: "涵蓋", value: "2018-03 ～ 2026-09 · 12 次檢查類型" },
            { label: "更新", value: "2026-10-26" },
          ]}
        />
      </Section>

      <Section heading="關鍵敘事">
        <Grid columns={3}>
          <Callout tone="info" lead="維生素 D · 已釐清">
            2024-01 為 18 ng/mL（偏低）；補充後 2024-08 升至 34，之後維持 36–38。
          </Callout>
          <Callout tone="info" lead="血脂 · 已回落">
            2025 LDL 一度 3.48、TC 5.45（偏高）；飲食與有氧後 2026-09 LDL 3.05、TC 4.95 回落。
          </Callout>
          <Callout tone="info" lead="甲狀腺 · 一過性">
            2022 TSH 4.85 輕度偏高；後續複查正常，TPO 抗體陰性。
          </Callout>
        </Grid>
      </Section>

      <Section heading="亮點數值">
        <Metrics
          metrics={[
            { value: "38", label: "維生素 D", detail: "2026-09 · ng/mL", tone: "success" },
            { value: "3.05", label: "LDL", detail: "2026-09 · 已回落", tone: "success" },
            { value: "4.95", label: "總膽固醇", detail: "2026-09 · mmol/L", tone: "success" },
            { value: "1.92", label: "TSH", detail: "2026-04 · 正常", tone: "success" },
            { value: "5.2%", label: "HbA1c", detail: "2026-09 · 正常" },
            { value: "23.6", label: "BMI", detail: "2026-09 · 正常" },
          ]}
        />
      </Section>

      <Section heading="LDL 趨勢" caption="單位 mmol/L；參考上限 &lt;3.4">
        <LineChart
          points={ldl}
          ceiling={4}
          floor={2}
          unit="mmol/L"
          labels={["LDL"]}
          annotations={[{ at: 4, label: "H 3.48", value: 3.48 }]}
        />
      </Section>

      <Section heading="總膽固醇趨勢" caption="單位 mmol/L；參考上限 &lt;5.2">
        <LineChart
          points={tc}
          ceiling={6}
          floor={4}
          unit="mmol/L"
          labels={["總膽固醇"]}
          annotations={[{ at: 4, label: "H 5.45", value: 5.45 }]}
        />
      </Section>

      <Section heading="維生素 D 趨勢" caption="單位 ng/mL；參考下限 ≥30">
        <LineChart
          points={vitd}
          ceiling={50}
          floor={10}
          unit="ng/mL"
          labels={["25-OH Vit D"]}
          annotations={[{ at: 0, label: "L 18", value: 18 }]}
        />
      </Section>

      <Section heading="TSH 與空腹血糖" caption="TSH mIU/L（上限 4.0）；血糖 mmol/L">
        <Grid columns={2}>
          <LineChart
            points={tsh}
            ceiling={6}
            floor={0}
            unit="mIU/L"
            labels={["TSH"]}
            annotations={[{ at: 0, label: "H 4.85", value: 4.85 }]}
          />
          <LineChart
            points={gluF}
            ceiling={7}
            floor={4}
            unit="mmol/L"
            labels={["空腹血糖"]}
          />
        </Grid>
        <Text>血糖全程正常；與舊版「空腹貼近上限」故事不同，本 Demo 主線為維生素 D 與血脂。</Text>
      </Section>

      <Section heading="最新數值（精選）">
        <Table
          columns={["項目", "數值", "單位", "日期", "flag"]}
          align={["start", "end", "start", "start", "start"]}
          rows={[
            ["LDL", "3.05", "mmol/L", "2026-09-16", { text: "N", tone: "success" }],
            ["總膽固醇", "4.95", "mmol/L", "2026-09-16", { text: "N", tone: "success" }],
            ["HDL", "1.25", "mmol/L", "2026-09-16", { text: "N", tone: "success" }],
            ["甘油三酯", "1.12", "mmol/L", "2026-09-16", { text: "N", tone: "success" }],
            ["維生素 D", "38", "ng/mL", "2026-09-16", { text: "N", tone: "success" }],
            ["HbA1c", "5.2", "%", "2026-09-16", { text: "N", tone: "success" }],
            ["TSH", "1.92", "mIU/L", "2026-04-28", { text: "N", tone: "success" }],
            ["ALT", "18", "U/L", "2026-09-16", { text: "N", tone: "success" }],
          ]}
        />
      </Section>

      <Section heading="歷史 flag（僅 H／L）">
        <Table
          columns={["日期", "項目", "數值", "flag", "說明"]}
          align={["start", "start", "end", "start", "start"]}
          rows={[
            [
              "2022-09-03",
              "TSH",
              "4.85 mIU/L",
              { text: "H", tone: "warning" },
              "輕度偏高；後續複查正常",
            ],
            [
              "2024-01-22",
              "維生素 D",
              "18 ng/mL",
              { text: "L", tone: "warning" },
              "補充後回升並維持",
            ],
            [
              "2025-03-05",
              "總膽固醇",
              "5.28 mmol/L",
              { text: "H", tone: "warning" },
              "略超上限",
            ],
            [
              "2025-11-14",
              "總膽固醇",
              "5.45 mmol/L",
              { text: "H", tone: "danger" },
              "空腹確認；後回落",
            ],
            [
              "2025-11-14",
              "LDL",
              "3.48 mmol/L",
              { text: "H", tone: "danger" },
              "首次超標；飲食運動後回落",
            ],
          ]}
        />
      </Section>

      <Section heading="檢查類型一覽">
        <Table
          columns={["日期", "類型", "機構"]}
          rows={[
            ["2018-03-12", "年度體檢", "青松體檢中心"],
            ["2019-06-20", "視力篩查", "明眸眼科門診"],
            ["2020-02-08", "骨密度初評", "康骨專科診所"],
            ["2021-04-15", "年度體檢", "青松體檢中心"],
            ["2022-09-03", "甲狀腺門診生化", "市立綜合醫院"],
            ["2023-05-18", "腸胃門診生化", "和順腸胃診所"],
            ["2024-01-22", "代謝跟進", "青松體檢中心"],
            ["2024-08-10", "維生素 D 複查", "市立綜合醫院"],
            ["2025-03-05", "年度體檢", "綠洲健康中心"],
            ["2025-11-14", "血脂代謝跟進", "綠洲健康中心"],
            ["2026-04-28", "甲狀腺複查", "市立綜合醫院"],
            ["2026-09-16", "年度體檢代謝", "綠洲健康中心"],
          ]}
        />
      </Section>

      <Divider />

      <Section heading="AI 管線說明">
        <Steps
          steps={[
            { title: "上傳／貼上", detail: "PDF、照片、截圖或直接貼數字" },
            { title: "OCR／Vision", detail: "掃描件或無文字 PDF 先轉圖再讀" },
            { title: "解讀", detail: "對照參考範圍，說明是否需複查" },
            { title: "歸檔", detail: "metrics.csv、notes、HEALTHM 總覽" },
            { title: "趨勢頁", detail: "折線圖、最新表、歷史 flag" },
          ]}
        />
        <Callout tone="info" lead="邊界">
          不診斷、不開藥、不預約、不登入醫院網站；明顯異常只建議找醫生。最終判斷交給醫師。
        </Callout>
      </Section>
    </Page>
  );
}
