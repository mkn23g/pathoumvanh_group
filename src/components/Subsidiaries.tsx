import { useTranslation } from 'react-i18next'

const subsidiaries = [
  {
    name: 'Nanacafe',
    visual: 'card-v1',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" aria-hidden="true">
        <circle cx="45" cy="45" r="36" fill="rgba(0,0,0,0.06)" />
        <rect x="30" y="22" width="26" height="40" rx="7" fill="none" stroke="#92400e" strokeWidth="2.2" />
        <path d="M56 32c9 0 11 9 2 13" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="43" cy="64" rx="14" ry="3" fill="rgba(0,0,0,0.06)" />
      </svg>
    ),
  },
  {
    name: 'Nakhone',
    visual: 'card-v2',
    icon: (
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
      <svg width="90" height="90" viewBox="0 0 90 90" aria-hidden="true">
        <circle cx="45" cy="45" r="36" fill="rgba(0,0,0,0.06)" />
        <path d="M22 48 Q30 32 38 48 Q46 64 54 48 Q62 32 70 48" fill="none"
          stroke="#047857" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="45" cy="30" r="8" fill="none" stroke="#047857" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Phathoumvanhtrading',
    visual: 'card-v4',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" aria-hidden="true">
        <circle cx="45" cy="45" r="36" fill="rgba(0,0,0,0.06)" />
        <path d="M28 56 L45 22 L62 56 Z" fill="none" stroke="#9d174d" strokeWidth="2.2" strokeLinejoin="round" />
        <line x1="34" y1="48" x2="56" y2="48" stroke="#9d174d" strokeWidth="1.5" />
        <circle cx="45" cy="40" r="4" fill="#9d174d" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: null,
    visual: 'card-v5',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" aria-hidden="true">
        <circle cx="45" cy="45" r="36" fill="rgba(0,0,0,0.06)" />
        <rect x="30" y="30" width="30" height="30" rx="15" fill="none" stroke="#4338ca" strokeWidth="2.2" />
        <line x1="45" y1="37" x2="45" y2="53" stroke="#4338ca" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="37" y1="45" x2="53" y2="45" stroke="#4338ca" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: null,
    visual: 'card-v6',
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" aria-hidden="true">
        <circle cx="45" cy="45" r="36" fill="rgba(0,0,0,0.06)" />
        <polygon points="45,22 62,40 54,40 62,60 28,38 38,38"
          fill="none" stroke="#b45309" strokeWidth="2.2" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export function Subsidiaries() {
  const { t } = useTranslation()

  return (
    <section id="subsidiaries" className="section">
      <div className="container">
        <div className="reveal">
          <p className="section-label">{t('subsidiaries.label')}</p>
          <h2 className="section-title">{t('subsidiaries.title')}</h2>
          <p className="section-subtitle">{t('subsidiaries.subtitle')}</p>
        </div>

        <div className="card-grid">
          {subsidiaries.map((sub, i) => {
            const displayName = sub.name ?? t('subsidiaries.unnamed')
            return (
              <article className={`card reveal reveal-d${Math.min(i + 1, 5)}`} key={i}>
                <div className={`card-visual ${sub.visual}`}>{sub.icon}</div>
                <div className="card-body">
                  <h3>{displayName}</h3>
                  <p>
                    <span className="placeholder">{t('subsidiaries.descPlaceholder')}</span>
                  </p>
                  <a href="#contact" className="card-link" aria-label={`${t('subsidiaries.learnMore')} — ${displayName}`}>
                    {t('subsidiaries.learnMore')} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
