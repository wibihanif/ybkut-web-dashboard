import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const ChartAlumniBelumTersalurkan = () => {
  useEffect(() => {
    const labels = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Des',
    ];
    const options = {
      chart: {
        type: 'bar',
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
      series: [
        {
          name: 'Siswa',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        },
      ],
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Des',
        ],
      },
      dataLabels: {
        enabled: false, // Set this to false to hide the values inside the bars
      },
      colors: ['#49b86c'], // Insert the color here
    };

    const chart = new ApexCharts(document.getElementById('line-charttttttttt'), options);

    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="line-charttttttttt"></div>;
};
