const subsidiaries = [
  {
    name: 'Nanacafe',
    visual: 'card-v1',
    icon: (
      /* DRAFT VISUAL: Abstract icon for Nanacafe. Replace with approved brand imagery. */
      <svg width="90" height="90" viewBox="0 0 90 90" aria-hidden="true">
        <circle cx="45" cy="45" r="36" fill="rgba(0,0,0,0.06)" />
        <rect x="30" y="22" width="26" height="40" rx="7" fill="none" stroke="#92400e" strokeWidth="2.2" />
        <path d="M56 32c9 0 11 9 2 13" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="43" cy="64" rx="14" ry="3" fill="rgba(0,0,0,0.06)" />
        <path d="M36 28 Q43 18 50 28" fill="none" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: 'Nakhone',
    visual: 'card-v2',
    icon: (
      /* DRAFT VISUAL: Abstract icon for Nakhone. Replace with approved brand imagery. */
      <svg width="90" height="90" viewBox="0 0 90 90" aria-hidden="true">
        <circle cx="45" cy="45" r="36" fill="rgba(0,0,0,0.06)" />
        <rect x="24" y="30" width="42" height="28" rx="4" fill="none" stroke="#1e40af" strokeWidth="2.2" />
        <line x1="24" y1="26" x2="66" y2="26" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" />
        <circle cx="45" cy="44" r="7" fill="none" stroke="#1e40af" strokeWidth="1.8" />
        <line x1="38" y1="58" x2="38" y2="66" stroke="#1e40af" strokeWidth="2" />
        <line x1="52" y1="58" x2="52" y2="66" stroke="#1e40af" strokeWidth="2" />
        <line x1="34" y1="66" x2="56" y2="66" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Aqualao',
    visual: 'card-v3',
    icon: (
      /* DRAFT VISUAL: Abstract icon for Aqualao. Replace with approved brand imagery. */
      <svg width="90" height="90" viewBox="0 0 90 90" aria-hidden="true">
        <circle cx="45" cy="45" r="36" fill="rgba(0,0,0,0.06)" />
        <path d="M22 48 Q30 32 38 48 Q46 64 54 48 Q62 32 70 48" fill="none"
          stroke="#047857" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M18 58 Q26 44 34 58 Q42 72 50 58 Q58 44 66 58" fill="none"
          stroke="#047857" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <circle cx="45" cy="30" r="8" fill="none" stroke="#047857" strokeWidth="2" />
        <circle cx="45" cy="30" r="3" fill="#047857" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: 'Phathoumvanhtrading',
    visual: 'card-v4',
    icon: (
      /* DRAFT VISUAL: Abstract icon for Phathoumvanhtrading. Replace with approved brand imagery. */
      <svg width="90" height="90" viewBox="0 0 90 90" aria-hidden="true">
        <circle cx="45" cy="45" r="36" fill="rgba(0,0,0,0.06)" />
        <path d="M28 56 L45 22 L62 56 Z" fill="none" stroke="#9d174d" strokeWidth="2.2" strokeLinejoin="round" />
        <line x1="34" y1="48" x2="56" y2="48" stroke="#9d174d" strokeWidth="1.5" />
        <circle cx="45" cy="40" r="4" fill="#9d174d" opacity="0.5" />
        <path d="M38 60 L45 68 L52 60" fill="none" stroke="#9d174d" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: '[Insert Subsidiary Name]',
    visual: 'card-v5',
    icon: (
      /* DRAFT VISUAL: Placeholder icon for unverified subsidiary. */
      <svg width="90" height="90" viewBox="0 0 90 90" aria-hidden="true">
        <circle cx="45" cy="45" r="36" fill="rgba(0,0,0,0.06)" />
        <rect x="30" y="30" width="30" height="30" rx="15" fill="none" stroke="#4338ca" strokeWidth="2.2" />
        <line x1="45" y1="37" x2="45" y2="53" stroke="#4338ca" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="37" y1="45" x2="53" y2="45" stroke="#4338ca" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: '[Insert Subsidiary Name]',
    visual: 'card-v6',
    icon: (
      /* DRAFT VISUAL: Placeholder icon for unverified subsidiary. */
      <svg width="90" height="90" viewBox="0 0 90 90" aria-hidden="true">
        <circle cx="45" cy="45" r="36" fill="rgba(0,0,0,0.06)" />
        <polygon points="45,22 62,40 54,40 62,60 28,38 38,38"
          fill="none" stroke="#b45309" strokeWidth="2.2" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export function Subsidiaries() {
  return (
    <section id="subsidiaries" className="section">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Our Subsidiaries</p>
          <h2 className="section-title">Six Businesses, One Shared Vision</h2>
          {/* DRAFT COPY: Editable introductory language for the subsidiaries section. */}
          <p className="section-subtitle">
            Each subsidiary operates independently within its market, backed by the
            group's shared resources, standards, and strategic support.
          </p>
        </div>

        <div className="card-grid">
          {subsidiaries.map((sub, i) => (
            <article className={`card reveal reveal-d${Math.min(i + 1, 5)}`} key={i}>
              <div className={`card-visual ${sub.visual}`}>
                {sub.icon}
              </div>
              <div className="card-body">
                <h3>{sub.name}</h3>
                <p>
                  <span className="placeholder">
                    [Insert verified subsidiary description — core offering and target market.]
                  </span>
                </p>
                <a href="#contact" className="card-link"
                  aria-label={`Learn more about ${sub.name}`}>
                  Learn more <span aria-hidden="true">→</span>
                </a>
                {/* PLACEHOLDER: Link to a subsidiary page or expanded details when available. */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
