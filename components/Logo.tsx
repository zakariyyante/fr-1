export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon: Award/podium mark in rounded square */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="logo-icon flex-shrink-0"
      >
        <defs>
          <linearGradient id="lb" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e1a42" />
            <stop offset="100%" stopColor="#0b0920" />
          </linearGradient>
          <linearGradient id="lborder" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c9a84c" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#c9a84c" />
          </linearGradient>
          <linearGradient id="lgold" x1="8" y1="32" x2="36" y2="8" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c9a84c" />
            <stop offset="50%" stopColor="#f5d27a" />
            <stop offset="100%" stopColor="#fef3c7" />
          </linearGradient>
          <linearGradient id="lpurp" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6" />
          </linearGradient>
          <filter id="lglow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect x="1.5" y="1.5" width="41" height="41" rx="12" fill="url(#lb)" stroke="url(#lborder)" strokeWidth="1.5"/>
        <rect x="3" y="3" width="38" height="38" rx="10.5" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

        {/* Podium bars — 2nd place left, 1st center (tallest), 3rd right */}
        {/* Bar 2 (left) */}
        <rect x="8" y="22" width="7" height="12" rx="2" fill="url(#lpurp)" />
        {/* Bar 1 (center, tallest) */}
        <rect x="18.5" y="14" width="7" height="20" rx="2" fill="url(#lgold)" filter="url(#lglow)" />
        {/* Bar 3 (right) */}
        <rect x="29" y="25" width="7" height="9" rx="2" fill="url(#lpurp)" opacity="0.7" />

        {/* Star on top of bar 1 */}
        <polygon
          points="22,9 23.2,12.2 26.5,12.2 23.9,14.1 24.8,17.3 22,15.5 19.2,17.3 20.1,14.1 17.5,12.2 20.8,12.2"
          fill="url(#lgold)"
          filter="url(#lglow)"
        />

        {/* Thin base line */}
        <rect x="7" y="34" width="30" height="1.5" rx="0.75" fill="url(#lgold)" opacity="0.4" />
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
          style={{ fontSize: "0.6rem", color: "rgba(232,232,240,0.45)", letterSpacing: "0.15em" }}
        >
          Plateformes
        </span>
      </div>
    </div>
  );
}
