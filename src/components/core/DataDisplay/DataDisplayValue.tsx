import { Text, TextProps } from '@mantine/core';

export const DataDisplayValue: React.FC<TextProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};
