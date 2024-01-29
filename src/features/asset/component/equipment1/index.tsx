import { Box, Input, Paper, ThemeIcon } from '@mantine/core';
import { IconArrowLeft, IconSearch } from '@tabler/icons-react';
import React from 'react';
import { HeaderPage } from '~/components/core/HeaderPage';
import { Equipment1DetailTable } from './TotalEquipmentDetailTable';
import { Link } from 'react-router-dom';

export const Equipment1Details: React.FC = () => {
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
        subTitle="This page is used to see Equipment by Category 1 detail."
        title="Equipment by Category 1 Detail"
        icon={
          <Link to="/asset">
            <Box
              sx={{
                ':hover': {
                  cursor: 'pointer',
                },
              }}>
              <ThemeIcon variant="light" size="xl" color="#3845a3" my={15}>
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
        <Equipment1DetailTable />
      </Paper>
    </Box>
  );
};
