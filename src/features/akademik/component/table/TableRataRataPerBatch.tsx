import { Flex, Pagination, Table } from '@mantine/core';
import { TableRow } from './RataRataPerBatchTableRow';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

export const TableRataRataPerBatch: React.FC = () => {
  const [page, setPage] = useState<number>(0);

  const tableRows = [];
  for (let i = 0; i < 10; i++) {
    tableRows.push(
      <TableRow
        batch={faker.datatype.datetime()}
        median={faker.datatype.number({ min: 70, max: 100 })}
      />,
    );
  }

  return (
    <Flex direction="column">
      <Table verticalSpacing="xs" highlightOnHover striped>
        <thead>
          <tr>
            <th>Batch</th>
            <th>Rata-rata</th>
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
