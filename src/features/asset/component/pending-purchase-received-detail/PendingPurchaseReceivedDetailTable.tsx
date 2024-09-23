import { ActionIcon, Box, Flex, Pagination, Table, Text, createStyles } from '@mantine/core';
import { faker } from '@faker-js/faker';
import { totalProduct } from '~/constant/totalProduct';
import { useState } from 'react';
import { IconSortDescendingLetters } from '@tabler/icons-react';
import { TableRow } from './TableRow';

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

export const TotalPurchaseReceivedDetailTable: React.FC = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState<number>(1);

  const tableRows = [];

  for (let i = 0; i < totalProduct; i++) {
    tableRows.push(
      <TableRow
        name={faker.commerce.productName()}
        locDesc={faker.address.street()}
        partnerName={faker.person.firstName()}
        fiscalPosName={faker.company.name()}
        origin={faker.commerce.productName()}
        state={faker.helpers.arrayElement(['purchase', 'draft', 'sent', 'headof_approved'])}
        key={i}
      />,
    );
  }

  return (
    <Flex direction="column">
      <Box style={{ maxHeight: '600px', overflowY: 'hidden', borderRadius: 8 }}>
        <Table verticalSpacing="md" highlightOnHover striped>
          <thead style={{ backgroundColor: '#3845a3', color: 'white' }}>
            <tr style={{ display: 'table', width: '100%' }}>
              <th style={{ color: 'white', width: '15%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Name</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '10%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Location Desc</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '10%' }}>
                <Text className={classes.tableHead}>Partner Name</Text>
              </th>
              <th style={{ color: 'white', width: '15%' }}>
                <Text className={classes.tableHead}>Fiscal Pos Name</Text>
              </th>
              <th style={{ color: 'white', width: '15%' }}>
                <Text className={classes.tableHead}>Origin</Text>
              </th>
              <th style={{ color: 'white', width: '10%' }}>
                <Text className={classes.tableHead}>State</Text>
              </th>
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
