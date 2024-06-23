import { ActionIcon, Box, Flex, Paper, Stack, Table, Text, createStyles } from '@mantine/core';
import { IconSortDescendingLetters } from '@tabler/icons-react';
import { ProfitTMTableRow } from './ProfitTMTableRow';
import { endOfMonth, endOfToday, format, startOfMonth, startOfYear } from 'date-fns';
import { useGetProfitability } from '../../api/useGetProfitability';

const TOTAL_ROW = 5;

// interface SummaryItem {
//   unit: string;
//   cost: number | string;
//   gp: number | string;
//   gpm: number | string;
//   opex: number | string;
//   op: number | string;
//   opm: number | string;
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

export const ProfitYtdTable: React.FC = () => {
  const { classes } = useStyles();

  const now = new Date();
  const firstDay = startOfYear(now);
  const lastDay = endOfToday();

  const { data: profitability } = useGetProfitability({
    startDate: format(firstDay, 'yyyy-MM-dd'),
    endDate: format(lastDay, 'yyyy-MM-dd'),
  });

  const tableRows = [];

  if (profitability?.length) {
    for (let i = 0; i < profitability.length; i++) {
      tableRows.push(
        <ProfitTMTableRow
          unit={profitability[i].unit}
          cost={profitability[i].cost}
          gp={profitability[i].gp}
          gpm={profitability[i].gpm}
          opex={profitability[i].opex}
          op={profitability[i].op}
          opm={profitability[i].opm}
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
