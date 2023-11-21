import { Box, Center, Flex, Input, Text, ThemeIcon } from '@mantine/core';
import { IconGraph, IconSearch } from '@tabler/icons-react';
import React from 'react';
import { StockOpnameTable } from './table';

export const InventoryStockOpname: React.FC = () => {
  return (
    <Box>
      <Box
        style={{
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: 20,
          paddingLeft: 30,
          borderRadius: 2,
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Flex gap={20}>
          <Box
            bg="white"
            px={12}
            style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
            <ThemeIcon variant="gradient" size="xl" color="gray" my={15}>
              <IconGraph />
            </ThemeIcon>
          </Box>
          <Center>
            <Box>
              <Text fz="xl" fw="bold">
                Inventory Stock Opname
              </Text>
              <Text fz="sm" color="#7D7C7C">
                This page is used to see total inventory stock opname
              </Text>
            </Box>
          </Center>
        </Flex>
        <Box w="40%">
          <Box p={15}>
            <Input
              placeholder="Search here"
              icon={<IconSearch size={16} color="#3392E7" />}
              radius={10}
              sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 10 }}
            />
          </Box>
        </Box>
      </Box>
      <Box mt={20}>
        <StockOpnameTable />
      </Box>
    </Box>
  );
};
