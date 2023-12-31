import { Avatar, Box, Flex, Group, Navbar, Text, createStyles } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useStore } from '~/stores';
import { googleLogout } from '@react-oauth/google';
import { LogOutModal } from './LogOutModal';

const useStyles = createStyles(() => ({
  userSection: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const UserSection = () => {
  const { classes } = useStyles();

  const [opened, handlers] = useDisclosure(false);

  const { user, onLogout } = useStore();

  const handleLogout = () => {
    onLogout();
    googleLogout();
  };

  return (
    <>
      <Box onClick={handlers.open} className={classes.userSection} pr={15}>
        <Navbar.Section>
          <Group position="apart">
            <Flex gap={12}>
              <Avatar color="blue" radius="xl">
                {user?.email[0].toUpperCase()}
              </Avatar>
              <Box>
                <Text fz="sm" fw="bold">
                  USER SUPER ADMIN
                </Text>
                <Text fz="sm" color="gray">
                  Admin
                </Text>
              </Box>
            </Flex>
          </Group>
        </Navbar.Section>
      </Box>
      <LogOutModal opened={opened} onClose={handlers.close} centered onSubmit={handleLogout} />
    </>
  );
};
