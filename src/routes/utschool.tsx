import { IconVocabulary } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { KiplHomePage } from '~/pages/kipl';
import { AkademikAnalyticsPage } from '~/pages/akademik-analytics';
// import { ThemeIcon } from '@mantine/core';

export const utschoolRoutes: DashboardRoute = {
  title: 'UT-SCHOOL',
  key: 'menu',
  color: '#000000',
  subTitleItems: [
    {
      icon: <IconVocabulary color="white" />,
      key: 'utschool-section',
      subTitle: 'UT-School',
      routeItems: [
        {
          key: 'kipl',
          path: 'kipl',
          title: 'Dashboard KIPL',
          withNavbar: true,
          subRoutes: [
            {
              component: <KiplHomePage />,
              key: 'kipl-home-page',
              path: '',
              index: false,
            },
          ],
        },
        {
          key: 'akademik',
          path: 'akademik',
          title: 'Dashboard Akademik',
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
