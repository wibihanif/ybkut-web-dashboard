import { IconCircleArrowDown } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { FatAnalyticPage } from '~/pages/fat-analytics';

export const fatRoutes: DashboardRoute = {
  title: 'FAT',
  key: 'menu',
  subTitleItems: [
    {
      icon: <IconCircleArrowDown />,
      key: 'dashboard-fat',
      subTitle: 'Dashboard FAT',
      routeItems: [
        {
          key: 'fat',
          path: 'fat',
          title: 'Analytics',
          subRoutes: [
            {
              component: <FatAnalyticPage />,
              key: 'daycare-fat',
              path: '',
              index: true,
            },
          ],
        },
      ],
    },
  ],
};
