import { IconCircleArrowDown } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { InventoryAnalyticPage } from '~/pages/analytic';

export const inventoryRoutes: DashboardRoute = {
  title: 'INVENTORY',
  key: 'menu',
  subTitleItems: [
    {
      icon: <IconCircleArrowDown />,
      key: 'dashboard-inventory',
      subTitle: 'Dashboard Inventory',
      routeItems: [
        {
          key: 'inventory',
          path: 'inventory',
          title: 'Home',
          subRoutes: [
            {
              component: <InventoryAnalyticPage />,
              key: 'inventory-analytic',
              path: '',
              index: true,
            },
          ],
        },
      ],
    },
  ],
};
