import { Box, Center, Flex, Paper, SimpleGrid, Space, Text, ThemeIcon } from '@mantine/core';
// import { IconGraph } from '@tabler/icons-react';
import { IconArrowBadgeUpFilled, IconArrowBadgeDownFilled } from '@tabler/icons-react';
import { useGetRevenueActual } from '../api/useGetRevenueActual';
import { startOfYear, endOfYear, format, subMonths, startOfMonth, endOfMonth } from 'date-fns';
import { useGetRevenuePlan } from '../api/useGetRevenuePlan';
import plan from '../../../assets/plan.svg';
import actual from '../../../assets/actual.svg';
import gap from '../../../assets/gap.svg';

interface SummaryItem {
  title: string;
  icon: React.ReactNode;
  amount: number;
  action: () => void;
}

interface SummaryItems {
  header: string;
  result: SummaryItem[];
}

const summaryItemsFirstRow: SummaryItems[] = [
  {
    header: 'This Year',
    result: [
      {
        title: 'Plan',
        icon: <img src={plan} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
        amount: 160.516,
        action: () => console.log('to detail'),
      },
      {
        title: 'Actual',
        icon: <img src={actual} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
        amount: 156.246,
        action: () => console.log('to detail'),
      },
      {
        title: 'Gap',
        icon: <img src={gap} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
        amount: 0,
        action: () => console.log('to detail'),
      },
    ],
  },
];
const summaryItemsSecondRow: SummaryItems[] = [
  {
    header: 'Last Month',
    result: [
      {
        title: 'Plan',
        icon: <img src={plan} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
        amount: 160.516,
        action: () => console.log('to detail'),
      },
      {
        title: 'Actual',
        icon: <img src={actual} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
        amount: 160.516,
        action: () => console.log('to detail'),
      },
      {
        title: 'Gap',
        icon: <img src={gap} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
        amount: 160.516,
        action: () => console.log('to detail'),
      },
    ],
  },
];
const summaryItemsThirdRow: SummaryItems[] = [
  {
    header: 'Year To Date',
    result: [
      {
        title: 'Plan',
        icon: <img src={plan} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
        amount: 16,
        action: () => console.log('to detail'),
      },
      {
        title: 'Actual',
        icon: <img src={actual} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
        amount: 160.516,
        action: () => console.log('to detail'),
      },
      {
        title: 'Gap',
        icon: <img src={gap} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
        amount: 160.516,
        action: () => console.log('to detail'),
      },
    ],
  },
];

// const summaryItemsFourthRow: SummaryItems[] = [
//   {
//     header: 'Year To Year',
//     result: [
//       {
//         title: 'Gap',
//         icon: <img src={totalproject} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
//         amount: 18,
//         action: () => console.log('to detail'),
//       },
//       {
//         title: 'Growth',
//         icon: <img src={totalproject} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
//         amount: '90%',
//         action: () => console.log('to detail'),
//       },
//     ],
//   },
// ];

