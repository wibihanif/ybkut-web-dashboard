import { IconVocabulary } from '@tabler/icons-react';
import { DashboardRoute } from './types';
import { KiplHomePage } from '~/pages/kipl';
import { AkademikAnalyticsPage } from '~/pages/akademik-analytics';
import { NusantaraPage } from '~/pages/nusantara';
// import { DemandDetailTable } from '~/features/kipl/component/Demand/TotalEquipmentDetailTable';
import { DemandPage } from '~/pages/kipl/Demand';
import { ProjectPage } from '~/pages/kipl/Project';
import { QuotationPage } from '~/pages/kipl/Quotation';
import { PospkPage } from '~/pages/kipl/Pospk';
import { StatusClosePage } from '~/pages/kipl/StatusClose';
import { ReportingPage } from '~/pages/kipl/Reporting';
import { CustomerPage } from '~/pages/kipl/Customer';
// import { NonRegularPage } from '~/pages/kipl/NonRegular';
import { LulusanRegularPage } from '~/pages/akademik-analytics/LulusanRegular';
import { SemuaLulusanPage } from '~/pages/akademik-analytics/SemuaLulusan';
import { LulusanCsrPage } from '~/pages/akademik-analytics/LulusanCsr';
import { RegularDoPage } from '~/pages/akademik-analytics/RegularDo';
import { JumlahSiswaPage } from '~/pages/akademik-analytics/JumlahSiswa';
import { JumlahAlumniPage } from '~/pages/akademik-analytics/JumlahAlumni';
import { ArPerformancePage } from '~/pages/asset-analytics/ArPerformance';
import { NonRegularPage } from '~/pages/kipl/NonRegular';
import { NonRegularPages } from '~/pages/akademik-analytics/NonRegular';
// import { NonRegularPages } from '~/pages/kipl/NonRegular';
// import { NonRegularPage } from '~/pages/akademik-analytics/NonRegular';
// import { ThemeIcon } from '@mantine/core';

export const utschoolRoutes: DashboardRoute = {
  title: 'UT-SCHOOL',
  key: 'menu',
  color: '#000000',
  subTitleItems: [
    {
      icon: <IconVocabulary color="white" />,
      key: 'utschool-section',
      subTitle: 'UT-School',
      routeItems: [
        {
          key: 'nusantara-dashboard',
          path: 'nusantara-dashboard',
          title: 'Nusantara Dashboard',
          withNavbar: true,
          subRoutes: [
            {
              component: <NusantaraPage />,
              key: 'nusantara-page',
              path: '',
              index: false,
            },
          ],
        },
        {
          key: 'kipl',
          path: 'kipl',
          title: 'Dashboard KIPL',
          withNavbar: true,
          subRoutes: [
            {
              component: <KiplHomePage />,
              key: 'kipl-home-page',
              path: '',
              index: false,
            },
            {
              component: <DemandPage />,
              key: 'demand-page',
              path: 'demand',
              index: true,
            },
            {
              component: <ProjectPage />,
              key: 'project-page',
              path: 'project',
              index: true,
            },
            {
              component: <QuotationPage />,
              key: 'quotation-page',
              path: 'quotation',
              index: true,
            },
            {
              component: <PospkPage />,
              key: 'po-spk-page',
              path: 'po-spk',
              index: true,
            },
            {
              component: <StatusClosePage />,
              key: 'status-close-page',
              path: 'status-close',
              index: true,
            },
            {
              component: <ReportingPage />,
              key: 'reporting-page',
              path: 'reporting',
              index: true,
            },
            {
              component: <CustomerPage />,
              key: 'customer-coverage-page',
              path: 'customer-coverage',
              index: true,
            },
            {
              component: <NonRegularPage />,
              key: 'non-regular-students-page',
              path: 'non-regular-students',
              index: true,
            },
            {
              component: <ArPerformancePage />,
              key: 'ar-performance-page',
              path: 'ar-performance',
              index: true,
            },
          ],
        },
        {
          key: 'akademik',
          path: 'akademik',
          title: 'Dashboard Akademik',
          withNavbar: true,
          subRoutes: [
            {
              component: <AkademikAnalyticsPage />,
              key: 'akademik-home-page',
              path: '',
              index: true,
            },
            {
              component: <LulusanRegularPage />,
              key: 'lulusan-regular-page',
              path: 'lulusan-regular',
              index: true,
            },
            {
              component: <NonRegularPages />,
              key: 'lulusan-non-regular-page',
              path: 'lulusan-non-regular',
              index: true,
            },
            {
              component: <SemuaLulusanPage />,
              key: 'semua-lulusan-page',
              path: 'semua-lulusan',
              index: true,
            },
            {
              component: <LulusanCsrPage />,
              key: 'lulusan-csr-page',
              path: 'lulusan-csr',
              index: true,
            },
            {
              component: <RegularDoPage />,
              key: 'siswa-regular-do-page',
              path: 'siswa-regular-do',
              index: true,
            },
            {
              component: <JumlahSiswaPage />,
              key: 'jumlah-siswa-page',
              path: 'jumlah-siswa',
              index: true,
            },
            {
              component: <JumlahAlumniPage />,
              key: 'jumlah-alumni-page',
              path: 'jumlah-alumni',
              index: true,
            },
          ],
        },
      ],
    },
  ],
};
