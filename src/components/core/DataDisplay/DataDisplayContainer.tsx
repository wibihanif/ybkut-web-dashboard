import { Stack, StackProps } from '@mantine/core';

export const DataDisplayContainer: React.FC<StackProps> = ({ children, ...props }) => {
  return (
    <Stack spacing={2} {...props}>
      {children}
    </Stack>
  );
};
