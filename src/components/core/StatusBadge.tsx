import { Box, MantineColor, Text } from '@mantine/core';
import React from 'react';

interface StatusBadgeProps {
  state: string;
}

interface StatusBadgeStyle {
  text: string;
  bgColor: MantineColor;
}

const statusBadgeStyle: Record<string, StatusBadgeStyle> = {
  PENDING: {
    text: 'Pending',
    bgColor: 'rgba(255, 206, 86)',
  },
  CANCELED: {
    text: 'Canceled',
    bgColor: 'rgba(255, 99, 132)',
  },
  SUCCESS: {
    text: 'Success',
    bgColor: 'rgba(75, 192, 192)',
  },
  Pending: {
    text: 'Pending',
    bgColor: 'rgba(255, 206, 86)',
  },
  Canceled: {
    text: 'Canceled',
    bgColor: 'rgba(255, 99, 132)',
  },
  Success: {
    text: 'Success',
    bgColor: 'rgba(75, 192, 192)',
  },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ state }) => {
  return (
    <Box
      style={{
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: statusBadgeStyle[state].bgColor,
      }}
      px={10}>
      <Text color="white" fw="bold">
        {statusBadgeStyle[state].text}
      </Text>
    </Box>
  );
};
