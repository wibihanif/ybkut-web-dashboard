import { ActionIcon, Box, Flex, Pagination, Table, Text, createStyles } from '@mantine/core';
import { faker } from '@faker-js/faker';
import { totalProduct } from '~/constant/totalProduct';
import { useState } from 'react';
import { IconSortDescendingLetters } from '@tabler/icons-react';
import { TableRow } from './TableRow';

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

export const QuotationDetailTable: React.FC = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState<number>(1);

  const tableRows = [];

  for (let i = 0; i < totalProduct; i++) {
    tableRows.push(
      <TableRow
        name={faker.commerce.productName()} // Project Name
        assetCode={faker.commerce.productName()} // Project Name (Asset Code)
        branchName={faker.commerce.productName()} // Quotation Name
        tahunPerolehan={`Rp. ${faker.datatype
          .number({ min: 1_000_000, max: 10_000_000 })
          .toLocaleString('id-ID')}`} // Rupiah format
        key={i}
      />,
    );
  }

  return (
    <Flex direction="column">
      <Box style={{ maxHeight: '600px', overflowY: 'hidden', borderRadius: 8 }}>
        <Table verticalSpacing="md" highlightOnHover striped>
          <thead style={{ backgroundColor: 'rgba(253, 224, 71, 0.15)', color: 'black' }}>
            <tr style={{ display: 'table', width: '100%' }}>
              <th style={{ color: 'black', width: '15%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Project Name</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="black" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'black', width: '10%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Program</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="black" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'black', width: '10%' }}>
                <Text className={classes.tableHead}>Quotation Name</Text>
              </th>
              <th style={{ color: 'black', width: '15%' }}>
                <Text className={classes.tableHead}>Customer</Text>
              </th>
              {/* <th style={{ color: 'black', width: '15%' }}>
                <Text className={classes.tableHead}>Assign Date</Text>
              </th>
              <th style={{ color: 'black', width: '10%' }}>
                <Text className={classes.tableHead}>Category Name</Text>
              </th> */}
            </tr>
          </thead>
          <tbody style={{ display: 'block', overflow: 'auto', maxHeight: '550px' }}>
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
        sx={{ alignSelf: 'end' }}
      />
    </Flex>
  );
};
