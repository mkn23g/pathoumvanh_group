import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface SubsidiaryItem {
  id: string
  name: string
  url?: string
  visual: string
  isNanacafe?: boolean
  icon: React.ReactNode
}

const subsidiaries: SubsidiaryItem[] = [
  {
    id: 'nanacafe',
    name: 'Nanacafe',
    url: 'https://nanacafe.ninmkn9801.workers.dev',
    visual: 'card-v1',
    isNanacafe: true,
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
    id: 'nakhone',
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
    id: 'aqualao',
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
    id: 'phathoumvanhtrading',
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
]

export function Subsidiaries() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState<SubsidiaryItem | null>(null)

  useEffect(() => {
    if (!selected) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelected(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [selected])

  return (
    <section id="subsidiaries" className="section">
      <div className="container">
        <div className="reveal">
          <p className="section-label">{t('subsidiaries.label')}</p>
          <h2 className="section-title">{t('subsidiaries.title')}</h2>
          <p className="section-subtitle">{t('subsidiaries.subtitle')}</p>
        </div>

        <div className="card-grid card-grid-4">
          {subsidiaries.map((sub, i) => {
            const desc = sub.isNanacafe ? (
              t('subsidiaries.nanacafeDesc')
            ) : (
              <span className="placeholder">{t('subsidiaries.descPlaceholder')}</span>
            )

            if (sub.url) {
              return (
                <a
                  key={sub.id}
                  href={sub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`card card-clickable reveal reveal-d${i + 1}`}
                  aria-label={`${sub.name} — ${t('subsidiaries.visitSite')}`}
                >
                  <div className={`card-visual ${sub.visual}`}>
                    {sub.icon}
                    <span className="card-live-badge">Live ↗</span>
                  </div>
                  <div className="card-body">
                    <h3>{sub.name}</h3>
                    <p>{desc}</p>
                    <span className="card-link">
                      {t('subsidiaries.visitSite')} <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </a>
              )
            }

            return (
              <button
                key={sub.id}
                type="button"
                className={`card card-clickable card-button reveal reveal-d${i + 1}`}
                onClick={() => setSelected(sub)}
                aria-label={`${sub.name} — ${t('subsidiaries.viewDetails')}`}
              >
                <div className={`card-visual ${sub.visual}`}>{sub.icon}</div>
                <div className="card-body">
                  <h3>{sub.name}</h3>
                  <p>{desc}</p>
                  <span className="card-link">
                    {t('subsidiaries.viewDetails')} <span aria-hidden="true">→</span>
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {selected && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sub-modal-title"
          onClick={() => setSelected(null)}
        >
          <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className={`modal-header ${selected.visual}`}>
              {selected.icon}
              <button
                type="button"
                className="modal-close"
                aria-label={t('subsidiaries.closeModal')}
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <h3 id="sub-modal-title">{selected.name}</h3>
              <p className="modal-desc">
                <span className="placeholder">{t('subsidiaries.descPlaceholder')}</span>
              </p>
              <p className="modal-note">{t('subsidiaries.modalComingSoon')}</p>
              <div className="modal-actions">
                <a
                  href="#contact"
                  className="btn btn-primary"
                  onClick={() => setSelected(null)}
                >
                  {t('subsidiaries.inquireCta')}
                </a>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSelected(null)}
                >
                  {t('subsidiaries.closeModal')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
