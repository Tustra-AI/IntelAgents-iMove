import { useState, useEffect } from "react";

const LOGO_B64 = "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";

const theme = {
  bg: "#F5F4F2",
  surface: "#FFFFFF",
  surfaceAlt: "#F0EFED",
  border: "#E2E0DB",
  borderLight: "#ECEAE6",
  charcoal: "#0D0D0D",
  slate: "#5C5A56",
  muted: "#9B9791",
  accent: "#9b8766",
  accentLight: "#F5F0E8",
  accentMid: "#C4A97D",
  sidebar: "#111110",
  sidebarBorder: "#2A2A28",
  sidebarText: "#E8E6E1",
  sidebarMuted: "#7A7872",
  sidebarActive: "#9b8766",
  sidebarActiveBg: "rgba(155,135,102,0.15)",
  green: "#3D6B4F",
  greenLight: "#EBF3EE",
  amber: "#8A6010",
  amberLight: "#FAF0DC",
  red: "#8B2635",
  redLight: "#F9ECED",
  shadow: "0 1px 3px rgba(13,13,13,0.06), 0 4px 16px rgba(13,13,13,0.04)",
  shadowMd: "0 2px 8px rgba(13,13,13,0.08), 0 8px 32px rgba(13,13,13,0.06)",
};

