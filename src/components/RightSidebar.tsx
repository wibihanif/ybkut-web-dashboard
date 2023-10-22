import React, { ReactNode } from 'react';
import { Divider, Paper, Stack, Title } from '@mantine/core';

interface RightSidebarProps {
  sections: {
    title: string;
    components: ReactNode[];
  }[];
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ sections }) => {
  return (
    <Stack>
      {sections.map(section => {
        return (
          <Paper p={16}>
            <Divider
              label={
                <Title order={4} ta="center">
                  {section.title}
                </Title>
              }
              labelPosition="center"
            />
            <Stack mt="lg">
              {section.components.map(component => {
                return component;
              })}
            </Stack>
          </Paper>
        );
      })}
    </Stack>
  );
};
