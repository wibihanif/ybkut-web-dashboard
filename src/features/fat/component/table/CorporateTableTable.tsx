import { ActionIcon, Box, Flex, Paper, Stack, Table, Text, createStyles } from '@mantine/core';
import { RevenueTableRow } from './RevenueTableRow';
import { IconSortDescendingLetters } from '@tabler/icons-react';
import { CorporateTableTableRow } from './CorporateTableTableRow';

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

export const CorporateTableTable: React.FC = () => {
  const { classes } = useStyles();

  const dataDummy = [
    {
      unit: 'UT School',
      plan: 160.516,
      actual: 160.516,
      gap: 55.956,
      action: () => console.log('to detail'),
    },
    {
      unit: 'Poliklinik',
      plan: 160.516,
      actual: 160.516,
      gap: 55.956,
      action: () => console.log('to detail'),
    },
    {
      unit: 'Daycare',
      plan: 160.516,
      actual: 160.516,
      gap: 55.956,
      action: () => console.log('to detail'),
    },
    {
      unit: 'VLC',
      plan: 160.516,
      actual: 160.516,
      gap: 55.956,
      action: () => console.log('to detail'),
    },
    {
      unit: 'Total',
      plan: 160.516,
      actual: 160.516,
      gap: 55.956,
      action: () => console.log('to detail'),
    },
  ];

  const tableRows = [];
  for (let i = 0; i < TOTAL_ROW; i++) {
    tableRows.push(
      <CorporateTableTableRow
        unit={dataDummy[i].unit}
        plan={dataDummy[i].plan}
        actual={dataDummy[i].actual}
        gap={dataDummy[i].gap}
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
            <thead style={{ backgroundColor: '#3845a3', color: 'white' }}>
              <tr>
                <th style={{ width: '300px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Unit</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th style={{ width: '200px' }}>
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
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Gap</Text>
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
