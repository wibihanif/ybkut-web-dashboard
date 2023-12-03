import { IconUserCheck } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { DaycareAnalyticPage } from '~/pages/daycare-analytics';
// import { ThemeIcon } from '@mantine/core';

export const daycareRoutes: DashboardRoute = {
  title: 'UT DAYCARE',
  key: 'menu',
  color: '#000000',
  subTitleItems: [
    {
      icon: <IconUserCheck color="white" />,
      key: 'daycare-sections',
      subTitle: "UT D'care",
      routeItems: [
        {
          key: 'daycare',
          path: 'daycare',
          title: 'Dashboard Daycare',
          withNavbar: true,
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
