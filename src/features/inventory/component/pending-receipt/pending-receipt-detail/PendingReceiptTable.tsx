import {
  ActionIcon,
  Box,
  Flex,
  Loader,
  Pagination,
  Table,
  Text,
  createStyles,
} from '@mantine/core';
import {
  IconAlertCircle,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from '@tabler/icons-react';
import { TableRow } from './TableRow';
import { PendingReceiptDetail } from '~/features/inventory/types';
import { SortOrder } from '~/types/pagination';

interface PendingReceiptsDetailTableProps {
  pendingReceiptsDetail: PendingReceiptDetail[];
  page: number;
  totalPage: number;
  setPage: (value: number) => void;
  sortBy: string;
  sortOrder: SortOrder;
  handleSort: (sortValue: string, orderValue: SortOrder) => void;
  isLoadingPendingReceiptsDetail: boolean;
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
  handleSort,
  isLoadingPendingReceiptsDetail,
  sortBy,
  sortOrder,
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
                  {sortBy === 'stockPickingName' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('stockPickingName', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('stockPickingName', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
              <th style={{ color: 'white', width: '20%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Location Name</Text>
                  {sortBy === 'stockLocationName' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('stockLocationName', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('stockLocationName', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
              <th style={{ color: 'white', width: '20%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Partner Name</Text>
                  {sortBy === 'partnerName' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('partnerName', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('partnerName', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
              <th style={{ color: 'white', width: '20%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Origin</Text>
                  {sortBy === 'origin' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('origin', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('origin', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
              <th style={{ color: 'white', width: '20%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>State</Text>
                  {sortBy === 'state' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('state', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('state', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
            </tr>
          </thead>
          <tbody style={{ display: 'block', overflow: 'auto', maxHeight: '500px' }}>
            {tableRows}
          </tbody>
          {!isLoadingPendingReceiptsDetail && !pendingReceiptsDetail.length && (
            <Flex align="center" justify="center" gap={10} style={{ height: '60vh' }}>
              <IconAlertCircle size={20} color="red" />
              <Text>Data Not Found</Text>
            </Flex>
          )}
          {isLoadingPendingReceiptsDetail && (
            <Flex direction="column" align="center" justify="center" style={{ height: '60vh' }}>
              <Loader color="blue" />
            </Flex>
          )}
        </Table>
      </Box>

      {!!pendingReceiptsDetail.length && (
        <Pagination
          mt={20}
          value={page}
          onChange={setPage}
          total={totalPage}
          color="indigo"
          variant="filled"
          sx={{ alignSelf: 'end' }}
        />
      )}
    </Flex>
  );
};
