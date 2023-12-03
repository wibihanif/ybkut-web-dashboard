import { IconComponents } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { KiplHomePage } from '~/pages/kipl';
// import { ThemeIcon } from '@mantine/core';

export const kiplRoutes: DashboardRoute = {
  title: 'KIPL',
  key: 'kipl',
  color: '#7138a3',
  subTitleItems: [
    {
      icon: <IconComponents color="white" />,
      key: 'dashboard-kipl',
      subTitle: 'Dashboard KIPL',
      routeItems: [
        {
          key: 'kipl',
          path: 'kipl',
          title: 'Home',
          withNavbar: true,
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
