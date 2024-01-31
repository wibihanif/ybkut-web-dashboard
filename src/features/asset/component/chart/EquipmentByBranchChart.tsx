import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const EquipmentByBranchChart = () => {
  useEffect(() => {
    const labels = ['UT DCare', 'Poliklinik UT', 'YKBUT', 'UT School'];

    // Define colors for each label
    const labelColors: { [key: string]: string } = {
      'UT DCare': '#38a33a',
      'Poliklinik UT': '#3896a3',
      YKBUT: '#3845a3',
      'UT School': '#a37538',
    };

    const seriesData = labels.map(() => faker.datatype.number({ min: 0, max: 1000 }));

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
          name: 'sales',
          data: seriesData,
          color: ({ value }: { value: number }) => {
            const label = labels[seriesData.indexOf(value)];
            return labelColors[label];
          },
        },
      ],
      xaxis: {
        categories: labels,
      },
    };

    const chart = new ApexCharts(document.getElementById('line-chartt'), options);

    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="line-chartt"></div>;
};
