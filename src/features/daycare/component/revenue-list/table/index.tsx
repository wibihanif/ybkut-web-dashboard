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
import { TableRow } from './TableRow';
import { Month } from '~/constant/month';

const TOTAL_ROW = 12;

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

export const RevenueListTable: React.FC = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState(1);

  const tableRows = [];
  for (let i = 0; i < Month.length; i++) {
    tableRows.push(
      <TableRow
        month={Month[i]}
        qty={faker.datatype.number({ min: 0, max: 10000 })}
        state={faker.person.middleName()}
      />,
    );
  }

  return (
    <Paper p="md">
      <Stack>
        <Box py={20} component={ScrollArea}>
          <Table mb="lg" verticalSpacing="md" highlightOnHover striped>
            <thead style={{ backgroundColor: '#3392E7' }}>
              <tr>
                <th>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Month</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Quantity</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>State</Text>
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
        <Pagination
          value={page}
          onChange={setPage}
          total={15}
          sx={{ alignSelf: 'end' }}
          color="blue"
        />
      </Stack>
    </Paper>
  );
};
