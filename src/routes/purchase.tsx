import { IconCreditCard } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { PurchaseAnalyticPage } from '~/pages/purchase-analytic';
// import { ThemeIcon } from '@mantine/core';

export const purchaseRoutes: DashboardRoute = {
  title: 'PURCHASE',
  key: 'menu',
  color: '#3845a3',
  subTitleItems: [
    {
      icon: <IconCreditCard color="white" />,
      key: 'dashboard-purchase',
      subTitle: 'Dashboard Purchase',
      routeItems: [
        {
          key: 'purchase',
          path: 'purchase',
          title: 'Analytics',
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
      ],
    },
  ],
};
