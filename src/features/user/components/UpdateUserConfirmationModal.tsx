import React from 'react';
import { Button, Flex, Modal, ModalProps, Stack, Text } from '@mantine/core';

interface UpdateUserConfirmationModalProps extends ModalProps {
  onSubmit: () => void;
}

export const UpdateUserConfirmationModal: React.FC<UpdateUserConfirmationModalProps> = ({
  onSubmit,
  ...props
}) => {
  return (
    <Modal {...props} title="Update User Information" centered>
      <Stack>
        <Text fz="sm">You are about to change user data.</Text>
        <Text fz="xs" fw="bold" color="red">
          This action is irreversible. Are you sure you want to proceed?
        </Text>
        <Flex justify="end" gap={10}>
          <Button variant="default" color="dark" onClick={props.onClose}>
            Cancel
          </Button>
          <Button color="red" type="submit" onClick={onSubmit}>
            Confirm
          </Button>
        </Flex>
      </Stack>
    </Modal>
  );
};
