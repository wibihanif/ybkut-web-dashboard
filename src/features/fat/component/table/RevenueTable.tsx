import { ActionIcon, Box, Flex, Paper, Stack, Table, Text, createStyles } from '@mantine/core';
import { RevenueTableRow } from './RevenueTableRow';
import { IconSortDescendingLetters } from '@tabler/icons-react';

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

  const dataDummy = [
    {
      unit: 'UT School',
      lastMonth: 55.956,
      plan: 160.516,
      actual: 160.516,
      action: () => console.log('to detail'),
    },
    {
      unit: 'Poliklinik',
      lastMonth: 55.956,
      plan: 160.516,
      actual: 160.516,
      action: () => console.log('to detail'),
    },
    {
      unit: 'Daycare',
      lastMonth: 55.956,
      plan: 160.516,
      actual: 160.516,
      action: () => console.log('to detail'),
    },
    {
      unit: 'VLC',
      lastMonth: 55.956,
      plan: 160.516,
      actual: 160.516,
      action: () => console.log('to detail'),
    },
    {
      unit: 'Total',
      lastMonth: 55.956,
      plan: 160.516,
      actual: 160.516,
      action: () => console.log('to detail'),
    },
  ];

  const tableRows = [];
  for (let i = 0; i < TOTAL_ROW; i++) {
    tableRows.push(
      <RevenueTableRow
        unit={dataDummy[i].unit}
        lastMonth={dataDummy[i].lastMonth}
        plan={dataDummy[i].plan}
        actual={dataDummy[i].actual}
      />,
    );
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
            <thead style={{ backgroundColor: '#38a33a', color: 'white' }}>
              <tr>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Unit</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th style={{ width: '350px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Last Month</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Plan</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Actual</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </Table>
        </Box>
      </Stack>
    </Paper>
  );
};
