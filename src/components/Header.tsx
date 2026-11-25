import { useState, useEffect, useCallback } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        document.getElementById('nav-toggle-btn')?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <a href="#hero" className="wordmark" aria-label="Pathoumvanh Group — Home" onClick={closeMenu}>
          {/* DRAFT WORDMARK: Replace with approved logo/SVG */}
          <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
            <rect x="2" y="2" width="26" height="26" rx="6" fill="none" stroke="#d4a853" strokeWidth="2" />
            <circle cx="15" cy="15" r="4.5" fill="#d4a853" />
            <line x1="15" y1="6" x2="15" y2="10.5" stroke="#d4a853" strokeWidth="1.5" />
            <line x1="15" y1="19.5" x2="15" y2="24" stroke="#d4a853" strokeWidth="1.5" />
            <line x1="6" y1="15" x2="10.5" y2="15" stroke="#d4a853" strokeWidth="1.5" />
            <line x1="19.5" y1="15" x2="24" y2="15" stroke="#d4a853" strokeWidth="1.5" />
          </svg>
          Pathoumvanh <span className="accent">Group</span>
        </a>

        <button
          id="nav-toggle-btn"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <nav>
          <ul className={`nav${menuOpen ? ' open' : ''}`} id="primary-nav" role="list">
            {[
              { href: '#about', label: 'About' },
              { href: '#subsidiaries', label: 'Subsidiaries' },
              { href: '#governance', label: 'Strengths' },
              { href: '#news', label: 'News' },
              { href: '#contact', label: 'Contact' },
            ].map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
