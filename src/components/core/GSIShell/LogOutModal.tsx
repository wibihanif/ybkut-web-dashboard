import { Button, Flex, Modal, ModalProps, Stack, Text } from '@mantine/core';

interface LogOutModalProps extends ModalProps {
  onSubmit: () => void;
}

export const LogOutModal: React.FC<LogOutModalProps> = ({ onSubmit, ...props }) => {
  return (
    <Modal {...props} title="Log Out Confirmation" centered>
      <Stack>
        <Text fz="xs" fw="bold" color="red">
          Are you sure you want to log out of your account? Logging out will require you to sign in
          again to access your account.
        </Text>
        <Flex justify="end" gap={10}>
          <Button variant="default" color="dark" onClick={props.onClose}>
            Cancel
          </Button>
          <Button color="red" type="submit" onClick={onSubmit}>
            Logout
          </Button>
        </Flex>
      </Stack>
    </Modal>
  );
};
