import { IconBuildingWarehouse } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { InventoryAnalyticPage } from '~/pages/inventory';
import { TotalInventoryValuePage } from '~/pages/inventory/TotalInventoryValue';
import { InventoryStockPage } from '~/pages/inventory/InventoryStock';
import { InventoryStockOpnamePage } from '~/pages/inventory/InventoryStockOpname';
import { TotalProductPage } from '~/pages/inventory/TotalProduct';
import { PendingTransferPage } from '~/pages/inventory/PendingTransfer';
import { PendingReceiptPage } from '~/pages/inventory/PendingReceipt';
import { ScrapPage } from '~/pages/inventory/Scrap';

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
        {
          key: 'current-stock',
          path: 'inventory/stock',
          title: 'Stock',
          subRoutes: [
            {
              component: <InventoryStockPage />,
              key: 'current-stock',
              isSidebarMenu: true,
              path: '',
              index: true,
            },
          ],
        },
        {
          key: 'stock-opname',
          path: 'inventory/stock-opname',
          title: 'Stock Opname',
          subRoutes: [
            {
              component: <InventoryStockOpnamePage />,
              key: 'stock-opname',
              isSidebarMenu: true,
              path: '',
              index: true,
            },
          ],
        },
        {
          key: 'scrap',
          path: 'inventory/scrap',
          title: 'Scrap',
          subRoutes: [
            {
              component: <ScrapPage />,
              key: 'scrap',
              isSidebarMenu: true,
              path: '',
              index: true,
            },
          ],
        },
        // {
        //   key: 'total-product',
        //   path: 'inventory/product',
        //   title: 'Total Product',
        //   subRoutes: [
        //     {
        //       component: <TotalProductPage />,
        //       key: 'total-product',
        //       isSidebarMenu: true,
        //       path: '',
        //       index: true,
        //     },
        //   ],
        // },
        {
          key: 'pending-transfer',
          path: 'inventory/pending-transfer',
          title: 'Pending Transfer',
          subRoutes: [
            {
              component: <PendingTransferPage />,
              key: 'pending-transfer',
              isSidebarMenu: true,
              path: '',
              index: true,
            },
          ],
        },
        {
          key: 'pending-receipt',
          path: 'inventory/pending-receipt',
          title: 'Pending Receipt',
          subRoutes: [
            {
              component: <PendingReceiptPage />,
              key: 'pending-receipt',
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
