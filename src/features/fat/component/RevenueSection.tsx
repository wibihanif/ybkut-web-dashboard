import { Box, Center, Flex, Paper, SimpleGrid, Space, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';

interface SummaryItem {
  title: string;
  icon: React.ReactNode;
  amount: number | string;
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
    header: 'Year To Year',
    result: [
      {
        title: 'Gap',
        icon: <IconGraph />,
        amount: 18,
        action: () => console.log('to detail'),
      },
      {
        title: 'Growth',
        icon: <IconGraph />,
        amount: '90%',
        action: () => console.log('to detail'),
      },
    ],
  },
];

export const RevenueSection = () => {
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
        <Text color="#61677A" fw="bold" fz="s">
          IDR 1.xxx.xxx
        </Text>
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
      })}
      {summaryItemsFourthRow.map(SummaryItems => {
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
      })}
    </Paper>
  );
};
