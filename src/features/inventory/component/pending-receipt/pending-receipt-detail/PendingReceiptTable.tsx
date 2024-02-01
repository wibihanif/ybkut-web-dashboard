import { ActionIcon, Box, Flex, Pagination, Table, Text, createStyles } from '@mantine/core';
import { IconSortDescendingLetters } from '@tabler/icons-react';
import { TableRow } from './TableRow';
import { PendingReceiptDetail } from '~/features/inventory/types';

interface PendingReceiptsDetailTableProps {
  pendingReceiptsDetail: PendingReceiptDetail[];
  page: number;
  totalPage: number;
  setPage: (value: number) => void;
}

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

export const PendingReceiptDetailTable: React.FC<PendingReceiptsDetailTableProps> = ({
  page,
  pendingReceiptsDetail,
  setPage,
  totalPage,
}) => {
  const { classes } = useStyles();

  const tableRows = pendingReceiptsDetail.map((pendingReceiptDetail, index) => {
    return (
      <TableRow
        locationName={pendingReceiptDetail.stockLocationName}
        name={pendingReceiptDetail.stockPickingName}
        origin={pendingReceiptDetail.origin}
        partnerName={pendingReceiptDetail.partnerName}
        state={pendingReceiptDetail.state}
        key={index}
      />
    );
  });

  return (
    <Flex direction="column">
      <Box style={{ borderRadius: 8 }}>
        <Table
          verticalSpacing="md"
          highlightOnHover
          striped
          style={{ overflow: 'auto', display: 'block', borderRadius: 8 }}>
          <thead style={{ backgroundColor: '#3845a3', color: 'white', display: 'block' }}>
            <tr style={{ display: 'table', width: '100%' }}>
              <th style={{ color: 'white', width: '20%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Name</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '20%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Location Name</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '20%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Partner Name</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '20%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Origin</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '20%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>State</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
            </tr>
          </thead>
          <tbody style={{ display: 'block', overflow: 'auto', maxHeight: '500px' }}>
            {tableRows}
          </tbody>
        </Table>
      </Box>
      <Pagination
        mt={20}
        value={page}
        onChange={setPage}
        total={totalPage}
        color="indigo"
        variant="filled"
        sx={{ alignSelf: 'end' }}
      />
    </Flex>
  );
};
