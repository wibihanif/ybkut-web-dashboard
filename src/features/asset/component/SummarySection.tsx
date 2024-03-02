import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { useGetTotalEquipment } from '../api/useGetTotalEquipment';
import { formatNumberWithCommas } from '~/utils/format';
import { useGetTotalAssets } from '../api/useGetTotalAssets';
import { useGetTotalRunningDepreciation } from '../api/useGetTotalRunningDepreciation';
import { useGetTotalDoneDepreciation } from '../api/useGetTotalDoneDepreciation';
import { useGetTotalPendingDepreciation } from '../api/useGetTotalPendingDepreciation';
import { useGetTotalScrapProduct } from '../api/useGetTotalScrapProduct';

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
    title: 'Total Equipment',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/asset/total-equipment',
  },
  {
    title: 'Total Asset',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/asset/total-asset',
  },
  {
    title: 'Running Depreciation',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/asset/running-depreciation',
  },
  {
    title: 'Done Depreciation',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/asset/done-depreciation',
  },
  {
    title: 'Pending Depresiation',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/asset/pending-depreciation',
  },
  {
    title: 'Total Scrap Product',
    icon: <IconGraph />,
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
                    {summaryItem.amount(formatNumberWithCommas(groupedAssetsValues[index] || 0))}
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
