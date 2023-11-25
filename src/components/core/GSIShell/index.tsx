import { AppShell, Group, Header, Image, Navbar, ScrollArea, Stack } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import ybkutLogo from '~/assets/ybkut-dashboard.jpeg';
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
          <ScrollArea>
            <Navbar.Section>
              <Stack spacing={1}>{sidebarMenus}</Stack>
            </Navbar.Section>
          </ScrollArea>
        </Navbar>
      }
      header={
        <Header height={60} px="xl" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <Group h="100%" display="flex" style={{ justifyContent: 'space-between', width: '100%' }}>
            <Link to="/">
              <Image width="60%" src={ybkutLogo} alt="GSI" />
            </Link>
            <UserSection />
          </Group>
        </Header>
      }>
      {children}
    </AppShell>
  );
};
