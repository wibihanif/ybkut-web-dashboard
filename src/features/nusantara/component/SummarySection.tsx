import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { useGetSchoolGraduates } from '../api/useGetSchoolGraduates';
import { useGetSchoolStudents } from '../api/useGetSchoolStudents';
import { useGetSchoolSales } from '../api/useGetSchoolSales';
import { toRupiah } from '~/utils/format';

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
      icon: <IconGraph />,
      amount: 18,
      action: () => console.log('to detail'),
    },
    {
      title: 'On Going Projects',
      icon: <IconGraph />,
      amount: 18,
      action: () => console.log('to detail'),
    },
    {
      title: 'Pending Projects',
      icon: <IconGraph />,
      amount: 18,
      action: () => console.log('to detail'),
    },
    {
      title: 'Canceled Projects',
      icon: <IconGraph />,
      amount: 18,
      action: () => console.log('to detail'),
    },
    {
      title: 'Number of Graduates',
      icon: <IconGraph />,
      amount: Number(graduates ? graduates[0].total_graduate : 0),
      action: () => console.log('to detail'),
    },
    {
      title: 'Number of Students and Participants',
      icon: <IconGraph />,
      amount: Number(students ? students[0].total_student : 0),
      action: () => console.log('to detail'),
    },
    {
      title: 'Sales Performance',
      icon: <IconGraph />,
      amount: sales ? `${toRupiah(totalAmount)} JT` : 0,
      action: () => console.log('to detail'),
    },
    {
      title: 'Winning Ratio',
      icon: <IconGraph />,
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
