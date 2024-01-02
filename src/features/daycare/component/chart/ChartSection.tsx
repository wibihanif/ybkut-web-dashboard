import { Paper, SimpleGrid, Text } from '@mantine/core';
import { DailyKid } from './DailyKid';
import { QtyKid } from './QtyKid';
import { QtyCustomer } from './QtyCustomer';
import { RevenueBar } from './RevenueBar';
import { RevenuePie } from './RevenuePie';

interface RevenueSectionProps {
  navigateToCertainPage: (route: string) => void;
}

export const ChartSection: React.FC<RevenueSectionProps> = ({
  navigateToCertainPage: navigateToCertainScreen,
}) => {
  return (
    <>
      <SimpleGrid cols={2} spacing="lg" verticalSpacing="lg" mt={20}>
        <Paper
          style={{
            borderRadius: 8,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            padding: 20,
            transition: 'transform 0.3s ease-in-out',
          }}
          sx={{
            ':hover': {
              cursor: 'pointer',
              transform: 'scale(1.02)',
            },
          }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            Daily Kid
          </Text>
          <DailyKid />
        </Paper>
        <Paper
          style={{
            borderRadius: 8,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            padding: 20,
            transition: 'transform 0.3s ease-in-out',
          }}
          sx={{
            ':hover': {
              cursor: 'pointer',
              transform: 'scale(1.02)',
            },
          }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            Qty Customer
          </Text>
          <QtyCustomer />
        </Paper>
      </SimpleGrid>
      <SimpleGrid cols={1} spacing="lg" verticalSpacing="lg" mt={20}>
        <Paper
          style={{
            borderRadius: 8,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            padding: 20,
            transition: 'transform 0.3s ease-in-out',
          }}
          sx={{
            ':hover': {
              cursor: 'pointer',
              transform: 'scale(1.02)',
            },
          }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            Qty Kid
          </Text>
          <QtyKid />
        </Paper>
      </SimpleGrid>
      <SimpleGrid cols={1} spacing="lg" verticalSpacing="lg" mt={20}>
        <Paper
          style={{
            borderRadius: 8,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            padding: 20,
            transition: 'transform 0.3s ease-in-out',
          }}
          sx={{
            ':hover': {
              cursor: 'pointer',
              transform: 'scale(1.02)',
            },
          }}
          onClick={() => navigateToCertainScreen('/daycare/revenue-list')}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            Revenue
          </Text>
          <RevenueBar />
        </Paper>
      </SimpleGrid>
      <SimpleGrid cols={1} spacing="lg" verticalSpacing="lg" mt={20}>
        <Paper
          style={{
            borderRadius: 8,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            padding: 20,
            transition: 'transform 0.3s ease-in-out',
          }}
          sx={{
            ':hover': {
              cursor: 'pointer',
              transform: 'scale(1.02)',
            },
          }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            Revenue
          </Text>
          <RevenuePie />
        </Paper>
      </SimpleGrid>
    </>

    // <>
    //   <Grid mt={20}>
    //     <Grid.Col span={2}>
    //       <Paper
    //         style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
    //         <Text color="#61677A" fw="bold" fz="sm" pb={20}>
    //           Daily Kid
    //         </Text>
    //         <DailyKid />
    //       </Paper>
    //     </Grid.Col>
    //     <Grid.Col span={4}>
    //       <Paper
    //         style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
    //         <Text color="#61677A" fw="bold" fz="sm" pb={20}>
    //           Qty Customer
    //         </Text>
    //         <QtyCustomer />
    //       </Paper>
    //     </Grid.Col>
    //     <Grid.Col span={1}>
    //       <Paper
    //         h="100%"
    //         style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
    //         <Text color="#61677A" fw="bold" fz="sm" pb={20}>
    //           Qty Kid
    //         </Text>
    //         <QtyKid />
    //       </Paper>
    //     </Grid.Col>
    //     <Grid.Col span={1}>
    //       <Paper
    //         h="100%"
    //         style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
    //         <Text color="#61677A" fw="bold" fz="sm" pb={20}>
    //           Revenue
    //         </Text>
    //         <RevenueBar />
    //       </Paper>
    //     </Grid.Col>
    //   </Grid>
    // </>
  );
};
