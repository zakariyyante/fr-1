export default function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none select-none">

      {/* Aurora blobs */}
      <div style={{
        position: "absolute", top: "-15%", left: "5%",
        width: "55%", height: "70%", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(109,40,217,0.28) 0%, transparent 70%)",
        filter: "blur(80px)",
      }} />
      <div style={{
        position: "absolute", top: "10%", right: "-5%",
        width: "45%", height: "65%", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.14) 0%, transparent 70%)",
        filter: "blur(70px)",
      }} />
      <div style={{
        position: "absolute", bottom: "-20%", left: "35%",
        width: "40%", height: "50%", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 65%)",
        filter: "blur(90px)",
      }} />

      {/* Subtle dot-grid pattern */}
      <svg
        width="100%" height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0, opacity: 0.35 }}
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(201,168,76,0.35)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Floating geometric shapes */}
      <svg
        width="100%" height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0 }}
      >
        {/* Large hexagon top-left */}
        <polygon
          points="120,20 180,20 210,72 180,124 120,124 90,72"
          fill="none" stroke="rgba(139,92,246,0.12)" strokeWidth="1.5"
        />
        {/* Medium hexagon bottom-right */}
        <polygon
          points="1200,180 1240,180 1260,214 1240,248 1200,248 1180,214"
          fill="none" stroke="rgba(201,168,76,0.1)" strokeWidth="1"
        />
        {/* Small diamond top-right */}
        <polygon
          points="1100,40 1120,70 1100,100 1080,70"
          fill="none" stroke="rgba(201,168,76,0.14)" strokeWidth="1"
        />
        {/* Large circle outline center-left */}
        <circle cx="80" cy="260" r="120"
          fill="none" stroke="rgba(139,92,246,0.08)" strokeWidth="1"
          strokeDasharray="4 8"
        />
        {/* Medium circle outline right */}
        <circle cx="1280" cy="120" r="80"
          fill="none" stroke="rgba(201,168,76,0.07)" strokeWidth="1"
          strokeDasharray="3 6"
        />
        {/* Connection lines */}
        <line x1="210" y1="72" x2="400" y2="100" stroke="rgba(139,92,246,0.08)" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="1080" y1="70" x2="900" y2="120" stroke="rgba(201,168,76,0.07)" strokeWidth="1" strokeDasharray="4 8" />
        {/* Node dots */}
        <circle cx="400" cy="100" r="3" fill="rgba(201,168,76,0.3)" />
        <circle cx="210" cy="72" r="3" fill="rgba(139,92,246,0.4)" />
        <circle cx="900" cy="120" r="3" fill="rgba(201,168,76,0.25)" />
        <circle cx="600" cy="40" r="2" fill="rgba(139,92,246,0.35)" />
        <circle cx="750" cy="200" r="2" fill="rgba(201,168,76,0.2)" />
        {/* Bottom left triangle */}
        <polygon
          points="30,300 80,240 130,300"
          fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1"
        />
      </svg>

      {/* Top-center glowing line */}
      <div style={{
        position: "absolute", top: 0, left: "25%", right: "25%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.5), rgba(201,168,76,0.4), rgba(139,92,246,0.5), transparent)",
      }} />
    </div>
  );
}
