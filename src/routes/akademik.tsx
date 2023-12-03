import { IconVocabulary } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { AkademikAnalyticsPage } from '~/pages/akademik-analytics';
// import { ThemeIcon } from '@mantine/core';

export const akademikRoutes: DashboardRoute = {
  title: 'AKADEMIK',
  key: 'menu',
  color: '#a33858',
  subTitleItems: [
    {
      icon: <IconVocabulary color="white" />,
      key: 'dashboard-akademik',
      subTitle: 'Dashboard Akademik',
      routeItems: [
        {
          key: 'akademik',
          path: 'akademik',
          title: 'Home Page',
          withNavbar: true,
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
