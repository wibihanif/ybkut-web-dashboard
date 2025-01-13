import { Box, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
// import {
//   IconAnalyzeFilled,
//   IconBlockquote,
//   IconBrandCodesandbox,
//   IconBuilding,
//   // IconGraph,
//   IconHeadset,
//   IconHearts,
//   IconListSearch,
//   IconReportAnalytics,
//   IconSchool,
// } from '@tabler/icons-react';
import { ReactNode } from 'react';
// import demand from '../../../assets/demand.svg';
import project from '../../../assets/project.svg';
import quotation from '../../../assets/quotation.svg';
import po from '../../../assets/po.svg';
import eventclose from '../../../assets/event-close.svg';
import reporting from '../../../assets/reporting.svg';
import ar from '../../../assets/ar.svg';
import customercoverage from '../../../assets/customer-coverage.svg';
import nonreguler from '../../../assets/non-reguler.svg';
import totalproject from '../../../assets/total-project.svg';
import ongoingproject from '../../../assets/ongoing-project.svg';
import pendingproject from '../../../assets/pending-project.svg';
// import pendingdepreciation from '../../../assets/pending-depreciation.svg';
// import { formatNumberWithCommas } from '~/utils/format';

interface SummaryItems {
  title: string;
  icon: ReactNode;
  total: (value: number) => string;
  amount: (value: number) => string;
  percentage: (value: number) => string;
  route: string;
}

interface SummarySectionProps {
  navigateToCertainPage: (route: string) => void;
}
const colors = [
  '#a36138', // Color for item 0
  '#f7c74f', // Color for item 1
  '#4caf50', // Color for item 2
  '#2196f3', // Color for item 3
  '#e91e63', // Color for item 4
  '#9c27b0', // Color for item 5
  '#ff9800', // Color for item 6
  '#ff2600', // Color for item 6
  // Add more colors as needed
];
const resp = {
  // demand: {
  //   total: 164,
  //   amount: 12290014970,
  //   percentage: 82,
  // },
  total_project: {
    total: 164,
    amount: 12290014970,
    percentage: 82,
  },
  ongoing_project: {
    total: 164,
    amount: 12290014970,
    percentage: 82,
  },
  pending_project: {
    total: 164,
    amount: 12290014970,
    percentage: 82,
  },
  project: {
    total: 164,
    amount: 12290014970,
    percentage: 82,
  },
  quotation: {
    total: 151,
    amount: 12067664970,
    percentage: 0.9207317073170732,
  },
  po: {
    total: 151,
    amount: 12067664970,
    percentage: 0.9207317073170732,
  },
  event_close: {
    total: 151,
    amount: 12067664970,
    percentage: 0.9207317073170732,
  },
  reporting: {
    total: 151,
    amount: 12067664970,
    percentage: 0.9207317073170732,
  },
  ar_performance: {
    total: 151,
    amount: 12067664970,
    percentage: 0.9207317073170732,
  },
  customer_coverage: {
    total: 151,
    amount: 12067664970,
    percentage: 0.9207317073170732,
  },
  non_regular_student: {
    total: 151,
    amount: 12067664970,
    percentage: 0.9207317073170732,
  },
};

const summaryItemsFirstRow: SummaryItems[] = [
  // {
  //   title: 'Demand',
  //   icon: <img src={demand} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
  //   total: (value: number) => value.toString(),
  //   amount: (value: number) => value.toString(),
  //   percentage: (value: number) => value.toFixed(2),
  //   route: '/kipl/demand',
  // },
  {
    title: 'Total Projects',
    icon: <img src={totalproject} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/project',
    // action: () => console.log('to detail'),
  },
  {
    title: 'On Going Projects',
    icon: <img src={ongoingproject} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/project',
    // action: () => console.log('to detail'),
  },
  {
    title: 'Pending Projects',
    icon: <img src={pendingproject} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/project',
    // action: () => console.log('to detail'),
  },
  {
    title: 'Project',
    icon: <img src={project} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/project',
  },
  {
    title: 'Quotation',
    icon: <img src={quotation} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/quotation',
  },
  {
    title: 'PO/SPK',
    icon: <img src={po} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/po-spk',
  },
  {
    title: 'Status Event Close',
    icon: <img src={eventclose} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/status-close',
  },
  {
    title: 'Reporting',
    icon: <img src={reporting} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/reporting',
  },
  {
    title: 'AR Performance',
    icon: <img src={ar} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/ar-performance',
  },
  {
    title: 'Customer Coverage',
    icon: <img src={customercoverage} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/customer-coverage',
  },
  // {
  //   title: 'Non Regular Students',
  //   icon: <img src={nonreguler} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
  //   total: (value: number) => value.toString(),
  //   amount: (value: number) => value.toString(),
  //   percentage: (value: number) => value.toFixed(2),
  //   route: '/kipl/non-regular-students',
  // },
];

export const SummarySection: React.FC<SummarySectionProps> = ({
  navigateToCertainPage: navigateToCertainScreen,
}) => {
  return (
    <SimpleGrid cols={5} spacing="xs" verticalSpacing="lg" mt={10}>
      {summaryItemsFirstRow.map((summaryItem, index) => {
        const groupedKiplValues = [
          resp.total_project.total,
          resp.ongoing_project.total,
          resp.pending_project.total,
          resp.project.total,
          resp.quotation.total,
          resp.po.total,
          resp.event_close.total,
          resp.reporting.total,
          resp.ar_performance.total,
          resp.customer_coverage.total,
          resp.non_regular_student.total,
        ];

        const groupedKiplAmounts = [
          resp.total_project.amount,
          resp.ongoing_project.amount,
          resp.pending_project.amount,
          resp.project.amount,
          resp.quotation.amount,
          resp.po.amount,
          resp.event_close.amount,
          resp.reporting.amount,
          resp.ar_performance.amount,
          resp.customer_coverage.amount,
          resp.non_regular_student.amount,
        ];

        const groupedKiplPercentages = [
          resp.total_project.percentage,
          resp.ongoing_project.percentage,
          resp.pending_project.percentage,
          resp.project.percentage,
          resp.quotation.percentage,
          resp.po.percentage,
          resp.event_close.percentage,
          resp.reporting.percentage,
          resp.ar_performance.percentage,
          resp.customer_coverage.percentage,
          resp.non_regular_student.percentage,
        ];

        // Kondisi untuk menampilkan amount dan persentase
        const shouldShowAmount = ![
          'Customer Coverage',
          'Total Projects',
          'On Going Projects',
          'Pending Projects',
          'Project',
          'Quotation',
          'PO/SPK',
          'Status Event Close',
          'Reporting',
        ].includes(summaryItem.title);

        const shouldShowPercentage = summaryItem.title === 'Customer Coverage';

        return (
          <Box
            key={summaryItem.title}
            bg="white"
            style={{
              backgroundColor: `rgba(253, 224, 71, 0.15)`,
              // backgroundColor: `rgba(${parseInt(colors[index % colors.length].slice(1, 3), 16)},
              // ${parseInt(colors[index % colors.length].slice(3, 5), 16)},
              // ${parseInt(colors[index % colors.length].slice(5, 7), 16)}, 0.1)`,
              position: 'relative',
              borderRadius: 30,
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              width: '200px',
              margin: '0 auto',
            }}
            sx={{
              ':hover': {
                cursor: 'pointer',
                transform: 'scale(1.1)',
              },
            }}
            onClick={() => navigateToCertainScreen(summaryItem.route)}>
            <Flex gap={1} px={12} py={10} className="justify-between items-center">
              <Box bg="transparent">
                <ThemeIcon
                  variant="light"
                  size="50px"
                  radius="40px"
                  color={colors[index % colors.length]}
                  sx={{
                    transform: 'rotate(0deg)',
                    ':hover': {
                      transform: 'rotate(45deg)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                    transition: 'transform 0.3s ease-in-out',
                  }}>
                  <div>{summaryItem.icon}</div>
                </ThemeIcon>
              </Box>
              <div className="w-full">
                <Box>
                  <Text className="text-end w-full" fz="sm" fw="bolder" color="#999999">
                    {summaryItem.title}
                  </Text>
                  <Text className="text-end" fz="40px" color="#000000" fw="bolder">
                    {summaryItem.total(groupedKiplValues[index])}
                  </Text>
                  {shouldShowAmount && (
                    <Text className="text-center" fz="xs" color="#7b7878" fw="bolder">
                      {groupedKiplAmounts[index] !== null
                        ? new Intl.NumberFormat('id-ID', {
                            style: 'currency',
                            currency: 'IDR',
                          }).format(groupedKiplAmounts[index])
                        : ''}
                    </Text>
                  )}
                </Box>
              </div>
            </Flex>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};
