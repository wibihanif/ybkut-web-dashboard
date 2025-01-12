import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
// import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { useGetTotalProducts } from '../api/useGetTotalProducts';
import { useGetTotalValues } from '../api/useGetTotalValues';
import { useGetCurrentStocks } from '../api/useGetCurrentStocks';
import { useGetPendingTransfers } from '../api/useGetPendingTransfers';
import { useGetPendingReceipts } from '../api/useGetPendingReceipts';
import { formatNumberWithCommas } from '~/utils/format';
import totalproduk from '../../../assets/total-produk.svg';
import totalinventory from '../../../assets/total-inventory.svg';
import currentstock from '../../../assets/current-stock.svg';
import pendingtransfer from '../../../assets/pending-transfer.svg';
import pendingreceipt from '../../../assets/pending-receipt.svg';

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
    title: 'Total Produk',
    icon: <img src={totalproduk} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/inventory/total-product',
  },
  {
    title: 'Total Inventori Value',
    icon: <img src={totalinventory} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/inventory/total-inventory',
  },
  {
    title: 'Current Stock',
    icon: <img src={currentstock} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/inventory/current-stock',
  },
  {
    title: 'Pending Transfer',
    icon: <img src={pendingtransfer} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/inventory/pending-transfer',
  },
  {
    title: 'Pending Receipt',
    icon: <img src={pendingreceipt} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
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
              backgroundColor: `rgba(${parseInt(colors[index % colors.length].slice(1, 3), 16)}, 
              ${parseInt(colors[index % colors.length].slice(3, 5), 16)}, 
              ${parseInt(colors[index % colors.length].slice(5, 7), 16)}, 0.1)`,
              position: 'relative',
              borderRadius: 30,
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              width: '350px',
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
            <Flex gap={20} px={12} py={10} className="justify-between items-center">
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
              <div className="w-100%">
                <Box>
                  <Text className="text-end w-full" fz="sm" fw="bolder" color="#999999">
                    {summaryItem.title}
                  </Text>
                  <Text className="text-end" fz="md" color="#000000" fw="bolder">
                    {summaryItem.amount(formatNumberWithCommas(groupedInventoryValues[index] || 0))}
                  </Text>
                  {/* <Text fz="lg" color="#7D7C7C" fw="bolder">
                    Total: {summaryItem.total(groupedKiplValues[index])}
                  </Text> */}
                  {/* <Text fz="sm" color="#7D7C7C" fw="bold">
                    {summaryItem.amount}
                  </Text> */}
                  {/* <Text fz="sm" color="#7D7C7C" fw="bold">
                    Amount: {summaryItem.percentage(groupedKiplPercentages[index])}%
                  </Text> */}
                </Box>
              </div>
            </Flex>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};
