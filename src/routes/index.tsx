import { DashboardRoute } from './types';
import { analyticRoutes } from './analytic';
import { uiComponentsRoutes } from './uiComponents';

export const routes: DashboardRoute[] = [analyticRoutes, uiComponentsRoutes];
