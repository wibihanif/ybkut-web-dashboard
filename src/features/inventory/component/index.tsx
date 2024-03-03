import { Box, Center, Flex, Text, ThemeIcon } from '@mantine/core';
import { IconBuildingWarehouse } from '@tabler/icons-react';
import React from 'react';
import { SummarySection } from './SummarySection';
import { StockAndVariantSection } from './StockAndVariantSection';
import { StockAndCategorySection } from './StockAndCategorySection';

interface InventoryAnalyticProps {
  navigateToCertainPage: (route: string) => void;
}

export const InventoryAnalytic: React.FC<InventoryAnalyticProps> = ({ navigateToCertainPage }) => {
  return (
    <Box>
      <Box
        style={{
          borderBottom: 'solid rgba(0, 0, 0, 0.1)',
          padding: 20,
          paddingLeft: 30,
        }}>
        <Flex gap={20}>
          <Box px={12} style={{ borderRadius: 8 }}>
            <ThemeIcon variant="light" radius="md" size="50px" color="#3845a3" my={15}>
              <IconBuildingWarehouse color="white" style={{ width: '70%', height: '70%' }} />
            </ThemeIcon>
          </Box>

          <Center>
            <Box>
              <Text fz="xl" fw="bold" color="black">
                Inventory Analytics
              </Text>
              <Text fz="sm" color="black">
                This page is used to see overall data about inventory
              </Text>
            </Box>
          </Center>
        </Flex>
      </Box>
      <Box mt={20}>
        <SummarySection navigateToCertainPage={navigateToCertainPage} />
      </Box>
      <Box mt={20}>
        <StockAndVariantSection />
      </Box>
      <Box mt={20}>
        <StockAndCategorySection />
      </Box>
    </Box>
  );
};
