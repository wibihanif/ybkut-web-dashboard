import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const OperationChart = () => {
  useEffect(() => {
    const labels = ['UT DCare', 'Poliklinit UT', 'YKBUT', 'UT School'];

    const getChartOptions = () => {
      return {
        series: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        colors: ['#38a33a', '#58dbec', '#3845a3', '#d3d026'],
        chart: {
          height: '100%',
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
        labels: ['UT DCare', 'Poliklinit UT', 'YKBUT', 'UT School'],
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
    const chart = new ApexCharts(document.getElementById('pie-operation'), getChartOptions());

    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="pie-operation"></div>;
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
