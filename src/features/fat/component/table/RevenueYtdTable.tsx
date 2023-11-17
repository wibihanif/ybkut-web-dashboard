import { faker } from '@faker-js/faker';
import {
  ActionIcon,
  Box,
  Flex,
  Pagination,
  Paper,
  ScrollArea,
  Stack,
  Table,
  Text,
  createStyles,
} from '@mantine/core';
import { useState } from 'react';
import { IconSortDescendingLetters } from '@tabler/icons-react';
import { RevenueYtdTableRow } from './RevenueYtdTableRow';

const TOTAL_ROW = 5;

interface SummaryItem {
  unit: string;
  plan: number | string;
  actual: number | string;
  achievement: number | string;
  action: () => void;
}

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

  const [page, setPage] = useState(1);

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

  const tableRows = [];
  for (let i = 0; i < TOTAL_ROW; i++) {
    tableRows.push(
      <RevenueYtdTableRow
        unit={dataDummy[i].unit}
        plan={dataDummy[i].plan}
        actual={dataDummy[i].actual}
        achievement={dataDummy[i].achievement}
      />,
    );
  }

  return (
    <Paper p="md">
      <Stack>
        <Box py={20} component={ScrollArea}>
          <Table mb="lg" verticalSpacing="md" highlightOnHover>
            <thead style={{ backgroundColor: '#3392E7' }}>
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
                    <Text className={classes.tableHead}>Plan</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Actual</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Achievement</Text>
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
