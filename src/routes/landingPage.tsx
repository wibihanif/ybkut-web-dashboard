import { IconUserCheck } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { LandingPagePage } from '~/pages/landingPage';
// import { ThemeIcon } from '@mantine/core';

export const landingPageRoutes: DashboardRoute = {
  title: 'LANDING PAGE',
  key: 'menu',
  color: '#a33858',
  subTitleItems: [
    {
      icon: <IconUserCheck color="white" />,
      key: 'landingpage-sections',
      subTitle: 'Daycare Sections',
      routeItems: [
        {
          key: 'landingPage',
          path: '',
          title: 'Landing Page',
          withNavbar: false,
          subRoutes: [
            {
              component: <LandingPagePage />,
              key: 'landingPage',
              path: '',
              index: true,
            },
          ],
        },
      ],
    },
  ],
};
