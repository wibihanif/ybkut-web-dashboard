import { Paper, SimpleGrid } from '@mantine/core';
import React from 'react';
import { TotalProductTable } from './table/TotalProductTable';

export const TotalProductSection: React.FC = () => {
  return (
    <SimpleGrid cols={1}>
      <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
        <TotalProductTable />
      </Paper>
    </SimpleGrid>
  );
};
