export default function YouPill({ name = "You", color = "#1D9BF0" }) {
  return (
    <span
      style={{
        background: color,
        color: "#fff",
        fontWeight: 600,
        fontSize: 11,
        padding: "2px 7px",
        borderRadius: 4,
        fontFamily: "var(--sans)",
        letterSpacing: "0.01em",
        boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
        whiteSpace: "nowrap",
      }}
    >
      {name}
    </span>
  );
}
