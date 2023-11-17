import { IconCircleArrowDown } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { FatAnalyticPage } from '~/pages/fat-analytics';

// export const fatRoutes: DashboardRoute = {
//   title: 'FAT',
//   key: 'menu',
//   subTitleItems: [
//     {
//       icon: <IconCircleArrowDown />,
//       key: 'dashboard-fat',
//       subTitle: 'Dashboard FAT',
//       routeItems: [
//         {
//           key: 'fat',
//           path: 'fat',
//           title: 'Analytics',
//           subRoutes: [
//             {
//               component: <FatAnalyticPage />,
//               key: 'daycare-fat',
//               path: '',
//               index: true,
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };
import { IconBuildingWarehouse } from '@tabler/icons-react';
// import { DashboardRoute } from './types';
import { InventoryAnalyticPage } from '~/pages/inventory';
import { TotalInventoryValuePage } from '~/pages/inventory/TotalInventoryValue';
import { FatAccountAnalytic } from '~/features/fat/component/AccountReceivable';

export const fatRoutes: DashboardRoute = {
  title: 'FAT',
  key: 'menu',
  subTitleItems: [
    {
      icon: <IconBuildingWarehouse />,
      key: 'dashboard-fat',
      subTitle: 'Dashboard FAT',
      routeItems: [
        {
          key: 'fat',
          path: 'fat',
          title: 'Service Financial',
          subRoutes: [
            {
              component: <FatAnalyticPage />,
              key: 'service-financial',
              path: '',
              index: true,
            },
          ],
        },
        {
          key: 'account-receivable',
          path: 'inventory/account',
          title: 'Account Receivable',
          subRoutes: [
            {
              component: <FatAccountAnalytic />,
              key: 'account-receivable',
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
