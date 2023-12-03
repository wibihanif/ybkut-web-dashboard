import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const EquipmentByBranchChart = () => {
  useEffect(() => {
    const labels = ['UT DCare', 'Poliklinik UT', 'YKBUT', 'UT School'];
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
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      series: [
        {
          name: 'Unit',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        },
      ],
      xaxis: {
        categories: ['UT DCare', 'Poliklinik UT', 'YKBUT', 'UT School'],
      },
      colors: ['#a99a42'], // Insert the color here
    };

    const chart = new ApexCharts(document.getElementById('line-chartt'), options);

    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="line-chartt"></div>;
};
