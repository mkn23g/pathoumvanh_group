export function Hero() {
  return (
    <section id="hero" className="hero section">
      {/* Animated gradient orbs — purely decorative */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-orb hero-orb-3" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-text">
          {/* DRAFT COPY: Positioning statement. Review and approve before publishing. */}
          <h1>
            Connecting Businesses.
            <br />
            Creating <span className="gradient-text">Shared Value.</span>
          </h1>
          {/* DRAFT COPY: Editable tagline summarising cross-company value. */}
          <p className="hero-tagline">
            Pathoumvanh Group is a holding company that unites six distinct subsidiaries
            under a shared foundation of operational excellence, strategic capital, and
            principled governance.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Request a Partnership</a>
            <a href="#subsidiaries" className="btn btn-ghost">Explore Subsidiaries</a>
          </div>
        </div>

        <div className="hero-visual">
          {/* DRAFT VISUAL: Abstract network illustration representing connected businesses.
              Replace with approved hero photography or brand artwork. */}
          <svg width="420" height="380" viewBox="0 0 420 380" aria-hidden="true">
            {/* Outer ring */}
            <circle cx="210" cy="190" r="155" fill="none" stroke="rgba(212,168,83,0.1)" strokeWidth="1" />
            <circle cx="210" cy="190" r="115" fill="none" stroke="rgba(212,168,83,0.06)" strokeWidth="1" />

            {/* Connection lines — hub to satellites */}
            {[
              [210, 162, 210, 70],
              [232, 175, 335, 120],
              [232, 205, 335, 260],
              [210, 218, 210, 310],
              [188, 205, 85, 260],
              [188, 175, 85, 120],
            ].map(([x1, y1, x2, y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="rgba(212,168,83,0.3)" strokeWidth="1.2" />
            ))}

            {/* Cross-connections between satellites */}
            {[
              [210, 55, 335, 115], [335, 115, 335, 255],
              [335, 255, 210, 315], [210, 315, 85, 255],
              [85, 255, 85, 115], [85, 115, 210, 55],
            ].map(([x1, y1, x2, y2], i) => (
              <line key={`c${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            ))}

            {/* Central hub */}
            <circle cx="210" cy="190" r="30" fill="#d4a853" opacity="0.9" />
            <text x="210" y="195" textAnchor="middle" fontSize="12" fontWeight="800"
              fill="#0b0f1a" fontFamily="system-ui">PG</text>

            {/* 6 Satellite nodes */}
            {[
              { cx: 210, cy: 55 },
              { cx: 335, cy: 115 },
              { cx: 335, cy: 260 },
              { cx: 210, cy: 315 },
              { cx: 85, cy: 260 },
              { cx: 85, cy: 115 },
            ].map((pos, i) => (
              <g key={i}>
                <circle cx={pos.cx} cy={pos.cy} r="20" fill="rgba(255,255,255,0.06)"
                  stroke="rgba(212,168,83,0.5)" strokeWidth="1.5" />
                <circle cx={pos.cx} cy={pos.cy} r="4" fill="#d4a853" opacity="0.7" />
              </g>
            ))}

            {/* Decorative small dots */}
            {[
              [160, 100], [280, 80], [310, 190], [260, 320],
              [120, 310], [100, 170], [170, 260], [260, 140],
            ].map(([cx, cy], i) => (
              <circle key={`d${i}`} cx={cx} cy={cy} r="2" fill="rgba(212,168,83,0.25)" />
            ))}
          </svg>
        </div>
      </div>
    </section>
  )
}
