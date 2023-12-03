import { IconBuildingWarehouse } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { InventoryAnalyticPage } from '~/pages/inventory';
import { PurchaseAnalyticPage } from '~/pages/purchase-analytic';
import { AssetAnalyticsPage } from '~/pages/asset-analytics';
import { FatAnalyticPage } from '~/pages/fat-analytics';

export const ykbutRoutes: DashboardRoute = {
  title: 'YKBUT',
  key: 'menu',
  color: '#000000',
  subTitleItems: [
    {
      icon: <IconBuildingWarehouse color="white" />,
      key: 'ykbut-section',
      subTitle: 'YKBUT',
      routeItems: [
        {
          key: 'inventory',
          path: 'inventory',
          title: 'Dashboard Inventory',
          withNavbar: true,
          subRoutes: [
            {
              component: <InventoryAnalyticPage />,
              key: 'inventory-analytic',
              path: '',
              index: true,
            },
          ],
        },
        {
          key: 'purchase',
          path: 'purchase',
          title: 'Dashboard Purchase',
          withNavbar: true,
          subRoutes: [
            {
              component: <PurchaseAnalyticPage />,
              key: 'purchase-analytic',
              path: '',
              index: true,
            },
          ],
        },
        {
          key: 'asset',
          path: 'asset',
          title: 'Dashboard Asset',
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
        {
          key: 'fat',
          path: 'fat',
          title: 'Dashboard Financial',
          withNavbar: true,
          subRoutes: [
            {
              component: <FatAnalyticPage />,
              key: 'service-financial',
              path: '',
              index: true,
            },
          ],
        },
      ],
    },
  ],
};
