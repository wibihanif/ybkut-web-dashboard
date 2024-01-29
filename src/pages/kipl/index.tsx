import React from 'react';
import { useNavigate } from 'react-router-dom';
import { KiplHome } from '~/features/kipl';
// import { KiplHome } from '~/features/kipl';

export const KiplHomePage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToCertainScreen = (route: string) => {
    navigate(route);
  };
  return <KiplHome navigateToCertainPage={navigateToCertainScreen} />;
};
