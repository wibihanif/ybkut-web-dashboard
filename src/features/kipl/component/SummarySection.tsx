import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { formatNumberWithCommas } from '~/utils/format';

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
  demand: 2,
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
    icon: <IconGraph />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/demand',
  },
  {
    title: 'Project',
    icon: <IconGraph />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/project',
  },
  {
    title: 'Quotation',
    icon: <IconGraph />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/quotation',
  },
  {
    title: 'PO/SPK',
    icon: <IconGraph />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/po-spk',
  },
  {
    title: 'Status Event Close',
    icon: <IconGraph />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/status-close',
  },
  {
    title: 'Reporting',
    icon: <IconGraph />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/reporting',
  },
  {
    title: 'AR Performance',
    icon: <IconGraph />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/ar-performance',
  },
  {
    title: 'Customer Coverage',
    icon: <IconGraph />,
    total: (value: number) => value.toString(),
    amount: (value: number) => value.toString(),
    percentage: (value: number) => value.toFixed(2),
    route: '/kipl/customer-coverage',
  },
  {
    title: 'Non Regular Students',
    icon: <IconGraph />,
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
          resp.demand,
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
          0, // Assuming demand does not have an amount
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
          0, // Assuming demand does not have a percentage
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
              borderRadius: 8,
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
            }}
            sx={{
              ':hover': {
                cursor: 'pointer',
                transform: 'scale(1.1)',
              },
            }}
            onClick={() => navigateToCertainScreen(summaryItem.route)}>
            <Flex gap={20}>
              <Box bg="transparent" px={12}>
                <ThemeIcon variant="light" size="xl" radius="xl" color="#ceb28d" my={15}>
                  {summaryItem.icon}
                </ThemeIcon>
              </Box>

              <Center>
                <Box>
                  <Text fz="sm" fw="bold">
                    {summaryItem.title}
                  </Text>
                  <Text fz="sm" color="#7D7C7C" fw="bold">
                    Total: {summaryItem.total(groupedKiplValues[index])}
                  </Text>
                  <Text fz="sm" color="#7D7C7C" fw="bold">
                    Amount: {summaryItem.amount(groupedKiplAmounts[index])}
                  </Text>
                  <Text fz="sm" color="#7D7C7C" fw="bold">
                    Percentage: {summaryItem.percentage(groupedKiplPercentages[index])}%
                  </Text>
                </Box>
              </Center>
            </Flex>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};
