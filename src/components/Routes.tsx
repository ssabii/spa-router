import React from 'react'
import Route from './Route';
import { RouteProps } from './Route';
import { useRouter } from './Router';

interface RoutesProps {
  children: React.ReactNode;
}

const Routes = ({ children }: RoutesProps) => {
  const { pathname } = useRouter();
  const routes: React.ReactElement<RouteProps>[] = [];

  React.Children.forEach(children, (element) => {
    if (!React.isValidElement(element)) return;

    if (element.type === Route) {
      routes.push(element as React.ReactElement<RouteProps>);
    }
  })

  const renderedMatches = renderMatches(pathname, routes);

  return renderedMatches;
}

const renderMatches = (pathname: string, routes: React.ReactElement<RouteProps>[]) => {
  const matches = routes
    .reduce<React.ReactNode[]>((acc, route, index) => {
      const routeProps = route.props;
      const { path, component } = routeProps;

      if (path === pathname) {
        const Component = component as React.ReactElement;
        return [...acc, React.cloneElement(Component, { key: index })];
      }

      return acc;
    }, [])

  return matches;
}

export default Routes
