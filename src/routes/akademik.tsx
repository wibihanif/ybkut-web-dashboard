import { IconCircleArrowDown } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { AkademikAnalyticsPage } from '~/pages/akademik-analytics';

export const akademikRoutes: DashboardRoute = {
  title: 'AKADEMIK',
  key: 'menu',
  subTitleItems: [
    {
      icon: <IconCircleArrowDown />,
      key: 'dashboard-akademik',
      subTitle: 'Dashboard Akademik',
      routeItems: [
        {
          key: 'akademik',
          path: 'akademik',
          title: 'Home Page',
          subRoutes: [
            {
              component: <AkademikAnalyticsPage />,
              key: 'akademik-home-page',
              path: '',
              index: true,
            },
          ],
        },
      ],
    },
  ],
};
