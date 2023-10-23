import { Paper, SimpleGrid, Text } from '@mantine/core';
import { StockOpenameTable } from './StockOpnameTable';

export const StockOpnameSection = () => {
  return (
    <SimpleGrid cols={1}>
      <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
        <Text color="#61677A" fw="bold" fz="sm" pb={20}>
          STOCK OPNAME
        </Text>
        <StockOpenameTable />
      </Paper>
    </SimpleGrid>
  );
};
