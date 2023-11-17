import { Flex, Paper, SimpleGrid, Text } from '@mantine/core';
import { RevenueTable } from './table/RevenueTable';
import { OperationChart } from './chart/OperationChart';
import { RevenueYtdTable } from './table/RevenueYtdTable';
import { ProfitTMTableTable } from './table/ProfitTMTable';
import { AccountReceivableChart } from './chart/AccountReceivable';
import { AccountPayableChart } from './chart/AccountPayable';

export const AccountReceivableSection = () => {
  return (
    <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg">
      <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
        <Flex justify="space-between">
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            Account Receivable
          </Text>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            IDR 1.xxx.xxx
          </Text>
        </Flex>
        <AccountReceivableChart />
      </Paper>
      <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
        <Flex justify="space-between">
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            Account Payable
          </Text>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            IDR 1.xxx.xxx
          </Text>
        </Flex>
        <AccountPayableChart />
      </Paper>
    </SimpleGrid>
  );
};
