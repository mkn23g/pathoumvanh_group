import { useTranslation } from 'react-i18next'

export function Governance() {
  const { t } = useTranslation()

  const pillars = [
    {
      title: t('governance.p1Title'),
      lead: t('governance.p1Lead'),
      placeholder: t('governance.p1Placeholder'),
      tail: t('governance.p1Tail'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
        </svg>
      ),
    },
    {
      title: t('governance.p2Title'),
      lead: t('governance.p2Lead'),
      placeholder: t('governance.p2Placeholder'),
      tail: t('governance.p2Tail'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="12" y1="2" x2="12" y2="8" /><line x1="12" y1="16" x2="12" y2="22" />
        </svg>
      ),
    },
    {
      title: t('governance.p3Title'),
      lead: t('governance.p3Lead'),
      placeholder: t('governance.p3Placeholder'),
      tail: t('governance.p3Tail'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="8" x2="16" y2="8" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="8" y1="16" x2="13" y2="16" />
        </svg>
      ),
    },
    {
      title: t('governance.p4Title'),
      lead: t('governance.p4Lead'),
      placeholder: t('governance.p4Placeholder'),
      tail: t('governance.p4Tail'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 12l4 4 8-8" />
        </svg>
      ),
    },
  ]

  return (
    <section id="governance" className="section section-dark">
      <div className="container">
        <div className="reveal">
          <p className="section-label" style={{ color: 'var(--accent-light)' }}>
            {t('governance.label')}
          </p>
          <h2 className="section-title">{t('governance.title')}</h2>
          <p className="section-subtitle">{t('governance.subtitle')}</p>
        </div>

        <div className="pillar-grid">
          {pillars.map((pillar, i) => (
            <div className={`pillar reveal reveal-d${i + 1}`} key={i}>
              <div className="pillar-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>
                {pillar.lead}
                <span className="placeholder">{pillar.placeholder}</span>
                {pillar.tail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
