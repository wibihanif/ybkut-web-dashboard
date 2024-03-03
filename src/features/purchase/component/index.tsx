import { Box, Center, Flex, Text, ThemeIcon } from '@mantine/core';
import { IconCreditCard } from '@tabler/icons-react';
import React from 'react';
import { SummarySection } from './SummarySection';
import { ChartSection } from './chart/ChartSection';
import { LeadTimeSection } from './LeadTimeSection';

interface PurchaseAnalyticProps {
  navigateToCertainPage: (route: string) => void;
}

export const PurchaseAnalytic: React.FC<PurchaseAnalyticProps> = ({ navigateToCertainPage }) => {
  return (
    <Box>
      <Box
        style={{
          borderBottom: 'solid rgba(0, 0, 0, 0.1)',
          padding: 20,
          paddingLeft: 30,
        }}>
        <Flex gap={20}>
          <Box px={12} style={{ borderRadius: 8 }}>
            <ThemeIcon variant="light" radius="md" size="50px" color="#3845a3" my={15}>
              <IconCreditCard color="white" style={{ width: '70%', height: '70%' }} />
            </ThemeIcon>
          </Box>

          <Center>
            <Box>
              <Text fz="xl" fw="bold" color="black">
                Dashboard Purchase
              </Text>
              <Text fz="sm" color="black">
                This page is used to see overall data about purchase
              </Text>
            </Box>
          </Center>
        </Flex>
      </Box>
      <Box mt={20}>
        <SummarySection navigateToCertainPage={navigateToCertainPage} />
        <ChartSection />
      </Box>
      <Box mt={20}>
        <LeadTimeSection />
      </Box>
    </Box>
  );
};
