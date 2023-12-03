import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const QtyKid = () => {
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
        height: '500px',
        width: '100%',
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
          name: 'Insidental',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 12 })),
        },
        {
          name: 'Member',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 12 })),
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
      colors: ['#feb329', '#1c0793'], // Insert the color here
    };

    const chart = new ApexCharts(document.getElementById('line-chart'), options);

    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="line-chart"></div>;
};
