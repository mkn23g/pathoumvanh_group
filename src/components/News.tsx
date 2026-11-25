import { useTranslation } from 'react-i18next'

export function News() {
  const { t } = useTranslation()

  const items = [
    { date: t('news.n1Date'), title: t('news.n1Title'), summary: t('news.n1Summary') },
    { date: t('news.n2Date'), title: t('news.n2Title'), summary: t('news.n2Summary') },
    { date: t('news.n3Date'), title: t('news.n3Title'), summary: t('news.n3Summary') },
  ]

  return (
    <section id="news" className="section section-alt">
      <div className="container">
        <div className="reveal">
          <p className="section-label">{t('news.label')}</p>
          <h2 className="section-title">{t('news.title')}</h2>
          <p className="section-subtitle">{t('news.subtitle')}</p>
        </div>

        <div className="news-grid">
          {items.map((item, i) => (
            <article className={`news-card reveal reveal-d${i + 1}`} key={i}>
              <p className="news-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
