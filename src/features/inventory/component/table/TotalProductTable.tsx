import { ActionIcon, Box, Flex, Pagination, Table, Text, createStyles } from '@mantine/core';
import { faker } from '@faker-js/faker';
import { totalProduct } from '~/constant/totalProduct';
import { useState } from 'react';
import { IconSortDescendingLetters } from '@tabler/icons-react';
import { TableRow } from './TotalProductTableRow';

const useStyles = createStyles(() => {
  return {
    tableHead: { color: 'white' },
    tableHeadIcon: {
      ':hover': {
        backgroundColor: '#abbaff',
      },
    },
  };
});

export const TotalProductTable: React.FC = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState<number>(1);
  const [filterState, setFilterState] = useState<string>('');

  const tableRows = [];

  for (let i = 0; i < totalProduct; i++) {
    tableRows.push(
      <TableRow
        productName={faker.commerce.productName()}
        defaultCode={faker.string.hexadecimal({
          casing: 'lower',
          length: 5,
        })}
        barcode={faker.string.hexadecimal({
          casing: 'lower',
          length: 5,
        })}
        key={i}
      />,
    );
  }

  return (
    <Flex direction="column">
      <Box p={8}>
        <Text color="#61677A" fw="bold" fz="sm" pb={20}>
          PRODUCT
        </Text>
      </Box>
      <Box style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Table verticalSpacing="md" highlightOnHover striped>
          <thead style={{ backgroundColor: '#3392E7', color: 'white' }}>
            <tr>
              <th style={{ color: 'white' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Product Name</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Default Code</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '200px' }}>
                <Text className={classes.tableHead}>Barcode</Text>
              </th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </Table>
      </Box>
      <Pagination
        mt={20}
        color="blue"
        value={page}
        onChange={setPage}
        total={15}
        sx={{ alignSelf: 'center' }}
      />
    </Flex>
  );
};
