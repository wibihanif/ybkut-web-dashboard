import { Box, Input, Paper, ThemeIcon } from '@mantine/core';
import { IconArrowLeft, IconSearch } from '@tabler/icons-react';
import React from 'react';
import { HeaderPage } from '~/components/core/HeaderPage';
import { CustomerDetailTable } from './TotalEquipmentDetailTable';
import { Link } from 'react-router-dom';

export const CustomerDetails: React.FC = () => {
  return (
    <Box>
      <HeaderPage
        inputComponent={
          <Input
            placeholder="Search here"
            icon={<IconSearch size={16} color="#a37538" />}
            radius={10}
            sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 10 }}
          />
        }
        subTitle="This page is used to see Customer detail."
        title="Customer Detail"
        icon={
          <Link to="/kipl">
            <Box
              sx={{
                ':hover': {
                  cursor: 'pointer',
                },
              }}>
              <ThemeIcon variant="light" size="xl" color="#a37538" my={15}>
                <IconArrowLeft color="white" />
              </ThemeIcon>
            </Box>
          </Link>
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
        <CustomerDetailTable />
      </Paper>
    </Box>
  );
};
