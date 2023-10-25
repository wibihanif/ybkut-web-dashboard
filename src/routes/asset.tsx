import { IconCircleArrowDown } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { AssetAnalyticsPage } from '~/pages/asset-home-page';

export const assetRoutes: DashboardRoute = {
  title: 'ASSET',
  key: 'menu',
  subTitleItems: [
    {
      icon: <IconCircleArrowDown />,
      key: 'dashboard-asset',
      subTitle: 'Dashboard Asset',
      routeItems: [
        {
          key: 'asset',
          path: 'asset',
          title: 'Home Page',
          subRoutes: [
            {
              component: <AssetAnalyticsPage />,
              key: 'asset-home-page',
              path: '',
              index: true,
            },
          ],
        },
      ],
    },
  ],
};
