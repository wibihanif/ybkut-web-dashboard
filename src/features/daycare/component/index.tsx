import { Box, Center, Flex, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import React from 'react';
import { ChartSection } from './chart/ChartSection';

export const DaycareAnalytic: React.FC = () => {
  return (
    <Box>
      <Box style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20, paddingLeft: 30 }}>
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
                Daycare Analytics
              </Text>
              <Text fz="sm" color="#7D7C7C">
                This page is used to see overall data about daycare
              </Text>
            </Box>
          </Center>
        </Flex>
      </Box>
      <Box mt={20}>
        <ChartSection />
      </Box>
    </Box>
  );
};