import { Box, Input, Paper, ThemeIcon } from '@mantine/core';
import { IconGraph, IconSearch } from '@tabler/icons-react';
import React from 'react';
import { HeaderPage } from '~/components/core/HeaderPage';
import { TotalPurchaseOrderDetailTable } from './PendingPurchaseOrderDetailTable';

export const PendingPurchaseOrderDetails: React.FC = () => {
  return (
    <Box>
      <HeaderPage
        inputComponent={
          <Input
            placeholder="Search here"
            icon={<IconSearch size={16} color="#dfcda6" />}
            radius={10}
            sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 10 }}
          />
        }
        subTitle="This page is used to see total Pending Purchase Order detail."
        title="Pending Purchase Order Detail"
        icon={
          <ThemeIcon variant="light" size="xl" color="#a37538" my={15}>
            <IconGraph color="white" />
          </ThemeIcon>
        }
      />
      <Paper
        style={{
          marginTop: 20,
          borderRadius: 10,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: 20,
          transition: 'transform 0.3s ease-in-out',
          height: '100%',
        }}>
        <TotalPurchaseOrderDetailTable />
      </Paper>
    </Box>
  );
};
