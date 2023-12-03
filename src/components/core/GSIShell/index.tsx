import { AppShell, Group, Header, Image, Navbar, ScrollArea, Stack } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import ybkutLogo from '~/assets/ybkut-dashboard.jpeg';
import ybkutBg from '~/assets/background-landing-page.png';
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
      // sx={theme => {
      //   return {
      //     backgroundColor: theme.colors.gray[1],
      //   };
      // }}
      // sx={{
      //   backgroundImage: '#ebf0f4',
      // }}
      sx={{
        backgroundImage: `url(${ybkutBg})`, // Use url() to specify the background image
        backgroundSize: 'cover', // Adjust the background size as needed
      }}
      navbar={
        React.isValidElement(sidebarMenus) && sidebarMenus.props.location.pathname !== '/' ? ( // Use ternary operator to conditionally render Navbar
          <Navbar
            sx={{ backgroundColor: 'rgba(160, 160, 160, 0.577)', border: 'none' }}
            width={{ base: 300 }}
            p="xs"
            zIndex={1}>
            <ScrollArea>
              <Navbar.Section>
                <Stack spacing={1}>{sidebarMenus}</Stack>
              </Navbar.Section>
            </ScrollArea>
          </Navbar>
        ) : undefined
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
