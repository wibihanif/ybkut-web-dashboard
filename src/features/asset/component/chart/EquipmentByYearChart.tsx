// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const options = {
//   // maintainAspectRatio: true,
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//   },
// };

// const labels = ['2014', '2015', '2016', '2017', '2018', '2019', '2020'];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Unit',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(100, 180, 120, 0.5)',
//     },
//   ],
// };

// export const EquipmentByYearChart = () => {
//   return <Line height={50} options={options} data={data} />;
// };

import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const EquipmentByYearChart = () => {
  useEffect(() => {
    const labels = ['2014', '2015', '2016', '2017', '2018', '2019', '2020'];
    const options = {
      xaxis: {
        show: true,
        categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
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
          name: 'Unit',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          color: '#a99a42',
        },
      ],
      chart: {
        sparkline: {
          enabled: false,
        },
        height: '100%',
        width: '100%',
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
          shade: '#38a35a', // Change this to the desired color
          gradientToColors: ['#38a35a'], // Change this to the desired color
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

    const chart = new ApexCharts(document.getElementById('line-chart-2'), options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="line-chart-2"></div>;
};
