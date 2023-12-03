import { Box, Center, Flex, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import React, { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import { AccountReceivableSection } from './AccountReceivableSection';
import { AccountTable } from './table/AccountTable';

export const FatAccountAnalytic: React.FC = () => {
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
                Account Receivable and Account Payable Dashboard
              </Text>
              <Text fz="sm" color="#7D7C7C">
                This page is used to see overall data about Account Receivable and Account Payable
                Dashboard
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
      <Box style={{ borderRadius: 5 }} mt={20}>
        <AccountReceivableSection />
      </Box>
      <Box mt={20}>
        <AccountTable />
      </Box>
    </Box>
  );
};
