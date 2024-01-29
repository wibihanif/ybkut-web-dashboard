import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const ChartSiswaPerBranch = () => {
  useEffect(() => {
    const labels = [
      'Bontang',
      'Tanjung Redeb',
      'Damai',
      'Balikpapan',
      'Lampung',
      'Banjarmasin',
      'Batu Kajang',
      'Adaro',
      'Samarinda',
      'Pekanbaru',
      'Medan',
      'Ujung Pandang',
      'Palembang',
      'Surabaya',
      'Jakarta',
    ];
    const options = {
      xaxis: {
        show: true,
        categories: [
          'Bontang',
          'Tanjung Redeb',
          'Damai',
          'Balikpapan',
          'Lampung',
          'Banjarmasin',
          'Batu Kajang',
          'Adaro',
          'Samarinda',
          'Pekanbaru',
          'Medan',
          'Ujung Pandang',
          'Palembang',
          'Surabaya',
          'Jakarta',
        ],
        labels: {
          show: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
      },
      series: [
        {
          name: 'Siswa',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          color: '#3845a3',
        },
      ],
      chart: {
        sparkline: {
          enabled: false,
        },
        // height: '100%',
        // width: '100%',
        type: 'area',
        fontFamily: 'Inter, sans-serif',
        toolbar: {
          show: false,
        },
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

      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: '#3845a3', // Change this to the desired color
          gradientToColors: ['#3845a3'], // Change this to the desired color
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
    };

    const chart = new ApexCharts(document.getElementById('line-chart1'), options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="line-chart1"></div>;
};
