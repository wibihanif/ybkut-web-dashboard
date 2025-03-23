import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';
import { Box, Text } from '@mantine/core';

export const ChartRadialbar = () => {
  useEffect(() => {
    const options = {
      series: [44, 55],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      colors: ['#fde047', '#f0c800'], // Actual: Kuning muda, Target: Kuning lebih gelap
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '18px',
              color: '#ffffff', // Warna label putih
            },
            value: {
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#ffffff', // Warna angka putih
            },
            total: {
              show: true,
              formatter: function () {
                return '249'; // Hanya angka tanpa label "Total"
              },
              color: '#ffffff', // Warna putih untuk total
              fontSize: '30px',
              fontWeight: 'bold',
            },
          },
        },
      },
      labels: ['Actual', 'Target'],
    };

    const chart = new ApexCharts(document.querySelector('#radialbar'), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div
      className="border text-white text-lg p-5"
      style={{
        borderRadius: 8,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        padding: 10,

        backgroundColor: 'transparent',
        border: '1px solid #31313d',
        // transition: 'transform 0.3s ease-in-out',
      }}>
      SALES TARGET
      <Box>
        <div id="radialbar"></div>
      </Box>
      <div className="flex justify-center text-3xl font-bold text-white">SALES TARGET</div>
    </div>
  );
};
