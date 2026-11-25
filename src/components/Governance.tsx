const pillars = [
  {
    title: 'Shared Operations',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
      </svg>
    ),
    /* DRAFT COPY: Describe the group's shared operational services. Replace with verified details. */
    text: (
      <>
        The group may centralise selected operational functions —{' '}
        <span className="placeholder">
          [Insert verified shared services, e.g., procurement, HR, IT infrastructure, logistics]
        </span>{' '}
        — to reduce costs and improve consistency across subsidiaries.
      </>
    ),
  },
  {
    title: 'Strategic Capital',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="12" y1="2" x2="12" y2="8" /><line x1="12" y1="16" x2="12" y2="22" />
      </svg>
    ),
    /* DRAFT COPY: Describe capital allocation approach. Replace with verified details. */
    text: (
      <>
        Pathoumvanh Group may provide subsidiaries with access to capital and strategic
        financial planning —{' '}
        <span className="placeholder">
          [Insert verified capital/investment approach and any funding structure details]
        </span>{' '}
        — enabling growth and long-term stability.
      </>
    ),
  },
  {
    title: 'Group Standards',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="8" x2="16" y2="8" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="8" y1="16" x2="13" y2="16" />
      </svg>
    ),
    /* DRAFT COPY: Describe group-wide standards. Replace with verified details. */
    text: (
      <>
        Consistent standards across quality, branding, and performance may be established
        to ensure each subsidiary upholds the group's reputation —{' '}
        <span className="placeholder">
          [Insert verified standards, certifications, or quality frameworks in use]
        </span>.
      </>
    ),
  },
  {
    title: 'Compliance & Governance',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 12l4 4 8-8" />
      </svg>
    ),
    /* DRAFT COPY: Describe compliance and governance practices. Replace with verified details. */
    text: (
      <>
        The group's governance framework is intended to ensure legal compliance, ethical
        conduct, and transparent reporting across all subsidiaries —{' '}
        <span className="placeholder">
          [Insert verified compliance frameworks, regulatory bodies, or governance policies]
        </span>.
      </>
    ),
  },
]

export function Governance() {
  return (
    <section id="governance" className="section section-dark">
      <div className="container">
        <div className="reveal">
          <p className="section-label" style={{ color: 'var(--accent-light)' }}>
            Shared Strengths &amp; Governance
          </p>
          <h2 className="section-title">How the Group Supports Its Businesses</h2>
          {/* DRAFT COPY: Introductory language describes the intended operating-model categories.
              All claims should be reviewed against the group's actual practices before publication. */}
          <p className="section-subtitle">
            Pathoumvanh Group is designed to provide its subsidiaries with the advantages
            of scale while preserving the agility and identity of each individual business.
          </p>
        </div>

        <div className="pillar-grid">
          {pillars.map((pillar, i) => (
            <div className={`pillar reveal reveal-d${i + 1}`} key={i}>
              <div className="pillar-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
