export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Crown icon in rounded-square */}
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="logo-icon flex-shrink-0"
      >
        <defs>
          <linearGradient id="logo-bg" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1a1840" />
            <stop offset="100%" stopColor="#0b0a1e" />
          </linearGradient>
          <linearGradient id="logo-border" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c9a84c" />
            <stop offset="50%" stopColor="#f5d27a" />
            <stop offset="100%" stopColor="#c9a84c" />
          </linearGradient>
          <linearGradient id="logo-crown" x1="6" y1="10" x2="36" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f5d27a" />
            <stop offset="50%" stopColor="#c9a84c" />
            <stop offset="100%" stopColor="#e8c060" />
          </linearGradient>
          <linearGradient id="logo-jewel" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#f5d27a" />
          </linearGradient>
        </defs>

        {/* Background rounded square */}
        <rect x="1.5" y="1.5" width="39" height="39" rx="11" fill="url(#logo-bg)" stroke="url(#logo-border)" strokeWidth="1.5" />

        {/* Subtle inner glow */}
        <rect x="3" y="3" width="36" height="36" rx="9.5" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

        {/* Crown body — left slope */}
        <path
          d="M 8 30 L 8 18 L 14.5 23.5 L 21 11 L 27.5 23.5 L 34 18 L 34 30 Z"
          fill="url(#logo-crown)"
        />

        {/* Crown base bar */}
        <rect x="7" y="30" width="28" height="4.5" rx="2" fill="url(#logo-crown)" />

        {/* Jewel dots on crown points */}
        <circle cx="8"  cy="18" r="2.2" fill="url(#logo-jewel)" />
        <circle cx="21" cy="11" r="2.5" fill="url(#logo-jewel)" />
        <circle cx="34" cy="18" r="2.2" fill="url(#logo-jewel)" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none gap-0.5">
        <div className="flex items-baseline gap-1">
          <span className="gold-text font-black text-xl tracking-tight">Top</span>
          <span
            className="font-black text-xl tracking-tight"
            style={{
              background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            FR
          </span>
        </div>
        <span
          className="font-semibold tracking-widest uppercase"
          style={{ fontSize: "0.6rem", color: "rgba(232,232,240,0.5)", letterSpacing: "0.15em" }}
        >
          Plateformes
        </span>
      </div>
    </div>
  );
}
