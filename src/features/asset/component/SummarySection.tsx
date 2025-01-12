import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
// import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { useGetTotalEquipment } from '../api/useGetTotalEquipment';
import { formatNumberWithCommas } from '~/utils/format';
import { useGetTotalAssets } from '../api/useGetTotalAssets';
import { useGetTotalRunningDepreciation } from '../api/useGetTotalRunningDepreciation';
import { useGetTotalDoneDepreciation } from '../api/useGetTotalDoneDepreciation';
import { useGetTotalPendingDepreciation } from '../api/useGetTotalPendingDepreciation';
import { useGetTotalScrapProduct } from '../api/useGetTotalScrapProduct';
import totalequipment from '../../../assets/total-equipment.svg';
import totalasset from '../../../assets/total-asset.svg';
import totalscrap from '../../../assets/total-scrapt.svg';
import runningdepreciation from '../../../assets/running-depreciation.svg';
import donedepreciation from '../../../assets/done-depreciation.svg';
import pendingdepreciation from '../../../assets/pending-depreciation.svg';

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
    title: 'Total Equipment',
    icon: <img src={totalequipment} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/asset/total-equipment',
  },
  {
    title: 'Total Asset',
    icon: <img src={totalasset} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/asset/total-asset',
  },
  {
    title: 'Running Depreciation',
    icon: (
      <img src={runningdepreciation} alt="Pending PO" style={{ width: '32px', height: '32px' }} />
    ),
    amount: (value: string) => value,
    route: '/asset/running-depreciation',
  },
  {
    title: 'Done Depreciation',
    icon: <img src={donedepreciation} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/asset/done-depreciation',
  },
  {
    title: 'Pending Depresiation',
    icon: (
      <img src={pendingdepreciation} alt="Pending PO" style={{ width: '32px', height: '32px' }} />
    ),
    amount: (value: string) => value,
    route: '/asset/pending-depreciation',
  },
  {
    title: 'Total Scrap Product',
    icon: <img src={totalscrap} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/asset/total-scrap-product',
  },
  // {
  //   title: 'Equipent by Category 1',
  //   icon: <IconGraph />,
  //   amount: (value: string) => value,
  //   route: '/asset/equipment-category-1',
  // },
  // {
  //   title: 'Equipment by Category 2',
  //   icon: <IconGraph />,
  //   amount: (value: string) => value,
  //   route: '/asset/equipment-category-2',
  // },
];

export const SummarySection: React.FC<SummarySectionProps> = ({
  navigateToCertainPage: navigateToCertainScreen,
}) => {
  const { data: totalEquipment } = useGetTotalEquipment();
  const { data: totalAssets } = useGetTotalAssets();
  const { data: totalRunningApreciation } = useGetTotalRunningDepreciation();
  const { data: totalDoneApreciation } = useGetTotalDoneDepreciation();
  const { data: totalPendingApreciation } = useGetTotalPendingDepreciation();
  const { data: totalScrapProduct } = useGetTotalScrapProduct();

  return (
    <SimpleGrid cols={3} spacing="lg" verticalSpacing="lg" mt={10}>
      {summaryItems.map((summaryItem, index) => {
        const groupedAssetsValues = [
          totalEquipment?.totalEquipment,
          totalAssets?.totalAssets,
          totalRunningApreciation?.totalRunningDepreciation,
          totalDoneApreciation?.totalDoneDepreciation,
          totalPendingApreciation?.totalPendingDepreciation,
          totalScrapProduct?.totalScrapProduct,
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
                    {summaryItem.amount(formatNumberWithCommas(groupedAssetsValues[index] || 0))}
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
