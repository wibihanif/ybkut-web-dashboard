import { Flex, Paper, SimpleGrid, Text } from '@mantine/core';
import { RevenueTable } from './table/RevenueTable';
// import { OperationChart } from './chart/OperationChart';
import { RevenueYtdTable } from './table/RevenueYtdTable';
import { ProfitTMTableTable } from './table/ProfitTMTable';
import { AccountPayableChart } from './chart/AccountPayable';
import { AccountReceivableChart } from './chart/AccountReceivable';
import { AccountTable } from './table/AccountTable';
import { CorporatePlanChart } from './chart/CorporatePlan';
import { CorporateActualChart } from './chart/CorporateActual';

export const CorporateSocial = () => {
  return (
    <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg">
      <Paper
        style={{
          borderRadius: 8,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: 20,
          transition: 'transform 0.3s ease-in-out',
        }}
        sx={{
          ':hover': {
            cursor: 'pointer',
            transform: 'scale(1.02)',
          },
        }}>
        <Text color="#61677A" fw="bold" fz="sm" pb={20}>
          Corporate Social Responsibility (Plan)
        </Text>
        <CorporatePlanChart />
      </Paper>
      <Paper
        style={{
          borderRadius: 8,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: 20,
          transition: 'transform 0.3s ease-in-out',
        }}
        sx={{
          ':hover': {
            cursor: 'pointer',
            transform: 'scale(1.02)',
          },
        }}>
        <Text color="#61677A" fw="bold" fz="sm" pb={20}>
          Corporate Social Responsibility (Actual)
        </Text>
        <CorporateActualChart />
      </Paper>
    </SimpleGrid>
  );
};
