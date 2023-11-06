import { Box, Paper, SimpleGrid, Text } from '@mantine/core';
import { ProjectChart } from './ProjectChart';
import { RevenueChart } from './RevenueChart';

export const GraphSection = () => {
  return (
    <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg" mt={20}>
      <Paper
        style={{
          borderRadius: 2,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Text color="#61677A" fw="bold" fz="sm" pb={20} style={{ alignSelf: 'start' }}>
          PROJECT
        </Text>
        <ProjectChart />
      </Paper>
      <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
        <Text color="#61677A" fw="bold" fz="sm" pb={20}>
          REVENUE
        </Text>
        <RevenueChart />
      </Paper>
    </SimpleGrid>
  );
};
