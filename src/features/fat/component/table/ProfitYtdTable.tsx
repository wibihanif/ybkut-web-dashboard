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
import { ProfitTMTableRow } from './ProfitTMTableRow';

const TOTAL_ROW = 5;

interface SummaryItem {
  unit: string;
  cost: number | string;
  gp: number | string;
  gpm: number | string;
  opex: number | string;
  op: number | string;
  opm: number | string;
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

export const ProfitYtdTableTable: React.FC = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState(1);

  const dataDummy = [
    {
      unit: 'UT School',
      cost: 160.516,
      gp: 160.516,
      gpm: 160.516,
      opex: 160.516,
      op: 160.516,
      opm: 160.516,
      action: () => console.log('to detail'),
    },
    {
      unit: 'Poliklinik',
      cost: 160.516,
      gp: 160.516,
      gpm: 160.516,
      opex: 160.516,
      op: 160.516,
      opm: 160.516,
      action: () => console.log('to detail'),
    },
    {
      unit: 'Daycare',
      cost: 160.516,
      gp: 160.516,
      gpm: 160.516,
      opex: 160.516,
      op: 160.516,
      opm: 160.516,
      action: () => console.log('to detail'),
    },
    {
      unit: 'VLC',
      cost: 160.516,
      gp: 160.516,
      gpm: 160.516,
      opex: 160.516,
      op: 160.516,
      opm: 160.516,
      action: () => console.log('to detail'),
    },
    {
      unit: 'Total',
      cost: 160.516,
      gp: 160.516,
      gpm: 160.516,
      opex: 160.516,
      op: 160.516,
      opm: 160.516,
      action: () => console.log('to detail'),
    },
  ];

  const tableRows = [];
  for (let i = 0; i < TOTAL_ROW; i++) {
    tableRows.push(
      <ProfitTMTableRow
        unit={dataDummy[i].unit}
        cost={dataDummy[i].cost}
        gp={dataDummy[i].gp}
        gpm={dataDummy[i].gpm}
        opex={dataDummy[i].opex}
        op={dataDummy[i].op}
        opm={dataDummy[i].opm}
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
                    <Text className={classes.tableHead}>Cost</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>GP</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>GPM</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>OPEX</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>OP</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th style={{ width: '200px' }}>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>OPM</Text>
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
