import { Grid, Paper } from '@mantine/core';
import { TotalScrapTable } from './TotalScrapTable';
import { ItemDepreciationTable } from './ItemDepresiationTable';

export const TableSection = () => {
  return (
    <>
      <Grid mt={20}>
        <Grid.Col span={5}>
          <Paper
            style={{
              borderRadius: 8,
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              padding: 20,
              transition: 'transform 0.3s ease-in-out',
            }}
            sx={{
              ':hover': {
                cursor: 'pointer',
                transform: 'scale(1.02)',
              },
            }}>
            <TotalScrapTable />
          </Paper>
        </Grid.Col>
        <Grid.Col span={7}>
          <Paper
            style={{
              borderRadius: 8,
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              padding: 20,
              transition: 'transform 0.3s ease-in-out',
            }}
            sx={{
              ':hover': {
                cursor: 'pointer',
                transform: 'scale(1.02)',
              },
            }}>
            <ItemDepreciationTable />
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  );
};
