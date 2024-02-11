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
import { TotalRfqDetail } from '~/features/purchase/types';
import { SortOrder } from '~/types/pagination';

interface TotalRfqDetailTableProps {
  totalRfqDetail: TotalRfqDetail[];
  page: number;
  totalPage: number;
  setPage: (value: number) => void;
  sortBy: string;
  sortOrder: SortOrder;
  handleSort: (sortValue: string, orderValue: SortOrder) => void;
  isLoadingRfqDetail: boolean;
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

export const TotalRFQDetailTable: React.FC<TotalRfqDetailTableProps> = ({
  handleSort,
  isLoadingRfqDetail,
  page,
  setPage,
  sortBy,
  sortOrder,
  totalPage,
  totalRfqDetail,
}) => {
  const { classes } = useStyles();

  const tableRows = totalRfqDetail.map((rfqDetail, index) => {
    return (
      <TableRow
        amountTotal={rfqDetail.amountTotal}
        partnerName={rfqDetail.partnerName}
        purchaseOrderName={rfqDetail.purchaseOrderName}
        state={rfqDetail.state}
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
              <th style={{ color: 'white', width: '25%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Purchase Order Name</Text>
                  {sortBy === 'purchaseOrderName' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('purchaseOrderName', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('purchaseOrderName', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
              <th style={{ color: 'white', width: '25%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Amount Total</Text>
                  {sortBy === 'amountTotal' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('amountTotal', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('amountTotal', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
              <th style={{ color: 'white', width: '25%' }}>
                <Text className={classes.tableHead}>State</Text>
              </th>
              <th style={{ color: 'white', width: '25%' }}>
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
            </tr>
          </thead>
          <tbody style={{ display: 'block', overflow: 'auto', maxHeight: '500px' }}>
            {tableRows}
          </tbody>

          {!isLoadingRfqDetail && !totalRfqDetail.length && (
            <Flex align="center" justify="center" gap={10} style={{ height: '60vh' }}>
              <IconAlertCircle size={20} color="red" />
              <Text>Data Not Found</Text>
            </Flex>
          )}
          {isLoadingRfqDetail && (
            <Flex direction="column" align="center" justify="center" style={{ height: '60vh' }}>
              <Loader color="blue" />
            </Flex>
          )}
        </Table>
      </Box>

      {!!totalRfqDetail.length && (
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
