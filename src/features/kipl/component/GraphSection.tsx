import { Paper, SimpleGrid, Text } from '@mantine/core';
import { ProjectChart } from './chart/ProjectChart';
import { RevenueChart } from './chart/RevenueChart';

export const GraphSection = () => {
  return (
    <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg" mt={20}>
      <Paper
        style={{
          borderRadius: 8,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease-in-out',
        }}
        sx={{
          ':hover': {
            cursor: 'pointer',
            transform: 'scale(1.02)',
          },
        }}>
        <Text color="#61677A" fw="bold" fz="sm" pb={20} style={{ alignSelf: 'start' }}>
          PROJECT
        </Text>
        <ProjectChart />
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
          REVENUE
        </Text>
        <RevenueChart />
      </Paper>
    </SimpleGrid>
  );
};
