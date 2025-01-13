import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';
import { Box, Text } from '@mantine/core';

export const InvoiceChart = () => {
  useEffect(() => {
    const labels = ['Done', 'Not Yet'];
    const getChartOptions = () => {
      return {
        series: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        colors: [
          'rgba(253, 224, 71, 1)',
          // 'rgba(147, 197, 253, 1)',
          'rgba(134, 239, 172, 1)',
          '#FFA500',
          '#008080',
          '#D3D3D3',
        ],
        chart: {
          height: 420,
          width: '100%',
          type: 'pie',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000,
            },
          },
          dropShadow: {
            enabled: true,
            opacity: 0.3,
            blur: 5,
            left: -7,
            top: 22,
          },
        },
        stroke: {
          colors: ['white'],
          lineCap: '',
        },
        plotOptions: {
          pie: {
            labels: {
              show: true,
            },
            size: '100%',
            dataLabels: {
              offset: -25,
            },
          },
        },
        labels: ['Done', 'Not Yet'],
        dataLabels: {
          enabled: true,
          style: {
            fontFamily: 'Inter, sans-serif',
          },
        },
        legend: {
          position: 'bottom',
          fontFamily: 'Inter, sans-serif',
        },
        yaxis: {
          labels: 'Unit',
        },
        xaxis: {
          labels: 'Unit',
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      };
    };
    const chart = new ApexCharts(document.getElementById('pie-invoice'), getChartOptions());

    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <Box>
      <Text align="center" weight={700} size="xl" mt={10} mb={20}>
        Summary {faker.datatype.number({ min: 0, max: 1000 })}
      </Text>
      <div id="pie-invoice"></div>
    </Box>
  );
};
