import { Box, Center, Flex, Paper, SimpleGrid, Space, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import { IconArrowBadgeUpFilled, IconArrowBadgeDownFilled } from '@tabler/icons-react';
import { endOfMonth, endOfYear, format, startOfMonth, startOfYear, subMonths } from 'date-fns';
import { useGetPnlPlan } from '../api/useGetPnlPlan';
import { useGetPnlActual } from '../api/useGetPnlActual';
import { DateInput } from '@mantine/dates';
import { useState } from 'react';

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
    header: 'Revenue',
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
        amount: 0,
        action: () => console.log('to detail'),
      },
    ],
  },
];
const summaryItemsSecondRow: SummaryItems[] = [
  {
    header: 'Gross Profit',
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
        amount: 160.516,
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
    header: 'Operational Expense',
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
        amount: 160.516,
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

const summaryItemsFourthRow: SummaryItems[] = [
  {
    header: 'Operational Profit',
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
        amount: 160.516,
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

export const FinancialCalculationWithFilter = () => {
  const firstDayOfYear = format(startOfYear(new Date()), 'yyyy-MM-dd');
  const lastDayOfYear = format(endOfYear(new Date()), 'yyyy-MM-dd');

  const lastMonth = subMonths(new Date(), 1);
  const firstDateLastMonth = format(startOfMonth(lastMonth), 'yyyy-MM-dd');
  const endDateLastMonth = format(endOfMonth(lastMonth), 'yyyy-MM-dd');

  const [startDate, setStartDateValue] = useState<Date | null>(null);
  const [endDate, setEndDateValue] = useState<Date | null>(null);

  const today = format(new Date(), 'yyyy-MM-dd');

  const { data: pnlPlanThisYear } = useGetPnlPlan({
    endDate: lastDayOfYear,
    startDate: firstDayOfYear,
  });
  const { data: pnlActualThisYear } = useGetPnlActual({
    endDate: lastDayOfYear,
    startDate: firstDayOfYear,
  });

  let pnlGapThisYear;

  if (pnlPlanThisYear?.planPnl && pnlActualThisYear?.actualPnl) {
    pnlGapThisYear = pnlPlanThisYear.planPnl - pnlActualThisYear.actualPnl;
  } else {
    pnlGapThisYear = 0;
  }

  const pnlThisYearInSequences = [
    pnlPlanThisYear?.planPnl === null ? 0 : pnlPlanThisYear?.planPnl,
    pnlActualThisYear?.actualPnl === null ? 0 : pnlActualThisYear?.actualPnl,
    pnlGapThisYear,
  ];

  const { data: pnlPlanThisMonth } = useGetPnlPlan({
    endDate: firstDateLastMonth,
    startDate: endDateLastMonth,
  });

  const { data: pnlActualThisMonth } = useGetPnlActual({
    endDate: firstDateLastMonth,
    startDate: endDateLastMonth,
  });

  let pnlGapThisMonth;

  if (pnlPlanThisMonth?.planPnl && pnlActualThisMonth?.actualPnl) {
    pnlGapThisMonth = pnlPlanThisMonth.planPnl - pnlActualThisMonth.actualPnl;
  } else {
    pnlGapThisMonth = 0;
  }

  const pnlThisMonthInSequences = [
    pnlPlanThisMonth?.planPnl === null ? 0 : pnlPlanThisMonth?.planPnl,
    pnlActualThisMonth?.actualPnl === null ? 0 : pnlActualThisMonth?.actualPnl,
    pnlGapThisMonth,
  ];

  const { data: pnlPlanYTD } = useGetPnlPlan({
    startDate: firstDayOfYear,
    endDate: today,
  });

  const { data: pnlActualYTD } = useGetPnlActual({
    startDate: firstDayOfYear,
    endDate: today,
  });

  let pnlGapYTD;

  if (pnlPlanYTD?.planPnl && pnlActualYTD?.actualPnl) {
    pnlGapYTD = pnlPlanYTD.planPnl - pnlActualYTD.actualPnl;
  } else {
    pnlGapYTD = 0;
  }

  const pnlYTDInSequences = [
    pnlPlanYTD?.planPnl === null ? 0 : pnlPlanYTD?.planPnl,
    pnlActualYTD?.actualPnl === null ? 0 : pnlActualYTD?.actualPnl,
    pnlGapYTD,
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
      <div style={{ display: 'flex', width: '100%', padding: 10 }}>
        <DateInput
          value={startDate}
          onChange={setStartDateValue}
          label="Start Date"
          placeholder="Select start date"
          style={{ flex: 1, width: '100%' }}
        />
        <Space w="md" />
        <DateInput
          value={endDate}
          onChange={setEndDateValue}
          label="End Date"
          placeholder="Select end date"
          style={{ flex: 1, width: '100%' }}
        />
      </div>

      {summaryItemsFirstRow.map(SummaryItems => {
        return (
          <div style={{ padding: 10 }}>
            <Flex justify="center">
              <Text color="#61677A" fw="bold" fz="md">
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
                      <Box
                        bg="transparent"
                        px={12}
                        // style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}
                      >
                        {summaryItem.title === 'Plan' || summaryItem.title === 'Actual' ? (
                          <ThemeIcon variant="light" size="sm" radius="xl" color="#a9cc7b" my={15}>
                            {summaryItem.icon}
                          </ThemeIcon>
                        ) : (
                          <ThemeIcon
                            variant="light"
                            size="sm"
                            radius="xl"
                            color={pnlGapThisMonth < 0 ? '#cc7b7b' : '#a9cc7b'}
                            my={15}>
                            {pnlGapThisMonth < 0 ? (
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
                            {pnlThisMonthInSequences[index]}
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
          <div style={{ padding: 10 }}>
            <Flex justify="center">
              <Text color="#61677A" fw="bold" fz="md">
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
                        {summaryItem.title === 'Plan' || summaryItem.title === 'Actual' ? (
                          <ThemeIcon variant="light" size="sm" radius="xl" color="#a9cc7b" my={15}>
                            {summaryItem.icon}
                          </ThemeIcon>
                        ) : (
                          <ThemeIcon
                            variant="light"
                            size="sm"
                            radius="xl"
                            color={
                              SummaryItems.result[1].amount - SummaryItems.result[0].amount < 0
                                ? '#cc7b7b'
                                : '#a9cc7b'
                            }
                            my={15}>
                            {SummaryItems.result[1].amount - SummaryItems.result[0].amount < 0 ? (
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
                          {summaryItem.title === 'Plan' || summaryItem.title === 'Actual' ? (
                            <Text fz="xs" color="#7D7C7C" fw="bold">
                              {summaryItem.amount}
                            </Text>
                          ) : (
                            <Text fz="xs" color="#7D7C7C" fw="bold">
                              {parseFloat(
                                (
                                  SummaryItems.result[1].amount - SummaryItems.result[0].amount
                                ).toFixed(2),
                              )}
                            </Text>
                          )}
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
          <div style={{ padding: 10 }}>
            <Flex justify="center">
              <Text color="#61677A" fw="bold" fz="md">
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
                        {summaryItem.title === 'Plan' || summaryItem.title === 'Actual' ? (
                          <ThemeIcon variant="light" size="sm" radius="xl" color="#a9cc7b" my={15}>
                            {summaryItem.icon}
                          </ThemeIcon>
                        ) : (
                          <ThemeIcon
                            variant="light"
                            size="sm"
                            radius="xl"
                            color={
                              SummaryItems.result[1].amount - SummaryItems.result[0].amount < 0
                                ? '#cc7b7b'
                                : '#a9cc7b'
                            }
                            my={15}>
                            {SummaryItems.result[1].amount - SummaryItems.result[0].amount < 0 ? (
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
                          {summaryItem.title === 'Plan' || summaryItem.title === 'Actual' ? (
                            <Text fz="xs" color="#7D7C7C" fw="bold">
                              {summaryItem.amount}
                            </Text>
                          ) : (
                            <Text fz="xs" color="#7D7C7C" fw="bold">
                              {parseFloat(
                                (
                                  SummaryItems.result[1].amount - SummaryItems.result[0].amount
                                ).toFixed(2),
                              )}
                            </Text>
                          )}
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

      {summaryItemsFourthRow.map(SummaryItems => {
        return (
          <div style={{ padding: 10 }}>
            <Flex justify="center">
              <Text color="#61677A" fw="bold" fz="md">
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
                        {summaryItem.title === 'Plan' || summaryItem.title === 'Actual' ? (
                          <ThemeIcon variant="light" size="sm" radius="xl" color="#a9cc7b" my={15}>
                            {summaryItem.icon}
                          </ThemeIcon>
                        ) : (
                          <ThemeIcon
                            variant="light"
                            size="sm"
                            radius="xl"
                            color={
                              SummaryItems.result[1].amount - SummaryItems.result[0].amount < 0
                                ? '#cc7b7b'
                                : '#a9cc7b'
                            }
                            my={15}>
                            {SummaryItems.result[1].amount - SummaryItems.result[0].amount < 0 ? (
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
                          {summaryItem.title === 'Plan' || summaryItem.title === 'Actual' ? (
                            <Text fz="xs" color="#7D7C7C" fw="bold">
                              {summaryItem.amount}
                            </Text>
                          ) : (
                            <Text fz="xs" color="#7D7C7C" fw="bold">
                              {parseFloat(
                                (
                                  SummaryItems.result[1].amount - SummaryItems.result[0].amount
                                ).toFixed(2),
                              )}
                            </Text>
                          )}
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
    </Paper>
  );
};
