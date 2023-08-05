import React from 'react'
import RouterContext from '../context/RouterContext'

const useRouter = () => {
  const context = React.useContext(RouterContext)

  if (!context) {
    throw new Error('useRouter must be used within a <Router> component.')
  }

  return context
}

export default useRouter