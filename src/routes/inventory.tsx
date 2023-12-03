import { IconBuildingWarehouse } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { InventoryAnalyticPage } from '~/pages/inventory';
import { TotalInventoryValuePage } from '~/pages/inventory/TotalInventoryValue';
import { InventoryStockPage } from '~/pages/inventory/InventoryStock';
import { InventoryStockOpnamePage } from '~/pages/inventory/InventoryStockOpname';
import { PendingTransferPage } from '~/pages/inventory/PendingTransfer';
import { PendingReceiptPage } from '~/pages/inventory/PendingReceipt';
import { ScrapPage } from '~/pages/inventory/Scrap';
// import { ThemeIcon } from '@mantine/core';

export const inventoryRoutes: DashboardRoute = {
  title: 'INVENTORY',
  key: 'menu',
  color: '#385fa3',
  subTitleItems: [
    {
      icon: <IconBuildingWarehouse color="white" />,
      key: 'dashboard-inventory',
      subTitle: 'Dashboard Inventory',
      routeItems: [
        {
          key: 'inventory',
          path: 'inventory',
          title: 'Home',
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
          key: 'inventory-value',
          path: 'inventory/value',
          title: 'Inventory Value',
          withNavbar: true,
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
          withNavbar: true,
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
          withNavbar: true,
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
          withNavbar: true,
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
          withNavbar: true,
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
          withNavbar: true,
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
