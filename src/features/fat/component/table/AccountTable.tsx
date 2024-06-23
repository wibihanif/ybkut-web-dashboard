import { Box, Flex, Paper, Stack, Table, Text, createStyles } from '@mantine/core';
import { AccountTableRow } from './AccountTableRow';
import { useGetArAging } from '../../api/useGetArAging';

const TOTAL_ROW = 5;

// interface SummaryItem {
//   unit: string;
//   current: number | string;
//   thirtydays: number | string;
//   sixtydays: number | string;
//   ninetydays: number | string;
//   abovedays: number | string;
//   cp: number | string;
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

export const AccountTable: React.FC = () => {
  const { classes } = useStyles();

  const { data: arAging } = useGetArAging();

  const tableRows = [];

  if (arAging?.length) {
    for (let i = 0; i < arAging.length; i++) {
      tableRows.push(
        <AccountTableRow
          unit={arAging[i].unit}
          current={arAging[i].current}
          thirtydays={arAging[i]['1-30 days']}
          sixtydays={arAging[i]['31-60 days']}
          ninetydays={arAging[i]['61-90 days']}
          abovedays={arAging[i]['> 90 days']}
          cp="0"
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
