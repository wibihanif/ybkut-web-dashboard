import { Box, Center, Flex, Text, ThemeIcon } from '@mantine/core';
import { IconVocabulary } from '@tabler/icons-react';
import React from 'react';
import { SummarySection } from './SummarySection';
import { ChartSection } from './chart/ChartSection';
import { useGetAcademic } from '../api/useGetAcademic';
// import { TableSection } from './table/tableSection';
// import MyCalendar from './MyCalendar';
interface AkademikAnalyticsProps {
  navigateToCertainPage: (route: string) => void;
}

export const AkademikAnalytics: React.FC<AkademikAnalyticsProps> = ({ navigateToCertainPage }) => {
  // console.log(useGetAcademic());
  const { data: academic } = useGetAcademic();
  console.log(academic, 'ACADEMIC');
  return (
    <Box>
      <Box
        style={{
          borderBottom: 'solid rgba(0, 0, 0, 0.1)',
          padding: 20,
          paddingLeft: 30,
        }}>
        <Flex gap={20}>
          <Box px={12} style={{ borderRadius: 30 }}>
            <ThemeIcon
              variant="light"
              radius="md"
              size="50px"
              color="rgba(253, 224, 71, 0.15)"
              my={15}>
              <IconVocabulary color="white" style={{ width: '70%', height: '70%' }} />
            </ThemeIcon>
          </Box>

          <Center>
            <Box>
              <Text fz="xl" fw="bold" color="black">
                Dashboard Academic
              </Text>
              <Text fz="sm" color="black">
                This page is used to see overall data about akademik
              </Text>
            </Box>
          </Center>
        </Flex>
      </Box>
      <Box mt={20}>
        <SummarySection navigateToCertainPage={navigateToCertainPage} />
      </Box>
      {/* <Box mt={20}>
        <Paper>
          <MyCalendar />
        </Paper>
      </Box> */}
      <Box mt={20}>
        <ChartSection />
      </Box>
    </Box>
  );
};
