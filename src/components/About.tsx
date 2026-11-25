export function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="reveal">
          <p className="section-label">About Pathoumvanh Group</p>
          <h2 className="section-title">A Foundation for Sustainable Growth</h2>
        </div>

        <div className="about-grid">
          <div className="about-content reveal reveal-d1">
            {/* DRAFT COPY: Mission statement — replace with owner-approved language. */}
            <h3>Our Mission</h3>
            <p>
              <span className="placeholder">
                [Insert mission statement — e.g., the group's purpose, the value it aims to
                create for its subsidiaries, stakeholders, and communities.]
              </span>
            </p>

            <h3>Leadership</h3>
            <p>
              <span className="placeholder">
                [Insert leadership overview — e.g., founding team, executive leadership,
                board of directors, or governance structure.]
              </span>
            </p>
          </div>

          <div className="about-visual reveal reveal-d2">
            {/* DRAFT VISUAL: Abstract growth illustration.
                Replace with approved photography or infographic. */}
            <svg width="100%" viewBox="0 0 400 300" aria-hidden="true">
              <rect width="400" height="300" rx="20" fill="#eef1f5" />
              {/* Rising bars representing growth */}
              {[
                { x: 60, h: 65, opacity: 0.15 },
                { x: 120, h: 100, opacity: 0.25 },
                { x: 180, h: 140, opacity: 0.4 },
                { x: 240, h: 175, opacity: 0.6 },
                { x: 300, h: 210, opacity: 1 },
              ].map((bar, i) => (
                <rect key={i} x={bar.x} y={260 - bar.h} width="40" height={bar.h}
                  rx="6" fill={i === 4 ? '#d4a853' : '#1e293b'} opacity={bar.opacity} />
              ))}
              {/* Trend line */}
              <polyline points="80,195 140,160 200,120 260,85 320,50"
                fill="none" stroke="#d4a853" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" />
              {/* Trend dots */}
              {[[80, 195], [140, 160], [200, 120], [260, 85], [320, 50]].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="4" fill="#d4a853" />
              ))}
            </svg>
          </div>
        </div>

        {/* Metrics / Milestones */}
        <div className="metrics-row reveal reveal-d2">
          {[
            { value: '[X]', label: 'Subsidiaries' },
            { value: '[X]', label: '[Insert verified metric label]' },
            { value: '[X]', label: '[Insert verified metric label]' },
            { value: '[X]', label: '[Insert verified metric label]' },
          ].map((metric, i) => (
            <div className="metric-card" key={i}>
              <div className="metric-value">
                <span className="placeholder" style={{ background: 'none', border: 'none' }}>
                  {metric.value}
                </span>
              </div>
              <div className="metric-label">{metric.label}</div>
              {/* PLACEHOLDER: Replace with verified figures */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
