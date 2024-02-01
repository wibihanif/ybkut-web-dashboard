import { ActionIcon, Box, Flex, Pagination, Table, Text, createStyles } from '@mantine/core';
import { IconSortDescendingLetters } from '@tabler/icons-react';
import { TableRow } from './TableRow';
import { TotalProductDetail } from '~/features/inventory/types';

interface TotalProductDetailTableProps {
  totalProductsDetail: TotalProductDetail[];
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

export const TotalProductDetailTable: React.FC<TotalProductDetailTableProps> = ({
  page,
  setPage,
  totalProductsDetail,
  totalPage,
}) => {
  const { classes } = useStyles();

  const tableRows = totalProductsDetail.map((totalProductDetail, index) => {
    return (
      <TableRow
        productName={totalProductDetail.name}
        defaultCode={totalProductDetail.defaultCode}
        barcode={totalProductDetail.defaultCode}
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
                  <Text className={classes.tableHead}>Product Name</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '33%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Default Code</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '34%' }}>
                <Text className={classes.tableHead}>Barcode</Text>
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