const data = {
  agency: "iMove Property",
  owner: "George",
  healthScore: 82,
  healthDelta: 6,
  week: "Week of March 4, 2026",
  signals: [
    { id: 1, status: "warning", title: "Lead response time has slipped", detail: "Up from 8m to 22m average this week", interpretation: "Likely to reduce viewing bookings by 15–20% if not corrected", impact: "£12k–£18k pipeline risk", action: "Set response SLA alerts for all incoming leads under 10 minutes", category: "Lead Signals" },
    { id: 2, status: "positive", title: "Zoopla leads outperforming Rightmove", detail: "2.1× stronger valuation-to-instruction conversion", interpretation: "Zoopla spend is delivering significantly higher quality intent", impact: "Reallocating 15% of budget could yield +£22k instructions", action: "Reallocate 15% of ad spend from Rightmove to Zoopla campaigns", category: "Marketing Signals" },
    { id: 3, status: "positive", title: "Pipeline ageing has improved", detail: "More deals moving to offer stage 18% faster", interpretation: "Agent follow-up consistency has strengthened this month", impact: "Forecast completions confidence increased", action: "Document and share the follow-up process that's working", category: "Pipeline Signals" },
  ],
  priorities: [
    { text: "Reduce lead response time to under 10 minutes", urgency: "high" },
    { text: "Reallocate 15% of ad spend from underperforming channels", urgency: "medium" },
    { text: "Review 12 at-risk listings with low enquiry activity", urgency: "medium" },
  ],
  forecast: {
    "30d": { completions: 7, revenue: "£84,000", confidence: 88 },
    "60d": { completions: 11, revenue: "£131,000", confidence: 71 },
    "90d": { completions: 16, revenue: "£192,000", confidence: 58 },
    narrative: "Revenue is likely to remain stable over the next 30 days, but weaker lead response and slower valuation conversion may reduce completions in the following 60-day window unless corrected within the next two weeks.",
  },
  leaks: [
    { title: "14 leads missed outside response windows", value: "£18k–£31k at risk" },
    { title: "Rightmove spend underperforming", value: "£3,200/mo inefficiency" },
    { title: "4 listings stalled with no new enquiries", value: "Review needed" },
  ],
  opportunities: [
    { title: "Weekend enquiries are under-served", description: "14 high-intent leads arrived outside core response windows last week.", value: "£18k–£31k pipeline value", action: "Trial a part-time weekend responder or automated acknowledgement", evidence: "Pattern observed across 3 consecutive weekends. Saturday 10am–1pm has highest unresponded volume.", pattern: "Saturday morning leads convert at 2.4× weekday rate when responded to within 30 minutes." },
    { title: "£300k–£500k price band converting fastest", description: "This bracket shows 34% faster time-to-offer than other bands.", value: "Priority marketing opportunity", action: "Increase listing investment and targeted advertising in this bracket", evidence: "6 of last 8 completions originated in this price range. Average days-to-offer: 19 vs 31 across portfolio.", pattern: "Buyer demand outpacing supply in this band. Current stock: 4 listings." },
    { title: "Chelsea branch outperforming by 40%", description: "Conversion rate and response speed significantly ahead of Kensington branch.", value: "Process replication opportunity", action: "Document Chelsea's lead handling process and implement agency-wide", evidence: "Chelsea: 68% lead-to-viewing rate. Kensington: 41%. Response time: 7m vs 24m.", pattern: "Chelsea agent team averages 3.2 follow-up touches vs 1.4 at Kensington." },
    { title: "Zoopla source dramatically under-funded", description: "Highest quality lead source receiving only 22% of total portal budget.", value: "+£22k additional instructions projected", action: "Increase Zoopla allocation to at least 40% of portal spend", evidence: "Zoopla cost-per-instruction: £340. Rightmove: £890. Instruction quality score: 8.2 vs 5.1.", pattern: "Every £1,000 additional spend on Zoopla yields 2.9 instructions vs 1.1 on Rightmove." },
  ],
  reports: [
    { week: "Week of March 4", health: 82, risk: "Lead response slippage", opportunity: "Zoopla outperformance", forecast: "stable" },
    { week: "Week of February 26", health: 76, risk: "4 stalled pipeline deals", opportunity: "Price band concentration", forecast: "improving" },
    { week: "Week of February 19", health: 79, risk: "Marketing spend waste", opportunity: "Weekend lead volume", forecast: "stable" },
    { week: "Week of February 12", health: 74, risk: "Agent response variance", opportunity: "Chelsea branch model", forecast: "soft" },
  ],
  pipelineSignals: [
    { label: "Deal velocity", value: "+18%", status: "positive", detail: "Deals moving to offer stage faster than prior 4-week average" },
    { label: "Ageing by stage", value: "4 deals", status: "warning", detail: "4 deals stalled in 'Under Offer' for more than 21 days" },
    { label: "Fall-through risk", value: "Low", status: "positive", detail: "No deals flagged at elevated risk this week" },
  ],
  leadSignals: [
    { label: "Response speed", value: "22m avg", status: "critical", detail: "Up from 8m. Target is under 10 minutes." },
    { label: "Follow-up consistency", value: "61%", status: "warning", detail: "39% of leads received fewer than 2 follow-up touches" },
    { label: "Source quality", value: "Zoopla #1", status: "positive", detail: "Zoopla leads converting at 2.1× Rightmove rate" },
    { label: "Uncontacted leads", value: "7 leads", status: "critical", detail: "7 leads received zero contact in the past 48 hours" },
  ],
  marketingSignals: [
    { label: "CPL trend", value: "£42 avg", status: "stable", detail: "Flat vs last week. Zoopla CPL declining, Rightmove rising." },
    { label: "Source to instruction", value: "Zoopla 2.1×", status: "positive", detail: "Significant outperformance vs Rightmove" },
    { label: "Wasted spend", value: "£3,200/mo", status: "warning", detail: "Rightmove budget generating low-intent enquiries" },
  ],
};

function useAnimatedNumber(target, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);
  return value;
}

const StatusPill = ({ label, status }) => {
  const colors = {
    positive: { bg: theme.greenLight, text: theme.green, dot: theme.green },
    warning: { bg: theme.amberLight, text: theme.amber, dot: theme.amber },
    critical: { bg: theme.redLight, text: theme.red, dot: theme.red },
    stable: { bg: theme.accentLight, text: theme.accent, dot: theme.accent },
  };
  const c = colors[status] || colors.stable;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 11px", borderRadius: 20, background: c.bg, color: c.text, fontSize: 12, fontWeight: 500 }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: c.dot, display: "inline-block", flexShrink: 0 }} />
      {label}
    </div>
  );
};

const Card = ({ children, style = {}, onClick }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: theme.surface, borderRadius: 14, border: `1px solid ${theme.border}`, boxShadow: hov ? theme.shadowMd : theme.shadow, transition: "all 0.18s ease", transform: hov && onClick ? "translateY(-1px)" : "none", cursor: onClick ? "pointer" : "default", ...style }}>
      {children}
    </div>
  );
};

