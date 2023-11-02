import { Box, Center, Flex, Paper, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';

interface SummaryItems {
  title: string;
  icon: ReactNode;
  amount: number;
  action: () => void;
}

const summaryItems: SummaryItems[] = [
  {
    title: 'Semua Lulusan',
    icon: <IconGraph />,
    amount: 18,
    action: () => console.log('to detail'),
  },
  {
    title: 'Lulusan Reguler',
    icon: <IconGraph />,
    amount: 18,
    action: () => console.log('to detail'),
  },
  {
    title: 'Lulusan Non-Reguler',
    icon: <IconGraph />,
    amount: 18,
    action: () => console.log('to detail'),
  },
  {
    title: 'Lulusan CSR',
    icon: <IconGraph />,
    amount: 18,
    action: () => console.log('to detail'),
  },
  {
    title: 'Siswa reguler yang D.O',
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
      <SimpleGrid cols={5} spacing="lg" verticalSpacing="lg" mt={10}>
        {summaryItems.map(summaryItem => {
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
