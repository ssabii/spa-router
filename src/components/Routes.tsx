import React from 'react'
import Route from './Route';
import { RouteProps } from './Route';

interface RoutesProps {
  children: React.ReactNode;
}

const Routes = ({ children }: RoutesProps) => {
  const routes: React.ReactElement<RouteProps>[] = [];

  React.Children.forEach(children, (element) => {
    if (!React.isValidElement(element)) return;

    if (element.type === Route) {
      routes.push(element as React.ReactElement<RouteProps>);
    }
  })

  const renderedMatches = renderMatches(window.location.pathname, routes);

  return renderedMatches;
}

const renderMatches = (pathname: string, routes: React.ReactElement<RouteProps>[]) => {
  const matches = routes
    .reduce<React.ReactNode[]>((acc, route) => {
      const routeProps = route.props;
      const { path, component } = routeProps;

      return path === pathname ? [...acc, component] : acc;
    }, [])

  return matches;
}

export default Routes
