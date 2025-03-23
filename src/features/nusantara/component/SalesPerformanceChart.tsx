import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { Box } from '@mantine/core';

export const SalesPerformanceChart = () => {
  useEffect(() => {
    const options = {
      series: [350, 200, 150], // Data dummy
      chart: {
        type: 'donut',
        height: 500,
        width: '100%',
        foreColor: '#ffffff', // Mengatur warna teks menjadi putih
      },
      labels: ['Customer Training', 'Sponsor Fee', 'Other'], // Label kategori
      colors: ['#f0c800', '#ffa500', '#008080'], // Warna unik setiap kategori
      responsive: [
        {
          breakpoint: 768, // Tablet
          options: {
            chart: {
              height: 400,
            },
            legend: {
              position: 'bottom',
              labels: {
                colors: '#ffffff', // Warna legend putih
              },
            },
          },
        },
        {
          breakpoint: 480, // Mobile
          options: {
            chart: {
              height: 300,
            },
            legend: {
              position: 'bottom',
              labels: {
                colors: '#ffffff', // Warna legend putih
              },
            },
          },
        },
      ],
      legend: {
        position: 'bottom',
        fontSize: '14px',
        labels: {
          colors: '#ffffff', // Mengatur warna teks legend menjadi putih
        },
      },
    };

    const chart = new ApexCharts(document.querySelector('#chart-sales'), options);
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
      SALES TARGET{' '}
      <Box id="chart-sales" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }} />{' '}
    </div>
  );
};
