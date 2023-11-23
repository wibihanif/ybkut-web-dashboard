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

const TOTAL_ROW = 50;

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

export const ScrapTable: React.FC = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState(1);

  const tableRows = [];
  for (let i = 0; i < TOTAL_ROW; i++) {
    tableRows.push(
      <TableRow
        dateDone={faker.datatype.datetime()}
        location={faker.location.city()}
        measure={faker.science.unit().name}
        name={faker.person.fullName()}
        productName={faker.person.fullName()}
        scrapQuantity={faker.number.int().toString()}
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
                    <Text className={classes.tableHead}>Name</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Date Done</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Product Name</Text>
                    <ActionIcon size="xs" className={classes.tableHeadIcon}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  </Flex>
                </th>
                <th>
                  <Text className={classes.tableHead}>Scrap Quantity</Text>
                </th>
                <th>
                  <Text className={classes.tableHead}>Measure</Text>
                </th>
                <th>
                  <Flex gap={8}>
                    <Text className={classes.tableHead}>Location</Text>
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
