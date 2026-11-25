import { useTranslation } from 'react-i18next'

export function News() {
  const { t } = useTranslation()

  return (
    <section id="news" className="section section-alt">
      <div className="container">
        <div className="reveal">
          <p className="section-label">{t('news.label')}</p>
          <h2 className="section-title">{t('news.title')}</h2>
          <p className="section-subtitle">{t('news.subtitle')}</p>
        </div>

        <div className="news-grid">
          {[1, 2, 3].map(i => (
            <article className={`news-card reveal reveal-d${i}`} key={i}>
              <p className="news-date">
                <span className="placeholder">{t('news.datePlaceholder')}</span>
              </p>
              <h3>
                <span className="placeholder">{t('news.headlinePlaceholder')}</span>
              </h3>
              <p>
                <span className="placeholder">{t('news.summaryPlaceholder')}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
