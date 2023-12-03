import { IconAsset } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { AssetAnalyticsPage } from '~/pages/asset-analytics';
// import { ThemeIcon } from '@mantine/core';

export const assetRoutes: DashboardRoute = {
  title: 'ASSET',
  key: 'menu',
  color: '#a37538',
  subTitleItems: [
    {
      icon: <IconAsset color="white" />,
      key: 'dashboard-asset',
      subTitle: 'Dashboard Asset',
      routeItems: [
        {
          key: 'asset',
          path: 'asset',
          title: 'Home Page',
          withNavbar: true,
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
