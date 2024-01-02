import { ActionIcon, Box, Flex, Pagination, Table, Text, createStyles } from '@mantine/core';
import { faker } from '@faker-js/faker';
import { totalProduct } from '~/constant/totalProduct';
import { useState } from 'react';
import { IconSortDescendingLetters } from '@tabler/icons-react';
import { TableRow } from './TableRow';

const useStyles = createStyles(() => {
  return {
    tableHead: { color: 'white' },
    tableHeadIcon: {
      ':hover': {
        backgroundColor: '#a6b2df',
      },
    },
  };
});

export const PendingTransferDetailTable: React.FC = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState<number>(1);

  const tableRows = [];

  for (let i = 0; i < totalProduct; i++) {
    tableRows.push(
      <TableRow
        locationName={faker.location.city()}
        name={faker.name.fullName()}
        origin={faker.location.city()}
        partnerName={faker.name.fullName()}
        state={faker.helpers.arrayElement(['Pending', 'Success', 'Canceled'])}
        key={i}
      />,
    );
  }

  return (
    <Flex direction="column">
      <Box style={{ borderRadius: 8 }}>
        <Table
          verticalSpacing="md"
          highlightOnHover
          striped
          style={{ overflow: 'auto', display: 'block', borderRadius: 8 }}>
          <thead style={{ backgroundColor: '#3845a3', color: 'white', display: 'block' }}>
            <tr style={{ display: 'table', width: '100%' }}>
              <th style={{ color: 'white', width: '20%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Name</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '20%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Location Name</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '20%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Partner Name</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '20%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Origin</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '20%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>State</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
            </tr>
          </thead>
          <tbody style={{ display: 'block', overflow: 'auto', maxHeight: '500px' }}>
            {tableRows}
          </tbody>
        </Table>
      </Box>
      <Pagination
        mt={20}
        value={page}
        onChange={setPage}
        total={15}
        color="indigo"
        variant="filled"
        sx={{ alignSelf: 'end' }}
      />
    </Flex>
  );
};
