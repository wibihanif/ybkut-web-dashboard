import { Box, Paper, SimpleGrid, Text } from '@mantine/core';
import { Maps } from '../../../components/map/Map';

export const MapSection = () => {
  return (
    <SimpleGrid cols={1}>
      <Paper
        style={{
          borderRadius: 8,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: 20,
          // transition: 'transform 0.3s ease-in-out',
        }}
        // sx={{
        //   ':hover': {
        //     cursor: 'pointer',
        //     transform: 'scale(1.02)',
        //   },
        // }}
      >
        <Text color="#61677A" fw="bold" fz="sm" pb={20}>
          MAPS
        </Text>
        <Box>
          <Maps />
        </Box>
      </Paper>
    </SimpleGrid>
  );
};
