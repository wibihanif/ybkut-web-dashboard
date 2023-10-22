import React, { useState } from 'react';
import {
  UpdateUserInformationFormProvider,
  UpdateUserInformationSchema,
  useUpdateUserInformationForm,
} from '../forms/update-user-information';
import { Box, Button, Flex, Stack, TextInput } from '@mantine/core';
import { UserResponse } from '../types';
import { toRupiah } from '~/utils/format';
import { KycApprovalStatus } from '~/features/kyc/types';
import { UserKycStatus } from './UserKycStatus';
import { UpdateUserConfirmationModal } from './UpdateUserConfirmationModal';
import { useDisclosure } from '@mantine/hooks';
import { useUpdateUserInformationMutation } from '../api/useUpdateUserInformationMutation';
import { notifications } from '@mantine/notifications';
import { AxiosError } from 'axios';
import { zodResolver } from '@mantine/form';

interface UpdateUserInformationFormProps {
  userInformation: UserResponse;
  userKycStatus: {
    kycIdentityStatus: KycApprovalStatus;
    kycInvestorProfileStatus: KycApprovalStatus;
    kycRiskProfileStatus: KycApprovalStatus;
    kycBankAccountStatus: KycApprovalStatus;
  };
}

export const UpdateUserInformationForm: React.FC<UpdateUserInformationFormProps> = ({
  userInformation,
  userKycStatus,
}) => {
  // ---- states
  const [isEditable, setIsEditable] = useState<boolean>(false);

  // ---- access user data
  const { id, email, phoneNumber, SID, SRE, identity, wallet } = userInformation;
  const {
    kycIdentityStatus,
    kycInvestorProfileStatus,
    kycRiskProfileStatus,
    kycBankAccountStatus,
  } = userKycStatus;

  // ---- form declaration
  const updateUserInformationForm = useUpdateUserInformationForm({
    initialValues: {
      phoneNumber,
      SID: SID || '',
      SRE: SRE || '',
    },
    validate: zodResolver(UpdateUserInformationSchema),
    validateInputOnChange: true,
  });

  // ---- modal visibility hooks
  const [
    updateUserInformationIsOpen,
    { close: closeUpdateUserInformationModal, open: openUpdateUserInformationModal },
  ] = useDisclosure();

  // ---- mutations
  const { mutateAsync: updateUserInformation } = useUpdateUserInformationMutation();
  const onSubmitHandler = async () => {
    try {
      const { phoneNumber, SRE, SID } = updateUserInformationForm.values;

      await updateUserInformation({
        userId: userInformation.id,
        payload: {
          phoneNumber,
          SRE,
          SID,
        },
      });

      notifications.show({
        message: 'User information has been successfully updated',
        color: 'teal',
      });
    } catch (e) {
      const err = e as AxiosError<{ errors: string[] }>;
      const errors = err.response?.data.errors;

      if (!errors || err.response?.status === 500) {
        notifications.show({
          message: 'An error occured',
          color: 'red',
        });

        return;
      }

      errors.forEach(error => {
        notifications.show({
          message: error,
          color: 'red',
        });
      });
    }

    closeUpdateUserInformationModal();
    setIsEditable(false);
  };

  return (
    <Flex gap="lg">
      <Box sx={{ flex: 1 }}>
        <UpdateUserInformationFormProvider form={updateUserInformationForm}>
          <form>
            <Stack>
              <TextInput label="ID" value={id} readOnly disabled />
              <TextInput label="Email" value={email} readOnly disabled />
              <TextInput label="Full Name" value={identity?.fullName} readOnly disabled />
              <TextInput
                disabled={!isEditable}
                label="Phone Number"
                {...updateUserInformationForm.getInputProps('phoneNumber')}
              />
              <TextInput
                disabled={!isEditable}
                label="SRE"
                placeholder="Enter SRE here"
                {...updateUserInformationForm.getInputProps('SRE')}
              />
              <TextInput
                disabled={!isEditable}
                label="SID"
                placeholder="Enter SID here"
                {...updateUserInformationForm.getInputProps('SID')}
              />
              <TextInput
                disabled
                label="Wallet Balance"
                readOnly
                value={toRupiah(Number(wallet.balance))}
              />
              <TextInput
                disabled
                label="Reserved Wallet Balance"
                readOnly
                value={toRupiah(Number(wallet.reservedBalance))}
              />
              <Flex justify="flex-end">
                {!isEditable && (
                  <Button miw={100} onClick={() => setIsEditable(true)}>
                    Edit
                  </Button>
                )}

                {isEditable && (
                  <Flex gap="sm">
                    <Button
                      color="red"
                      miw={100}
                      onClick={() => {
                        updateUserInformationForm.reset();
                        setIsEditable(false);
                      }}>
                      Cancel
                    </Button>
                    <Button
                      variant="outline"
                      miw={120}
                      onClick={openUpdateUserInformationModal}
                      disabled={!!Object.keys(updateUserInformationForm.errors).length}>
                      Save changes
                    </Button>
                  </Flex>
                )}
              </Flex>
            </Stack>
            <UpdateUserConfirmationModal
              opened={updateUserInformationIsOpen}
              onClose={closeUpdateUserInformationModal}
              onSubmit={onSubmitHandler}
            />
          </form>
        </UpdateUserInformationFormProvider>
      </Box>
      <Box sx={{ flex: 1 }}>
        <UserKycStatus
          kycIdentityStatus={kycIdentityStatus}
          kycInvestorProfileStatus={kycInvestorProfileStatus}
          kycRiskProfileStatus={kycRiskProfileStatus}
          kycBankAccountStatus={kycBankAccountStatus}
        />
      </Box>
    </Flex>
  );
};
