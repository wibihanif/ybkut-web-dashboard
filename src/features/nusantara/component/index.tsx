import { Box, Center, Flex, Paper, Text, ThemeIcon } from '@mantine/core';
import { IconVocabulary } from '@tabler/icons-react';
import React from 'react';
import { SummarySection } from './SummarySection';
import { MapSection } from './MapSection';

export const NusantaraHome: React.FC = () => {
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
              color="rgba(253, 224, 71, 1)"
              my={15}>
              <IconVocabulary color="white" style={{ width: '70%', height: '70%' }} />
            </ThemeIcon>
          </Box>

          <Center>
            <Box>
              <Text fz="xl" fw="bold" color="black">
                Nusantara Dashboard
              </Text>
              <Text fz="sm" color="black">
                This page is used to see Nusantara Dashboard
              </Text>
            </Box>
          </Center>
        </Flex>
      </Box>

      <Box mt={20}>
        <Paper p={20}>
          <MapSection />

          <SummarySection />
        </Paper>
      </Box>
    </Box>
  );
};
