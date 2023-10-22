import { IconCircleArrowDown } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { AnalyticPage } from '~/pages/analytic';

export const analyticRoutes: DashboardRoute = {
  title: 'MENU',
  key: 'menu',
  subTitleItems: [
    {
      icon: <IconCircleArrowDown />,
      key: 'dashboards',
      subTitle: 'Dashboards',
      routeItems: [
        {
          key: 'analytics',
          path: 'analytics',
          subRoutes: [
            {
              component: <AnalyticPage />,
              key: 'analytic-list',
              path: '',
              title: 'Analytic List',
              index: true,
            },
            {
              key: 'analytic-details',
              path: 'analytic/details',
              title: 'Analytic Details',
              index: true,
              isSidebarMenu: false,
            },
          ],
          title: 'Analytics',
        },
        {
          key: 'commerce',
          path: 'commerce',
          subRoutes: [
            {
              key: 'commerce-list',
              path: '',
              title: 'Commerce List',
              index: true,
            },
            {
              key: 'commerce-details',
              path: 'commerce/details',
              title: 'Commerce Details',
              index: true,
              isSidebarMenu: false,
            },
          ],
          title: 'Commerce',
        },
      ],
    },
    {
      icon: <IconCircleArrowDown />,
      key: 'pages',
      subTitle: 'Pages',
      routeItems: [
        {
          key: 'login',
          path: 'login',
          title: 'Login',
          subRoutes: [
            {
              key: 'login',
              path: '',
              title: 'Login',
              index: true,
            },
          ],
        },
        {
          key: 'login-boxed',
          path: 'login-boxed',
          title: 'Login Boxed',
          subRoutes: [
            {
              key: 'login-boxed',
              path: 'login-boxed',
              title: 'Login Boxed',
              index: true,
            },
          ],
        },
      ],
    },
  ],
};
