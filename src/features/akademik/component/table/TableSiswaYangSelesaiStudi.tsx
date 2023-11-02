import { Flex, Pagination, Table } from '@mantine/core';
import { TableRow } from './SiswaSelesaiStudiTableRow';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

export const TableSiswaYangSelesaiStudi: React.FC = () => {
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
      <Table verticalSpacing="xs" highlightOnHover striped>
        <thead>
          <tr>
            <th style={{ minWidth: 250 }}>Nama</th>
            <th>Umur</th>
            <th>Angkatan</th>
            <th>Lama Pendidikan (Thn)</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
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
