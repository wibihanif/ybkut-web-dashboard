import { Box, Button, Menu, ThemeIcon } from '@mantine/core';
import { IconAdjustmentsHorizontal } from '@tabler/icons-react';
import React, { PropsWithChildren } from 'react';

interface MenuFilterProps {
  label: string;
}

export const MenuFilter: React.FC<PropsWithChildren<MenuFilterProps>> = ({ label, children }) => {
  return (
    <Box>
      <Menu shadow="md">
        <Menu.Target>
          <Button bg="blue">
            <ThemeIcon size="sm">
              <IconAdjustmentsHorizontal />
            </ThemeIcon>
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>{label}</Menu.Label>
          {children}
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};
