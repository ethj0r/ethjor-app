export default function VerifiedBadge({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#1D9BF0"
        d="M12 1.5l2.3 2.1 3.1-.4.8 3 2.8 1.4-.8 3 1.8 2.6-1.8 2.6.8 3-2.8 1.4-.8 3-3.1-.4L12 22.5l-2.3-2.1-3.1.4-.8-3-2.8-1.4.8-3L2 10.8l1.8-2.6-.8-3 2.8-1.4.8-3 3.1.4L12 1.5z"
      />
      <path d="M7.5 12.2l3 3 6-6.4" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
