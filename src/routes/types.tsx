import { ReactNode } from 'react';

// ada title !== link
// sub title !== link
// routes == accordion item
// subRoutes !== accordion item -> page detail

export interface SubRoute {
  /**
   * If `index` is true, that subroute will become the main page
   * when a user visits a main route.
   */
  index?: boolean;

  /**
   * The path specified for the page. DO NOT USE A LEADING SLASH (/).
   * Instead, just specify the path directly. Example: "list", "detail/:id", etc.
   */
  path: string;

  component?: React.ReactNode;

  /**
   * Unique identifier of a page. This should be prefixed with the
   * path of the main route. This key can also later be used to set
   * permissions to determine whether a user can access a certain
   * page or not.
   */
  key: string;

  /**
   * If this boolean is true, then the subroute will be rendered as a
   * sidebar menu item with its title as the label.
   */
  isSidebarMenu?: boolean;

  icon?: React.ReactNode;
}

export interface MainRoute {
  path: string;
  icon?: ReactNode;
  subRoutes: SubRoute[];
  key: string;
  title: string;
}

export interface RouteItem {
  path: string;
  icon?: ReactNode;
  subRoutes: SubRoute[];
  key: string;
  title: string;
  withNavbar: false | true;
}

export interface SubTitleItem {
  icon: ReactNode;
  subTitle: string;
  routeItems: RouteItem[];
  key: string;
}

export interface DashboardRoute {
  title: string;
  subTitleItems: SubTitleItem[];
  key: string;
  color: string;
}
