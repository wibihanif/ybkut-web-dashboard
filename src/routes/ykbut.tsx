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
import { TotalPurchaseDetailPage } from '~/pages/purchase-analytic/TotalPurchaseDetail';
import { TotalRFQDetailPage } from '~/pages/purchase-analytic/TotalRfqDetail';
import { PendingPRDetailPage } from '~/pages/purchase-analytic/PendingPRDetail';
import { PendingPODetailPage } from '~/pages/purchase-analytic/PendingPODetail';
import { PendingReceivedDetailPage } from '~/pages/purchase-analytic/PendingReceivedDetail';
import { QtyCategoryDetailPage } from '~/pages/purchase-analytic/QtyCategoryDetail';
import { QtyAmountDetailPage } from '~/pages/purchase-analytic/QtyAmountDetail';
import { ToApproveDetailPage } from '~/pages/purchase-analytic/ToApproveDetail';
import { PendingPurchaseRequestPage } from '~/pages/asset-analytics/PendingPurchaseRequestPage';
import { PendingPurchaseOrderPage } from '~/pages/asset-analytics/PendingPurchaseOrderPage';
import { PendingPurchaseReceivedPage } from '~/pages/asset-analytics/PendingPurchaseReceivedPage';
import { TotalEquipmentPage } from '~/pages/asset-analytics/TotalEquipmentPage';
import { CurrentStockDetailPage } from '~/pages/inventory/CurrentStockDetail';
import { TotalCategoryDetailPage } from '~/pages/inventory/TotalCategoryDetail';
import { TotalAssetPage } from '~/pages/asset-analytics/TotalAsset';
import { RunningDepreciationPage } from '~/pages/asset-analytics/RunningDepreciation';
import { DoneDepreciationPage } from '~/pages/asset-analytics/DoneDepreciation';
import { PendingDepreciationPage } from '~/pages/asset-analytics/PendingDepreciation';
import { Equipment1Page } from '~/pages/asset-analytics/Equipment1';
import { Equipment2Page } from '~/pages/asset-analytics/Equipment2';
import { TotalScrapProductPage } from '~/pages/asset-analytics/TotalScrapProduct';

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
            {
              component: <TotalPurchaseDetailPage />,
              key: 'total-purchase-detail',
              path: 'total-purchase',
              index: true,
            },
            {
              component: <TotalRFQDetailPage />,
              key: 'total-rfq-detail',
              path: 'total-rfq',
              index: true,
            },
            {
              component: <PendingPRDetailPage />,
              key: 'pending-pr-detail',
              path: 'pending-pr',
              index: true,
            },
            {
              component: <PendingPODetailPage />,
              key: 'pending-po-detail',
              path: 'pending-po',
              index: true,
            },
            {
              component: <PendingReceivedDetailPage />,
              key: 'pending-received-detail',
              path: 'pending-received',
              index: true,
            },
            {
              component: <QtyCategoryDetailPage />,
              key: 'quantity-category-detail',
              path: 'quantity-category',
              index: true,
            },
            {
              component: <QtyAmountDetailPage />,
              key: 'quantity-amount-detail',
              path: 'quantity-amount',
              index: true,
            },
            {
              component: <ToApproveDetailPage />,
              key: 'to-approve-detail',
              path: 'to-approve',
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
            {
              component: <CurrentStockDetailPage />,
              key: 'current-stock',
              path: 'current-stock',
              index: true,
            },
            {
              component: <TotalCategoryDetailPage />,
              key: 'total-category',
              path: 'total-category',
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
            {
              component: <TotalAssetPage />,
              key: 'total-asset-page',
              path: 'total-asset',
              index: true,
            },
            {
              component: <RunningDepreciationPage />,
              key: 'running-depreciation-page',
              path: 'running-depreciation',
              index: true,
            },
            {
              component: <DoneDepreciationPage />,
              key: 'done-depreciation-page',
              path: 'done-depreciation',
              index: true,
            },
            {
              component: <PendingDepreciationPage />,
              key: 'pending-depreciation-page',
              path: 'pending-depreciation',
              index: true,
            },
            {
              component: <Equipment1Page />,
              key: 'equipment-category-1-page',
              path: 'equipment-category-1',
              index: true,
            },
            {
              component: <Equipment2Page />,
              key: 'equipment-category-2-page',
              path: 'equipment-category-2',
              index: true,
            },
            {
              component: <TotalScrapProductPage />,
              key: 'total-scrap-product-page',
              path: 'total-scrap-product',
              index: true,
            },
          ],
        },
        {
          key: 'fat',
          path: 'fat',
          title: 'Dashboard Accounting',
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
