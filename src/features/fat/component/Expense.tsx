import { Box, Center, Flex, Paper, SimpleGrid, Space, Text, ThemeIcon } from '@mantine/core';
import { IconArrowBadgeDownFilled, IconArrowBadgeUpFilled } from '@tabler/icons-react';
import { endOfMonth, endOfYear, format, startOfMonth, startOfYear, subMonths } from 'date-fns';
import { useGetOpexPlan } from '../api/useGetOpexPlan';
import { useGetOpexActual } from '../api/useGetOpexActual';
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
        amount: 4.315,
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
        amount: -160.516,
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
        amount: -160.516,
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
//         icon: <img src={plan} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
//         amount: 18,
//         action: () => console.log('to detail'),
//       },
//       {
//         title: 'Growth',
//         icon: <img src={plan} alt="Pending PO" style={{ width: '32px', height: '32px' }} />,
//         amount: '90%',
//         action: () => console.log('to detail'),
//       },
//     ],
//   },
// ];

export const Expense = () => {
  const firstDayOfYear = format(startOfYear(new Date()), 'yyyy-MM-dd');
  const lastDayOfYear = format(endOfYear(new Date()), 'yyyy-MM-dd');

  const lastMonth = subMonths(new Date(), 1);
  const firstDateLastMonth = format(startOfMonth(lastMonth), 'yyyy-MM-dd');
  const endDateLastMonth = format(endOfMonth(lastMonth), 'yyyy-MM-dd');

  const today = format(new Date(), 'yyyy-MM-dd');

  const { data: opexPlanThisYear } = useGetOpexPlan({
    endDate: lastDayOfYear,
    startDate: firstDayOfYear,
  });

  const { data: opexActualThisYear } = useGetOpexActual({
    endDate: lastDayOfYear,
    startDate: firstDayOfYear,
  });

  let opexGapThisYear;

  if (opexPlanThisYear?.planOpex && opexActualThisYear?.opex) {
    opexGapThisYear = opexPlanThisYear.planOpex - opexActualThisYear.opex;
  } else {
    opexGapThisYear = 0;
  }

  const opexThisYearInSequences = [
    opexPlanThisYear?.planOpex === null ? 0 : opexPlanThisYear?.planOpex,
    opexActualThisYear?.opex === null ? 0 : opexActualThisYear?.opex,
    opexGapThisYear,
  ];

  const { data: opexPlanThisMonth } = useGetOpexPlan({
    endDate: firstDateLastMonth,
    startDate: endDateLastMonth,
  });

  const { data: opexPlanActualThisMonth } = useGetOpexActual({
    endDate: firstDateLastMonth,
    startDate: endDateLastMonth,
  });

  let opexGapThisMonth;

  if (opexPlanThisMonth?.planOpex && opexPlanActualThisMonth?.opex) {
    opexGapThisMonth = opexPlanThisMonth.planOpex - opexPlanActualThisMonth.opex;
  } else {
    opexGapThisMonth = 0;
  }

  const opexThisMonthInSequences = [
    opexPlanThisMonth?.planOpex === null ? 0 : opexPlanThisMonth?.planOpex,
    opexPlanActualThisMonth?.opex === null ? 0 : opexPlanActualThisMonth?.opex,
    opexGapThisMonth,
  ];

  const { data: opexPlanYTD } = useGetOpexPlan({
    startDate: firstDayOfYear,
    endDate: today,
  });

  const { data: opexActualYTD } = useGetOpexActual({
    startDate: firstDayOfYear,
    endDate: today,
  });

  let opexGapYTD;

  if (opexPlanYTD?.planOpex && opexActualYTD?.opex) {
    opexGapYTD = opexPlanYTD.planOpex - opexActualYTD.opex;
  } else {
    opexGapYTD = 0;
  }

  const opexYTDInSequences = [
    opexPlanYTD?.planOpex === null ? 0 : opexPlanYTD?.planOpex,
    opexActualYTD?.opex === null ? 0 : opexActualYTD?.opex,
    opexGapYTD,
  ];

  return (
    <Paper
      style={{
        borderRadius: 8,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        padding: 20,
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
          Operational Expense
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
                            color={opexGapThisYear < 0 ? '#cc7b7b' : '#a9cc7b'}
                            my={15}>
                            {opexGapThisYear < 0 ? (
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
                            {opexThisYearInSequences[index]}
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
                            color={opexGapThisMonth < 0 ? '#cc7b7b' : '#a9cc7b'}
                            my={15}>
                            {opexGapThisMonth < 0 ? (
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
                            {opexThisMonthInSequences[index]}
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
                            color={opexGapYTD < 0 ? '#cc7b7b' : '#a9cc7b'}
                            my={15}>
                            {opexGapYTD < 0 ? (
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
                            {opexYTDInSequences[index]}
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
