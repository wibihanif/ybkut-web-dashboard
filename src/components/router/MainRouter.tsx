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

  // const renderMainRoutes = (callback: (subRoute: SubRoute) => React.ReactElement | undefined) => {
  //   return routes.map(mainRoute => {
  //     return (
  //       <Route path={`${mainRoute.path}/*`} key={mainRoute.key}>
  //         {mainRoute.subRoutes.map(callback)}
  //       </Route>
  //     );
  //   });
  // };

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

  // const renderPageTitle = () => {
  //   return renderMainRoutes(subRoute => {
  //     return (
  //       <Route
  //         path={subRoute.path}
  //         element={<Title>{subRoute.title}</Title>}
  //         index={subRoute.index}
  //         key={subRoute.key}
  //       />
  //     );
  //   });
  // };

  // const renderSidebar = () => {
  //   if (location.pathname === '/') {
  //     return routes.map(mainRoute => {
  //       return (
  //         <Route path={`${mainRoute.path}/*`} key={mainRoute.key}>
  //           <Route
  //             path="*"
  //             element={routes.map(mainRoute => {
  //               return (
  //                 <SidebarLink
  //                   key={mainRoute.key}
  //                   label={mainRoute.title}
  //                   to={mainRoute.path}
  //                   icon={mainRoute.icon}
  //                   active={mainRoute.path === '/'}
  //                 />
  //               );
  //             })}
  //           />
  //         </Route>
  //       );
  //     });
  //   }

  //   return routes.map(mainRoute => {
  //     return (
  //       <Route path={`${mainRoute.path}/*`} key={mainRoute.key}>
  //         <Route
  //           path="*"
  //           element={mainRoute.subRoutes.map(subRoute => {
  //             if (!subRoute.isSidebarMenu) return null;

  //             const isActive =
  //               `/${mainRoute.path}${subRoute.path ? '/' + subRoute.path : ''}` ===
  //               location.pathname;

  //             return (
  //               <SidebarLink
  //                 key={subRoute.key}
  //                 label={subRoute.title}
  //                 to={subRoute.path}
  //                 icon={subRoute.icon}
  //                 active={isActive}
  //               />
  //             );
  //           })}
  //         />
  //       </Route>
  //     );
  //   });
  // };

  return (
    <GSIShell sidebarMenus={<AccordionRoutes />} location={location}>
      {/* <Box pb="lg" mt={5}>
        <Routes>{renderPageTitle()}</Routes>
      </Box> */}
      <Routes>{renderRoutes()}</Routes>
    </GSIShell>
  );
};
