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
import demand from '../../../assets/demand.svg';
import project from '../../../assets/project.svg';
import quotation from '../../../assets/quotation.svg';
import po from '../../../assets/po.svg';
import eventclose from '../../../assets/event-close.svg';
import reporting from '../../../assets/reporting.svg';
import ar from '../../../assets/ar.svg';
import customercoverage from '../../../assets/customer-coverage.svg';
import nonreguler from '../../../assets/non-reguler.svg';
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

const resp = {
  demand: {
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
  {
    title: 'Demand',
    icon: <img src={demand} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/demand',
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
  {
    title: 'Non Regular Students',
    icon: <img src={nonreguler} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/non-regular-students',
  },
];

export const SummarySection: React.FC<SummarySectionProps> = ({
  navigateToCertainPage: navigateToCertainScreen,
}) => {
  return (
    <SimpleGrid cols={3} spacing="lg" verticalSpacing="lg" mt={10}>
      {summaryItemsFirstRow.map((summaryItem, index) => {
        const groupedKiplValues = [
          resp.demand.total,
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
          resp.demand.amount, // Assuming demand does not have an amount
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
          resp.demand.percentage, // Assuming demand does not have a percentage
          resp.project.percentage,
          resp.quotation.percentage,
          resp.po.percentage,
          resp.event_close.percentage,
          resp.reporting.percentage,
          resp.ar_performance.percentage,
          resp.customer_coverage.percentage,
          resp.non_regular_student.percentage,
        ];
        return (
          <Box
            key={summaryItem.title}
            bg="white"
            style={{
              position: 'relative',
              borderRadius: 8,
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
            }}
            sx={{
              ':hover': {
                cursor: 'pointer',
                transform: 'scale(1.1)',
              },
              '::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '15px', // Adjust the height as needed
                backgroundColor: '#a37538',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              },
            }}
            onClick={() => navigateToCertainScreen(summaryItem.route)}>
            <Flex gap={20} px={12} py={15} className="justify-between items-center">
              <div className="w-100%">
                <Box>
                  <Text fz="lg" fw="bolder">
                    {summaryItem.title}
                  </Text>
                  <Text fz="lg" color="#7D7C7C" fw="bolder">
                    Total: {summaryItem.total(groupedKiplValues[index])}
                  </Text>
                  <Text fz="sm" color="#7D7C7C" fw="bold">
                    Amount: {summaryItem.amount(groupedKiplAmounts[index])}
                  </Text>
                  <Text fz="sm" color="#7D7C7C" fw="bold">
                    Amount: {summaryItem.percentage(groupedKiplPercentages[index])}%
                  </Text>
                </Box>
              </div>

              <Box bg="transparent">
                <ThemeIcon
                  variant="light"
                  size="50px"
                  radius="xl"
                  color="#a37538"
                  style={{ width: '100%', height: '100%' }}>
                  <div>{summaryItem.icon}</div>
                </ThemeIcon>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};
