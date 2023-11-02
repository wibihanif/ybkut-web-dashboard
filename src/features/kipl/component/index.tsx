import { Box, Center, Flex, Text, ThemeIcon } from '@mantine/core';
import { IconGraph } from '@tabler/icons-react';
import React from 'react';
import { SummarySection } from './SummarySection';
import { GraphSection } from './GraphSection';
import { MapSection } from './MapSection';

export const KiplHome: React.FC = () => {
  return (
    <Box>
      <Box
        style={{
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: 20,
          paddingLeft: 30,
          borderRadius: 2,
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
                KIPL Analytics
              </Text>
              <Text fz="sm" color="#7D7C7C">
                This page is used to see overall data about KIPL
              </Text>
            </Box>
          </Center>
        </Flex>
      </Box>
      <Box mt={20}>
        <SummarySection />
        <GraphSection />
      </Box>
      <Box mt={20}>{/* <MapSection /> */}</Box>
    </Box>
  );
};
