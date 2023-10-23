import { Paper, SimpleGrid, Text } from '@mantine/core';
import { CurrentStockTable } from './CurrentStockTable';
import { VariantTotalTable } from './VariantTotalTable';

export const StockAndVariantSection = () => {
  return (
    <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg" mt={20}>
      <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
        <Text color="#61677A" fw="bold" fz="sm" pb={20}>
          CURRENT STOCK
        </Text>
        <CurrentStockTable />
      </Paper>
      <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
        <Text color="#61677A" fw="bold" fz="sm" pb={20}>
          TOTAL VARIAN
        </Text>
        <VariantTotalTable />
      </Paper>
    </SimpleGrid>
  );
};
