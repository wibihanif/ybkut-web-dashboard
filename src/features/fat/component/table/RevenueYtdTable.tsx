import { ActionIcon, Box, Flex, Paper, Stack, Table, Text, createStyles } from '@mantine/core';
import { IconAlertCircle, IconSortDescendingLetters } from '@tabler/icons-react';
import { RevenueYtdTableRow } from './RevenueYtdTableRow';
import { useGetRevenueYtd } from '../../api/useGetRevenueYtd';

const TOTAL_ROW = 5;

// interface SummaryItem {
//   unit: string;
//   plan: number | string;
//   actual: number | string;
//   achievement: number | string;
//   action: () => void;
// }

const useStyles = createStyles(() => {
  return {
    tableHead: { color: 'white', fontSize: '12px' },
    tableHeadIcon: {
      ':hover': {
        backgroundColor: '#abbaff',
      },
    },
  };
});

export const RevenueYtdTable: React.FC = () => {
  const { classes } = useStyles();

  const dataDummy = [
    {
      unit: 'UT School',
      plan: 160.516,
      actual: 160.516,
      achievement: '98%',
      action: () => console.log('to detail'),
    },
    {
      unit: 'Poliklinik',
      plan: 160.516,
      actual: 160.516,
      achievement: '98%',
      action: () => console.log('to detail'),
    },
    {
      unit: 'Daycare',
      plan: 160.516,
      actual: 160.516,
      achievement: '98%',
      action: () => console.log('to detail'),
    },
    {
      unit: 'VLC',
      plan: 160.516,
      actual: 160.51,
      achievement: '98%',
      action: () => console.log('to detail'),
    },
    {
      unit: 'Total',
      plan: 160.516,
      actual: 160.51,
      achievement: '98%',
      action: () => console.log('to detail'),
    },
  ];

  const { data: revenueYtd } = useGetRevenueYtd();

  const tableRows = [];

  if (revenueYtd?.length) {
    for (let i = 0; i < revenueYtd?.length; i++) {
      tableRows.push(
        <RevenueYtdTableRow
          unit={revenueYtd[i].unit}
          plan={revenueYtd[i].plan}
          actual={revenueYtd[i].actual}
          achievement={revenueYtd[i].achievement}
        />,
      );
    }
  }

  return (
    <Paper p="md">
      <Stack>
        <Box
          style={{
            maxHeight: '400px',
            overflowY: 'auto',
            borderRadius: 8,
          }}>
          <Table mb="lg" verticalSpacing="md" highlightOnHover>
            <thead style={{ backgroundColor: '#3845a3', color: 'white' }}>
              <tr>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Unit</Text>
                    {/* <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon> */}
                  </Flex>
                </th>
                <th style={{ width: '350px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Plan</Text>
                    {/* <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon> */}
                  </Flex>
                </th>
                <th>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Actual</Text>
                    {/* <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon> */}
                  </Flex>
                </th>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Achievement</Text>
                    {/* <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon> */}
                  </Flex>
                </th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </Table>
          {!revenueYtd?.length && (
            <Flex align="center" justify="center" gap={10} style={{ height: '40vh' }}>
              <IconAlertCircle size={20} color="red" />
              <Text>Data Not Found</Text>
            </Flex>
          )}
        </Box>
      </Stack>
    </Paper>
  );
};
