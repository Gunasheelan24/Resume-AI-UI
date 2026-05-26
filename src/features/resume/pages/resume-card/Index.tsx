export default function ResumePreviewCard() {
  const skills = [
    { name: "Figma", pct: 95 },
    { name: "UX Research", pct: 88 },
    { name: "Leadership", pct: 76 },
  ];

  return (
    <div style={styles.card}>
      {/* ── Top bar ── */}
      <div style={styles.topBar}>
        <div style={styles.dots}>
          <span style={{ ...styles.dot, background: "#FF5F57" }} />
          <span style={{ ...styles.dot, background: "#FFBD2E" }} />
          <span style={{ ...styles.dot, background: "#28CA41" }} />
        </div>
        <span style={styles.barLabel}>RESUME PREVIEW</span>
      </div>

      {/* ── Body ── */}
      <div style={styles.body}>
        {/* Name + title */}
        <p style={styles.name}>Alexandra Chen</p>
        <p style={styles.jobTitle}>Senior Product Designer · San Francisco</p>

        {/* ATS keyword bars */}
        <p style={styles.sectionLabel}>ATS KEYWORD MATCH</p>
        <div style={styles.barList}>
          {skills.map((s) => (
            <div key={s.name} style={styles.barRow}>
              <span style={styles.barName}>{s.name}</span>
              <div style={styles.track}>
                <div style={{ ...styles.fill, width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Score box */}
        <div style={styles.scoreBox}>
          <div>
            <p style={styles.scoreLabel}>Overall ATS Score</p>
            <p style={styles.scoreNum}>
              94<span style={styles.scoreOf}>/100</span>
            </p>
          </div>
          <span style={styles.badge}>Excellent ↑</span>
        </div>
      </div>
    </div>
  );
}

/* ── Styles ── */
const C = {
  ink: "#1A1410",
  cream: "#F8F5F0",
  gold: "#C9963B",
  goldLight: "#F0D9A8",
  goldDark: "#8A6420",
  gray: "#6B6560",
  white: "#FFFFFF",
  greenBg: "#E8F5E3",
  greenText: "#3B6D11",
};

const styles = {
  card: {
    background: C.white,
    borderRadius: 16,
    border: `0.5px solid rgba(201,150,59,0.2)`,
    overflow: "hidden",
    boxShadow:
      "0 20px 60px rgba(26,20,16,0.08), 0 4px 16px rgba(26,20,16,0.06)",
    width: 420,
    fontFamily: "'DM Sans', sans-serif",
  },

  /* top bar */
  topBar: {
    background: C.ink,
    padding: "14px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dots: { display: "flex", gap: 6 },
  dot: { width: 10, height: 10, borderRadius: "50%", display: "inline-block" },
  barLabel: {
    fontSize: 11,
    letterSpacing: "1.4px",
    color: "rgba(248,245,240,0.45)",
  },

  /* body */
  body: { padding: "24px 24px 28px" },

  name: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 26,
    fontWeight: 700,
    color: C.ink,
    margin: "0 0 4px",
  },
  jobTitle: {
    fontSize: 13,
    color: C.gray,
    margin: "0 0 22px",
  },

  sectionLabel: {
    fontSize: 9,
    letterSpacing: "1.8px",
    color: C.gold,
    fontWeight: 500,
    margin: "0 0 12px",
  },

  /* bars */
  barList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 22,
  },
  barRow: { display: "flex", alignItems: "center", gap: 10 },
  barName: { fontSize: 13, color: C.gray, width: 90, flexShrink: 0 },
  track: {
    flex: 1,
    height: 6,
    background: C.goldLight,
    borderRadius: 3,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    background: C.gold,
    borderRadius: 3,
  },

  /* score box */
  scoreBox: {
    background: C.cream,
    borderRadius: 10,
    padding: "14px 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scoreLabel: { fontSize: 12, color: C.gray, margin: "0 0 4px" },
  scoreNum: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 28,
    fontWeight: 700,
    color: C.ink,
    margin: 0,
  },
  scoreOf: { fontSize: 14, color: C.gray, fontWeight: 400 },
  badge: {
    background: C.greenBg,
    color: C.greenText,
    fontSize: 12,
    fontWeight: 500,
    padding: "5px 12px",
    borderRadius: 6,
    letterSpacing: "0.3px",
  },
};
