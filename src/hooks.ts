import { useEffect } from 'react'

/**
 * Observes all `.reveal` elements and adds `.revealed` when they
 * scroll into view. Respects prefers-reduced-motion.
 */
export function useScrollReveal() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const els = document.querySelectorAll('.reveal')

    if (mq.matches) {
      els.forEach(el => el.classList.add('revealed'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' },
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/**
 * Smooth-scrolls anchor links (#id) to their target, respecting
 * reduced-motion. Also sets focus on the target for a11y.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const id = anchor.getAttribute('href')
      if (!id || id === '#') return
      const target = document.querySelector(id)
      if (!target) return

      e.preventDefault()
      target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
      if (target instanceof HTMLElement) {
        target.setAttribute('tabindex', '-1')
        target.focus({ preventScroll: true })
      }
      history.pushState(null, '', id)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}
