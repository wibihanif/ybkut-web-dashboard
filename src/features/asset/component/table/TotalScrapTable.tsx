import { Box, Flex, Pagination, Table, Text, createStyles } from '@mantine/core';
import { TableRow } from './TotalScrapTableRow';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

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

export const TotalScrapTable: React.FC = () => {
  const { classes } = useStyles();
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
      <Box style={{ maxHeight: '400px', overflowY: 'hidden', borderRadius: 8 }}>
        <Table verticalSpacing="md" highlightOnHover striped>
          <thead style={{ backgroundColor: '#a37538', color: 'white' }}>
            <tr style={{ display: 'table', width: '100%' }}>
              <th style={{ color: 'white', width: '50%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Asset Name</Text>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '50%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>First Depreciation Date</Text>
                </Flex>
              </th>
            </tr>
          </thead>
          <tbody style={{ display: 'block', overflow: 'auto', maxHeight: '400px' }}>
            {tableRows}
          </tbody>
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
