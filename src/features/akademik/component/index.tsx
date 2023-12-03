import { Box, Center, Flex, Text, ThemeIcon } from '@mantine/core';
import { IconVocabulary } from '@tabler/icons-react';
import React from 'react';
import { SummarySection } from './SummarySection';
import { ChartSection } from './chart/ChartSection';
import { TableSection } from './table/tableSection';

export const AkademikAnalytics: React.FC = () => {
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
            <ThemeIcon variant="light" radius="md" size="50px" color="#9338a3" my={15}>
              <IconVocabulary color="white" style={{ width: '70%', height: '70%' }} />
            </ThemeIcon>
          </Box>

          <Center>
            <Box>
              <Text fz="xl" fw="bold" color="white">
                Akademik Analytics
              </Text>
              <Text fz="sm" color="#c7c6c6">
                This page is used to see overall data about akademik
              </Text>
            </Box>
          </Center>
        </Flex>
      </Box>
      <Box mt={20}>
        <SummarySection />
        <ChartSection />
        <TableSection />
      </Box>
    </Box>
  );
};
