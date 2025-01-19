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
    <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm" mt={10}>
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
              backgroundColor: `transparent`,
              position: 'relative',
              borderRadius: 15,
              borderColor: 'rgba(96, 165, 250, 1)',
              borderWidth: '3px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              width: '350px',
              height: '140px',
              margin: '0 auto',
            }}
            sx={{
              ':hover': {
                cursor: 'pointer',
                transform: 'scale(1.1)',
              },
              '::before': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '5px', // Adjust the height as needed
                // backgroundColor: '#a37538',
                // backgroundColor: colors[index % colors.length],
                // borderTopLeftRadius: 2,
                // borderTopRightRadius: 2,
              },
            }}
            onClick={() => navigateToCertainScreen(summaryItem.route)}>
            <Flex gap={30} px={22} py={10} className="justify-between ">
              <Box bg="transparent">
                <ThemeIcon
                  variant="light"
                  size="46px"
                  radius="40px"
                  color="rgba(96, 165, 250, 1)"
                  sx={{
                    transform: 'rotate(0deg)',
                    ':hover': {
                      transform: 'rotate(45deg)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                    transition: 'transform 0.3s ease-in-out',
                  }}>
                  {/* <ThemeIcon variant="light" size="xl" radius="xl" color="#3845a3" my={15}> */}
                  {summaryItem.icon}
                </ThemeIcon>
                <Text className="mt-5 w-full" fz="sm" fw="bolder" color="#999999">
                  {summaryItem.title}
                </Text>
                {summaryItem.title == 'Total Purchase Order' ? (
                  <Text className="" fz="md" color="#000000" fw="bolder">
                    Rp.{' '}
                    {summaryItem.amount(formatNumberWithCommas(groupedInventoryValues[index] || 0))}
                  </Text>
                ) : (
                  <Text className="" fz="md" color="#000000" fw="bolder">
                    {summaryItem.amount(formatNumberWithCommas(groupedInventoryValues[index] || 0))}
                  </Text>
                )}
                {/* <Text className="" fz="md" color="#000000" fw="bolder">
                  {summaryItem.amount(formatNumberWithCommas(groupedInventoryValues[index] || 0))}
                </Text> */}
              </Box>

              <div className="mt-3 w-100%">
                <div className="text-sm text-green-500">Last Month +8%</div>
                {/* <Box> */}
                {/* <Text className="text-end w-full" fz="sm" fw="bolder" color="#999999">
                    {summaryItem.title}
                  </Text>
                  <Text className="text-end" fz="md" color="#000000" fw="bolder">
                    {summaryItem.amount(formatNumberWithCommas(groupedInventoryValues[index] || 0))}
                  </Text> */}
                {/* <Text fz="lg" color="#7D7C7C" fw="bolder">
                    Total: {summaryItem.total(groupedKiplValues[index])}
                  </Text> */}
                {/* <Text fz="sm" color="#7D7C7C" fw="bold">
                    {summaryItem.amount}
                  </Text> */}
                {/* <Text fz="sm" color="#7D7C7C" fw="bold">
                    Amount: {summaryItem.percentage(groupedKiplPercentages[index])}%
                  </Text> */}
                {/* </Box> */}
              </div>
            </Flex>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};
