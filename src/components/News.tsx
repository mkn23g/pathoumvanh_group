{/* NEWS_SECTION: This entire component is optional.
    Remove the <News /> import and usage from router.tsx
    if the group has no announcements to publish. */}

export function News() {
  return (
    <section id="news" className="section section-alt">
      <div className="container">
        <div className="reveal">
          <p className="section-label">News &amp; Updates</p>
          <h2 className="section-title">Latest from the Group</h2>
          {/* DRAFT COPY: Introductory line for the news section. */}
          <p className="section-subtitle">
            Stay informed about developments across Pathoumvanh Group and its subsidiaries.
          </p>
        </div>

        <div className="news-grid">
          {[1, 2, 3].map(i => (
            <article className={`news-card reveal reveal-d${i}`} key={i}>
              <p className="news-date">
                <span className="placeholder">[Insert date]</span>
              </p>
              <h3>
                <span className="placeholder">[Insert announcement headline]</span>
              </h3>
              <p>
                <span className="placeholder">
                  [Insert announcement summary. Do not fabricate news.]
                </span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
