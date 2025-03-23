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
import numbergraduates from '../../../assets/number-graduates.svg';
import numberstudents from '../../../assets/number-students.svg';
import salesperformance from '../../../assets/sales-performance.svg';
import winningratio from '../../../assets/winning-ratio.svg';
import logogatau from '../../../assets/logogatau.svg';

interface SummaryItems {
  title: string;
  icon: ReactNode;
  amount: any;
  action: () => void;
}
// const colors = [
//   '#a36138', // Color for item 0
//   '#f7c74f', // Color for item 1
//   '#4caf50', // Color for item 2
//   '#2196f3', // Color for item 3
//   '#e91e63', // Color for item 4
//   '#9c27b0', // Color for item 5
//   '#ff9800', // Color for item 6
//   '#ff2600', // Color for item 6
//   // Add more colors as needed
// ];

export const SummaryStudent = () => {
  const { data: graduates } = useGetSchoolGraduates();
  const { data: students } = useGetSchoolStudents();
  const { data: sales } = useGetSchoolSales();

  let totalAmount = 0;

  if (sales) {
    sales[0].top_customer?.forEach((cust: any) => {
      if (cust.status === 'APPROVAL') {
        totalAmount += Number(cust.amount);
      }
    });
  }

  const summaryItemsFirstRow: SummaryItems[] = [
    {
      title: 'Number of Students and Participants',
      icon: <img src={numberstudents} alt="students" style={{ width: '32px', height: '32px' }} />,
      amount: Number(students ? students[0].total_student : 0),
      action: () => console.log('to detail'),
    },
    {
      title: 'Total of Reguler Students',
      icon: (
        <img
          src={numberstudents}
          alt="regular students"
          style={{ width: '32px', height: '32px' }}
        />
      ),
      amount: Number(students ? students[0].total_student : 0),
      action: () => console.log('to detail'),
    },
    {
      title: 'Number of Non Reguler Students',
      icon: (
        <img
          src={numberstudents}
          alt="non-regular students"
          style={{ width: '32px', height: '32px' }}
        />
      ),
      amount: Number(students ? students[0].total_student : 0),
      action: () => console.log('to detail'),
    },
  ];

  return (
    <div className="flex gap-6">
      <div className="border bg-[#1C1C28] w-full rounded-lg border-none flex items-center py-6 px-6 gap-5">
        {/* Wrapper untuk Logo */}
        <div className="flex items-center justify-center min-w-[60px]">
          <ThemeIcon className="flex items-center justify-center w-14 h-14">
            <img src={logogatau} alt="logogatau" className="w-full h-full object-contain" />
          </ThemeIcon>
        </div>

        {/* Wrapper untuk teks */}
        <div className="flex justify-between w-full text-white">
          {summaryItemsFirstRow.map((summaryItem, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <div className="text-3xl font-semibold">{summaryItem.amount}</div>
              <div className="text-sm font-medium">{summaryItem.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// <SimpleGrid cols={4} spacing="sm" verticalSpacing="lg" mt={10}>
//   {summaryItemsFirstRow.map((summaryItem, index) => {
//     return (
//       <Box
//         bg="white"
//         style={{
//           backgroundColor: `rgba(253, 224, 71, 0.15)`,
//           position: 'relative',
//           borderRadius: 30,
//           boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
//           transition: 'transform 0.3s ease-in-out',
//           width: '250px',
//           margin: '0 auto',
//         }}
//         sx={{
//           ':hover': {
//             cursor: 'pointer',
//             transform: 'scale(1.1)',
//           },
//           '::before': {
//             content: '""',
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             height: '5px',
//           },
//         }}
//         onClick={summaryItem.action}>
//         <Flex gap={20} px={12} py={15} className="justify-between items-center">
//           <Box bg="transparent">
//             <ThemeIcon
//               variant="light"
//               size="50px"
//               radius="40px"
//               color={colors[index % colors.length]}
//               sx={{
//                 transform: 'rotate(0deg)',
//                 ':hover': {
//                   transform: 'rotate(45deg)',
//                   transition: 'transform 0.3s ease-in-out',
//                 },
//                 transition: 'transform 0.3s ease-in-out',
//               }}>
//               <div>{summaryItem.icon}</div>
//             </ThemeIcon>
//           </Box>
//           <div className="w-100%">
//             <Box>
//               <Text className="text-end w-full" fz="sm" fw="bolder" color="#999999">
//                 {summaryItem.title}
//               </Text>
//               <Text className="text-end" fz="md" color="#000000" fw="bolder">
//                 {summaryItem.amount}
//               </Text>
//             </Box>
//           </div>
//         </Flex>
//       </Box>
//     );
//   })}
// </SimpleGrid>
