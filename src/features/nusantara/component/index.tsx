import { Box, Center, Flex, Paper, Text, ThemeIcon } from '@mantine/core';
import { IconVocabulary } from '@tabler/icons-react';
import React from 'react';
import { SummarySection } from './SummarySection';
import { MapSection } from './MapSection';
import { SummaryStudent } from './SummaryStudent';
import { TableDOReguler } from './TableDOReguler';
import { SummaryRight } from './SummaryRight';
import { TableCustomer } from './TableCustomer';
import { ChartRadialbar } from './ChartRadialbar';
import { SalesChart } from '~/features/kipl/component/chart/SalesChart';
import { SalesPerformanceChart } from './SalesPerformanceChart';
import { OutputTrendChart } from './OutputTrendChart';

export const NusantaraHome: React.FC = () => {
  return (
    <Box>
      <Box
        style={{
          borderBottom: 'solid rgba(0, 0, 0, 0.1)',
          padding: 1,
          paddingLeft: 30,
        }}>
        <Flex gap={20}>
          <Box px={12} style={{ borderRadius: 8 }}>
            <ThemeIcon
              variant="light"
              radius="md"
              size="50px"
              color="rgba(253, 224, 71, 1)"
              my={15}>
              <IconVocabulary color="white" style={{ width: '70%', height: '70%' }} />
            </ThemeIcon>
          </Box>

          <Center>
            <Box>
              <Text fz="xl" fw="bold" color="white">
                Nusantara Dashboard
              </Text>
              <Text fz="sm" color="white">
                This page is used to see Nusantara Dashboard
              </Text>
            </Box>
          </Center>
        </Flex>
      </Box>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-5">
          <MapSection />
          <SummaryStudent />
          <TableDOReguler />
        </div>
        <div className="flex flex-col gap-5">
          <SummaryRight />
          <div className="grid grid-cols-7 gap-3">
            <div className=" col-span-4">
              <TableCustomer />
            </div>
            <div className="col-span-3">
              <ChartRadialbar />
            </div>
            <div className="col-span-2">
              <SalesPerformanceChart />
            </div>
            <div className="col-span-5">
              <OutputTrendChart />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};
