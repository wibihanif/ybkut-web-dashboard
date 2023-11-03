import { Paper, SimpleGrid, Text } from '@mantine/core';
import { DailyKid } from './DailyKid';
import { QtyKid } from './QtyKid';
import { QtyCustomer } from './QtyCustomer';
import { RevenueBar } from './RevenueBar';
import { RevenuePie } from './RevenuePie';

export const ChartSection = () => {
  return (
    <>
      <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg" mt={20}>
        <Paper
          style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            Daily Kid
          </Text>
          <DailyKid />
        </Paper>
        <Paper
          style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            Qty Kid
          </Text>
          <QtyKid />
        </Paper>
        <Paper
          style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            Qty Customer
          </Text>
          <QtyCustomer />
        </Paper>
        <Paper
          style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            Revenue
          </Text>
          <RevenueBar />
        </Paper>
        <Paper
          style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            Revenue
          </Text>
          <RevenuePie />
        </Paper>
      </SimpleGrid>
    </>
  );
};
