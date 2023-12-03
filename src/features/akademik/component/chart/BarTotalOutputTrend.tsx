import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const BarChartTotalOutputTrend = () => {
  useEffect(() => {
    const labels = ['2021', '2022', '2023'];
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
          name: 'Reguler',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        },
        {
          name: 'Non Reguler',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        },
      ],
      xaxis: {
        categories: ['2021', '2022', '2023'],
      },
      colors: ['#e35c84', '#5d4f7c'], // Insert the color here
    };

    const chart = new ApexCharts(document.getElementById('line-charttttttttttt'), options);

    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="line-charttttttttttt"></div>;
};
