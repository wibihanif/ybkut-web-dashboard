import { Box, Input, Paper, ThemeIcon } from '@mantine/core';
import { IconGraph, IconSearch } from '@tabler/icons-react';
import React from 'react';
import { HeaderPage } from '~/components/core/HeaderPage';
import { PendingPODetailTable } from './TotalPurchaseDetailTable';

export const PendingPODetail: React.FC = () => {
  return (
    <Box>
      <HeaderPage
        inputComponent={
          <Input
            placeholder="Search here"
            icon={<IconSearch size={16} color="#38a35a" />}
            radius={10}
            sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 10 }}
          />
        }
        subTitle="This page is used to see Pending PO."
        title="Pending PO"
        icon={
          <ThemeIcon variant="light" size="xl" color="#38a35a" my={15}>
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
        <PendingPODetailTable />
      </Paper>
    </Box>
  );
};
