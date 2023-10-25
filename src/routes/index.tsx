import { DashboardRoute } from './types';
import { inventoryRoutes } from './inventory';
import { assetRoutes } from './asset';

export const routes: DashboardRoute[] = [inventoryRoutes, assetRoutes];
