import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';

// interface SummaryItems {
//   title: string;
//   icon: ReactNode;
//   amount: number;
//   action: () => void;
// }
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
  {
    title: 'Semua Lulusan',
    icon: <IconGraph />,
    amount: 18,
    route: '/akademik/semua-lulusan',
  },
  {
    title: 'Lulusan Reguler',
    icon: <IconGraph />,
    amount: 18,
    route: '/akademik/lulusan-regular',
  },
  {
    title: 'Lulusan Non-Reguler',
    icon: <IconGraph />,
    amount: 18,
    route: '/akademik/lulusan-non-regular',
  },
  {
    title: 'Lulusan CSR',
    icon: <IconGraph />,
    amount: 18,
    route: '/akademik/lulusan-csr',
  },
  {
    title: 'Siswa reguler yang D.O',
    icon: <IconGraph />,
    amount: 18,
    route: '/akademik/siswa-regular-do',
  },
  {
    title: 'Jumlah Siswa',
    icon: <IconGraph />,
    amount: 18,
    route: '/akademik/jumlah-siswa',
  },
  {
    title: 'Jumlah Alumni',
    icon: <IconGraph />,
    amount: 18,
    route: '/akademik/jumlah-alumni',
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
