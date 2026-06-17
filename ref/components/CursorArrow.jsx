export default function CursorArrow({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 12 15"
      style={{ display: "block", filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.5))" }}
    >
      <path d="M1 1 L1 12 L4 9 L6 13 L8 12 L6 8 L10 8 Z" fill="#fff" stroke="#000" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}
