import { IconBuildingWarehouse } from '@tabler/icons-react';
import { DashboardRoute } from './types';

export const poliklinikRoutes: DashboardRoute = {
  title: 'Poliklinik',
  key: 'menu',
  color: '#000000',
  subTitleItems: [
    {
      icon: <IconBuildingWarehouse color="white" />,
      key: 'poliklinik-section',
      subTitle: 'Poliklinik',
      routeItems: [],
    },
  ],
};
