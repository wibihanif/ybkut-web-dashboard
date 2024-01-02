import { Box, Center, Flex, Text, ThemeIcon } from '@mantine/core';
import { IconUserCheck } from '@tabler/icons-react';
import React from 'react';
import { ChartSection } from './chart/ChartSection';

interface DaycareAnalyticProps {
  navigateToCertainPage: (route: string) => void;
}

export const DaycareAnalytic: React.FC<DaycareAnalyticProps> = ({ navigateToCertainPage }) => {
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
            <ThemeIcon variant="light" radius="md" size="50px" color="#a33858" my={15}>
              <IconUserCheck color="white" style={{ width: '70%', height: '70%' }} />
            </ThemeIcon>
          </Box>

          <Center>
            <Box>
              <Text fz="xl" fw="bold" color="white">
                Daycare Analytics
              </Text>
              <Text fz="sm" color="#c7c6c6">
                This page is used to see overall data about daycare
              </Text>
            </Box>
          </Center>
        </Flex>
      </Box>
      <Box mt={20}>
        <ChartSection navigateToCertainPage={navigateToCertainPage} />
      </Box>
    </Box>
  );
};