const NavItem = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 9, border: "none", background: active ? theme.sidebarActiveBg : "transparent", color: active ? theme.sidebarActive : theme.sidebarMuted, fontFamily: "inherit", fontSize: 13.5, fontWeight: active ? 600 : 400, cursor: "pointer", width: "100%", textAlign: "left", transition: "all 0.15s ease", letterSpacing: "0.01em" }}>
    <span style={{ fontSize: 15, opacity: active ? 1 : 0.6 }}>{icon}</span>
    {label}
  </button>
);

function SignalDetailModal({ signal, onClose }) {
  useEffect(() => {
    const h = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(13,13,13,0.45)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }} onClick={onClose}>
      <div style={{ background: theme.surface, borderRadius: 18, padding: 36, maxWidth: 540, width: "100%", boxShadow: "0 8px 48px rgba(13,13,13,0.18)", border: `1px solid ${theme.border}` }} onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: theme.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>{signal.category}</span>
          <button onClick={onClose} style={{ border: "none", background: "none", cursor: "pointer", color: theme.muted, fontSize: 22, lineHeight: 1, padding: 0 }}>×</button>
        </div>
        <div style={{ fontSize: 19, fontWeight: 700, color: theme.charcoal, marginBottom: 8, letterSpacing: "-0.02em" }}>{signal.title}</div>
        <div style={{ fontSize: 14, color: theme.slate, marginBottom: 24 }}>{signal.detail}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
          {[{ label: "Why it matters", value: signal.interpretation }, { label: "Likely impact", value: signal.impact }].map((item, i) => (
            <div key={i} style={{ background: theme.bg, borderRadius: 10, padding: 15, border: `1px solid ${theme.borderLight}` }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: theme.muted, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 7 }}>{item.label}</div>
              <div style={{ fontSize: 13, color: theme.charcoal, lineHeight: 1.55 }}>{item.value}</div>
            </div>
          ))}
        </div>
        <div style={{ background: theme.accentLight, borderRadius: 10, padding: 16, border: `1px solid ${theme.accent}30` }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: theme.accent, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 8 }}>Recommended action</div>
          <div style={{ fontSize: 14, color: theme.charcoal, fontWeight: 500, lineHeight: 1.6 }}>{signal.action}</div>
        </div>
      </div>
    </div>
  );
}

