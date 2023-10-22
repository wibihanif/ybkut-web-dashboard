import { Title, TitleProps } from '@mantine/core';

export const DataDisplayTitle: React.FC<TitleProps> = ({ children, ...props }) => {
  return (
    <Title order={6} {...props}>
      {children}
    </Title>
  );
};
