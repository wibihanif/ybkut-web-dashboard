import { Paper, SimpleGrid, Text } from '@mantine/core';
import { EquipmentByBranchChart } from './EquipmentByBranchChart';
import { EquipmentByCategoryChart } from './EquipmentByCategoryChart';
import { EquipmentByYearChart } from './EquipmentByYearChart';

export const ChartSection = () => {
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
            EQUIPMENT BY BRANCH
          </Text>
          <EquipmentByBranchChart />
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
            EQUIPMENT BY CATEGORY
          </Text>
          <EquipmentByCategoryChart />
        </Paper>
      </SimpleGrid>
      <Paper
        mt={20}
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
          EQUIPMENT BY Tahun Perolehan
        </Text>
        <EquipmentByYearChart />
      </Paper>
    </>
  );
};
