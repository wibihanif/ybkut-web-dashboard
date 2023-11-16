import { AppShell, Group, Header, Image, Navbar, Stack } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import gsiLogo from '~/assets/GSI-logo.jpeg';
import { UserSection } from './UserSection';

interface GSIShellProps {
  sidebarMenus: React.ReactNode;
}

export const GSIShell: React.FC<PropsWithChildren & GSIShellProps> = ({
  children,
  sidebarMenus,
}) => {
  return (
    <AppShell
      sx={theme => {
        return {
          backgroundColor: theme.colors.gray[1],
        };
      }}
      navbar={
        <Navbar width={{ base: 300 }} p="xs" zIndex={1}>
          <Navbar.Section>
            <Stack spacing={1}>{sidebarMenus}</Stack>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} px="xl" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <Group h="100%" display="flex" style={{ justifyContent: 'space-between', width: '100%' }}>
            <Link to="/">
              <Image width={55} src={gsiLogo} alt="GSI" />
            </Link>
            <UserSection />
          </Group>
        </Header>
      }>
      {children}
    </AppShell>
  );
};
