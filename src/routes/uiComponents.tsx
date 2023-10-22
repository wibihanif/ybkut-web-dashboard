import { IconCircleArrowDown } from '@tabler/icons-react';
import { DashboardRoute } from './types';

export const uiComponentsRoutes: DashboardRoute = {
  title: 'UI Components',
  key: 'ui components',
  subTitleItems: [
    {
      icon: <IconCircleArrowDown />,
      key: 'elements',
      subTitle: 'Elements',
      routeItems: [
        {
          key: 'element',
          path: 'element',
          title: 'element',
          subRoutes: [
            {
              key: 'button-list',
              path: '',
              title: 'Button List',
              index: true,
            },
            {
              key: 'button-details',
              path: 'button/details',
              title: 'Button Details',
              index: true,
              isSidebarMenu: false,
            },
          ],
        },
      ],
    },
  ],
};
