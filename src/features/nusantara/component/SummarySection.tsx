import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
// import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { useGetSchoolGraduates } from '../api/useGetSchoolGraduates';
import { useGetSchoolStudents } from '../api/useGetSchoolStudents';
import { useGetSchoolSales } from '../api/useGetSchoolSales';
import { toRupiah } from '~/utils/format';
import totalproject from '../../../assets/total-project.svg';
import ongoingproject from '../../../assets/ongoing-project.svg';
import pendingproject from '../../../assets/pending-project.svg';
import canceledproject from '../../../assets/canceled-project.svg';
import numbergraduates from '../../../assets/number-graduates.svg';
import numberstudents from '../../../assets/number-students.svg';
import salesperformance from '../../../assets/sales-performance.svg';
import winningratio from '../../../assets/winning-ratio.svg';

interface SummaryItems {
  title: string;
  icon: ReactNode;
  amount: any;
  action: () => void;
}

export const SummarySection = () => {
  const { data: graduates } = useGetSchoolGraduates();
  const { data: students } = useGetSchoolStudents();
  const { data: sales } = useGetSchoolSales();

  let totalAmount = 0;

  if (sales) {
    sales[0].top_customer?.forEach((cust: any) => {
      if (cust.status == 'APPROVAL') {
        totalAmount += Number(cust.amount);
      }
    });
  }

  const summaryItemsFirstRow: SummaryItems[] = [
    {
      title: 'Total Projects',
      icon: <img src={totalproject} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
      amount: 18,
      action: () => console.log('to detail'),
    },
    {
      title: 'On Going Projects',
      icon: <img src={ongoingproject} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
      amount: 18,
      action: () => console.log('to detail'),
    },
    {
      title: 'Pending Projects',
      icon: <img src={pendingproject} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
      amount: 18,
      action: () => console.log('to detail'),
    },
    {
      title: 'Canceled Projects',
      icon: (
        <img src={canceledproject} alt="Pending PO" style={{ width: '32px', height: '32px' }} />
      ),
      amount: 18,
      action: () => console.log('to detail'),
    },
    {
      title: 'Number of Graduates',
      icon: (
        <img src={numbergraduates} alt="Pending PO" style={{ width: '32px', height: '32px' }} />
      ),
      amount: Number(graduates ? graduates[0].total_graduate : 0),
      action: () => console.log('to detail'),
    },
    {
      title: 'Number of Students and Participants',
      icon: <img src={numberstudents} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
      amount: Number(students ? students[0].total_student : 0),
      action: () => console.log('to detail'),
    },
    {
      title: 'Sales Performance',
      icon: (
        <img src={salesperformance} alt="Pending PO" style={{ width: '32px', height: '32px' }} />
      ),
      amount: sales ? `${toRupiah(totalAmount)} JT` : 0,
      action: () => console.log('to detail'),
    },
    {
      title: 'Winning Ratio',
      icon: <img src={winningratio} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
      amount: 0,
      action: () => console.log('to detail'),
    },
  ];

  return (
    <SimpleGrid cols={3} spacing="lg" verticalSpacing="lg" mt={10}>
      {summaryItemsFirstRow.map(summaryItem => {
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
            onClick={summaryItem.action}>
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
