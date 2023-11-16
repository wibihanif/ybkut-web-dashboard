import { DashboardRoute } from './types';
import { inventoryRoutes } from './inventory';
import { assetRoutes } from './asset';
import { akademikRoutes } from './akademik';
import { kiplRoutes } from './kipl';
import { purchaseRoutes } from './purchase';
import { daycareRoutes } from './daycare';
import { fatRoutes } from './fat';

export const routes: DashboardRoute[] = [
  inventoryRoutes,
  assetRoutes,
  kiplRoutes,
  akademikRoutes,
  purchaseRoutes,
  daycareRoutes,
  fatRoutes,
];
