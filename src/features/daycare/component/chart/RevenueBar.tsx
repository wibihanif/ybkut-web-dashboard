import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const RevenueBar = () => {
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
            speed: 10000,
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
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
        },
        {
          name: 'Member',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
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
      colors: ['#1a9f23', '#3e1a9f'], // Insert the color here
    };

    const chart = new ApexCharts(document.getElementById('line-chartttt'), options);

    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="line-chartttt"></div>;
};
