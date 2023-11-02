import { Box, Paper, SimpleGrid, Text } from '@mantine/core';
import { Maps } from './Maps';

export const MapSection = () => {
  return (
    <SimpleGrid cols={1}>
      <Paper style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
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
