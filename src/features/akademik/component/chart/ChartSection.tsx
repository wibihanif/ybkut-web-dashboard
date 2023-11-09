import { Grid, Paper, Text } from '@mantine/core';
import { ChartPesertaPelatihan } from './PesertaPelatihan';
import { ChartPesertaCsr } from './PesertaCsr';
import { ChartSiswaReguler } from './SiswaReguler';
import { ChartSiswaDanPeserta } from './SiswaDanPeserta';
import { ChartSiswaPerBranch } from './SiswaPerBranch';
import { ChartOutputTrendNonReguler } from './OutputTrendNonReguler';
import { ChartOutputTrendReguler } from './OutputTrendReguler';
import { ChartOutputTrendCsr } from './OutputTrendCsr';
import { PieChartTotalOutputTrend } from './PieTotalOutputTrend';
import { BarChartTotalOutputTrend } from './BarTotalOutputTrend';
import { ChartAlumniSIswaReguler } from './AlumniSIswaReguler';
import { ChartAlumniBelumTersalurkan } from './AlumniBelumTersalurkan';
import { ChartAlumniTersalurkan } from './AlumniTersalurkan';
import { PieSiswaSelesaiStudi } from './PieSiswaSelesaiStudi';
import { TableActivityEvent } from '../table/TableActivityEvent';

export const ChartSection = () => {
  return (
    <>
      <Grid mt={20}>
        <Grid.Col span={4}>
          <Paper
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Jumlah Peserta Pelatihan
            </Text>
            <ChartPesertaPelatihan />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Jumlah Peserta CSR
            </Text>
            <ChartPesertaCsr />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper
            h="100%"
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Jumlah Siswa Reguler
            </Text>
            <ChartSiswaReguler />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper
            h="100%"
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Jumlah Siswa Dan Peserta
            </Text>
            <ChartSiswaDanPeserta />
          </Paper>
        </Grid.Col>
        <Grid.Col span={8}>
          <Paper
            h="100%"
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Jumlah Siswa Tiap Branch
            </Text>
            <ChartSiswaPerBranch />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Output Trend Non Reguler
            </Text>
            <ChartOutputTrendNonReguler />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Output Trend Reguler
            </Text>
            <ChartOutputTrendReguler />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper
            h="100%"
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Output Trend CSr
            </Text>
            <ChartOutputTrendCsr />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper
            h="100%"
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Total Output Trend Tahun Ini
            </Text>
            <PieChartTotalOutputTrend />
          </Paper>
        </Grid.Col>
        <Grid.Col span={8}>
          <Paper
            h="100%"
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Total Output Trend
            </Text>
            <BarChartTotalOutputTrend />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Jumlah Alumni Siswa Reguler
            </Text>
            <ChartAlumniSIswaReguler />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Jumlah Alumni Belum Tersalurkan
            </Text>
            <ChartAlumniBelumTersalurkan />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper
            h="100%"
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Jumlah Alumni Sudah Tersalurkan
            </Text>
            <ChartAlumniTersalurkan />
          </Paper>
        </Grid.Col>
        <Grid.Col span={8}>
          <Paper
            h="100%"
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Activity Event
            </Text>
            <TableActivityEvent />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper
            h="100%"
            style={{ borderRadius: 2, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: 20 }}>
            <Text color="#61677A" fw="bold" fz="sm" pb={20}>
              Siswa Yang Berhasil Menyelesaikan Studi
            </Text>
            <PieSiswaSelesaiStudi />
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  );
};