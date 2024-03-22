import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { useGetAcademic } from '../api/useGetAcademic';
import { formatNumberWithCommas } from '~/utils/format';

// interface SummaryItems {
//   title: string;
//   icon: ReactNode;
//   amount: number;
//   action: () => void;
// }
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
    title: 'Lulusan Reguler',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/akademik/lulusan-regular',
  },
  {
    title: 'Lulusan Non-Reguler',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/akademik/lulusan-non-regular',
  },
  {
    title: 'Semua Lulusan',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/akademik/semua-lulusan',
  },
  {
    title: 'Lulusan CSR',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/akademik/lulusan-csr',
  },
  {
    title: 'Jumlah Siswa',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/akademik/jumlah-siswa',
  },
  {
    title: 'Siswa reguler yang D.O',
    icon: <IconGraph />,
    amount: (value: string) => value,
    route: '/akademik/siswa-regular-do',
  },
  // {
  //   title: 'Jumlah Alumni',
  //   icon: <IconGraph />,
  //   amount: (value: string) => value,
  //   route: '/akademik/jumlah-alumni',
  // },
];

export const SummarySection: React.FC<SummarySectionProps> = ({
  navigateToCertainPage: navigateToCertainScreen,
}) => {
  const { data: academic } = useGetAcademic();
  if (!academic || !academic[0] || !academic[0]?.output || !academic[0]?.execution) {
    return null; // Return null or loading indicator if academic data is not available yet
  }
  return (
    <SimpleGrid cols={3} spacing="lg" verticalSpacing="lg" mt={10}>
      {summaryItems.map((summaryItem, index) => {
        const groupedInventoryValues = [
          academic[0]?.output[0]?.jumlah_alumni[0]?.reguler,
          academic[0]?.output[0]?.jumlah_alumni[0]?.non_reguler,
          academic[0]?.output[0]?.jumlah_alumni[0]?.total,
          academic[0]?.output[0]?.jumlah_alumni[0]?.csr,
          academic[0]?.execution[0]?.siswa[0]?.total,
        ];
        // const groupedInventoryValues = [academic[0]?.execution[0]?.siswa[0]?.non_reguler];
        // const groupedInventoryValues = [academic[0]?.execution[0]?.siswa[0]?.total];
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
