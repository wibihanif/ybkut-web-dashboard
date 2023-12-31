import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AssetAnalytics } from '~/features/asset/component';

export const AssetAnalyticsPage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToCertainScreen = (route: string) => {
    navigate(route);
  };
  return <AssetAnalytics navigateToCertainPage={navigateToCertainScreen} />;
};
