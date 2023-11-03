import { Paper, SimpleGrid, Text } from '@mantine/core';
import { NominalPurchase } from './NominalPurchase';
import { AverageOrder } from './AverageOrder';

export const ChartSection = () => {
  return (
    <>
      <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg" mt={20}>
        <Paper
          style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            NOMINAL PURCHASE ORDER ASSETS
          </Text>
          <NominalPurchase />
        </Paper>
        <Paper
          style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            AVERAGE ORDER VALUE PER TAHUN
          </Text>
          <AverageOrder />
        </Paper>
      </SimpleGrid>
    </>
  );
};
