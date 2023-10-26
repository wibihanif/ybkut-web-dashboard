import { Box, Flex, Pagination, Table } from '@mantine/core';
import { TableRow } from './TotalScrapTableRow';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

export const TotalScrapTable: React.FC = () => {
  const [page, setPage] = useState<number>(0);

  const tableRows = [];
  for (let i = 0; i < 10; i++) {
    tableRows.push(
      <TableRow
        assetName={faker.commerce.productName()}
        firstDepreciationDate={faker.datatype.datetime()}
      />,
    );
  }

  return (
    <Flex direction="column">
      <Box style={{ borderRadius: 2 }}>
        <Table verticalSpacing="xs" highlightOnHover striped>
          <thead>
            <tr>
              <th style={{ width: 300 }}>Asset Name</th>
              <th>First Depreciation Date</th>
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
