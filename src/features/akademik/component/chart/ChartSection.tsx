import { Grid, Paper, Text } from '@mantine/core';
import { ChartPesertaPelatihan } from './PesertaPelatihan';
// import { ChartPesertaCsr } from './PesertaCsr';
// import { ChartSiswaReguler } from './SiswaReguler';
// import { ChartSiswaDanPeserta } from './SiswaDanPeserta';
// import { ChartSiswaPerBranch } from './SiswaPerBranch';
// import { ChartOutputTrendNonReguler } from './OutputTrendNonReguler';
// import { ChartOutputTrendReguler } from './OutputTrendReguler';
// import { ChartOutputTrendCsr } from './OutputTrendCsr';
// import { PieChartTotalOutputTrend } from './PieTotalOutputTrend';
// import { BarChartTotalOutputTrend } from './BarTotalOutputTrend';
// import { ChartAlumniSIswaReguler } from './AlumniSIswaReguler';
// import { ChartAlumniBelumTersalurkan } from './AlumniBelumTersalurkan';
// import { ChartAlumniTersalurkan } from './AlumniTersalurkan';
import { PieSiswaSelesaiStudi } from './PieSiswaSelesaiStudi';
// import { TableActivityEvent } from '../table/TableActivityEvent';
import { Alumni } from './Alumni';
import { OutputTrend } from './OutputTrend';
import { TableRataRataPerBatch } from '../table/TableRataRataPerBatch';
import { AlumniTerserap } from './AlumniTerserap';

export const ChartSection = () => {
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
              Jumlah Siswa/Peserta Pelatihan
            </Text>
            <ChartPesertaPelatihan />
          </Paper>
        </Grid.Col>
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
              Alumni
            </Text>
            <Alumni />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
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
              Output Trend
            </Text>
            <OutputTrend />
          </Paper>
        </Grid.Col>
        {/* <Grid.Col span={4}>
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
              Jumlah Siswa Dan Peserta
            </Text>
            <ChartSiswaDanPeserta />
          </Paper>
        </Grid.Col> */}
        {/* <Grid.Col span={8}>
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
              Jumlah Siswa Tiap Branch
            </Text>
            <ChartSiswaPerBranch />
          </Paper>
        </Grid.Col> */}
        {/* <Grid.Col span={4}>
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
              Output Trend Non Reguler
            </Text>
            <ChartOutputTrendNonReguler />
          </Paper>
        </Grid.Col>
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
              Output Trend Reguler
            </Text>
            <ChartOutputTrendReguler />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
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
              Output Trend CSr
            </Text>
            <ChartOutputTrendCsr />
          </Paper>
        </Grid.Col> */}
        {/* <Grid.Col span={4}>
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
              Total Output Trend Tahun Ini
            </Text>
            <PieChartTotalOutputTrend />
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
              Total Output Trend
            </Text>
            <BarChartTotalOutputTrend />
          </Paper>
        </Grid.Col>
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
              Jumlah Alumni Siswa Reguler
            </Text>
            <ChartAlumniSIswaReguler />
          </Paper>
        </Grid.Col>
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
              Jumlah Alumni Belum Tersalurkan
            </Text>
            <ChartAlumniBelumTersalurkan />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
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
              Jumlah Alumni Sudah Tersalurkan
            </Text>
            <ChartAlumniTersalurkan />
          </Paper>
        </Grid.Col> */}
        {/* <Grid.Col span={4}>
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
              Activity Event
            </Text>
            <TableActivityEvent />
          </Paper>
        </Grid.Col> */}
        <Grid.Col span={4}>
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
            <PieSiswaSelesaiStudi />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
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
              Rata-rata Nilai Kelulusan Tiap Batch
            </Text>
            <TableRataRataPerBatch />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
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
              Alumni Terserap
            </Text>
            <AlumniTerserap />
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  );
};
