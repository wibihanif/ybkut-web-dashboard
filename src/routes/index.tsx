import { DashboardRoute } from './types';
import { inventoryRoutes } from './inventory';
import { assetRoutes } from './asset';
import { akademikRoutes } from './akademik';
import { kiplRoutes } from './kipl';

export const routes: DashboardRoute[] = [inventoryRoutes, assetRoutes, kiplRoutes, akademikRoutes];
