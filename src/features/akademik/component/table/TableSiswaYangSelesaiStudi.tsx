import { Box, Flex, Pagination, Table, Text, createStyles } from '@mantine/core';
import { TableRow } from './SiswaSelesaiStudiTableRow';
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

export const TableSiswaYangSelesaiStudi: React.FC = () => {
  const { classes } = useStyles();
  const [page, setPage] = useState<number>(0);

  const tableRows = [];
  for (let i = 0; i < 10; i++) {
    tableRows.push(
      <TableRow
        nama={faker.name.fullName()}
        umur={faker.datatype.number({ min: 20, max: 26 })}
        angkatan={faker.datatype.datetime()}
        lamaStudi={faker.datatype.number({ min: 3, max: 8 })}
        key={i}
      />,
    );
  }

  return (
    <Flex direction="column">
      <Box style={{ maxHeight: '400px', overflowY: 'auto', borderRadius: 30 }}>
        <Table verticalSpacing="md" highlightOnHover striped>
          <thead style={{ backgroundColor: '#3845a3', color: 'white' }}>
            <tr>
              <th style={{ color: 'white' }}>
                {' '}
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Nama</Text>
                </Flex>
              </th>
              <th style={{ color: 'white' }}>
                {' '}
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Umur</Text>
                </Flex>
              </th>
              <th style={{ color: 'white' }}>
                {' '}
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Angkatan</Text>
                </Flex>
              </th>
              <th style={{ color: 'white' }}>
                {' '}
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Lama Pendidikan (Thn)</Text>
                </Flex>
              </th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </Table>
      </Box>
      <Pagination
        pt={20}
        color="green"
        value={page}
        onChange={setPage}
        total={15}
        sx={{ alignSelf: 'center', justifySelf: 'end' }}
      />
    </Flex>
  );
};