function OverviewScreen({ onSignalClick }) {
  const score = useAnimatedNumber(data.healthScore);
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 80); }, []);
  const chartPoints = [62, 71, 68, 76, 74, 82];
  const w = 300, h = 72;
  const pts = chartPoints.map((v, i) => `${(i / (chartPoints.length - 1)) * w},${h - ((v - 50) / 50) * h}`).join(" ");

  return (
    <div style={{ opacity: vis ? 1 : 0, transition: "opacity 0.45s ease" }}>
      <div style={{ marginBottom: 30 }}>
        <div style={{ fontSize: 26, fontWeight: 300, color: theme.charcoal, marginBottom: 5, letterSpacing: "-0.025em" }}>Good morning, <strong style={{ fontWeight: 700 }}>{data.owner}</strong></div>
        <div style={{ fontSize: 14, color: theme.slate }}>Here's what matters in your agency this week.</div>
      </div>

      {/* Health */}
      <Card style={{ padding: 28, marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: theme.muted, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 10 }}>Agency Health</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ fontSize: 54, fontWeight: 700, color: theme.charcoal, letterSpacing: "-0.04em", lineHeight: 1 }}>{score}</span>
              <span style={{ fontSize: 18, color: theme.muted, fontWeight: 300 }}>/100</span>
            </div>
            <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
              <span style={{ fontSize: 13, color: theme.green, fontWeight: 500 }}>↑ {data.healthDelta} pts from last week</span>
              <span style={{ fontSize: 13, color: theme.muted }}>· Low operational risk</span>
            </div>
          </div>
          <svg width={w} height={h + 10} viewBox={`0 0 ${w} ${h + 10}`} style={{ overflow: "visible" }}>
            <defs>
              <linearGradient id="lineG" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={theme.accent} stopOpacity="0.25" />
                <stop offset="100%" stopColor={theme.accent} stopOpacity="1" />
              </linearGradient>
            </defs>
            <polyline points={pts} fill="none" stroke="url(#lineG)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {chartPoints.map((v, i) => i === chartPoints.length - 1 ? <circle key={i} cx={(i / (chartPoints.length - 1)) * w} cy={h - ((v - 50) / 50) * h} r={4.5} fill={theme.accent} /> : null)}
          </svg>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <StatusPill label="Pipeline  ↑ +18%" status="positive" />
          <StatusPill label="Lead handling  ↓ slipping" status="warning" />
          <StatusPill label="Conversion  ↑ +4%" status="positive" />
          <StatusPill label="Marketing efficiency  –" status="warning" />
        </div>
      </Card>

      {/* Signals */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: theme.muted, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 12 }}>3 things you should know</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          {data.signals.map(s => {
            const iconColor = s.status === "positive" ? theme.green : s.status === "warning" ? theme.amber : theme.red;
            const iconBg = s.status === "positive" ? theme.greenLight : s.status === "warning" ? theme.amberLight : theme.redLight;
            const icon = s.status === "positive" ? "↑" : "⚠";
            return (
              <Card key={s.id} onClick={() => onSignalClick(s)} style={{ padding: 18 }}>
                <div style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
                  <div style={{ width: 30, height: 30, borderRadius: 7, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", color: iconColor, fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: theme.charcoal, marginBottom: 3 }}>{s.title}</div>
                    <div style={{ fontSize: 12.5, color: theme.slate, marginBottom: 3 }}>{s.detail}</div>
                    <div style={{ fontSize: 12, color: theme.muted, fontStyle: "italic" }}>{s.interpretation}</div>
                  </div>
                  <span style={{ color: theme.muted, fontSize: 17 }}>›</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Priorities */}
      <Card style={{ padding: 22, marginBottom: 18 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: theme.muted, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 15 }}>Recommended actions</div>
        {data.priorities.map((p, i) => (
          <div key={i} style={{ display: "flex", gap: 13, alignItems: "flex-start", marginBottom: i < data.priorities.length - 1 ? 13 : 0 }}>
            <div style={{ width: 20, height: 20, borderRadius: 5, border: `1.5px solid ${p.urgency === "high" ? theme.accent : theme.border}`, flexShrink: 0, marginTop: 1 }} />
            <div>
              <div style={{ fontSize: 13.5, color: theme.charcoal, fontWeight: 500 }}>{p.text}</div>
              {p.urgency === "high" && <div style={{ fontSize: 11.5, color: theme.accent, marginTop: 2, fontWeight: 600 }}>Priority this week</div>}
            </div>
          </div>
        ))}
      </Card>

      {/* Revenue + Leaks */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <Card style={{ padding: 22 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: theme.muted, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 15 }}>Revenue outlook</div>
          {[{ label: "Next 30 days", ...data.forecast["30d"] }, { label: "Next 60 days", ...data.forecast["60d"] }].map((r, i) => (
            <div key={i} style={{ marginBottom: i === 0 ? 14 : 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <span style={{ fontSize: 11.5, color: theme.muted }}>{r.label}</span>
                <span style={{ fontSize: 11.5, color: theme.muted }}>{r.confidence}% confidence</span>
              </div>
              <div style={{ fontSize: 19, fontWeight: 700, color: theme.charcoal, letterSpacing: "-0.025em" }}>{r.revenue}</div>
              <div style={{ height: 3, background: theme.borderLight, borderRadius: 2, marginTop: 7 }}>
                <div style={{ height: "100%", width: `${r.confidence}%`, background: r.confidence > 80 ? theme.green : theme.accent, borderRadius: 2, transition: "width 1.2s ease" }} />
              </div>
            </div>
          ))}
        </Card>
        <Card style={{ padding: 22 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: theme.muted, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 15 }}>Revenue leaks</div>
          {data.leaks.map((l, i) => (
            <div key={i} style={{ marginBottom: i < data.leaks.length - 1 ? 13 : 0 }}>
              <div style={{ fontSize: 13, color: theme.charcoal, fontWeight: 500, marginBottom: 2 }}>{l.title}</div>
              <div style={{ fontSize: 12, color: theme.red, fontWeight: 500 }}>{l.value}</div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

function SignalsScreen() {
  const groups = [
    { title: "Pipeline signals", signals: data.pipelineSignals },
    { title: "Lead signals", signals: data.leadSignals },
    { title: "Marketing signals", signals: data.marketingSignals },
    { title: "Agent signals", signals: [
      { label: "Speed to response", value: "Chelsea 7m · Kensington 24m", status: "warning", detail: "Significant variance between branches." },
      { label: "Conversion variance", value: "68% vs 41%", status: "warning", detail: "Chelsea: 68% lead-to-viewing. Kensington: 41%." },
      { label: "Follow-up touches", value: "3.2 vs 1.4 avg", status: "warning", detail: "Average follow-up contacts per lead by branch." },
    ]},
  ];
  return (
    <div>
      <div style={{ marginBottom: 26 }}>
        <div style={{ fontSize: 21, fontWeight: 700, color: theme.charcoal, letterSpacing: "-0.02em", marginBottom: 5 }}>Signals</div>
        <div style={{ fontSize: 14, color: theme.slate }}>Everything the system is monitoring this week.</div>
      </div>
      {groups.map((g, gi) => (
        <div key={gi} style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: theme.muted, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 11 }}>{g.title}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {g.signals.map((s, si) => (
              <Card key={si} style={{ padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: theme.charcoal }}>{s.label}</span>
                  <StatusPill label={s.value} status={s.status} />
                </div>
                <div style={{ fontSize: 13, color: theme.slate }}>{s.detail}</div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ForecastScreen() {
  const [period, setPeriod] = useState("30d");
  const f = data.forecast[period];
  const chartData = [60, 68, 72, 78, 74, 82, 84];
  const w = 520, h = 130;
  const toY = v => h - ((v - 50) / 55) * h;
  const toX = (i, len) => (i / (len - 1)) * w;
  const midPts = chartData.map((v, i) => `${toX(i, chartData.length)},${toY(v)}`).join(" ");
  const highPts = chartData.map((v, i) => `${toX(i, chartData.length)},${toY(v + 14)}`).join(" ");
  const lowPts = [...chartData].map((v, i) => `${toX(chartData.length - 1 - i, chartData.length)},${toY(chartData[chartData.length - 1 - i] - 12)}`).join(" ");

  return (
    <div>
      <div style={{ marginBottom: 26 }}>
        <div style={{ fontSize: 21, fontWeight: 700, color: theme.charcoal, letterSpacing: "-0.02em", marginBottom: 5 }}>Revenue Forecast</div>
        <div style={{ fontSize: 14, color: theme.slate }}>Forward-looking revenue and completion projections.</div>
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 22 }}>
        {[["30d", "Next 30 days"], ["60d", "Next 60 days"], ["90d", "Next 90 days"]].map(([key, label]) => (
          <button key={key} onClick={() => setPeriod(key)} style={{ padding: "7px 16px", borderRadius: 9, border: `1.5px solid ${period === key ? theme.accent : theme.border}`, background: period === key ? theme.accentLight : theme.surface, color: period === key ? theme.accent : theme.slate, fontSize: 13, fontWeight: period === key ? 600 : 400, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s ease" }}>{label}</button>
        ))}
      </div>
      <Card style={{ padding: 26, marginBottom: 18 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, marginBottom: 26 }}>
          {[{ label: "Expected completions", value: f.completions, sub: "sales" }, { label: "Forecast revenue", value: f.revenue }, { label: "Confidence", value: `${f.confidence}%` }].map((m, i) => (
            <div key={i}>
              <div style={{ fontSize: 10.5, fontWeight: 600, color: theme.muted, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 7 }}>{m.label}</div>
              <div style={{ fontSize: 26, fontWeight: 700, color: theme.charcoal, letterSpacing: "-0.03em" }}>{m.value}</div>
              {m.sub && <div style={{ fontSize: 11.5, color: theme.muted }}>{m.sub}</div>}
            </div>
          ))}
        </div>
        <svg width="100%" viewBox={`-8 -8 ${w + 16} ${h + 16}`} style={{ display: "block" }}>
          <defs>
            <linearGradient id="bandG" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={theme.accent} stopOpacity="0.14" />
              <stop offset="100%" stopColor={theme.accent} stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <polygon points={`${highPts} ${lowPts}`} fill="url(#bandG)" />
          <polyline points={midPts} fill="none" stroke={theme.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={period === "90d" ? "6,4" : "none"} />
          {chartData.map((v, i) => <circle key={i} cx={toX(i, chartData.length)} cy={toY(v)} r={3} fill={theme.accent} />)}
        </svg>
      </Card>
      <Card style={{ padding: 22, marginBottom: 18, borderLeft: `3px solid ${theme.accent}` }}>
        <div style={{ fontSize: 10.5, fontWeight: 600, color: theme.accent, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 9 }}>Analyst note</div>
        <div style={{ fontSize: 14, color: theme.charcoal, lineHeight: 1.72, fontStyle: "italic" }}>{data.forecast.narrative}</div>
      </Card>
      <div style={{ fontSize: 11, fontWeight: 600, color: theme.muted, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 12 }}>Forecast drivers</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11 }}>
        {[{ label: "Lead quality", trend: "Softening", status: "warning", note: "Response time decline reducing lead quality score" }, { label: "Valuation trend", trend: "Stable", status: "stable", note: "Valuations steady at 14/week average" }, { label: "Instruction pipeline", trend: "Improving", status: "positive", note: "Zoopla performance driving stronger instructions" }, { label: "Offer progression", trend: "Strong", status: "positive", note: "Deal velocity up 18% on prior period" }].map((d, i) => (
          <Card key={i} style={{ padding: 18 }}>
            <div style={{ fontSize: 12, color: theme.muted, marginBottom: 6 }}>{d.label}</div>
            <div style={{ marginBottom: 7 }}><StatusPill label={d.trend} status={d.status} /></div>
            <div style={{ fontSize: 12.5, color: theme.slate }}>{d.note}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function OpportunitiesScreen() {
  const [sel, setSel] = useState(null);
  return (
    <div>
      <div style={{ marginBottom: 26 }}>
        <div style={{ fontSize: 21, fontWeight: 700, color: theme.charcoal, letterSpacing: "-0.02em", marginBottom: 5 }}>Opportunities</div>
        <div style={{ fontSize: 14, color: theme.slate }}>Where growth can be unlocked this quarter.</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {data.opportunities.map((opp, i) => (
          <Card key={i} onClick={() => setSel(sel === i ? null : i)} style={{ padding: 22 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
                  <div style={{ width: 26, height: 26, borderRadius: 6, background: theme.greenLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: theme.green, fontWeight: 700 }}>↑</div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: theme.charcoal }}>{opp.title}</span>
                </div>
                <div style={{ fontSize: 13, color: theme.slate, marginBottom: 8 }}>{opp.description}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: theme.green }}>{opp.value}</div>
              </div>
              <span style={{ fontSize: 17, color: theme.muted, transform: sel === i ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}>›</span>
            </div>
            {sel === i && (
              <div style={{ marginTop: 18, paddingTop: 18, borderTop: `1px solid ${theme.border}` }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                  {[{ label: "Evidence", value: opp.evidence }, { label: "Observed pattern", value: opp.pattern }].map((item, j) => (
                    <div key={j} style={{ background: theme.bg, borderRadius: 9, padding: 14 }}>
                      <div style={{ fontSize: 10, fontWeight: 600, color: theme.muted, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 7 }}>{item.label}</div>
                      <div style={{ fontSize: 12.5, color: theme.charcoal, lineHeight: 1.55 }}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: theme.accentLight, borderRadius: 9, padding: 14, border: `1px solid ${theme.accent}25` }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: theme.accent, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 7 }}>Recommended action</div>
                  <div style={{ fontSize: 13.5, color: theme.charcoal, fontWeight: 500 }}>{opp.action}</div>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

function ReportsScreen() {
  const [open, setOpen] = useState(null);
  if (open !== null) {
    const r = data.reports[open];
    return (
      <div>
        <button onClick={() => setOpen(null)} style={{ border: "none", background: "none", cursor: "pointer", color: theme.accent, fontSize: 13.5, fontWeight: 600, marginBottom: 22, padding: 0, fontFamily: "inherit" }}>← Back to reports</button>
        <div style={{ fontSize: 21, fontWeight: 700, color: theme.charcoal, marginBottom: 3 }}>{r.week}</div>
        <div style={{ fontSize: 13, color: theme.muted, marginBottom: 26 }}>Executive Intelligence Brief · iMove Property</div>
        <Card style={{ padding: 26, marginBottom: 14 }}>
          <div style={{ fontSize: 10.5, fontWeight: 600, color: theme.muted, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 10 }}>Agency health</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 10 }}>
            <span style={{ fontSize: 46, fontWeight: 700, color: theme.charcoal, letterSpacing: "-0.04em" }}>{r.health}</span>
            <span style={{ fontSize: 17, color: theme.muted }}>/100</span>
          </div>
          <StatusPill label={r.forecast === "improving" ? "Improving" : r.forecast === "stable" ? "Stable" : "Softening"} status={r.forecast === "improving" ? "positive" : r.forecast === "stable" ? "stable" : "warning"} />
        </Card>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11, marginBottom: 14 }}>
          <Card style={{ padding: 20 }}>
            <div style={{ fontSize: 10.5, fontWeight: 600, color: theme.red, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 8 }}>Critical signal</div>
            <div style={{ fontSize: 13.5, color: theme.charcoal, fontWeight: 500 }}>{r.risk}</div>
          </Card>
          <Card style={{ padding: 20 }}>
            <div style={{ fontSize: 10.5, fontWeight: 600, color: theme.green, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 8 }}>Top opportunity</div>
            <div style={{ fontSize: 13.5, color: theme.charcoal, fontWeight: 500 }}>{r.opportunity}</div>
          </Card>
        </div>
        <Card style={{ padding: 20, borderLeft: `3px solid ${theme.accent}` }}>
          <div style={{ fontSize: 10.5, fontWeight: 600, color: theme.accent, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 8 }}>Executive summary</div>
          <div style={{ fontSize: 13.5, color: theme.charcoal, lineHeight: 1.7 }}>This week's brief reflects a {r.forecast} operational outlook for {r.week.toLowerCase()}. The agency's primary focus should be on {r.risk.toLowerCase()}, while the emerging opportunity in {r.opportunity.toLowerCase()} warrants structured action.</div>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <div style={{ marginBottom: 26 }}>
        <div style={{ fontSize: 21, fontWeight: 700, color: theme.charcoal, letterSpacing: "-0.02em", marginBottom: 5 }}>Reports</div>
        <div style={{ fontSize: 14, color: theme.slate }}>Weekly executive intelligence briefs.</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        {data.reports.map((r, i) => (
          <Card key={i} onClick={() => setOpen(i)} style={{ padding: 22 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 11 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: theme.charcoal }}>{r.week}</span>
                  <StatusPill label={r.forecast === "improving" ? "Improving" : r.forecast === "stable" ? "Stable" : "Softening"} status={r.forecast === "improving" ? "positive" : r.forecast === "stable" ? "stable" : "warning"} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: 18 }}>
                  <div>
                    <div style={{ fontSize: 11, color: theme.muted, marginBottom: 3 }}>Health</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: theme.charcoal }}>{r.health}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: theme.muted, marginBottom: 3 }}>Biggest risk</div>
                    <div style={{ fontSize: 13, color: theme.charcoal, fontWeight: 500 }}>{r.risk}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: theme.muted, marginBottom: 3 }}>Top opportunity</div>
                    <div style={{ fontSize: 13, color: theme.charcoal, fontWeight: 500 }}>{r.opportunity}</div>
                  </div>
                </div>
              </div>
              <span style={{ fontSize: 17, color: theme.muted }}>›</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function IntegrationsScreen() {
  const integrations = [
    { name: "CRM", sub: "Apex CRM", status: "connected" },
    { name: "Google Ads", sub: "ads.google.com", status: "connected" },
    { name: "Meta Ads", sub: "Facebook & Instagram", status: "connected" },
    { name: "Google Analytics", sub: "GA4 Property", status: "connected" },
    { name: "Rightmove", sub: "Portal feed", status: "syncing" },
    { name: "Zoopla", sub: "Portal feed", status: "connected" },
    { name: "Google Business", sub: "Business Profile", status: "attention" },
  ];
  const sc = { connected: { color: theme.green, bg: theme.greenLight, label: "Connected" }, syncing: { color: theme.amber, bg: theme.amberLight, label: "Syncing" }, attention: { color: theme.red, bg: theme.redLight, label: "Needs attention" } };
  return (
    <div>
      <div style={{ marginBottom: 26 }}>
        <div style={{ fontSize: 21, fontWeight: 700, color: theme.charcoal, letterSpacing: "-0.02em", marginBottom: 5 }}>Integrations</div>
        <div style={{ fontSize: 14, color: theme.slate }}>Connected data sources powering your intelligence.</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11 }}>
        {integrations.map((int, i) => {
          const s = sc[int.status];
          return (
            <Card key={i} style={{ padding: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: 11, alignItems: "center" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: theme.surfaceAlt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: theme.accent }}>◈</div>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: theme.charcoal }}>{int.name}</div>
                    <div style={{ fontSize: 11.5, color: theme.muted }}>{int.sub}</div>
                  </div>
                </div>
                <div style={{ padding: "3px 10px", borderRadius: 10, background: s.bg, color: s.color, fontSize: 11, fontWeight: 600 }}>{s.label}</div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default function IntelAgents() {
  const [screen, setScreen] = useState("overview");
  const [selSignal, setSelSignal] = useState(null);

  const nav = [
    { key: "overview", icon: "◈", label: "Overview" },
    { key: "signals", icon: "◎", label: "Signals" },
    { key: "forecast", icon: "⬡", label: "Forecast" },
    { key: "opportunities", icon: "↑", label: "Opportunities" },
    { key: "reports", icon: "☰", label: "Reports" },
    { key: "integrations", icon: "⬢", label: "Integrations" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: theme.bg, fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #D0CEC9; border-radius: 3px; }
      `}</style>

      {/* Topbar */}
      <div style={{ background: theme.sidebar, borderBottom: `1px solid ${theme.sidebarBorder}`, padding: "0 28px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* iMove Logo */}
          <img src={`data:image/png;base64,${LOGO_B64}`} alt="iMove Property" style={{ height: 34, width: "auto", objectFit: "contain" }} />
          <div style={{ width: 1, height: 22, background: theme.sidebarBorder }} />
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", lineHeight: 1.2 }}>
              <span style={{ color: theme.accent }}>INTEL</span><span style={{ color: "#E8E6E1" }}>AGENTS</span>
            </div>
            <div style={{ fontSize: 10, color: theme.sidebarMuted, letterSpacing: "0.04em" }}>Operational intelligence</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ fontSize: 12.5, color: theme.sidebarMuted }}>{data.week}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4CAF7D", animation: "pulse 2.5s infinite" }} />
            <span style={{ fontSize: 12, color: "#4CAF7D", fontWeight: 500 }}>Live</span>
          </div>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: theme.sidebarActiveBg, border: `1.5px solid ${theme.accent}50`, display: "flex", alignItems: "center", justifyContent: "center", color: theme.accent, fontSize: 12, fontWeight: 700 }}>GS</div>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <div style={{ width: 210, background: theme.sidebar, borderRight: `1px solid ${theme.sidebarBorder}`, padding: "22px 12px 22px", position: "sticky", top: 60, height: "calc(100vh - 60px)", display: "flex", flexDirection: "column", overflowY: "auto" }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: theme.sidebarMuted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10, paddingLeft: 14 }}>Navigation</div>
          <nav style={{ flex: 1 }}>
            {nav.map(item => (
              <div key={item.key} style={{ marginBottom: 2 }}>
                <NavItem icon={item.icon} label={item.label} active={screen === item.key} onClick={() => setScreen(item.key)} />
              </div>
            ))}
          </nav>
          <div style={{ paddingTop: 18, borderTop: `1px solid ${theme.sidebarBorder}` }}>
            <div style={{ fontSize: 10, color: theme.sidebarMuted, textAlign: "center", lineHeight: 1.6 }}>
              Powered by Tustra<br />
              <span style={{ color: theme.accent }}>iMove Property</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: "34px 44px", maxWidth: 860, overflowY: "auto" }}>
          {screen === "overview" && <OverviewScreen onSignalClick={setSelSignal} />}
          {screen === "signals" && <SignalsScreen />}
          {screen === "forecast" && <ForecastScreen />}
          {screen === "opportunities" && <OpportunitiesScreen />}
          {screen === "reports" && <ReportsScreen />}
          {screen === "integrations" && <IntegrationsScreen />}
        </div>
      </div>

      {selSignal && <SignalDetailModal signal={selSignal} onClose={() => setSelSignal(null)} />}
    </div>
  );
}
