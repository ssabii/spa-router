import React from 'react'

interface RouterContextProps {
  pathname: string
  push: (path: string) => void
}

const RouterContext = React.createContext<RouterContextProps | null>(null)

export default RouterContext
