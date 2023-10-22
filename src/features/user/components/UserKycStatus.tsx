import { Box, Table, Text, createStyles } from '@mantine/core';
import React from 'react';
import { KycStatusBadge } from '~/features/kyc/components/KycStatusBadge';
import { KycApprovalStatus } from '~/features/kyc/types';

interface UserKycStatusProps {
  kycIdentityStatus: KycApprovalStatus;
  kycInvestorProfileStatus: KycApprovalStatus;
  kycRiskProfileStatus: KycApprovalStatus;
  kycBankAccountStatus: KycApprovalStatus;
}

const useStyles = createStyles(() => {
  return {
    text: {
      fontWeight: 'bold',
    },
  };
});

export const UserKycStatus: React.FC<UserKycStatusProps> = ({
  kycIdentityStatus,
  kycInvestorProfileStatus,
  kycRiskProfileStatus,
  kycBankAccountStatus,
}) => {
  const { classes } = useStyles();

  return (
    <Box py="sm">
      <Table verticalSpacing="lg">
        <tbody>
          <Box component="tr">
            <td>
              <Text className={classes.text}>KYC Identity</Text>
            </td>
            <td>
              <KycStatusBadge status={kycIdentityStatus} />
            </td>
          </Box>
          <Box component="tr">
            <td>
              <Text className={classes.text}>KYC Investor Profile</Text>
            </td>
            <td>
              <KycStatusBadge status={kycInvestorProfileStatus} />
            </td>
          </Box>
          <Box component="tr">
            <td>
              <Text className={classes.text}>KYC Risk Profile</Text>
            </td>
            <td>
              <KycStatusBadge status={kycRiskProfileStatus} />
            </td>
          </Box>
          <Box component="tr">
            <td>
              <Text className={classes.text}>KYC Bank Account</Text>
            </td>
            <td>
              <KycStatusBadge status={kycBankAccountStatus} />
            </td>
          </Box>
        </tbody>
      </Table>
    </Box>
  );
};
