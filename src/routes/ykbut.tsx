import { IconBuildingWarehouse } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { InventoryAnalyticPage } from '~/pages/inventory';
import { PurchaseAnalyticPage } from '~/pages/purchase-analytic';
import { AssetAnalyticsPage } from '~/pages/asset-analytics';
import { FatAnalyticPage } from '~/pages/fat-analytics';
import { TotalProductDetailPage } from '~/pages/inventory/TotalProductDetail';
import { TotalInventoryValueDetailPage } from '~/pages/inventory/TotalInventoryValueDetail';
import { PendingReceiptDetailPage } from '~/pages/inventory/PendingReceiptDetail';
import { PendingTransferDetailPage } from '~/pages/inventory/PendingTransferDetail';
import { PendingPurchaseRequestPage } from '~/pages/asset-analytics/PendingPurchaseRequestPage';
import { PendingPurchaseOrderPage } from '~/pages/asset-analytics/PendingPurchaseOrderPage';
import { PendingPurchaseReceivedPage } from '~/pages/asset-analytics/PendingPurchaseReceivedPage';
import { TotalEquipmentPage } from '~/pages/asset-analytics/TotalEquipmentPage';

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
            {
              component: <TotalProductDetailPage />,
              key: 'total-product-detail',
              path: 'total-product',
              index: true,
            },
            {
              component: <TotalInventoryValueDetailPage />,
              key: 'total-inventory-value',
              path: 'total-inventory',
              index: true,
            },
            {
              component: <PendingReceiptDetailPage />,
              key: 'pending-receipt',
              path: 'pending-receipt',
              index: true,
            },
            {
              component: <PendingTransferDetailPage />,
              key: 'pending-transfer',
              path: 'pending-transfer',
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
            {
              component: <PendingPurchaseRequestPage />,
              key: 'pending-purchase-request-page',
              path: 'pending-purchase-request',
              index: true,
            },
            {
              component: <PendingPurchaseOrderPage />,
              key: 'pending-purchase-order-page',
              path: 'pending-purchase-order',
              index: true,
            },
            {
              component: <PendingPurchaseReceivedPage />,
              key: 'pending-purchase-received-page',
              path: 'pending-purchase-received',
              index: true,
            },
            {
              component: <TotalEquipmentPage />,
              key: 'total-equipment-page',
              path: 'total-equipment',
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
