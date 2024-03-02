import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { useGetTotalApprove } from '../api/useGetTotalApprove';
import { useGetTotalPurchaseOrders } from '../api/useGetTotalPurchaseOrder';
import { useGetTotalRfq } from '../api/useGetTotalRfq';
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
    title: 'Total Purchase Order',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/purchase/total-purchase',
  },
  {
    title: 'Total RFQ',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/purchase/total-rfq',
  },
  {
    title: 'Pending PR',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/purchase/pending-pr',
  },
  {
    title: 'Pending PO',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/purchase/pending-po',
  },
  {
    title: 'Pending Received',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/purchase/pending-received',
  },
  // {
  //   title: 'Quantity by Category',
  //   icon: <IconGraph />,
  //   amount: (value: string) => value,
  //   route: '/purchase/quantity-category',
  // },
  // {
  //   title: 'Quantity by Amount',
  //   icon: <IconGraph />,
  //   amount: (value: string) => value,
  //   route: '/purchase/quantity-amount',
  // },
  {
    title: 'To Approve',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/purchase/to-approve',
  },
];

export const SummarySection: React.FC<SummarySectionProps> = ({
  navigateToCertainPage: navigateToCertainScreen,
}) => {
  const { data: totalApprove } = useGetTotalApprove();
  const { data: totalPurchaseOrders } = useGetTotalPurchaseOrders();
  const { data: totalRfq } = useGetTotalRfq();

  return (
    <SimpleGrid cols={3} spacing="lg" verticalSpacing="lg" mt={10}>
      {summaryItems.map((summaryItem, index) => {
        {
          /* still dont know where pending pr, pending po, 
          pending received, quantity by category, quantity by amount, come from */
        }
        const groupedInventoryValues = [
          totalPurchaseOrders?.sum,
          totalRfq?.sum,
          0,
          0,
          0,
          0,
          0,
          totalApprove?.sum,
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
              <Box
                bg="transparent"
                px={12}
                // style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}
              >
                <ThemeIcon variant="light" size="xl" radius="xl" color="#8a92c6" my={15}>
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
