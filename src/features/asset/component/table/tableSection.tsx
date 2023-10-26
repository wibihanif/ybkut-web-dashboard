import { Flex, Grid, Pagination, Paper, Text } from '@mantine/core';
import { TotalScrapTable } from './TotalScrapTable';
import { ItemDepreciationTable } from './ItemDepresiationTable';
import { useState } from 'react';

export const TableSection = () => {
  const [page, setPage] = useState<number>(0);

  return (
    <>
      <Grid mt={20}>
        <Grid.Col span={5}>
          <Paper
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Total Scrap Product
            </Text>
            <TotalScrapTable />
          </Paper>
        </Grid.Col>
        <Grid.Col span={7}>
          <Paper
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Flex justify="space-between">
              <Text color="#61677A" fw="bold" fz="sm" pb={20}>
                List Item Depreciation
              </Text>
              <Pagination value={page} onChange={setPage} total={2} sx={{ alignSelf: 'center' }} />
            </Flex>
            <ItemDepreciationTable />
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  );
};
