import { IconBuildingWarehouse } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { PoliklinikAnalyticPage } from '~/pages/poliklinik-analytics';
// import { NusantaraPage } from '~/pages/nusantara';

export const poliklinikRoutes: DashboardRoute = {
  title: 'Poliklinik',
  key: 'menu',
  color: '#000000',
  subTitleItems: [
    {
      icon: <IconBuildingWarehouse color="white" />,
      key: 'poliklinik-section',
      subTitle: 'Poliklinik',
      routeItems: [
        {
          key: 'poliklinik-analytic',
          path: 'poliklinik-analytic',
          title: 'Poliklinik',
          withNavbar: true,
          subRoutes: [
            {
              component: <PoliklinikAnalyticPage />,
              key: 'poliklinik-page',
              path: '',
              index: false,
            },
          ],
        },
      ],
    },
  ],
};
