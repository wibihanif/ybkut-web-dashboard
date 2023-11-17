import { Flex, Paper, SimpleGrid, Text } from '@mantine/core';
import { RevenueTable } from './table/RevenueTable';
import { OperationChart } from './chart/OperationChart';
import { RevenueYtdTable } from './table/RevenueYtdTable';
import { ProfitTMTableTable } from './table/ProfitTMTable';

export const TableService = () => {
  return (
    <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg">
      <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
        <Text color="#61677A" fw="bold" fz="sm" pb={20}>
          Operation Unit
        </Text>
        <OperationChart />
      </Paper>
      <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
        <Flex justify="space-between">
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            Revenue
          </Text>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            This Month
          </Text>
        </Flex>
        <RevenueTable />
      </Paper>
      <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
        <Flex justify="space-between">
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            Revenue
          </Text>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            YTD
          </Text>
        </Flex>
        <RevenueYtdTable />
      </Paper>
      <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
        <Text color="#61677A" fw="bold" fz="sm" pb={20}>
          Profitability This Month
        </Text>
        <ProfitTMTableTable />
      </Paper>
      <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
        <Text color="#61677A" fw="bold" fz="sm" pb={20}>
          Profitability YTD
        </Text>
        <ProfitTMTableTable />
      </Paper>
    </SimpleGrid>
  );
};
