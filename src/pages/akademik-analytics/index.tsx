import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AkademikAnalytics } from '~/features/akademik/component';

export const AkademikAnalyticsPage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToCertainScreen = (route: string) => {
    navigate(route);
  };
  return <AkademikAnalytics navigateToCertainPage={navigateToCertainScreen} />;
};
