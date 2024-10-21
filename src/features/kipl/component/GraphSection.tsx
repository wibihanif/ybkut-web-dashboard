import { Paper, Text, Grid } from '@mantine/core';
import { ProjectChart } from './chart/ProjectChart';
import { RevenueChart } from './chart/RevenueChart';
import { InvoiceChart } from './chart/InvoiceChart';
import { SalesChart } from './chart/SalesChart';
import { SalesBarChart } from './chart/SalesBarChart';

export const GraphSection = () => {
  return (
    <Grid gutter="lg" mt={20}>
      {/* Row 1 */}
      <Grid.Col span={12}>
        <Paper
          style={{
            borderRadius: 8,
            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)',
            padding: 55,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease-in-out',
          }}
          sx={{
            ':hover': {
              cursor: 'pointer',
              transform: 'scale(1.03)',
            },
          }}>
          <Text color="#61677A" fw="bold" fz="lg" pb={20} style={{ alignSelf: 'start' }}>
            Sales by Category
          </Text>
          <SalesBarChart />
        </Paper>
      </Grid.Col>
      {/* <Grid.Col span={4}>
        <Paper
          style={{
            borderRadius: 8,
            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)',
            padding: 25,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease-in-out',
          }}
          sx={{
            ':hover': {
              cursor: 'pointer',
              transform: 'scale(1.03)',
            },
          }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20} style={{ alignSelf: 'start' }}>
            Sales Performance Overview
          </Text>
          <SalesChart />
        </Paper>
      </Grid.Col> */}

      {/* Row 2 */}
      <Grid.Col span={4}>
        <Paper
          style={{
            borderRadius: 8,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            padding: 25,
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease-in-out',
          }}
          sx={{
            ':hover': {
              cursor: 'pointer',
              transform: 'scale(1.03)',
            },
          }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20} style={{ alignSelf: 'start' }}>
            Sales Performance Overview
          </Text>
          <SalesChart />
        </Paper>
      </Grid.Col>
      <Grid.Col span={4}>
        <Paper
          style={{
            borderRadius: 8,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            padding: 25,
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease-in-out',
          }}
          sx={{
            ':hover': {
              cursor: 'pointer',
              transform: 'scale(1.03)',
            },
          }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20} style={{ alignSelf: 'start' }}>
            BAST Overview
          </Text>
          <ProjectChart />
        </Paper>
      </Grid.Col>
      <Grid.Col span={4}>
        <Paper
          style={{
            borderRadius: 8,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            padding: 25,
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease-in-out',
          }}
          sx={{
            ':hover': {
              cursor: 'pointer',
              transform: 'scale(1.03)',
            },
          }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20} style={{ alignSelf: 'start' }}>
            Invoice Status
          </Text>
          <InvoiceChart />
        </Paper>
      </Grid.Col>
      <Grid.Col span={12}>
        <Paper
          style={{
            borderRadius: 8,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            padding: 25,
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease-in-out',
          }}
          sx={{
            ':hover': {
              cursor: 'pointer',
              transform: 'scale(1.03)',
            },
          }}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20} style={{ alignSelf: 'start' }}>
            Revenue Breakdown
          </Text>
          <RevenueChart />
        </Paper>
      </Grid.Col>
    </Grid>
  );
};
