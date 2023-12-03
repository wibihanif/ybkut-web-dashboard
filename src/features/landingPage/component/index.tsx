import { Box } from '@mantine/core';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { LandingPageRoutes } from '~/components/router/LandingPageRoutes';
// import { SummarySection } from './SummarySection';
// import { GraphSection } from './GraphSection';
// import { MapSection } from './MapSection';

export const LandingPageHome: React.FC = () => {
  const location = useLocation();
  return (
    <Box>
      <LandingPageRoutes location={location} />
    </Box>
  );
};
