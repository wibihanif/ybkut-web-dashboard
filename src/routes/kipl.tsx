import { IconCircleArrowDown } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { KiplHomePage } from '~/pages/kipl';

export const kiplRoutes: DashboardRoute = {
  title: 'KIPL',
  key: 'kipl',
  subTitleItems: [
    {
      icon: <IconCircleArrowDown />,
      key: 'dashboard-kipl',
      subTitle: 'Dashboard KIPL',
      routeItems: [
        {
          key: 'kipl',
          path: 'kipl',
          title: 'Home Page',
          subRoutes: [
            {
              component: <KiplHomePage />,
              key: 'kipl-home-page',
              path: '',
              index: true,
            },
          ],
        },
      ],
    },
  ],
};