export const RevenueSection = () => {
  const firstDayOfYear = format(startOfYear(new Date()), 'yyyy-MM-dd');
  const lastDayOfYear = format(endOfYear(new Date()), 'yyyy-MM-dd');

  const lastMonth = subMonths(new Date(), 1);
  const firstDateLastMonth = format(startOfMonth(lastMonth), 'yyyy-MM-dd');
  const endDateLastMonth = format(endOfMonth(lastMonth), 'yyyy-MM-dd');

  const today = format(new Date(), 'yyyy-MM-dd');

  const { data: revenuePlanThisYear } = useGetRevenuePlan({
    endDate: lastDayOfYear,
    startDate: firstDayOfYear,
  });

  const { data: revenueActualThisYear } = useGetRevenueActual({
    endDate: lastDayOfYear,
    startDate: firstDayOfYear,
  });

  let revenueGapThisYear;

  if (revenuePlanThisYear?.plan && revenueActualThisYear?.revenue) {
    revenueGapThisYear = revenuePlanThisYear.plan - revenueActualThisYear.revenue;
  } else {
    revenueGapThisYear = 0;
  }

  const revenueInSequencesThisYear = [
    revenuePlanThisYear?.plan === null ? 0 : revenuePlanThisYear?.plan,
    revenueActualThisYear?.revenue === null ? 0 : revenueActualThisYear?.revenue,
    revenueGapThisYear,
  ];

  const { data: revenuePlanThisMonth } = useGetRevenuePlan({
    endDate: firstDateLastMonth,
    startDate: endDateLastMonth,
  });

  const { data: revenueActualThisMonth } = useGetRevenueActual({
    endDate: firstDateLastMonth,
    startDate: endDateLastMonth,
  });

  let revenueGapThisMonth;

  if (revenuePlanThisMonth?.plan && revenueActualThisMonth?.revenue) {
    revenueGapThisMonth = revenuePlanThisMonth.plan - revenueActualThisMonth.revenue;
  } else {
    revenueGapThisMonth = 0;
  }

  const revenueInSequencesThisMonth = [
    revenuePlanThisMonth?.plan === null ? 0 : revenuePlanThisMonth?.plan,
    revenueActualThisMonth?.revenue === null ? 0 : revenueActualThisMonth?.revenue,
    revenueGapThisMonth,
  ];

  const { data: revenuePlanYTD } = useGetRevenuePlan({
    startDate: firstDayOfYear,
    endDate: today,
  });

  const { data: revenueActualYTD } = useGetRevenueActual({
    startDate: firstDayOfYear,
    endDate: today,
  });

  let revenueGapYTD;

  if (revenuePlanYTD?.plan && revenueActualYTD?.revenue) {
    revenueGapYTD = revenuePlanYTD.plan - revenueActualYTD.revenue;
  } else {
    revenueGapYTD = 0;
  }

  const revenueInSequencesYTD = [
    revenuePlanYTD?.plan === null ? 0 : revenuePlanYTD?.plan,
    revenueActualYTD?.revenue === null ? 0 : revenueActualYTD?.revenue,
    revenueGapYTD,
  ];

  return (
    <Paper
      style={{
        borderRadius: 8,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        padding: 5,
        transition: 'transform 0.3s ease-in-out',
      }}
      sx={{
        ':hover': {
          cursor: 'pointer',
          transform: 'scale(1.02)',
        },
      }}>
      <Flex justify="space-between">
        <Text color="#61677A" fw="bold" fz="s">
          Revenue
        </Text>
        {/* <Text color="#61677A" fw="bold" fz="s">
          IDR 1.xxx.xxx
        </Text> */}
      </Flex>
      {summaryItemsFirstRow.map(SummaryItems => {
        return (
          <div>
            <Flex justify="center">
              <Text color="#61677A" fw="bold" fz="sm">
                {SummaryItems.header}
              </Text>
            </Flex>
            <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm" mt={10}>
              {SummaryItems.result.map((summaryItem, index) => {
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
                    <Flex gap={5}>
                      <Box bg="transparent" px={12}>
                        {summaryItem.title === 'Plan' || summaryItem.title === 'Actual' ? (
                          <ThemeIcon variant="light" size="sm" radius="xl" color="#a9cc7b" my={15}>
                            {summaryItem.icon}
                          </ThemeIcon>
                        ) : (
                          <ThemeIcon
                            variant="light"
                            size="sm"
                            radius="xl"
                            color={revenueGapThisYear < 0 ? '#cc7b7b' : '#a9cc7b'}
                            my={15}>
                            {revenueGapThisYear < 0 ? (
                              <IconArrowBadgeDownFilled />
                            ) : (
                              <IconArrowBadgeUpFilled />
                            )}
                          </ThemeIcon>
                        )}
                      </Box>

                      <Center>
                        <Box>
                          <Text fz="xs" fw="bold">
                            {summaryItem.title}
                          </Text>
                          <Text
                            fz="xs"
                            color="#7D7C7C"
                            fw="bold"
                            style={{ maxWidth: '80%', wordWrap: 'break-word' }}>
                            {revenueInSequencesThisYear[index]}
                          </Text>
                        </Box>
                      </Center>
                    </Flex>
                  </Box>
                );
              })}
            </SimpleGrid>
            <Space h="sm" />
          </div>
        );
      })}

      {summaryItemsSecondRow.map(SummaryItems => {
        return (
          <div>
            <Flex justify="center">
              <Text color="#61677A" fw="bold" fz="sm">
                {SummaryItems.header}
              </Text>
            </Flex>
            <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm" mt={10}>
              {SummaryItems.result.map((summaryItem, index) => {
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
                    <Flex gap={5}>
                      <Box bg="transparent" px={12}>
                        {summaryItem.title === 'Plan' || summaryItem.title === 'Actual' ? (
                          <ThemeIcon variant="light" size="sm" radius="xl" color="#a9cc7b" my={15}>
                            {summaryItem.icon}
                          </ThemeIcon>
                        ) : (
                          <ThemeIcon
                            variant="light"
                            size="sm"
                            radius="xl"
                            color={revenueGapThisMonth < 0 ? '#cc7b7b' : '#a9cc7b'}
                            my={15}>
                            {revenueGapThisMonth < 0 ? (
                              <IconArrowBadgeDownFilled />
                            ) : (
                              <IconArrowBadgeUpFilled />
                            )}
                          </ThemeIcon>
                        )}
                      </Box>

                      <Center>
                        <Box>
                          <Text fz="xs" fw="bold">
                            {summaryItem.title}
                          </Text>
                          <Text
                            fz="xs"
                            color="#7D7C7C"
                            fw="bold"
                            maw="20%"
                            style={{ maxWidth: '75%', wordWrap: 'break-word' }}>
                            {revenueInSequencesThisMonth[index]}
                          </Text>
                        </Box>
                      </Center>
                    </Flex>
                  </Box>
                );
              })}
            </SimpleGrid>
            <Space h="sm" />
          </div>
        );
      })}

      {summaryItemsThirdRow.map(SummaryItems => {
        return (
          <div>
            <Flex justify="center">
              <Text color="#61677A" fw="bold" fz="sm">
                {SummaryItems.header}
              </Text>
            </Flex>
            <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm" mt={10}>
              {SummaryItems.result.map((summaryItem, index) => {
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
                    <Flex gap={5}>
                      <Box bg="transparent" px={12}>
                        {summaryItem.title === 'Plan' || summaryItem.title === 'Actual' ? (
                          <ThemeIcon variant="light" size="sm" radius="xl" color="#a9cc7b" my={15}>
                            {summaryItem.icon}
                          </ThemeIcon>
                        ) : (
                          <ThemeIcon
                            variant="light"
                            size="sm"
                            radius="xl"
                            color={revenueGapThisMonth < 0 ? '#cc7b7b' : '#a9cc7b'}
                            my={15}>
                            {revenueGapThisMonth < 0 ? (
                              <IconArrowBadgeDownFilled />
                            ) : (
                              <IconArrowBadgeUpFilled />
                            )}
                          </ThemeIcon>
                        )}
                      </Box>

                      <Center>
                        <Box>
                          <Text fz="xs" fw="bold">
                            {summaryItem.title}
                          </Text>
                          <Text
                            fz="xs"
                            color="#7D7C7C"
                            fw="bold"
                            maw="20%"
                            style={{ maxWidth: '75%', wordWrap: 'break-word' }}>
                            {revenueInSequencesYTD[index]}
                          </Text>
                        </Box>
                      </Center>
                    </Flex>
                  </Box>
                );
              })}
            </SimpleGrid>
            <Space h="sm" />
          </div>
        );
      })}

      {/* {summaryItemsFourthRow.map(SummaryItems => {
        return (
          <div>
            <Flex justify="center">
              <Text color="#61677A" fw="bold" fz="sm">
                {SummaryItems.header}
              </Text>
            </Flex>
            <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm" mt={10}>
              {SummaryItems.result.map(summaryItem => {
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
                    <Flex gap={5}>
                      <Box
                        bg="transparent"
                        px={12}
                        // style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}
                      >
                        <ThemeIcon
                          variant="light"
                          size="sm"
                          radius="xl"
                          color={Number(summaryItem.amount) < 1 ? '#cc7b7b' : '#a9cc7b'}
                          my={15}>
                          {summaryItem.icon}
                        </ThemeIcon>
                      </Box>

                      <Center>
                        <Box>
                          <Text fz="xs" fw="bold">
                            {summaryItem.title}
                          </Text>
                          <Text fz="xs" color="#7D7C7C" fw="bold">
                            {summaryItem.amount}
                          </Text>
                        </Box>
                      </Center>
                    </Flex>
                  </Box>
                );
              })}
            </SimpleGrid>
            <Space h="sm" />
          </div>
        );
      })} */}
    </Paper>
  );
};
