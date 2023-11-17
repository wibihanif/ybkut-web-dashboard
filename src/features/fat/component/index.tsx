import { Box, Center, Flex, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import React, { useState } from 'react';
import { RevenueSection } from './RevenueSection';
import { GrossProfit } from './GrossProfit';
import { Expense } from './Expense';
import { Profit } from './Profit';
import { DatePickerInput } from '@mantine/dates';
import { OperationChart } from './chart/OperationChart';
import { TableService } from './TableService';
// import { GraphSection } from './GraphSection';
// import { MapSection } from './MapSection';

export const FatAnalytic: React.FC = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Box>
      <Box
        style={{
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: 20,
          paddingLeft: 30,
          borderRadius: 2,
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Flex gap={20}>
          <Box
            bg="white"
            px={12}
            style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
            <ThemeIcon variant="gradient" size="xl" color="gray" my={15}>
              <IconGraph />
            </ThemeIcon>
          </Box>

          <Center>
            <Box>
              <Text fz="xl" fw="bold">
                Service Financial Dashboard
              </Text>
              <Text fz="sm" color="#7D7C7C">
                This page is used to see overall data about Service Financial
              </Text>
            </Box>
          </Center>
        </Flex>
        <Box w="40%">
          <Box p={15}>
            <DatePickerInput clearable placeholder="Pick date" value={value} onChange={setValue} />
          </Box>
        </Box>
      </Box>
      <Box mt={20}>
        <RevenueSection />
      </Box>
      <Box mt={20}>
        <GrossProfit />
      </Box>
      <Box mt={20}>
        <Expense />
      </Box>
      <Box mt={20}>
        <Profit />
      </Box>
      <Box mt={20}>
        <TableService />
      </Box>
    </Box>
  );
};
