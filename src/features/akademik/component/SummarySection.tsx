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
              backgroundColor: `rgba(253, 224, 71, 0.15)`,
              // backgroundColor: `rgba(${parseInt(colors[index % colors.length].slice(1, 3), 16)},
              // ${parseInt(colors[index % colors.length].slice(3, 5), 16)},
              // ${parseInt(colors[index % colors.length].slice(5, 7), 16)}, 0.1)`,
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
            {/* <Flex gap={20}>
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
            </Flex> */}
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
