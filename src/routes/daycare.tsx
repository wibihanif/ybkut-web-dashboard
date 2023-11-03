import { IconCircleArrowDown } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { DaycareAnalyticPage } from '~/pages/daycare-analytics';

export const daycareRoutes: DashboardRoute = {
  title: 'DAYCARE',
  key: 'menu',
  subTitleItems: [
    {
      icon: <IconCircleArrowDown />,
      key: 'dashboard-daycare',
      subTitle: 'Dashboard Daycare',
      routeItems: [
        {
          key: 'daycare',
          path: 'daycare',
          title: 'Analytics',
          subRoutes: [
            {
              component: <DaycareAnalyticPage />,
              key: 'daycare-analytic',
              path: '',
              index: true,
            },
          ],
        },
      ],
    },
  ],
};
