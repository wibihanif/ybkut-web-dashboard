import { AppShell, Group, Header, Image, Navbar, ScrollArea, Stack } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import ybkutLogo from '~/assets/ybkut-dashboard.jpeg';
import ybkutBg from '~/assets/Group3.jpg';
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
        // backgroundColor: 'rgba(239, 233, 206, 1)',
        // backgroundColor: '#dde3ee',
        backgroundColor: 'rgb(247, 250, 252)',
        // backgroundImage: `url(${ybkutBg})`, // Use url() to specify the background image
        backgroundSize: 'cover', // Adjust the background size as needed
      }}
      navbar={
        React.isValidElement(sidebarMenus) && sidebarMenus.props.location.pathname !== '/' ? ( // Use ternary operator to conditionally render Navbar
          <Navbar
            sx={{ backgroundColor: 'rgb(255, 255, 255)', border: 'none' }}
            width={{ base: 300 }}
            p="lg"
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
        React.isValidElement(sidebarMenus) && sidebarMenus.props.location.pathname !== '/' ? (
          <Header height={60} px="xl" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <Group
              h="100%"
              display="flex"
              style={{ justifyContent: 'space-between', width: '100%' }}>
              <Link to="/">
                <Image width="60%" src={ybkutLogo} alt="GSI" />
              </Link>
              <UserSection />
            </Group>
          </Header>
        ) : undefined
      }>
      {children}
    </AppShell>
  );
};
