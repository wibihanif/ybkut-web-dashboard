import { DashboardRoute } from './types';
import { FatAnalyticPage } from '~/pages/fat-analytics';
import { IconReportMoney } from '@tabler/icons-react';
import { FatAccountAnalytic } from '~/features/fat/component/AccountReceivable';
// import { ThemeIcon } from '@mantine/core';

export const fatRoutes: DashboardRoute = {
  title: 'FAT',
  key: 'menu',
  color: '#389ea3',
  subTitleItems: [
    {
      icon: <IconReportMoney color="white" />,
      key: 'dashboard-fat',
      subTitle: 'Dashboard FAT',
      routeItems: [
        {
          key: 'fat',
          path: 'fat',
          title: 'Service Financial',
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
        {
          key: 'account-receivable',
          path: 'inventory/account',
          title: 'Account Receivable',
          withNavbar: true,
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
