import React from 'react';
import { Box, Center, Flex, Paper, Text, ThemeIcon } from '@mantine/core';
import { IconUserCheck } from '@tabler/icons-react';
import Lottie from 'react-lottie';
import animationData from './maintenance.json'; // Import your downloaded animation JSON file

interface PoliklinikAnalyticProps {
  navigateToCertainPage: (route: string) => void;
}

export const PoliklinikAnalytic: React.FC<PoliklinikAnalyticProps> = ({
  navigateToCertainPage,
}) => {
  // Lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Pass your animation data here
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

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
            <ThemeIcon variant="light" radius="md" size="50px" color="#389ca3" my={15}>
              <IconUserCheck color="white" style={{ width: '70%', height: '70%' }} />
            </ThemeIcon>
          </Box>

          <Center>
            <Box>
              <Text fz="xl" fw="bold" color="white">
                Poliklinik Analytics
              </Text>
              <Text fz="sm" color="#c7c6c6">
                This page is used to see overall data about poliklinik
              </Text>
            </Box>
          </Center>
        </Flex>
      </Box>
      <Box mt={20}>
        <Paper
          style={{
            borderRadius: 8,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            padding: 20,
            transition: 'transform 0.3s ease-in-out',
          }}
          sx={{
            ':hover': {
              cursor: 'pointer',
              transform: 'scale(1.02)',
            },
          }}>
          {/* Lottie animation */}
          <Lottie options={defaultOptions} />
        </Paper>
      </Box>
    </Box>
  );
};
