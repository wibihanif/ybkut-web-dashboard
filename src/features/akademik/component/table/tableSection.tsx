import { Grid, Paper, Text } from '@mantine/core';
import { TableRataRataPerBatch } from './TableRataRataPerBatch';
// import { TableSiswaYangSelesaiStudi } from './TableSiswaYangSelesaiStudi';
import { AlumniTerserap } from '../chart/AlumniTerserap';

export const TableSection = () => {
  return (
    <>
      <Grid mt={20}>
        <Grid.Col span={4}>
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
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Rata-Rata Nilai Kelulusan Tiap Batch
            </Text>
            <TableRataRataPerBatch />
          </Paper>
        </Grid.Col>
        <Grid.Col span={8}>
          <Paper
            h="100%"
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
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Siswa Yang Berhasil Menyelesaikan Studi
            </Text>
            <AlumniTerserap />
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  );
};
