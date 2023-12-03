import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const ProjectChart = () => {
  useEffect(() => {
    const labels = ['Sponsor Fee', 'Customer Training', 'Other'];
    const getChartOptions = () => {
      return {
        series: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        colors: ['#1C64F2', '#16BDCA', '#9061F9', '#FFA500', '#008080', '#D3D3D3'],
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
        labels: ['Sponsor Fee', 'Customer Training', 'Other'],
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
    const chart = new ApexCharts(document.getElementById('pie-alumni'), getChartOptions());

    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="pie-alumni"></div>;
};
