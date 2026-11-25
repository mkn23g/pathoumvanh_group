import type { FormEvent } from 'react'

export function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(':invalid') as HTMLElement | null
      firstInvalid?.focus()
      form.reportValidity()
      return
    }

    // Demo confirmation — no actual submission
    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement
    const original = btn.textContent
    btn.textContent = 'Sent (Demo Only)'
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
          <p className="section-label">Contact &amp; Locations</p>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Interested in partnering with Pathoumvanh Group or learning more about our
            subsidiaries? Reach out through the form below.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal reveal-d1">
            <h3>Headquarters</h3>
            <address>
              <span className="placeholder">[Insert headquarters address]</span>
              <br />
              <span className="placeholder">[Insert city, region, postal code]</span>
            </address>

            <h3>Operating Hours</h3>
            <p>
              <span className="placeholder">[Insert operating hours, e.g., Mon–Fri 8:00–17:00]</span>
            </p>

            <h3>General Inquiries</h3>
            <p>
              <span className="placeholder">[Insert verified inquiry email address]</span>
            </p>

            <h3>Regional Offices</h3>
            <p>
              <span className="placeholder">[Insert regional office locations, if applicable]</span>
            </p>
          </div>

          <div className="reveal reveal-d2">
            <form className="contact-form" id="inquiry-form" noValidate onSubmit={handleSubmit}
              aria-label="Partnership inquiry form">
              <p className="form-note">
                <strong>Note:</strong> This standalone demo does not transmit form
                submissions. Connect to a server-side handler or form service before going live.
              </p>

              <div className="form-group">
                <label htmlFor="inquiry-name">
                  Full Name <span className="required-star" aria-hidden="true">*</span>
                </label>
                <input type="text" id="inquiry-name" name="name" required
                  autoComplete="name" placeholder="Your full name" />
              </div>

              <div className="form-group">
                <label htmlFor="inquiry-email">
                  Email Address <span className="required-star" aria-hidden="true">*</span>
                </label>
                <input type="email" id="inquiry-email" name="email" required
                  autoComplete="email" placeholder="you@example.com" />
              </div>

              <div className="form-group">
                <label htmlFor="inquiry-org">Organisation</label>
                <input type="text" id="inquiry-org" name="organisation"
                  autoComplete="organization" placeholder="Your company or organisation" />
              </div>

              <div className="form-group">
                <label htmlFor="inquiry-subject">
                  Subject <span className="required-star" aria-hidden="true">*</span>
                </label>
                <select id="inquiry-subject" name="subject" required>
                  <option value="">— Select a subject —</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="media">Media / Press</option>
                  <option value="careers">Careers</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="inquiry-message">
                  Message <span className="required-star" aria-hidden="true">*</span>
                </label>
                <textarea id="inquiry-message" name="message" required
                  placeholder="Tell us about your inquiry…" />
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
