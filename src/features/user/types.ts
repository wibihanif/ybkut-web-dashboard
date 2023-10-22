import { Identity, InvestorProfile, RiskProfile } from '../kyc/types';

export interface User {
  id: string;
  email: string;
  phoneNumber: string;
  phoneNumberVerified: boolean;
  emailVerified: boolean;
  type: string;
  totalInvestment: string;
  icxConnectEligible: boolean;
  identity: Identity;
  investorProfile?: InvestorProfile | null;
  referralCode?: string | null;
  referredBy?: string | null;
  SID?: string | null;
  SRE?: string | null;
  CIF?: string | null;
}

export type UserResponse = Pick<User, 'id' | 'email' | 'phoneNumber'> & {
  CIF: string | null;
  SID: string | null;
  SRE: string | null;
  identity: Pick<Identity, 'user' | 'fullName' | 'statusApproval' | 'approved' | 'rejected'> | null;
  investorProfile: Pick<
    InvestorProfile,
    'user' | 'statusApproval' | 'approved' | 'rejected'
  > | null;
  riskProfile: Pick<RiskProfile, 'user' | 'statusApproval' | 'approved' | 'rejected'> | null;
  kycBankAccount: {
    user: string;
    statusApproval: boolean;
    approved: boolean;
    rejected: boolean;
  } | null;
  wallet: { user: string; balance: string; reservedBalance: string };
};

export type ModifiedUser = Pick<User, 'id' | 'email' | 'phoneNumber'> & {
  fullName: string;
  nik: string;
};
