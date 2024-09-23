import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
// import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { useGetTotalApprove } from '../api/useGetTotalApprove';
import { useGetTotalPurchaseOrders } from '../api/useGetTotalPurchaseOrder';
import { useGetTotalRfq } from '../api/useGetTotalRfq';
import { formatNumberWithCommas } from '~/utils/format';
import { useGetTotalPendingPO } from '../api/useGetTotalPendingPO';
import { useGetTotalPendingPR } from '../api/useGetTotalPendingPR';
import { useGetTotalPendingReceive } from '../api/useGetTotalPendingReceive';
import totalrfq from '../../../assets/pending-po.svg';
import pendingpo from '../../../assets/pending-po-1.svg';
import pendingpr from '../../../assets/pending-pr.svg';
import pendingreceive from '../../../assets/pending-receive.svg';
import toapprove from '../../../assets/to-approve.svg';
import totalpurchase from '../../../assets/total-purchase.svg';

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
    icon: <img src={totalpurchase} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/purchase/total-purchase',
  },
  {
    title: 'Total RFQ',
    icon: <img src={totalrfq} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/purchase/total-rfq',
  },
  {
    title: 'Pending PR',
    icon: <img src={pendingpr} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/purchase/pending-pr',
  },
  {
    title: 'Pending PO',
    icon: <img src={pendingpo} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/purchase/pending-po',
  },
  {
    title: 'Pending Received',
    icon: <img src={pendingreceive} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
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
    icon: <img src={toapprove} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
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
  const { data: totalPendingPR } = useGetTotalPendingPR();
  const { data: totalPendingPO } = useGetTotalPendingPO();
  const { data: totalPendingReceive } = useGetTotalPendingReceive();

  return (
    <SimpleGrid cols={3} spacing="lg" verticalSpacing="lg" mt={10}>
      {summaryItems.map((summaryItem, index) => {
        const groupedInventoryValues = [
          totalPurchaseOrders?.sum,
          totalRfq?.sum,
          totalPendingPR?.count,
          totalPendingPO?.count,
          totalPendingReceive?.count,
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
                <ThemeIcon variant="light" size="xl" radius="xl" color="#3845a3" my={15}>
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
