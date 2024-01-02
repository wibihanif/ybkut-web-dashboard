import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PurchaseAnalytic } from '~/features/purchase';

export const PurchaseAnalyticPage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToCertainScreen = (route: string) => {
    navigate(route);
  };
  return <PurchaseAnalytic navigateToCertainPage={navigateToCertainScreen} />;
};
