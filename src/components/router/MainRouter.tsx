import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { routes } from '~/routes';
import { GSIShell } from '~/components/core/GSIShell';
import { SubRoute } from '~/routes/types';
import { AccordionRoutes } from './AccordionRoutes';

export const MainRouter = () => {
  const location = useLocation();

  const renderMainRoutes = (callback: (subRoute: SubRoute) => React.ReactElement | undefined) => {
    return routes.map(mainRoute => {
      return mainRoute.subTitleItems.map(subTitleItem => {
        return subTitleItem.routeItems.map(routeItem => {
          return (
            <>
              <Route
                path="/"
                element={<Navigate replace to={routes[0].subTitleItems[0].routeItems[0].path} />}
              />
              <Route path={`${routeItem.path}/*`} key={mainRoute.key}>
                {routeItem.subRoutes.map(callback)}
              </Route>
            </>
          );
        });
      });
    });
  };

  const renderRoutes = () => {
    return renderMainRoutes(subRoute => {
      return (
        <Route
          path={subRoute.path}
          element={subRoute.component}
          index={subRoute.index}
          key={subRoute.key}
        />
      );
    });
  };

  return (
    <GSIShell sidebarMenus={<AccordionRoutes location={location} />} location={location}>
      <Routes>{renderRoutes()}</Routes>
    </GSIShell>
  );
};
