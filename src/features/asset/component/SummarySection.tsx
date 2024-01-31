import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';

interface SummaryItems {
  title: string;
  icon: ReactNode;
  amount: number;
  route: string;
}

interface SummarySectionProps {
  navigateToCertainPage: (route: string) => void;
}

const summaryItems: SummaryItems[] = [
  // {
  //   title: 'Pending Purchase Request',
  //   icon: <IconGraph />,
  //   amount: 18,
  //   route: '/asset/pending-purchase-request',
  // },
  // {
  //   title: 'Pending Purchase Order',
  //   icon: <IconGraph />,
  //   amount: 18,
  //   route: '/asset/pending-purchase-order',
  // },
  // {
  //   title: 'Pending Purchase Received',
  //   icon: <IconGraph />,
  //   amount: 18,
  //   route: '/asset/pending-purchase-received',
  // },
  {
    title: 'Total Equipment',
    icon: <IconGraph />,
    amount: 18,
    route: '/asset/total-equipment',
  },
  {
    title: 'Total Asset',
    icon: <IconGraph />,
    amount: 18,
    route: '/asset/total-asset',
  },
  {
    title: 'Running Depreciation',
    icon: <IconGraph />,
    amount: 18,
    route: '/asset/running-depreciation',
  },
  {
    title: 'Done Depreciation',
    icon: <IconGraph />,
    amount: 18,
    route: '/asset/done-depreciation',
  },
  {
    title: 'Pending Depresiation',
    icon: <IconGraph />,
    amount: 18,
    route: '/asset/pending-depreciation',
  },
  {
    title: 'Total Scrap Product',
    icon: <IconGraph />,
    amount: 18,
    route: '/asset/total-scrap-product',
  },
  {
    title: 'Equipent by Category 1',
    icon: <IconGraph />,
    amount: 18,
    route: '/asset/equipment-category-1',
  },
  {
    title: 'Equipment by Category 2',
    icon: <IconGraph />,
    amount: 18,
    route: '/asset/equipment-category-2',
  },
];

export const SummarySection: React.FC<SummarySectionProps> = ({
  navigateToCertainPage: navigateToCertainScreen,
}) => {
  return (
    <SimpleGrid cols={4} spacing="lg" verticalSpacing="lg" mt={10}>
      {summaryItems.map(summaryItem => {
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
              <Box bg="transparent" px={12}>
                <ThemeIcon variant="light" size="xl" radius="xl" color="#8a92c6" my={15}>
                  {summaryItem.icon}
                </ThemeIcon>
              </Box>

              <Center>
                <Box>
                  <Text fz="xs" fw="bold">
                    {summaryItem.title}
                  </Text>
                  <Text fz="md" color="#7D7C7C" fw="bold">
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
