import { Box, Center, Flex, Grid, Paper, Text, ThemeIcon } from '@mantine/core';
import { IconCreditCard } from '@tabler/icons-react';
import React from 'react';
import { RevenueSection } from './RevenueSection';
import { GrossProfit } from './GrossProfit';
import { Expense } from './Expense';
import { Profit } from './Profit';
import { Calendar } from '@mantine/dates';
import { TableService } from './TableService';
import { OperationChart } from './chart/OperationChart';
import { AccountReceivableSection } from './AccountReceivableSection';
import { AccountTable } from './table/AccountTable';
import { CorporateSocial } from './CorporateSocial';
import { CorporateTable } from './CorporateTable';
import { CorporateTableTable } from './table/CorporateTableTable';
// import MyCalendar from '~/features/akademik/component/MyCalendar';
// import { AccountReceivableSection } from './AccountReceivableSection';
// import { AccountPayableChart } from './chart/AccountPayable';
// import { AccountReceivableChart } from './chart/AccountReceivable';

export const FatAnalytic: React.FC = () => {
  // const [value, setValue] = useState<Date | null>(null);
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
              <ThemeIcon variant="light" radius="md" size="50px" color="#3845a3" my={15}>
                <IconCreditCard color="white" style={{ width: '70%', height: '70%' }} />
              </ThemeIcon>
            </Box>
            <Center>
              <Box>
                <Text fz="xl" fw="bold" color="black">
                  Financial Analytics
                </Text>
                <Text fz="sm" color="black">
                  This page is used to see overall data about financial
                </Text>
              </Box>
            </Center>
            {/* <Flex justify="flex-end" align="end" w="100%">
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
            </Flex> */}
          </Flex>
        </Box>
      </Box>
      <Paper
        style={{
          borderRadius: 8,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: 20,

          // transition: 'transform 0.3s ease-in-out',
        }}>
        <Grid mt={10}>
          <Grid.Col mt={20} span={3}>
            <Flex justify="flex-end" align="center" w="100%" h="100%">
              <Paper
                style={{
                  borderRadius: 8,
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                  // padding: 10,
                  // transition: 'transform 0.3s ease-in-out',
                }}>
                {/* <Calendar /> */}
              </Paper>
            </Flex>
          </Grid.Col>
          <Grid.Col span={4}>
            <Box mt={20}>
              <RevenueSection />
            </Box>
          </Grid.Col>
          <Grid.Col span={4}>
            <Box mt={20}>
              <GrossProfit />
            </Box>
          </Grid.Col>
        </Grid>
        <Grid mt={10}>
          <Grid.Col mt={20} span={3}>
            {/* <Flex align="center" w="100%" h="100%">
              <Text color="#61677A" fw="bold" fz="sm" pb={20}>
                Operation Unit
              </Text>
              <OperationChart />
            </Flex> */}
          </Grid.Col>
          <Grid.Col span={4}>
            <Box mt={20}>
              <Expense />
            </Box>
          </Grid.Col>
          <Grid.Col span={4}>
            <Box mt={20}>
              <Profit />
            </Box>
          </Grid.Col>
        </Grid>
      </Paper>
      {/* <Grid mt={10}>
        <Box mt={20}>
          <OperationChart />
        </Box>
        <Box mt={20}>
          <Expense />
        </Box>
        <Box mt={20}>
          <Profit />
        </Box>
      </Grid> */}
      <Box mt={20}>
        <TableService />
      </Box>
      {/* <Box mt={20}>
        <AccountTable />
      </Box>
      <Box mt={20}>
        <CorporateSocial />
      </Box>
      <Box mt={20}>
        <CorporateTable />
      </Box>
      <Box mt={20}>
        <CorporateTableTable />
      </Box> */}
    </Box>
  );
};
