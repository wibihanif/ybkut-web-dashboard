import { Badge, Box, Flex, Group, HoverCard, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { ReactNode } from 'react';

interface InformationBadgeProps {
  description: string;
  hoverComponent?: ReactNode;
  hoverTargetComponent?: ReactNode;
}

export const InformationBadge: React.FC<InformationBadgeProps> = ({
  description,
  hoverComponent,
  hoverTargetComponent,
}) => {
  return (
    <Box
      style={{
        borderRadius: 5,
        background: '#FEE7AA',
        padding: 10,
      }}>
      <Flex gap={10}>
        <IconAlertCircle size={20} color="#E28400" />
        <Text fz="sm" color="#E28400" fw="bold">
          Information
        </Text>
      </Flex>
      <Flex gap={10} mt={10}>
        <Text fz="sm">{description}</Text>
        {hoverComponent && (
          <Group position="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                {hoverTargetComponent ? (
                  hoverTargetComponent
                ) : (
                  <Badge
                    radius="xs"
                    variant="filled"
                    color="blue"
                    style={{
                      borderRadius: 5,
                    }}>
                    See Detail
                  </Badge>
                )}
              </HoverCard.Target>
              <HoverCard.Dropdown>{hoverComponent}</HoverCard.Dropdown>
            </HoverCard>
          </Group>
        )}
      </Flex>
    </Box>
  );
};
