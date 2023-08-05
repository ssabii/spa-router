import React, { useState, useEffect, useCallback } from 'react'
import { RouterContext } from '../context'

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



export default Router