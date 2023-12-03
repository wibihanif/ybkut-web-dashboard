import { DashboardRoute } from './types';
// import { inventoryRoutes } from './inventory';
// import { assetRoutes } from './asset';
// import { akademikRoutes } from './akademik';
// import { kiplRoutes } from './kipl';
// import { purchaseRoutes } from './purchase';
import { daycareRoutes } from './daycare';
import { ykbutRoutes } from './ykbut';
import { utschoolRoutes } from './utschool';
import { landingPageRoutes } from './landingPage';
// import { fatRoutes } from './fat';

export const routes: DashboardRoute[] = [
  // inventoryRoutes,
  // assetRoutes,
  // kiplRoutes,
  // akademikRoutes,
  // purchaseRoutes,
  // fatRoutes,
  landingPageRoutes,
  ykbutRoutes,
  daycareRoutes,
  utschoolRoutes,
];
