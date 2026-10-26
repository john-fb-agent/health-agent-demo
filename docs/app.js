/* 陳大文健康 Demo — Chart.js 靜態頁；數值與 dashboard.canvas.tsx / metrics.csv 對齊 */
(function () {
  const ldl = {
    labels: ["2018-03", "2021-04", "2024-01", "2025-03", "2025-11", "2026-09"],
    values: [2.55, 2.78, 2.95, 3.18, 3.48, 3.05],
    ref: 3.4,
  };
  const tc = {
    labels: ["2018-03", "2021-04", "2024-01", "2025-03", "2025-11", "2026-09"],
    values: [4.6, 4.85, 5.05, 5.28, 5.45, 4.95],
    ref: 5.2,
  };
  const vitd = {
    labels: ["2024-01", "2024-08", "2025-03", "2026-09"],
    values: [18, 34, 36, 38],
    refLow: 30,
  };
  const tsh = {
    labels: ["2022-09", "2024-08", "2026-04"],
    values: [4.85, 2.15, 1.92],
    ref: 4.0,
  };
  const glu = {
    labels: ["2018-03", "2021-04", "2022-09", "2024-01", "2025-03", "2025-11", "2026-09"],
    values: [5.1, 5.2, 5.0, 5.3, 5.2, 5.4, 5.1],
  };

  const highlights = [
    { value: "38", label: "維生素 D", detail: "2026-09 · ng/mL" },
    { value: "3.05", label: "LDL", detail: "2026-09 · 已回落" },
    { value: "4.95", label: "總膽固醇", detail: "2026-09 · mmol/L" },
    { value: "1.92", label: "TSH", detail: "2026-04 · 正常" },
    { value: "5.2%", label: "HbA1c", detail: "2026-09 · 正常" },
    { value: "23.6", label: "BMI", detail: "2026-09 · 正常" },
  ];

  const latest = [
    ["LDL", "3.05", "mmol/L", "2026-09-16", "N"],
    ["總膽固醇", "4.95", "mmol/L", "2026-09-16", "N"],
    ["HDL", "1.25", "mmol/L", "2026-09-16", "N"],
    ["甘油三酯", "1.12", "mmol/L", "2026-09-16", "N"],
    ["維生素 D", "38", "ng/mL", "2026-09-16", "N"],
    ["HbA1c", "5.2", "%", "2026-09-16", "N"],
    ["TSH", "1.92", "mIU/L", "2026-04-28", "N"],
    ["ALT", "18", "U/L", "2026-09-16", "N"],
  ];

  const flags = [
    ["2022-09-03", "TSH", "4.85 mIU/L", "H", "輕度偏高；後續複查正常"],
    ["2024-01-22", "維生素 D", "18 ng/mL", "L", "補充後回升並維持"],
    ["2025-03-05", "總膽固醇", "5.28 mmol/L", "H", "略超上限"],
    ["2025-11-14", "總膽固醇", "5.45 mmol/L", "H", "空腹確認；後回落"],
    ["2025-11-14", "LDL", "3.48 mmol/L", "H", "首次超標；飲食運動後回落"],
  ];

  const visits = [
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
  ];

  function renderMetrics() {
    const root = document.getElementById("metrics-grid");
    root.innerHTML = highlights
      .map(
        (m) =>
          `<div class="metric"><div class="value">${m.value}</div><div class="label">${m.label}</div><div class="detail">${m.detail}</div></div>`
      )
      .join("");
  }

  function renderLatest() {
    document.getElementById("latest-body").innerHTML = latest
      .map(
        (r) =>
          `<tr><td>${r[0]}</td><td class="num">${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><span class="flag ${r[4]}">${r[4]}</span></td></tr>`
      )
      .join("");
  }

  function renderFlags() {
    document.getElementById("flags-body").innerHTML = flags
      .map(
        (r) =>
          `<tr><td>${r[0]}</td><td>${r[1]}</td><td class="num">${r[2]}</td><td><span class="flag ${r[3]}">${r[3]}</span></td><td>${r[4]}</td></tr>`
      )
      .join("");
  }

  function renderVisits() {
    document.getElementById("visits-body").innerHTML = visits
      .map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`)
      .join("");
  }

  function lineChart(canvasId, series, opts) {
    const ctx = document.getElementById(canvasId);
    if (!ctx || typeof Chart === "undefined") return;

    const datasets = [
      {
        label: opts.label,
        data: series.values,
        borderColor: opts.color || "#0d9488",
        backgroundColor: "rgba(13, 148, 136, 0.12)",
        tension: 0.25,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: false,
        borderWidth: 2.5,
      },
    ];

    if (opts.ref != null) {
      datasets.push({
        label: opts.refLabel || "參考線",
        data: series.labels.map(() => opts.ref),
        borderColor: "#f59e0b",
        borderDash: [6, 4],
        pointRadius: 0,
        fill: false,
        borderWidth: 1.5,
      });
    }
    if (opts.refLow != null) {
      datasets.push({
        label: opts.refLabel || "參考下限",
        data: series.labels.map(() => opts.refLow),
        borderColor: "#f59e0b",
        borderDash: [6, 4],
        pointRadius: 0,
        fill: false,
        borderWidth: 1.5,
      });
    }

    new Chart(ctx, {
      type: "line",
      data: { labels: series.labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: datasets.length > 1, labels: { boxWidth: 12 } },
          tooltip: { mode: "index", intersect: false },
        },
        scales: {
          y: {
            suggestedMin: opts.min,
            suggestedMax: opts.max,
            ticks: { color: "#64748b" },
            grid: { color: "rgba(148, 163, 184, 0.25)" },
          },
          x: {
            ticks: { color: "#64748b", maxRotation: 0 },
            grid: { display: false },
          },
        },
      },
    });
  }

  function boot() {
    renderMetrics();
    renderLatest();
    renderFlags();
    renderVisits();
    lineChart("chart-ldl", ldl, { label: "LDL", ref: ldl.ref, refLabel: "上限 3.4", min: 2, max: 4 });
    lineChart("chart-tc", tc, { label: "總膽固醇", ref: tc.ref, refLabel: "上限 5.2", min: 4, max: 6 });
    lineChart("chart-vitd", vitd, { label: "Vit D", refLow: vitd.refLow, refLabel: "下限 30", min: 10, max: 50, color: "#2563eb" });
    lineChart("chart-tsh", tsh, { label: "TSH", ref: tsh.ref, refLabel: "上限 4.0", min: 0, max: 6, color: "#7c3aed" });
    lineChart("chart-glu", glu, { label: "空腹血糖", min: 4, max: 7, color: "#0891b2" });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
