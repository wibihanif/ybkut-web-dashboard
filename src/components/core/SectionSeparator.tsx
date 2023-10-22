import { Box, Flex, Paper, Stack, Title } from '@mantine/core';
import { PropsWithChildren, ReactNode } from 'react';

interface SectionSeparatorProps {
  title: string;
  mt?: number;
  rightSideComponent?: ReactNode;
}

export const SectionSeparator: React.FC<PropsWithChildren<SectionSeparatorProps>> = ({
  title,
  children,
  mt = 0,
  rightSideComponent,
}) => {
  return (
    <Paper p="lg" mt={mt}>
      <Stack>
        <Flex justify="space-between">
          <Box>
            <Title order={3}>{title}</Title>
          </Box>
          {rightSideComponent && <Box>{rightSideComponent}</Box>}
        </Flex>
        {children}
      </Stack>
    </Paper>
  );
};
