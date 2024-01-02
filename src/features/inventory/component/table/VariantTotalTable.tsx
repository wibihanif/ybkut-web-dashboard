import { ActionIcon, Box, Flex, Input, Pagination, Table, Text, createStyles } from '@mantine/core';
import { TableRow } from './VariantTotalTableRow';
import { faker } from '@faker-js/faker';
import { totalProduct } from '~/constant/totalProduct';
import { useState } from 'react';
import { IconSearch, IconSortDescendingLetters } from '@tabler/icons-react';

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

export const VariantTotalTable: React.FC = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState<number>(1);

  const tableRows = [];

  for (let i = 0; i < totalProduct; i++) {
    tableRows.push(
      <TableRow
        productName={faker.commerce.productName()}
        total={faker.datatype.number({ min: 5, max: 100 })}
        key={i}
      />,
    );
  }

  return (
    <Flex direction="column">
      <Flex justify="space-between">
        <Box py={8}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            TOTAL VARIAN
          </Text>
        </Box>
        <Box w="50%">
          <Input
            placeholder="Search here"
            icon={<IconSearch size={16} color="#3845a3" />}
            radius={10}
            sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 10 }}
          />
        </Box>
      </Flex>
      <Box style={{ borderRadius: 8 }}>
        <Table
          verticalSpacing="md"
          highlightOnHover
          striped
          style={{ overflow: 'auto', display: 'block', borderRadius: 8 }}>
          <thead style={{ backgroundColor: '#3845a3', color: 'white', display: 'block' }}>
            <tr style={{ display: 'table', width: '100%' }}>
              <th style={{ color: 'white', width: '50%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Product Name</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '50%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Total</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
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
        value={page}
        onChange={setPage}
        total={15}
        color="indigo"
        variant="filled"
        sx={{ alignSelf: 'center' }}
      />
    </Flex>
  );
};
