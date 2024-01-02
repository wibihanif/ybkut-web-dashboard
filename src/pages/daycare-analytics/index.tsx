import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DaycareAnalytic } from '~/features/daycare';

export const DaycareAnalyticPage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToCertainScreen = (route: string) => {
    navigate(route);
  };
  return <DaycareAnalytic navigateToCertainPage={navigateToCertainScreen} />;
};
