import React from 'react'

export interface RouteProps {
  path: string;
  component: React.ReactNode;
}

const Route = (_props: RouteProps): React.ReactElement | null => {
  throw new Error('<Route> component must be used inside a <Routes> component.');
}

export default Route