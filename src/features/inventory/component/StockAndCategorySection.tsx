import { Paper, SimpleGrid, Text } from '@mantine/core';
import { StockOpnameTable } from './table/StockOpnameTable';
import { ProductVariantChart } from './chart/ProductVariantChart';

export const StockAndCategorySection = () => {
  return (
    <SimpleGrid cols={2}>
      <Paper
        style={{
          borderRadius: 8,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: 20,
          transition: 'transform 0.3s ease-in-out',
          height: '600px',
        }}
        sx={{
          ':hover': {
            cursor: 'pointer',
            transform: 'scale(1.02)',
          },
        }}>
        <StockOpnameTable />
      </Paper>
      <Paper
        style={{
          borderRadius: 8,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: 20,
          transition: 'transform 0.3s ease-in-out',
          height: '600px',
        }}
        sx={{
          ':hover': {
            cursor: 'pointer',
            transform: 'scale(1.02)',
          },
        }}>
        <Text color="#61677A" fw="bold" fz="sm" pb={20}>
          TOTAL PRODUK PER KATEGORI
        </Text>
        <ProductVariantChart />
      </Paper>
    </SimpleGrid>
  );
};
