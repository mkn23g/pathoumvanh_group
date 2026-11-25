import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="reveal">
          <p className="section-label">{t('about.label')}</p>
          <h2 className="section-title">{t('about.title')}</h2>
        </div>

        <div className="about-grid">
          <div className="about-content reveal reveal-d1">
            <h3>{t('about.missionHeading')}</h3>
            <p>
              <span className="placeholder">{t('about.missionPlaceholder')}</span>
            </p>

            <h3>{t('about.leadershipHeading')}</h3>
            <p>
              <span className="placeholder">{t('about.leadershipPlaceholder')}</span>
            </p>
          </div>

          <div className="about-visual reveal reveal-d2">
            <svg width="100%" viewBox="0 0 400 300" aria-hidden="true">
              <rect width="400" height="300" rx="20" fill="#eef1f5" />
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
              <polyline points="80,195 140,160 200,120 260,85 320,50"
                fill="none" stroke="#d4a853" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" />
              {[[80, 195], [140, 160], [200, 120], [260, 85], [320, 50]].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="4" fill="#d4a853" />
              ))}
            </svg>
          </div>
        </div>

        <div className="metrics-row reveal reveal-d2">
          {[
            { value: '4', label: t('about.subsidiariesLabel'), isReal: true },
            { value: '[X]', label: t('about.metricPlaceholder'), isReal: false },
            { value: '[X]', label: t('about.metricPlaceholder'), isReal: false },
            { value: '[X]', label: t('about.metricPlaceholder'), isReal: false },
          ].map((metric, i) => (
            <div className="metric-card" key={i}>
              <div className="metric-value">
                {metric.isReal ? (
                  metric.value
                ) : (
                  <span className="placeholder" style={{ background: 'none', border: 'none' }}>
                    {metric.value}
                  </span>
                )}
              </div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
