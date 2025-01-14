import { Box, Center, Flex, Text, ThemeIcon } from '@mantine/core';
import { IconAsset } from '@tabler/icons-react';
import React from 'react';
import { SummarySection } from './SummarySection';
import { ChartSection } from './chart/ChartSection';
import { TableSection } from './table/tableSection';

interface AssetAnalyticProps {
  navigateToCertainPage: (route: string) => void;
}

export const AssetAnalytics: React.FC<AssetAnalyticProps> = ({ navigateToCertainPage }) => {
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
            <ThemeIcon
              variant="light"
              radius="md"
              size="50px"
              color="rgba(59, 130, 246, 1)"
              my={15}>
              <IconAsset color="white" style={{ width: '70%', height: '70%' }} />
            </ThemeIcon>
          </Box>

          <Center>
            <Box>
              <Text fz="xl" fw="bold" color="black">
                Asset Analytics
              </Text>
              <Text fz="sm" color="black">
                This page is used to see overall data about asset
              </Text>
            </Box>
          </Center>
        </Flex>
      </Box>
      <Box mt={20}>
        <SummarySection navigateToCertainPage={navigateToCertainPage} />
        <ChartSection />
        <TableSection />
      </Box>
    </Box>
  );
};
