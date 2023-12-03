import { Paper, SimpleGrid } from '@mantine/core';
import { CurrentStockTable } from './table/CurrentStockTable';
import { VariantTotalTable } from './table/VariantTotalTable';

export const StockAndVariantSection = () => {
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
        <CurrentStockTable />
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
        <VariantTotalTable />
      </Paper>
    </SimpleGrid>
  );
};
