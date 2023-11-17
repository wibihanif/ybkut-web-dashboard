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
import { RevenueTableRow } from './RevenueTableRow';
import { useState } from 'react';
import { IconSortDescendingLetters } from '@tabler/icons-react';
import { AccountTableRow } from './AccountTableRow';

const TOTAL_ROW = 5;

interface SummaryItem {
  unit: string;
  current: number | string;
  thirtydays: number | string;
  sixtydays: number | string;
  ninetydays: number | string;
  abovedays: number | string;
  cp: number | string;
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

export const AccountTable: React.FC = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState(1);

  const dataDummy = [
    {
      unit: 'UT School',
      current: 55.956,
      thirtydays: 9.268,
      sixtydays: 9.268,
      ninetydays: 9.268,
      abovedays: 9.268,
      cp: 9.268,
      action: () => console.log('to detail'),
    },
    {
      unit: 'Poliklinik',
      current: 55.956,
      thirtydays: 9.268,
      sixtydays: 9.268,
      ninetydays: 9.268,
      abovedays: 9.268,
      cp: 9.268,
      action: () => console.log('to detail'),
    },
    {
      unit: 'Daycare',
      current: 55.956,
      thirtydays: 9.268,
      sixtydays: 9.268,
      ninetydays: 9.268,
      abovedays: 9.268,
      cp: 9.268,
      action: () => console.log('to detail'),
    },
    {
      unit: 'VLC',
      current: 55.956,
      thirtydays: 9.268,
      sixtydays: 9.268,
      ninetydays: 9.268,
      abovedays: 9.268,
      cp: 9.268,
      action: () => console.log('to detail'),
    },
    {
      unit: 'Total',
      current: 55.956,
      thirtydays: 9.268,
      sixtydays: 9.268,
      ninetydays: 9.268,
      abovedays: 9.268,
      cp: 9.268,
      action: () => console.log('to detail'),
    },
  ];

  const tableRows = [];
  for (let i = 0; i < TOTAL_ROW; i++) {
    tableRows.push(
      <AccountTableRow
        unit={dataDummy[i].unit}
        current={dataDummy[i].current}
        thirtydays={dataDummy[i].thirtydays}
        sixtydays={dataDummy[i].sixtydays}
        ninetydays={dataDummy[i].ninetydays}
        abovedays={dataDummy[i].abovedays}
        cp={dataDummy[i].cp}
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
                    <Text className={classes.tableHead}></Text>
                  </Flex>
                </th>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Current</Text>
                  </Flex>
                </th>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>1-30 Days</Text>
                  </Flex>
                </th>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>31-60 Days</Text>
                  </Flex>
                </th>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>61-90 Days</Text>
                  </Flex>
                </th>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>90 Days</Text>
                  </Flex>
                </th>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>CP (Days)</Text>
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
