import { ActionIcon, Box, Flex, Paper, Stack, Table, Text, createStyles } from '@mantine/core';
import { RevenueTableRow } from './RevenueTableRow';
import { IconAlertCircle, IconSortDescendingLetters } from '@tabler/icons-react';
import { useGetRevenueThisMonth } from '../../api/useGetRevenueThisMonth';

const TOTAL_ROW = 5;

// interface SummaryItem {
//   unit: string;
//   lastMonth: number | string;
//   plan: number | string;
//   actual: number | string;
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

export const RevenueTable: React.FC = () => {
  const { classes } = useStyles();

  const { data: revenueThisMonth } = useGetRevenueThisMonth();

  const tableRows = [];

  if (revenueThisMonth?.length) {
    for (let i = 0; i < revenueThisMonth?.length; i++) {
      tableRows.push(
        <RevenueTableRow
          unit={revenueThisMonth[i].unit}
          lastMonth={revenueThisMonth[i].lastMonth}
          plan={revenueThisMonth[i].plan}
          actual={revenueThisMonth[i].actual}
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
                    <Text className={classes.tableHead}>Last Month</Text>
                    {/* <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon> */}
                  </Flex>
                </th>
                <th>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Plan</Text>
                    {/* <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon> */}
                  </Flex>
                </th>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Actual</Text>
                    {/* <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon> */}
                  </Flex>
                </th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </Table>
          {!revenueThisMonth?.length && (
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
