import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InventoryAnalytic } from '~/features/inventory';

export const InventoryAnalyticPage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToCertainScreen = (route: string) => {
    navigate(route);
  };

  return <InventoryAnalytic navigateToCertainPage={navigateToCertainScreen} />;
};
