import { Paper, SimpleGrid, Text } from '@mantine/core';
import { StockOpenameTable } from './table/StockOpnameTable';
import { ProductVariantChart } from './chart/ProductVariantChart';

export const StockAndCategorySection = () => {
  return (
    <SimpleGrid cols={2}>
      <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
        <Text color="#61677A" fw="bold" fz="sm" pb={20}>
          STOCK OPNAME
        </Text>
        <StockOpenameTable />
      </Paper>
      <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
        <Text color="#61677A" fw="bold" fz="sm" pb={20}>
          TOTAL PRODUK PER KATEGORI
        </Text>
        <ProductVariantChart />
      </Paper>
    </SimpleGrid>
  );
};
