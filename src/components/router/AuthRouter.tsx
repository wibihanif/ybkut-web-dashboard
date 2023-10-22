import { Box, Button, Container, Paper, Stack, Title, useMantineTheme } from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons-react';
import { useGoogleLoginMutation } from '~/features/auth/api/useGoogleLogin';

export const AuthRouter = () => {
  const { mutate } = useGoogleLoginMutation();
  const theme = useMantineTheme();

  return (
    <Box w="100vw" h="100vh" bg={theme.colors.gray[2]}>
      <Container size="xs" py="xl">
        <Paper p="lg">
          <Stack>
            <Title mb="xl" align="center">
              Sign in to GSI Dashboard
            </Title>
            <Button size="lg" onClick={() => mutate()} rightIcon={<IconBrandGoogle />}>
              Sign in with Google
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};
