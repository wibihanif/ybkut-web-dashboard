import { Box, Flex, Pagination, Table, Text, createStyles } from '@mantine/core';
import { TableRow } from './ActivityEventTableRow';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

const useStyles = createStyles(() => {
  return {
    tableHead: { color: 'white' },
    tableHeadIcon: {
      ':hover': {
        backgroundColor: '#3845a3',
      },
    },
  };
});

export const TableActivityEvent: React.FC = () => {
  const { classes } = useStyles();
  const [page, setPage] = useState<number>(0);

  const tableRows = [];
  for (let i = 0; i < 10; i++) {
    tableRows.push(
      <TableRow
        event={faker.location.country()}
        date={faker.datatype.datetime()}
        totalStudent={faker.datatype.number({ min: 100, max: 500 })}
      />,
    );
  }

  return (
    <Flex direction="column">
      <Box style={{ maxHeight: '400px', overflowY: 'auto', borderRadius: 8 }}>
        <Table verticalSpacing="md" highlightOnHover striped>
          <thead style={{ backgroundColor: '#9338a3', color: 'white' }}>
            <tr>
              <th style={{ color: 'white' }}>
                {' '}
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Event</Text>
                </Flex>
              </th>
              <th style={{ color: 'white' }}>
                {' '}
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Tanggal</Text>
                </Flex>
              </th>
              <th style={{ color: 'white' }}>
                {' '}
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Jumlah Siswa Hadir</Text>
                </Flex>
              </th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </Table>
      </Box>
      <Pagination
        mt={20}
        color="green"
        value={page}
        onChange={setPage}
        total={15}
        sx={{ alignSelf: 'center' }}
      />
    </Flex>
  );
};
