import { Paper, Stack, Text, Title } from '@mantine/core';

export const ForbiddenSection: React.FC = () => {
  return (
    <Paper p="lg" radius="md">
      <Stack>
        <Title color="red" fz="xl">
          Forbidden Access
        </Title>
        <Text fz="md">
          We regret to inform you that access to the requested page is prohibited. The method you
          have attempted to use is not permitted for this particular resource.
        </Text>
      </Stack>
    </Paper>
  );
};
