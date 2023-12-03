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

// export const AccountPayableChart = () => {
//   return <Pie data={data} options={options} style={{ marginTop: 30 }} />;
// };

import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const AccountPayableChart = () => {
  useEffect(() => {
    const labels = ['Current', '1-30 Days', '31-60 Days', '61-90 Days', '> 90 Days'];
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
        labels: ['Current', '1-30 Days', '31-60 Days', '61-90 Days', '> 90 Days'],
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
    const chart = new ApexCharts(document.getElementById('pie-payable'), getChartOptions());

    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="pie-payable"></div>;
};

// import { useEffect } from 'react';
// import ApexCharts from 'apexcharts';
// import { faker } from '@faker-js/faker';

// export const ChartPesertaPelatihan = () => {
//   useEffect(() => {
//     const labels = [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Des',
//     ];
//     const options = {
//       chart: {
//         type: 'bar',
//         toolbar: {
//           show: false,
//         },
//         animations: {
//           enabled: true,
//           easing: 'linear',
//           dynamicAnimation: {
//             speed: 1000,
//           },
//         },
//         dropShadow: {
//           enabled: true,
//           opacity: 0.3,
//           blur: 5,
//           left: -7,
//           top: 22,
//         },
//       },
//       series: [
//         {
//           name: 'Siswa Reguler',
//           data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//         },
//         {
//           name: 'Siswa Pelatihan',
//           data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//         },
//         {
//           name: 'Siswa CSR',
//           data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//         },
//       ],
//       xaxis: {
//         categories: [
//           'Jan',
//           'Feb',
//           'Mar',
//           'Apr',
//           'May',
//           'Jun',
//           'Jul',
//           'Aug',
//           'Sep',
//           'Oct',
//           'Nov',
//           'Des',
//         ],
//       },
//       dataLabels: {
//         enabled: false, // Set this to false to hide the values inside the bars
//       },
//       colors: ['#49b86c'], // Insert the color here
//     };

//     const chart = new ApexCharts(document.getElementById('line-chartt'), options);

//     chart.render();
//     return () => {
//       chart.destroy();
//     };
//   }, []);

//   return <div id="line-chartt"></div>;
// };
