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
import { faker } from '@faker-js/faker';
import { totalProduct } from '~/constant/totalProduct';
import { useState } from 'react';
import {
  IconAlertCircle,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from '@tabler/icons-react';
import { TableRow } from './TableRow';
import { TotalPendingPRDetail } from '~/features/purchase/types';
import { SortOrder } from '~/types/pagination';

interface TotalPendingPRDetailTableProps {
  totalPendingPRDetails: TotalPendingPRDetail[];
  page: number;
  totalPage: number;
  setPage: (value: number) => void;
  sortBy: string;
  sortOrder: SortOrder;
  handleSort: (sortValue: string, orderValue: SortOrder) => void;
  isLoadingTotalPendingPRDetail: boolean;
}

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

export const PendingPRDetailTable: React.FC<TotalPendingPRDetailTableProps> = ({
  handleSort,
  isLoadingTotalPendingPRDetail,
  page,
  setPage,
  sortBy,
  sortOrder,
  totalPage,
  totalPendingPRDetails,
}) => {
  const { classes } = useStyles();

  const tableRows = totalPendingPRDetails.map((totalPendingPrDetail, index) => {
    return (
      <TableRow
        name={totalPendingPrDetail.name}
        purchaseCount={totalPendingPrDetail.purchaseCount}
        estimatedCost={totalPendingPrDetail.estimatedCost}
        state={totalPendingPrDetail.state}
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
              <th style={{ color: 'white', width: '33%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Name</Text>
                  {sortBy === 'name' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('name', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('name', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
              <th style={{ color: 'white', width: '33%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>State</Text>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '33%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Purchase Count</Text>
                  {sortBy === 'purchaseCount' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('purchaseCount', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('purchaseCount', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
              <th style={{ color: 'white', width: '33%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Estimated Cost</Text>
                  {sortBy === 'estimatedCost' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('estimatedCos', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('estimatedCos', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
          {!isLoadingTotalPendingPRDetail && !totalPendingPRDetails.length && (
            <Flex align="center" justify="center" gap={10} style={{ height: '60vh' }}>
              <IconAlertCircle size={20} color="red" />
              <Text>Data Not Found</Text>
            </Flex>
          )}
          {isLoadingTotalPendingPRDetail && (
            <Flex direction="column" align="center" justify="center" style={{ height: '60vh' }}>
              <Loader color="blue" />
            </Flex>
          )}
        </Table>
      </Box>

      {!!totalPendingPRDetails.length && (
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
