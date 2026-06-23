export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 0 C10 5.5 10.5 6 16 6 C10.5 6 10 6.5 10 12 C10 6.5 9.5 6 4 6 C9.5 6 10 5.5 10 0Z"
        stroke="currentColor"
        strokeWidth="0.75"
      />
    </svg>
  );
}

export function OrbitScribble({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="220"
      height="60"
      viewBox="0 0 220 60"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M4 36C40 8 160 -6 214 22C190 46 56 58 4 36Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
    </svg>
  );
}
