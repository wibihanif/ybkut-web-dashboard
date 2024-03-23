// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Title,
//   Tooltip,
//   BarElement,
//   ArcElement,
// } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';

// ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, ArcElement);

// const options = {
//   indexAxis: 'y' as const,
//   elements: {
//     bar: {
//       borderWidth: 2,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//   },
//   aspectRatio: 1.5,
// };

// const labels = ['Current', '1-30 Days', '31-60 Days', '61-90 Days', '> 90 Days'];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Percent',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// export const AccountReceivableChart = () => {
//   return <Pie data={data} options={options} style={{ marginTop: 30 }} />;
// };

import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const CorporateActualChart = () => {
  useEffect(() => {
    const labels = [
      'CSR - Pendidikan (UTS Reguler Training)',
      'CSR - Pendidikan (UTS Non Reguler Training)',
      'CSR - Pendidikan (Non UTS)',
      'CSR - Kesehatan (Non Poli)',
      'CSR - Lingkungan',
      'CSR - Kreativitas Sosial',
      'CSR - Peduli Bencana',
      'CSR - Others',
    ];
    const getChartOptions = () => {
      return {
        series: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        colors: [
          '#1C64F2',
          '#ca6d16',
          '#8eafef',
          '#FFA500',
          '#007180',
          '#7ed43c',
          '#5a3cd4',
          '#d4463c',
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
        labels: [
          'CSR - Pendidikan (UTS Reguler Training)',
          'CSR - Pendidikan (UTS Non Reguler Training)',
          'CSR - Pendidikan (Non UTS)',
          'CSR - Kesehatan (Non Poli)',
          'CSR - Lingkungan',
          'CSR - Kreativitas Sosial',
          'CSR - Peduli Bencana',
          'CSR - Others',
        ],
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
    const chart = new ApexCharts(
      document.getElementById('pie-corporate-actual'),
      getChartOptions(),
    );

    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="pie-corporate-actual"></div>;
};
