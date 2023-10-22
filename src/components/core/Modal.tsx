import { Modal as MantineModal } from '@mantine/core';
import { PropsWithChildren, ReactNode } from 'react';

export const Modal: React.FC<
  PropsWithChildren<{
    opened: boolean;
    onClose: () => void;
    title: string;
    isSuccess?: boolean;
    successComponent?: ReactNode;
  }>
> = ({ opened, onClose, title, isSuccess, successComponent, children }) => {
  return (
    <MantineModal opened={opened} onClose={onClose} title={title} centered>
      {isSuccess ? successComponent : children}
    </MantineModal>
  );
};
