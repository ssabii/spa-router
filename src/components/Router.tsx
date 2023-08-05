import React, { useState, useEffect, useCallback } from 'react'

interface RouterContextProps {
  pathname: string
  push: (url: string) => void
}

const RouterContext = React.createContext<RouterContextProps | null>(null)

interface RouterProps {
  children: React.ReactNode
}

const Router = ({ children }: RouterProps) => {
  const [pathname, setPathname] = useState(window.location.pathname)

  const push = useCallback((url: string) => {
    setPathname(url)
    window.history.pushState({ path: url }, '', url)
  }, [])

  useEffect(() => {
    const popState = (e: PopStateEvent) => {
      const state = e.state as { path: string }
      const path = state?.path || '/'
      setPathname(path)
    }

    window.addEventListener('popstate', popState)

    return () => window.removeEventListener('popstate', popState)
  }, [])

  return (
    <RouterContext.Provider value={{ pathname, push }}>
      {children}
    </RouterContext.Provider>
  )
}

export const useRouter = () => {
  const context = React.useContext(RouterContext)

  if (!context) {
    throw new Error('useRouter must be used within a <Router> component.')
  }

  return context
}

export default Router