import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
// import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { useGetAcademic } from '../api/useGetAcademic';
import { formatNumberWithCommas } from '~/utils/format';
import lulusanreguler from '../../../assets/lulusan-reguler.svg';
import lulusannonreguler from '../../../assets/lulusan-nonreguler.svg';
import semualulusan from '../../../assets/semua-lulusan.svg';
import lulusancsr from '../../../assets/lulusan-csr.svg';
import jumlahsiswa from '../../../assets/jumlah-siswa.svg';
import siswado from '../../../assets/siswa-dropout.svg';

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
    icon: <img src={lulusanreguler} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/akademik/lulusan-regular',
  },
  {
    title: 'Lulusan Non-Reguler',
    icon: (
      <img src={lulusannonreguler} alt="Pending PO" style={{ width: '32px', height: '32px' }} />
    ),
    amount: (value: string) => value,
    route: '/akademik/lulusan-non-regular',
  },
  {
    title: 'Semua Lulusan',
    icon: <img src={semualulusan} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/akademik/semua-lulusan',
  },
  {
    title: 'Lulusan CSR',
    icon: <img src={lulusancsr} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/akademik/lulusan-csr',
  },
  {
    title: 'Jumlah Siswa',
    icon: <img src={jumlahsiswa} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    amount: (value: string) => value,
    route: '/akademik/jumlah-siswa',
  },
  {
    title: 'Siswa reguler yang D.O',
    icon: <img src={siswado} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
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
                <ThemeIcon variant="light" size="xl" radius="xl" color="#a37538" my={15}>
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
