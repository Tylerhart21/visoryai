"use client";

import { useState } from "react";

type Inputs = Record<string, number>;

interface Results {
  leads: number;
  cases: number;
  grossRevenue: number;
  net: number;
  roi: number;
  cps: number;
  lpc: number | string;
  rps: string;
}

interface Range {
  min: number;
  max: number;
  step: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface Solution {
  id: string;
  num: string;
  name: string;
  blurb: string;
  defaults: Inputs;
  ranges: Record<string, Range>;
  compute: (i: Inputs) => Results;
  formula: (i: Inputs, r: Results) => string;
}

function nfmt(n: number) {
  return Number(n).toLocaleString("en-US");
}
function money(n: number) {
  return "$" + nfmt(Math.round(n));
}

const SOLUTIONS: Solution[] = [
  {
    id: "leads",
    num: "01",
    name: "Exclusive Leads",
    blurb: "Pay per lead. Budget ÷ CPL = leads. Your intake converts.",
    defaults: { budget: 50000, cpl: 300, conv: 10, fee: 12000 },
    ranges: {
      budget: { min: 10000, max: 500000, step: 1000, label: "Monthly Budget", prefix: "$" },
      cpl: { min: 225, max: 600, step: 5, label: "Cost Per Lead", prefix: "$" },
      conv: { min: 5, max: 50, step: 1, label: "Intake Conversion", suffix: "%" },
      fee: { min: 1000, max: 150000, step: 1000, label: "Avg Attorney Fee Per Case", prefix: "$" },
    },
    compute: ({ budget, cpl, conv, fee }) => {
      const leads = Math.floor(budget / cpl);
      const cases = Math.round((leads * conv) / 100);
      const grossRevenue = cases * fee;
      const net = grossRevenue - budget;
      const roi = budget > 0 ? Math.round((net / budget) * 100) : 0;
      const cps = cases > 0 ? Math.round(budget / cases) : 0;
      const lpc = cases > 0 ? Math.round(leads / cases) : 0;
      const rps = budget > 0 ? (grossRevenue / budget).toFixed(2) : "0.00";
      return { leads, cases, grossRevenue, net, roi, cps, lpc, rps };
    },
    formula: (i, r) =>
      `$${nfmt(i.budget)} ÷ $${i.cpl} CPL = ${r.leads} leads × ${i.conv}% = ${r.cases} signed cases`,
  },
  {
    id: "transfers",
    num: "02",
    name: "Live Transfers",
    blurb: "Fully pre-qualified. 3-layer screening. 25–50% conversion.",
    defaults: { budget: 50000, cpt: 950, conv: 35, fee: 12000 },
    ranges: {
      budget: { min: 10000, max: 500000, step: 1000, label: "Monthly Budget", prefix: "$" },
      cpt: { min: 600, max: 1800, step: 25, label: "Cost Per Transfer", prefix: "$" },
      conv: { min: 25, max: 50, step: 1, label: "Live-Transfer Conversion", suffix: "%" },
      fee: { min: 1000, max: 150000, step: 1000, label: "Avg Attorney Fee Per Case", prefix: "$" },
    },
    compute: ({ budget, cpt, conv, fee }) => {
      const leads = Math.floor(budget / cpt);
      const cases = Math.round((leads * conv) / 100);
      const grossRevenue = cases * fee;
      const net = grossRevenue - budget;
      const roi = budget > 0 ? Math.round((net / budget) * 100) : 0;
      const cps = cases > 0 ? Math.round(budget / cases) : 0;
      const lpc = cases > 0 ? (leads / cases).toFixed(1) : 0;
      const rps = budget > 0 ? (grossRevenue / budget).toFixed(2) : "0.00";
      return { leads, cases, grossRevenue, net, roi, cps, lpc, rps };
    },
    formula: (i, r) =>
      `$${nfmt(i.budget)} ÷ $${i.cpt} CPT = ${r.leads} transfers × ${i.conv}% = ${r.cases} signed cases`,
  },
  {
    id: "retainers",
    num: "03",
    name: "Signed Retainers",
    blurb: "Already signed. Medically validated. No conversion needed.",
    defaults: { budget: 60000, cpr: 2400, fee: 12000 },
    ranges: {
      budget: { min: 10000, max: 500000, step: 1000, label: "Monthly Budget", prefix: "$" },
      cpr: { min: 1500, max: 4500, step: 50, label: "Cost Per Retainer", prefix: "$" },
      fee: { min: 1000, max: 150000, step: 1000, label: "Avg Attorney Fee Per Case", prefix: "$" },
    },
    compute: ({ budget, cpr, fee }) => {
      const cases = Math.floor(budget / cpr);
      const leads = cases;
      const grossRevenue = cases * fee;
      const net = grossRevenue - budget;
      const roi = budget > 0 ? Math.round((net / budget) * 100) : 0;
      const cps = cases > 0 ? Math.round(budget / cases) : 0;
      const lpc = "1.0";
      const rps = budget > 0 ? (grossRevenue / budget).toFixed(2) : "0.00";
      return { leads, cases, grossRevenue, net, roi, cps, lpc, rps };
    },
    formula: (i, r) =>
      `$${nfmt(i.budget)} ÷ $${i.cpr} CPR = ${r.cases} signed retainers (no conversion needed)`,
  },
];

interface SliderRowProps {
  fieldKey: string;
  range: Range;
  value: number;
  onChange: (k: string, v: number) => void;
}

function SliderRow({ fieldKey, range, value, onChange }: SliderRowProps) {
  const display = Number(value).toLocaleString("en-US");
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, "");
    const n = raw === "" ? 0 : Number(raw);
    onChange(fieldKey, n);
  };
  return (
    <div style={{ marginBottom: 28 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 10,
        }}
      >
        <span
          style={{
            fontSize: 13,
            color: "var(--fg)",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          {range.label}
        </span>
        <span
          style={{ fontSize: 11, color: "var(--fg-dim)", fontFamily: "var(--mono)" }}
        >
          {range.prefix === "$" ? `$${nfmt(range.min)}` : nfmt(range.min)}
          {range.suffix || ""} –{" "}
          {range.prefix === "$" ? `$${nfmt(range.max)}` : nfmt(range.max)}
          {range.suffix || ""}
        </span>
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <input
          type="range"
          className="vs-slider"
          min={range.min}
          max={range.max}
          step={range.step}
          value={value}
          onChange={(e) => onChange(fieldKey, +e.target.value)}
          style={{ flex: 1 }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid var(--line)",
            height: 36,
          }}
        >
          {range.prefix && (
            <span
              style={{
                padding: "0 6px 0 12px",
                color: "var(--fg-dim)",
                fontFamily: "var(--mono)",
                fontSize: 12,
              }}
            >
              {range.prefix}
            </span>
          )}
          <input
            type="text"
            inputMode="numeric"
            className="num-input"
            style={{ border: 0, width: 96, padding: "6px 10px" }}
            value={display}
            onChange={handleTextChange}
          />
          {range.suffix && (
            <span
              style={{
                padding: "0 12px 0 0",
                color: "var(--fg-dim)",
                fontFamily: "var(--mono)",
                fontSize: 12,
              }}
            >
              {range.suffix}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

interface StatCellProps {
  label: string;
  value: string | number;
  tone?: string;
}

function StatCell({ label, value, tone }: StatCellProps) {
  const color =
    tone === "good"
      ? "var(--good)"
      : tone === "info"
        ? "var(--info)"
        : tone === "muted"
          ? "var(--fg)"
          : "var(--accent)";
  return (
    <div className={"calc-stat " + (tone || "")}>
      <div
        style={{
          fontSize: 9,
          color: "var(--fg-dim)",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          fontWeight: 500,
          marginBottom: 12,
          lineHeight: 1.3,
        }}
      >
        {label}
      </div>
      <div
        className="serif"
        style={{
          fontSize: 30,
          fontWeight: 300,
          color,
          lineHeight: 1,
          letterSpacing: "-0.01em",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export function CalculatorSection() {
  const [activeId, setActiveId] = useState("leads");
  const [allInputs, setAllInputs] = useState<Record<string, Inputs>>(() => {
    const init: Record<string, Inputs> = {};
    SOLUTIONS.forEach((s) => {
      init[s.id] = { ...s.defaults };
    });
    return init;
  });

  const sol = SOLUTIONS.find((s) => s.id === activeId) ?? SOLUTIONS[0];
  const inputs = allInputs[activeId];
  const results = sol.compute(inputs);

  const setInput = (k: string, v: number) => {
    const r = sol.ranges[k];
    if (r) v = Math.max(r.min, Math.min(r.max, v));
    setAllInputs((prev) => ({
      ...prev,
      [activeId]: { ...prev[activeId], [k]: v },
    }));
  };

  const scenarios = [10000, 25000, 50000, 75000, 100000, 150000, 250000, 500000];

  const roiRows: [string, string][] = [
    ["Monthly budget", money(inputs.budget)],
    [
      sol.id === "leads"
        ? "Cost per lead (CPL)"
        : sol.id === "transfers"
          ? "Cost per transfer (CPT)"
          : "Cost per retainer (CPR)",
      money(inputs.cpl || inputs.cpt || inputs.cpr),
    ],
    [
      sol.id === "retainers"
        ? "Retainers delivered (budget ÷ CPR)"
        : "Leads delivered (budget ÷ cost)",
      nfmt(results.leads),
    ],
    ...(sol.id === "retainers"
      ? ([["Conversion needed", "0% — already signed"]] as [string, string][])
      : ([
          [`Signed cases at ${inputs.conv}% conversion`, nfmt(results.cases)],
        ] as [string, string][])),
    [`Gross revenue at ${money(inputs.fee)} avg fee`, money(results.grossRevenue)],
    ["Net after budget spend", money(results.net)],
    ["Return on every $1 of budget", "$" + results.rps],
    ["ROI %", results.roi + "%"],
  ];

  return (
    <section
      id="calculator"
      className="section"
      style={{ background: "var(--bg-elev)" }}
    >
      <div className="container">
        <div
          className="reveal"
          style={{
            marginBottom: 56,
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 40,
            alignItems: "end",
          }}
        >
          <div>
            <div className="kicker-line">
              <span className="eyebrow">ROI Calculator</span>
            </div>
            <h2 className="display display-md" style={{ marginBottom: 16 }}>
              See exactly what your <em>budget buys.</em>
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "var(--fg-muted)",
                maxWidth: 640,
                margin: 0,
              }}
            >
              Pick a product, set your inputs, and see what your firm should
              expect in leads, cases, and revenue.
            </p>
          </div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--fg-dim)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Live · {sol.name}
          </div>
        </div>

        {/* Solution tabs */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            marginBottom: 40,
          }}
        >
          {SOLUTIONS.map((s) => (
            <button
              key={s.id}
              className={"sol-tab " + (s.id === activeId ? "active" : "")}
              onClick={() => setActiveId(s.id)}
            >
              <div className="sol-num" style={{ marginBottom: 6 }}>
                Solution · {s.num}
              </div>
              <div
                className="serif"
                style={{
                  fontSize: 22,
                  color: "var(--fg)",
                  fontWeight: 400,
                  marginBottom: 6,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.name}
              </div>
              <div
                style={{ fontSize: 12, color: "var(--fg-muted)", lineHeight: 1.5 }}
              >
                {s.blurb}
              </div>
            </button>
          ))}
        </div>

        {/* Inputs + Outputs */}
        <div
          className="reveal"
          style={{ border: "1px solid var(--line-soft)", background: "var(--bg)" }}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}
          >
            {/* Inputs */}
            <div
              style={{ padding: "36px 40px", borderRight: "1px solid var(--line-soft)" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 28,
                  paddingBottom: 16,
                  borderBottom: "1px solid var(--line-soft)",
                }}
              >
                <span className="eyebrow">{sol.name} — Inputs</span>
                <span
                  className="mono"
                  style={{ fontSize: 10, color: "var(--fg-dim)", letterSpacing: "0.18em" }}
                >
                  {Object.keys(sol.ranges).length} VARIABLES
                </span>
              </div>
              {Object.entries(sol.ranges).map(([k, r]) => (
                <SliderRow
                  key={k}
                  fieldKey={k}
                  range={r}
                  value={inputs[k]}
                  onChange={setInput}
                />
              ))}
            </div>

            {/* Outputs */}
            <div style={{ padding: "36px 40px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 28,
                  paddingBottom: 16,
                  borderBottom: "1px solid var(--line-soft)",
                }}
              >
                <span className="eyebrow">Expected Outcome</span>
                <span
                  className="mono"
                  style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.18em" }}
                >
                  ● LIVE
                </span>
              </div>

              {/* Formula bar */}
              <div
                style={{
                  background: "var(--bg-elev-2)",
                  border: "1px solid var(--line-soft)",
                  padding: "14px 18px",
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  color: "var(--accent)",
                  marginBottom: 24,
                  lineHeight: 1.6,
                  letterSpacing: "0.01em",
                }}
              >
                {sol.formula(inputs, results)}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 10,
                }}
              >
                <StatCell label="Leads / month" value={nfmt(results.leads)} />
                <StatCell
                  label="Signed Cases / month"
                  value={nfmt(results.cases)}
                />
                <StatCell
                  label="Cost Per Signed Case"
                  value={money(results.cps)}
                  tone="muted"
                />
                <StatCell
                  label="Leads Needed Per Case"
                  value={results.lpc}
                  tone="muted"
                />
                <StatCell
                  label="Gross Monthly Revenue"
                  value={money(results.grossRevenue)}
                  tone="good"
                />
                <StatCell
                  label="Monthly Net"
                  value={money(results.net)}
                  tone="good"
                />
                <StatCell label="ROI on Budget" value={results.roi + "%"} tone="info" />
                <StatCell
                  label="Revenue Per $1 Spent"
                  value={"$" + results.rps}
                  tone="info"
                />
              </div>
            </div>
          </div>

          {/* Scenarios bar */}
          <div
            style={{ borderTop: "1px solid var(--line-soft)", padding: "28px 40px" }}
          >
            <div className="eyebrow-dim" style={{ marginBottom: 18 }}>
              Budget Scenarios at Current Inputs
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(8, 1fr)",
                gap: 8,
              }}
            >
              {scenarios.map((b) => {
                const r = sol.compute({ ...inputs, budget: b });
                const active = inputs.budget === b;
                return (
                  <button
                    key={b}
                    className={"tier-btn" + (active ? " active" : "")}
                    onClick={() => setInput("budget", b)}
                  >
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        color: active ? "var(--accent)" : "var(--fg-muted)",
                      }}
                    >
                      ${nfmt(b / 1000)}K/mo
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "var(--fg)",
                        marginTop: 4,
                        fontWeight: 400,
                      }}
                    >
                      {r.cases} cases
                    </div>
                    <div
                      style={{ fontSize: 11, color: "var(--fg-dim)", marginTop: 2 }}
                    >
                      {nfmt(r.leads)}{" "}
                      {sol.id === "retainers"
                        ? "retainers"
                        : sol.id === "transfers"
                          ? "transfers"
                          : "leads"}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ROI breakdown */}
          <div
            style={{ borderTop: "1px solid var(--line-soft)", padding: "28px 40px" }}
          >
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              ROI Breakdown
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0 56px",
              }}
            >
              {roiRows.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "14px 0",
                    borderBottom: "1px solid var(--line-soft)",
                  }}
                >
                  <span style={{ fontSize: 13, color: "var(--fg-muted)" }}>
                    {row[0]}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: "var(--fg)",
                      fontFamily: "var(--mono)",
                    }}
                  >
                    {row[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p
          style={{
            marginTop: 32,
            color: "var(--fg-dim)",
            fontSize: 14,
            lineHeight: 1.7,
            maxWidth: 760,
          }}
        >
          Most PI firms focus on cost per lead. But your{" "}
          <span style={{ color: "var(--accent)" }}>cost per signed case</span> is
          what actually controls your profit. A 20% reduction doesn&apos;t sound
          like much — until you see it compounded over a full year. That&apos;s
          what this calculator shows.
        </p>
      </div>
    </section>
  );
}
