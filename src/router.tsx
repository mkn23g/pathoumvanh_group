import { createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Subsidiaries } from './components/Subsidiaries'
import { Governance } from './components/Governance'
import { News } from './components/News'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useScrollReveal, useSmoothScroll } from './hooks'

/* ----------------------------------------------------------------
   Root Layout — wraps every route with header + footer
   ---------------------------------------------------------------- */
function RootLayout() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

/* ----------------------------------------------------------------
   Home Page — composes all six sections in order
   ---------------------------------------------------------------- */
function HomePage() {
  useScrollReveal()
  useSmoothScroll()

  return (
    <>
      <Hero />
      <About />
      <Subsidiaries />
      <Governance />
      <News />
      <Contact />
    </>
  )
}

/* ----------------------------------------------------------------
   Route Tree
   ---------------------------------------------------------------- */
const rootRoute = createRootRoute({ component: RootLayout })

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const routeTree = rootRoute.addChildren([indexRoute])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
