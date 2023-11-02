import { Box, Center, Flex, Paper, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';

interface SummaryItems {
  title: string;
  icon: ReactNode;
  amount: any;
  action: () => void;
}

const summaryItemsFirstRow: SummaryItems[] = [
  {
    title: 'Total Project',
    icon: <IconGraph />,
    amount: 18,
    action: () => console.log('to detail'),
  },
  {
    title: 'Total Revenue',
    icon: <IconGraph />,
    amount: '18 M',
    action: () => console.log('to detail'),
  },
  {
    title: 'Paid',
    icon: <IconGraph />,
    amount: '18 M / 18 M',
    action: () => console.log('to detail'),
  },
  {
    title: 'Jumlah Peserta',
    icon: <IconGraph />,
    amount: 18,
    action: () => console.log('to detail'),
  },
];

const summaryItemsSecondRow: SummaryItems[] = [
  {
    title: 'Jumlah Customer',
    icon: <IconGraph />,
    amount: 18,
    action: () => console.log('to detail'),
  },
  {
    title: 'Cancel Project',
    icon: <IconGraph />,
    amount: 18,
    action: () => console.log('to detail'),
  },
  {
    title: 'Ongoing Project',
    icon: <IconGraph />,
    amount: 18,
    action: () => console.log('to detail'),
  },
  {
    title: 'Pending Project',
    icon: <IconGraph />,
    amount: 18,
    action: () => console.log('to detail'),
  },
];

export const SummarySection = () => {
  return (
    <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
      <Text color="#61677A" fw="bold" fz="sm">
        SUMMARY
      </Text>
      <SimpleGrid cols={4} spacing="lg" verticalSpacing="lg" mt={10}>
        {summaryItemsFirstRow.map(summaryItem => {
          return (
            <Box
              bg="white"
              style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}
              sx={{ ':hover': { cursor: 'pointer' } }}
              onClick={summaryItem.action}>
              <Flex gap={20}>
                <Box
                  bg="white"
                  px={12}
                  style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
                  <ThemeIcon variant="gradient" size="xl" color="gray" my={15}>
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
        {summaryItemsSecondRow.map(summaryItem => {
          return (
            <Box
              bg="white"
              style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}
              sx={{ ':hover': { cursor: 'pointer' } }}
              onClick={summaryItem.action}>
              <Flex gap={20}>
                <Box
                  bg="white"
                  px={12}
                  style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
                  <ThemeIcon variant="gradient" size="xl" color="gray" my={15}>
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
    </Paper>
  );
};
