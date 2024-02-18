import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { useGetTotalProducts } from '../api/useGetTotalProducts';
import { useGetTotalValues } from '../api/useGetTotalValues';
import { useGetCurrentStocks } from '../api/useGetCurrentStocks';
import { useGetPendingTransfers } from '../api/useGetPendingTransfers';
import { useGetPendingReceipts } from '../api/useGetPendingReceipts';
import { formatNumberWithCommas } from '~/utils/format';

interface SummaryItems {
  title: string;
  icon: ReactNode;
  amount: (value: string) => string;
  route: string;
}

interface SummarySectionProps {
  navigateToCertainPage: (route: string) => void;
}

const summaryItems: SummaryItems[] = [
  {
    title: 'Total Produk',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/inventory/total-product',
  },
  {
    title: 'Total Inventori Value',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/inventory/total-inventory',
  },
  {
    title: 'Current Stock',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/inventory/current-stock',
  },
  {
    title: 'Pending Transfer',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/inventory/pending-transfer',
  },
  {
    title: 'Pending Receipt',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/inventory/pending-receipt',
  },
  // {
  //   title: 'Total Per Category',
  //   icon: <IconGraph />,
  //   amount: (value: string) => value,
  //   route: '/inventory/total-category',
  // },
];

export const SummarySection: React.FC<SummarySectionProps> = ({
  navigateToCertainPage: navigateToCertainScreen,
}) => {
  const { data: totalProducts } = useGetTotalProducts();
  const { data: totalValues } = useGetTotalValues();
  const { data: currentStocks } = useGetCurrentStocks();
  const { data: pendingTransfers } = useGetPendingTransfers();
  const { data: pendingReceipts } = useGetPendingReceipts();

  return (
    <SimpleGrid cols={3} spacing="lg" verticalSpacing="lg" mt={10}>
      {/* still dont know where total per category come from */}
      {summaryItems.map((summaryItem, index) => {
        const groupedInventoryValues = [
          totalProducts?.totalProducts,
          totalValues?.totalValues,
          currentStocks?.currentStocks,
          pendingTransfers?.pendingTransfers,
          pendingReceipts?.pendingReceipts,
          0,
        ];

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
                <ThemeIcon variant="light" size="xl" radius="xl" color="#a6b2df" my={15}>
                  {summaryItem.icon}
                </ThemeIcon>
              </Box>

              <Center>
                <Box>
                  <Text fz="sm" fw="bold">
                    {summaryItem.title}
                  </Text>
                  <Text fz="sm" color="#7D7C7C" fw="bold">
                    {summaryItem.amount(formatNumberWithCommas(groupedInventoryValues[index] || 0))}
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
