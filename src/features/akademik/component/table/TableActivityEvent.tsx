import { Flex, Pagination, Table } from '@mantine/core';
import { TableRow } from './ActivityEventTableRow';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

export const TableActivityEvent: React.FC = () => {
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
      <Table verticalSpacing="xs" highlightOnHover striped>
        <thead>
          <tr>
            <th>Event</th>
            <th>Tanggal</th>
            <th>Jumlah Siswa Hadir</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
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
