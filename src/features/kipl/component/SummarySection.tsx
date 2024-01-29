import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';

interface SummaryItems {
  title: string;
  icon: ReactNode;
  amount: any;
  route: string;
}
interface SummarySectionProps {
  navigateToCertainPage: (route: string) => void;
}

const summaryItemsFirstRow: SummaryItems[] = [
  {
    title: 'Demand',
    icon: <IconGraph />,
    amount: 18,
    route: '/kipl/demand',
  },
  {
    title: 'Project',
    icon: <IconGraph />,
    amount: '18 M',
    route: '/kipl/project',
  },
  {
    title: 'Quotation',
    icon: <IconGraph />,
    amount: '18 M / 18 M',
    route: '/kipl/quotation',
  },
  {
    title: 'PO/SPK',
    icon: <IconGraph />,
    amount: 18,
    route: '/kipl/po-spk',
  },
  {
    title: 'Status Event Close',
    icon: <IconGraph />,
    amount: 18,
    route: '/kipl/status-close',
  },
  {
    title: 'Reporting',
    icon: <IconGraph />,
    amount: 18,
    route: '/kipl/reporting',
  },
  {
    title: 'AR Performance',
    icon: <IconGraph />,
    amount: 18,
    route: '/kipl/ar-performance',
  },
  {
    title: 'Customer Coverage',
    icon: <IconGraph />,
    amount: 18,
    route: '/kipl/customer-coverage',
  },
  {
    title: 'Non Regular Students',
    icon: <IconGraph />,
    amount: 18,
    route: '/kipl/non-regular-students',
  },
];

// const summaryItemsSecondRow: SummaryItems[] = [
//   {
//     title: 'Jumlah Customer',
//     icon: <IconGraph />,
//     amount: 18,
//     action: () => console.log('to detail'),
//   },
//   {
//     title: 'Cancel Project',
//     icon: <IconGraph />,
//     amount: 18,
//     action: () => console.log('to detail'),
//   },
//   {
//     title: 'Ongoing Project',
//     icon: <IconGraph />,
//     amount: 18,
//     action: () => console.log('to detail'),
//   },
//   {
//     title: 'Pending Project',
//     icon: <IconGraph />,
//     amount: 18,
//     action: () => console.log('to detail'),
//   },
// ];

export const SummarySection: React.FC<SummarySectionProps> = ({
  navigateToCertainPage: navigateToCertainScreen,
}) => {
  return (
    <SimpleGrid cols={3} spacing="lg" verticalSpacing="lg" mt={10}>
      {summaryItemsFirstRow.map(summaryItem => {
        return (
          <Box
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
              <Box
                bg="transparent"
                px={12}
                // style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}
              >
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
                    {summaryItem.amount}
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
