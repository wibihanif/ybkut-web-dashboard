import { IconBuildingWarehouse } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { InventoryAnalyticPage } from '~/pages/inventory';
import { TotalInventoryValuePage } from '~/pages/inventory/TotalInventoryValue';

export const inventoryRoutes: DashboardRoute = {
  title: 'INVENTORY',
  key: 'menu',
  subTitleItems: [
    {
      icon: <IconBuildingWarehouse />,
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
        {
          key: 'inventory-value',
          path: 'inventory/value',
          title: 'Inventory Value',
          subRoutes: [
            {
              component: <TotalInventoryValuePage />,
              key: 'inventory-value',
              isSidebarMenu: true,
              path: '',
              index: true,
            },
          ],
        },
      ],
    },
  ],
};
