import type { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

export function Contact() {
  const { t } = useTranslation()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(':invalid') as HTMLElement | null
      firstInvalid?.focus()
      form.reportValidity()
      return
    }

    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement
    const original = btn.textContent
    btn.textContent = t('contact.sentDemo')
    btn.disabled = true
    btn.style.opacity = '0.65'

    setTimeout(() => {
      btn.textContent = original
      btn.disabled = false
      btn.style.opacity = '1'
      form.reset()
    }, 3000)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="reveal">
          <p className="section-label">{t('contact.label')}</p>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal reveal-d1">
            <h3>{t('contact.hq')}</h3>
            <address>
              <span className="placeholder">{t('contact.hqAddr')}</span>
              <br />
              <span className="placeholder">{t('contact.hqCity')}</span>
            </address>

            <h3>{t('contact.hours')}</h3>
            <p>
              <span className="placeholder">{t('contact.hoursVal')}</span>
            </p>

            <h3>{t('contact.emailHeading')}</h3>
            <p>
              <span className="placeholder">{t('contact.emailVal')}</span>
            </p>

            <h3>{t('contact.regional')}</h3>
            <p>
              <span className="placeholder">{t('contact.regionalVal')}</span>
            </p>
          </div>

          <div className="reveal reveal-d2">
            <form className="contact-form" id="inquiry-form" noValidate onSubmit={handleSubmit}
              aria-label="Partnership inquiry form">
              <p className="form-note">{t('contact.demoNote')}</p>

              <div className="form-group">
                <label htmlFor="inquiry-name">
                  {t('contact.nameLabel')} <span className="required-star" aria-hidden="true">*</span>
                </label>
                <input type="text" id="inquiry-name" name="name" required
                  autoComplete="name" placeholder={t('contact.namePlaceholder')} />
              </div>

              <div className="form-group">
                <label htmlFor="inquiry-email">
                  {t('contact.emailLabel')} <span className="required-star" aria-hidden="true">*</span>
                </label>
                <input type="email" id="inquiry-email" name="email" required
                  autoComplete="email" placeholder={t('contact.emailPlaceholder')} />
              </div>

              <div className="form-group">
                <label htmlFor="inquiry-org">{t('contact.orgLabel')}</label>
                <input type="text" id="inquiry-org" name="organisation"
                  autoComplete="organization" placeholder={t('contact.orgPlaceholder')} />
              </div>

              <div className="form-group">
                <label htmlFor="inquiry-subject">
                  {t('contact.subjectLabel')} <span className="required-star" aria-hidden="true">*</span>
                </label>
                <select id="inquiry-subject" name="subject" required>
                  <option value="">{t('contact.subjectDefault')}</option>
                  <option value="partnership">{t('contact.subjectPartnership')}</option>
                  <option value="media">{t('contact.subjectMedia')}</option>
                  <option value="careers">{t('contact.subjectCareers')}</option>
                  <option value="general">{t('contact.subjectGeneral')}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="inquiry-message">
                  {t('contact.msgLabel')} <span className="required-star" aria-hidden="true">*</span>
                </label>
                <textarea id="inquiry-message" name="message" required
                  placeholder={t('contact.msgPlaceholder')} />
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                {t('contact.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
