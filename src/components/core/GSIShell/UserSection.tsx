import { Avatar, Group, Navbar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useStore } from '~/stores';
import { googleLogout } from '@react-oauth/google';
import { LogOutModal } from './LogOutModal';

export const UserSection = () => {
  const [opened, handlers] = useDisclosure(false);

  const { user, onLogout } = useStore();

  const handleLogout = () => {
    onLogout();
    googleLogout();
  };

  return (
    <>
      <Navbar.Section onClick={handlers.open}>
        <Group position="apart">
          <Group>
            <Avatar color="brand" radius="xl">
              {user?.email[0].toUpperCase()}
            </Avatar>
          </Group>
        </Group>
      </Navbar.Section>
      <LogOutModal opened={opened} onClose={handlers.close} centered onSubmit={handleLogout} />
    </>
  );
};
