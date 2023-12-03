import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const ChartOutputTrendCsr = () => {
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
          name: 'Siswa',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        },
      ],
      xaxis: {
        categories: ['2021', '2022', '2023'],
      },
      dataLabels: {
        enabled: false, // Set this to false to hide the values inside the bars
      },
      colors: ['#49b86c'], // Insert the color here
    };

    const chart = new ApexCharts(document.getElementById('line-charttttttt'), options);

    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="line-charttttttt"></div>;
};
