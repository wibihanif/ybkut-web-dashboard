import { Paper, SimpleGrid, Text } from '@mantine/core';
import { LeadTimeTable } from './LeadTimeTable';

export const LeadTimeSection = () => {
  return (
    <SimpleGrid cols={1}>
      <Paper
        style={{
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: 20,
          transition: 'transform 0.3s ease-in-out',
        }}
        sx={{
          ':hover': {
            cursor: 'pointer',
            transform: 'scale(1.02)',
          },
        }}
        radius="md">
        <Text color="#61677A" fw="bold" fz="sm" pb={20}>
          LEAD TIME TO PURCHASE
        </Text>
        <LeadTimeTable />
      </Paper>
    </SimpleGrid>
  );
};
