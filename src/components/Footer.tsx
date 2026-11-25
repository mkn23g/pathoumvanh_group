import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <p>
          &copy; {t('footer.year')} Pathoumvanh Group. {t('footer.rights')}
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          <a href="#hero">{t('footer.backToTop')}</a>
        </p>
      </div>
    </footer>
  )
}
