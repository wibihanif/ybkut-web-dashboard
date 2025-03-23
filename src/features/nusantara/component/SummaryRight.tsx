import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
// import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { useGetSchoolGraduates } from '../api/useGetSchoolGraduates';
import { useGetSchoolStudents } from '../api/useGetSchoolStudents';
import { useGetSchoolSales } from '../api/useGetSchoolSales';
import { toRupiah } from '~/utils/format';
// import totalproject from '../../../assets/total-project.svg';
// import ongoingproject from '../../../assets/ongoing-project.svg';
// import pendingproject from '../../../assets/pending-project.svg';
// import canceledproject from '../../../assets/canceled-project.svg';
import updated from '../../../assets/updated.svg';
import numberstudents from '../../../assets/number-students.svg';
import salesperformance from '../../../assets/salesperformance.svg';
import winningratio from '../../../assets/winningratio.svg';

interface SummaryItems {
  title: string;
  icon: ReactNode;
  amount: any;
  action: () => void;
}

export const SummaryRight = () => {
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
    // {
    //   title: 'Total Projects',
    //   icon: <img src={totalproject} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    //   amount: 18,
    //   action: () => console.log('to detail'),
    // },
    // {
    //   title: 'On Going Projects',
    //   icon: <img src={ongoingproject} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    //   amount: 18,
    //   action: () => console.log('to detail'),
    // },
    // {
    //   title: 'Pending Projects',
    //   icon: <img src={pendingproject} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
    //   amount: 18,
    //   action: () => console.log('to detail'),
    // },
    // {
    //   title: 'Canceled Projects',
    //   icon: (
    //     <img src={canceledproject} alt="Pending PO" style={{ width: '32px', height: '32px' }} />
    //   ),
    //   amount: 18,
    //   action: () => console.log('to detail'),
    // },
    {
      title: 'Sales Performance',
      icon: (
        <img src={salesperformance} alt="Pending PO" style={{ width: '32px', height: '32px' }} />
      ),
      amount: sales ? `${toRupiah(totalAmount)}` : 0,
      action: () => console.log('to detail'),
    },
    {
      title: 'Winning Ratio',
      icon: <img src={winningratio} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
      amount: 0,
      action: () => console.log('to detail'),
    },
    {
      title: 'Updated as of',
      icon: <img src={updated} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
      amount: new Date().toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      action: () => console.log('to detail'),
    },
  ];

  return (
    <SimpleGrid cols={3} spacing="lg" verticalSpacing="3xl" mt={10}>
      {summaryItemsFirstRow.map((summaryItem, index) => {
        return (
          <Box
            className="flex items-center justify-center"
            bg="white"
            style={{
              backgroundColor: `#1C1C28`,
              position: 'relative',
              borderRadius: 30,
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              width: '250px',
              height: '100px',
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
            onClick={summaryItem.action}>
            <Flex gap={20} px={12} py={15} className="justify-between items-center">
              <div className="w-100%">
                <Box>
                  <Text className="text-start" fz="md" color="#ffffff" fw="bolder">
                    {summaryItem.amount}
                  </Text>
                  <Text className="text-start w-full" fz="sm" fw="bolder" color="#ffffff">
                    {summaryItem.title}
                  </Text>
                  {/* <Text fz="lg" color="#ffffff" fw="bolder">
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
              <Box bg="transparent">
                <ThemeIcon
                  className="w-14 h-14"
                  size="50px"
                  //   color={'rgba(253, 224, 71, 1)'}
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
            </Flex>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};
