import { Box, Center, Flex, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { IconCreditCard } from '@tabler/icons-react';
import React, { useState } from 'react';
import { RevenueSection } from './RevenueSection';
import { GrossProfit } from './GrossProfit';
import { Expense } from './Expense';
import { Profit } from './Profit';
import { DatePickerInput } from '@mantine/dates';
import { TableService } from './TableService';
// import { AccountReceivableSection } from './AccountReceivableSection';
// import { AccountPayableChart } from './chart/AccountPayable';
// import { AccountReceivableChart } from './chart/AccountReceivable';

export const FatAnalytic: React.FC = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Box>
      <Box>
        <Box
          style={{
            borderBottom: 'solid rgba(0, 0, 0, 0.1)',
            padding: 20,
            paddingLeft: 30,
          }}>
          <Flex gap={20}>
            <Box px={12} style={{ borderRadius: 8 }}>
              <ThemeIcon variant="light" radius="md" size="50px" color="#75a338" my={15}>
                <IconCreditCard color="white" style={{ width: '70%', height: '70%' }} />
              </ThemeIcon>
            </Box>

            <Center>
              <Box>
                <Text fz="xl" fw="bold" color="white">
                  Financial Analytics
                </Text>
                <Text fz="sm" color="#c7c6c6">
                  This page is used to see overall data about financial
                </Text>
              </Box>
            </Center>
            <Flex justify="flex-end" align="center" w="40%">
              <Box w="100%">
                <Box p={15}>
                  <DatePickerInput
                    clearable
                    placeholder="Pick date"
                    value={value}
                    onChange={setValue}
                  />
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg" mt={10}>
        <Box mt={20}>
          <RevenueSection />
        </Box>
        <Box mt={20}>
          <GrossProfit />
        </Box>
      </SimpleGrid>
      <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg" mt={10}>
        <Box mt={20}>
          <Expense />
        </Box>
        <Box mt={20}>
          <Profit />
        </Box>
      </SimpleGrid>
      <Box mt={20}>
        <TableService />
      </Box>
    </Box>
  );
};
