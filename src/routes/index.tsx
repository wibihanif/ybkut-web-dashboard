import { DashboardRoute } from './types';
import { inventoryRoutes } from './inventory';
import { assetRoutes } from './asset';
import { purchaseRoutes } from './purchase';

export const routes: DashboardRoute[] = [inventoryRoutes, assetRoutes, purchaseRoutes];
