import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import { ReactNode } from 'react';
// import { TotalProductTable } from './total-product/table';
import { PendingReceiptPage } from '~/pages/inventory/PendingReceipt';

interface SummaryItems {
  title: string;
  icon: ReactNode;
  amount: number;
  action: () => void;
}

// const myAction = () => <PendingReceiptPage />;

const summaryItems: SummaryItems[] = [
  {
    title: 'Total Produk',
    icon: <IconGraph />,
    amount: 18,
    action: () => <PendingReceiptPage />,
  },
  {
    title: 'Total Inventori Value',
    icon: <IconGraph />,
    amount: 18,
    action: () => console.log('to detail'),
  },
  {
    title: 'Pending Transfer',
    icon: <IconGraph />,
    amount: 18,
    action: () => console.log('to detail'),
  },
  {
    title: 'Pending Receipt',
    icon: <IconGraph />,
    amount: 18,
    action: () => console.log('to detail'),
  },
];

export const SummarySection = () => {
  return (
    <SimpleGrid cols={4} spacing="lg" verticalSpacing="lg" mt={10}>
      {summaryItems.map(summaryItem => {
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
            <Flex gap={20}>
              <Box
                bg="transparent"
                px={12}
                // style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}
              >
                <ThemeIcon variant="light" size="xl" radius="xl" color="#a6b2df" my={15}>
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
  );
};
