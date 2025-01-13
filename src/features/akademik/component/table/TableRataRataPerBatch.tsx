import { Box, Flex, Pagination, Table, Text, createStyles } from '@mantine/core';
import { TableRow } from './RataRataPerBatchTableRow';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

const useStyles = createStyles(() => {
  return {
    tableHead: { color: 'black' },
    tableHeadIcon: {
      ':hover': {
        backgroundColor: 'rgba(253, 224, 71, 0.15)',
      },
    },
  };
});

export const TableRataRataPerBatch: React.FC = () => {
  const { classes } = useStyles();
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
      <Box style={{ maxHeight: '400px', overflowY: 'auto', borderRadius: 30 }}>
        <Table verticalSpacing="md" highlightOnHover striped>
          <thead style={{ backgroundColor: 'rgba(253, 224, 71, 0.15)', color: 'black' }}>
            <tr>
              <th style={{ color: 'black' }}>
                {' '}
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Batch</Text>
                </Flex>
              </th>
              <th style={{ color: 'black' }}>
                {' '}
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Rata-rata</Text>
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
