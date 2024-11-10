import { Box, Center, Flex, Paper, SimpleGrid, Space, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import { IconArrowBadgeUpFilled, IconArrowBadgeDownFilled } from '@tabler/icons-react';
import { endOfMonth, endOfYear, format, startOfMonth, startOfYear, subMonths } from 'date-fns';
import { useGetPnlPlan } from '../api/useGetPnlPlan';
import { useGetPnlActual } from '../api/useGetPnlActual';
import { DateInput, DateValue } from '@mantine/dates';
import { useState } from 'react';
import { useGetRevenuePlan } from '../api/useGetRevenuePlan';
import { useGetRevenueActual } from '../api/useGetRevenueActual';
import { useGetOperationalProfitPlan } from '../api/useGetOperationalProfitPlan';
import { useGetOperationalProfitActual } from '../api/useGetOperationalProfitActual';
import { useGetOpexPlan } from '../api/useGetOpexPlan';
import { useGetOpexActual } from '../api/useGetOpexActual';

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
  const [startDate, setStartDateValue] = useState<DateValue>(new Date());
  const [endDate, setEndDateValue] = useState<DateValue>(new Date());

  const { data: pnlPlan } = useGetPnlPlan({
    endDate: format(endDate as Date, 'yyyy-MM-dd'),
    startDate: format(startDate as Date, 'yyyy-MM-dd'),
  });
  const { data: pnlActual } = useGetPnlActual({
    endDate: format(endDate as Date, 'yyyy-MM-dd'),
    startDate: format(startDate as Date, 'yyyy-MM-dd'),
  });

  let pnlGap;

  if (pnlPlan?.planPnl && pnlActual?.actualPnl) {
    pnlGap = pnlPlan.planPnl - pnlActual.actualPnl;
  } else {
    pnlGap = 0;
  }

  const pnlInSequences = [
    pnlPlan?.planPnl === null ? 0 : pnlPlan?.planPnl,
    pnlActual?.actualPnl === null ? 0 : pnlActual?.actualPnl,
    pnlGap,
  ];

  const { data: revenuePlan } = useGetRevenuePlan({
    endDate: format(endDate as Date, 'yyyy-MM-dd'),
    startDate: format(startDate as Date, 'yyyy-MM-dd'),
  });
  const { data: revenueActual } = useGetRevenueActual({
    endDate: format(endDate as Date, 'yyyy-MM-dd'),
    startDate: format(startDate as Date, 'yyyy-MM-dd'),
  });

  let revenueGap;

  if (revenuePlan?.plan && revenueActual?.revenue) {
    revenueGap = revenuePlan.plan - revenueActual.revenue;
  } else {
    revenueGap = 0;
  }

  const revenueInSequences = [
    pnlPlan?.planPnl === null ? 0 : pnlPlan?.planPnl,
    pnlActual?.actualPnl === null ? 0 : pnlActual?.actualPnl,
    pnlGap,
  ];

  const { data: operationalProfitPlan } = useGetOperationalProfitPlan({
    endDate: format(endDate as Date, 'yyyy-MM-dd'),
    startDate: format(startDate as Date, 'yyyy-MM-dd'),
  });
  const { data: operationalProfitActual } = useGetOperationalProfitActual({
    endDate: format(endDate as Date, 'yyyy-MM-dd'),
    startDate: format(startDate as Date, 'yyyy-MM-dd'),
  });

  let operationalProfitGap;

  if (operationalProfitPlan?.planOprProfit && operationalProfitActual?.actualOprProfit) {
    operationalProfitGap =
      operationalProfitPlan.planOprProfit - operationalProfitActual.actualOprProfit;
  } else {
    operationalProfitGap = 0;
  }

  const operationalProfitInSequences = [
    operationalProfitPlan?.planOprProfit === null ? 0 : operationalProfitPlan?.planOprProfit,
    operationalProfitActual?.actualOprProfit === null
      ? 0
      : operationalProfitActual?.actualOprProfit,
    operationalProfitGap,
  ];

  const { data: opexPlan } = useGetOpexPlan({
    endDate: format(endDate as Date, 'yyyy-MM-dd'),
    startDate: format(startDate as Date, 'yyyy-MM-dd'),
  });
  const { data: opexActual } = useGetOpexActual({
    endDate: format(endDate as Date, 'yyyy-MM-dd'),
    startDate: format(startDate as Date, 'yyyy-MM-dd'),
  });

  let opexGap;

  if (opexPlan?.planOpex && opexActual?.opex) {
    opexGap = opexPlan.planOpex - opexActual.opex;
  } else {
    opexGap = 0;
  }

  const opexInSequences = [
    opexPlan?.planOpex === null ? 0 : opexPlan?.planOpex,
    opexActual?.opex === null ? 0 : opexActual?.opex,
    pnlGap,
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
                            color={pnlGap < 0 ? '#cc7b7b' : '#a9cc7b'}
                            my={15}>
                            {pnlGap < 0 ? <IconArrowBadgeDownFilled /> : <IconArrowBadgeUpFilled />}
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
                            {revenueInSequences[index]}
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
                            color={pnlGap < 0 ? '#cc7b7b' : '#a9cc7b'}
                            my={15}>
                            {pnlGap < 0 ? <IconArrowBadgeDownFilled /> : <IconArrowBadgeUpFilled />}
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
                            {pnlInSequences[index]}
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
                            color={pnlGap < 0 ? '#cc7b7b' : '#a9cc7b'}
                            my={15}>
                            {pnlGap < 0 ? <IconArrowBadgeDownFilled /> : <IconArrowBadgeUpFilled />}
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
                            {opexInSequences[index]}
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

      {summaryItemsFourthRow.map(SummaryItems => {
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
                            color={pnlGap < 0 ? '#cc7b7b' : '#a9cc7b'}
                            my={15}>
                            {pnlGap < 0 ? <IconArrowBadgeDownFilled /> : <IconArrowBadgeUpFilled />}
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
                            {operationalProfitInSequences[index]}
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
    </Paper>
  );
};
