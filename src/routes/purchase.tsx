import { IconCircleArrowDown } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { PurchaseAnalyticPage } from '~/pages/purchase-home-page';

export const purchaseRoutes: DashboardRoute = {
  title: 'PURCHASE',
  key: 'menu',
  subTitleItems: [
    {
      icon: <IconCircleArrowDown />,
      key: 'dashboard-purchase',
      subTitle: 'Dashboard Purchase',
      routeItems: [
        {
          key: 'purchase',
          path: 'purchase',
          title: 'Analytics',
          subRoutes: [
            {
              component: <PurchaseAnalyticPage />,
              key: 'purchase-analytic',
              path: '',
              index: true,
            },
          ],
        },
      ],
    },
  ],
};
