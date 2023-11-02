import { Grid, Paper, Text } from '@mantine/core';
import { TableRataRataPerBatch } from './TableRataRataPerBatch';
import { TableSiswaYangSelesaiStudi } from './TableSiswaYangSelesaiStudi';

export const TableSection = () => {
  return (
    <>
      <Grid mt={20}>
        <Grid.Col span={4}>
          <Paper
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Rata-Rata Nilai Kelulusan Tiap Batch
            </Text>
            <TableRataRataPerBatch />
          </Paper>
        </Grid.Col>
        <Grid.Col span={8}>
          <Paper
            h="100%"
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Siswa Yang Berhasil Menyelesaikan Studi
            </Text>
            <TableSiswaYangSelesaiStudi />
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  );
};
