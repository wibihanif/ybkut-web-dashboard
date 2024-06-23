import { Box, Center, Flex, Paper, SimpleGrid, Space, Text, ThemeIcon } from '@mantine/core';
import { IconArrowBadgeDownFilled, IconArrowBadgeUpFilled, IconGraph } from '@tabler/icons-react';
import { endOfMonth, endOfYear, format, startOfMonth, startOfYear, subMonths } from 'date-fns';
import { useGetOperationalProfitPlan } from '../api/useGetOperationalProfitPlan';
import { useGetOperationalProfitActual } from '../api/useGetOperationalProfitActual';

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
        icon: <IconGraph />,
        amount: 160.516,
        action: () => console.log('to detail'),
      },
      {
        title: 'Actual',
        icon: <IconGraph />,
        amount: 156.246,
        action: () => console.log('to detail'),
      },
      {
        title: 'Gap',
        icon: <IconGraph />,
        amount: -4.315,
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
        icon: <IconGraph />,
        amount: 160.516,
        action: () => console.log('to detail'),
      },
      {
        title: 'Actual',
        icon: <IconGraph />,
        amount: -160.516,
        action: () => console.log('to detail'),
      },
      {
        title: 'Gap',
        icon: <IconGraph />,
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
        icon: <IconGraph />,
        amount: 16,
        action: () => console.log('to detail'),
      },
      {
        title: 'Actual',
        icon: <IconGraph />,
        amount: -160.516,
        action: () => console.log('to detail'),
      },
      {
        title: 'Gap',
        icon: <IconGraph />,
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
//         icon: <IconGraph />,
//         amount: 18,
//         action: () => console.log('to detail'),
//       },
//       {
//         title: 'Growth',
//         icon: <IconGraph />,
//         amount: '90%',
//         action: () => console.log('to detail'),
//       },
//     ],
//   },
// ];

export const GrossProfit = () => {
  const firstDayOfYear = format(startOfYear(new Date()), 'yyyy-MM-dd');
  const lastDayOfYear = format(endOfYear(new Date()), 'yyyy-MM-dd');

  const lastMonth = subMonths(new Date(), 1);
  const firstDateLastMonth = format(startOfMonth(lastMonth), 'yyyy-MM-dd');
  const endDateLastMonth = format(endOfMonth(lastMonth), 'yyyy-MM-dd');

  const today = format(new Date(), 'yyyy-MM-dd');

  const { data: operationalProfitPlanThisYear } = useGetOperationalProfitPlan({
    endDate: lastDayOfYear,
    startDate: firstDayOfYear,
  });

  const { data: operationalProfitActualThisYear } = useGetOperationalProfitActual({
    endDate: lastDayOfYear,
    startDate: firstDayOfYear,
  });

  let operationalProfitGapThisYear;

  if (
    operationalProfitPlanThisYear?.planOprProfit &&
    operationalProfitActualThisYear?.actualOprProfit
  ) {
    operationalProfitGapThisYear =
      operationalProfitPlanThisYear.planOprProfit - operationalProfitActualThisYear.actualOprProfit;
  } else {
    operationalProfitGapThisYear = 0;
  }

  const operationalProfitThisYearInSequences = [
    operationalProfitPlanThisYear?.planOprProfit === null
      ? 0
      : operationalProfitPlanThisYear?.planOprProfit,
    operationalProfitActualThisYear?.actualOprProfit === null
      ? 0
      : operationalProfitActualThisYear?.actualOprProfit,
    operationalProfitGapThisYear,
  ];

  const { data: operationalProfitPlanThisMonth } = useGetOperationalProfitPlan({
    endDate: firstDateLastMonth,
    startDate: endDateLastMonth,
  });

  const { data: operationalProfitActualThisMonth } = useGetOperationalProfitActual({
    endDate: firstDateLastMonth,
    startDate: endDateLastMonth,
  });

  let operationalGapThisMonth;

  if (
    operationalProfitPlanThisMonth?.planOprProfit &&
    operationalProfitActualThisMonth?.actualOprProfit
  ) {
    operationalGapThisMonth =
      operationalProfitPlanThisMonth.planOprProfit -
      operationalProfitActualThisMonth.actualOprProfit;
  } else {
    operationalGapThisMonth = 0;
  }

  const operationalProfitThisMonthInSequences = [
    operationalProfitPlanThisMonth?.planOprProfit === null
      ? 0
      : operationalProfitPlanThisMonth?.planOprProfit,
    operationalProfitActualThisMonth?.actualOprProfit === null
      ? 0
      : operationalProfitActualThisMonth?.actualOprProfit,
    operationalGapThisMonth,
  ];

  const { data: operationalProfitPlanYTD } = useGetOperationalProfitPlan({
    startDate: firstDayOfYear,
    endDate: today,
  });

  const { data: operationalProfitActualYTD } = useGetOperationalProfitActual({
    startDate: firstDayOfYear,
    endDate: today,
  });

  let operationalProfitGapYTD;

  if (operationalProfitPlanYTD?.planOprProfit && operationalProfitActualYTD?.actualOprProfit) {
    operationalProfitGapYTD =
      operationalProfitPlanYTD.planOprProfit - operationalProfitActualYTD.actualOprProfit;
  } else {
    operationalProfitGapYTD = 0;
  }

  const operationalProfitYTDInSequences = [
    operationalProfitPlanYTD?.planOprProfit === null ? 0 : operationalProfitPlanYTD?.planOprProfit,
    operationalProfitActualYTD?.actualOprProfit === null
      ? 0
      : operationalProfitActualYTD?.actualOprProfit,
    operationalProfitGapYTD,
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
          Gross Profit (GP)
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
                            color={operationalProfitGapThisYear < 0 ? '#cc7b7b' : '#a9cc7b'}
                            my={15}>
                            {operationalProfitGapThisYear < 0 ? (
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
                            {operationalProfitThisYearInSequences[index]}
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
                            color={operationalGapThisMonth < 0 ? '#cc7b7b' : '#a9cc7b'}
                            my={15}>
                            {operationalGapThisMonth < 0 ? (
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
                            {operationalProfitThisMonthInSequences[index]}
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
                            color={operationalProfitGapThisYear < 0 ? '#cc7b7b' : '#a9cc7b'}
                            my={15}>
                            {operationalProfitGapThisYear < 0 ? (
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
                            {operationalProfitThisYearInSequences[index]}
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
