import { Box, Center, Flex, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface HeaderPageProps {
  icon: ReactNode;
  title: string;
  subTitle: string;
  inputComponent: ReactNode;
}

export const HeaderPage: React.FC<HeaderPageProps> = ({
  icon,
  subTitle,
  title,
  inputComponent,
}) => {
  return (
    <Box
      style={{
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        padding: 20,
        paddingLeft: 30,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}>
      <Flex gap={20}>
        <Box
          bg="white"
          px={12}
          style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
          {icon}
        </Box>
        <Center>
          <Box>
            <Text fz="xl" fw="bold">
              {title}
            </Text>
            <Text fz="sm" color="#7D7C7C">
              {subTitle}
            </Text>
          </Box>
        </Center>
      </Flex>
      <Box w="40%">
        <Box p={15}>{inputComponent}</Box>
      </Box>
    </Box>
  );
};
