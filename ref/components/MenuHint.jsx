export default function MenuHint() {
  return (
    <div
      style={{
        position: "fixed",
        left: 16,
        bottom: 16,
        zIndex: 50,
        background: "rgba(0,0,0,0.75)",
        color: "#fff",
        fontSize: 11,
        fontWeight: 400,
        padding: "4px 9px",
        borderRadius: 4,
        fontFamily: "var(--sans)",
        letterSpacing: "0.01em",
        backdropFilter: "blur(8px)",
      }}
    >
      Display a menu
    </div>
  );
}
