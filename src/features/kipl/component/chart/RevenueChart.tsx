import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const RevenueChart = () => {
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

    const data = labels.map(() => faker.datatype.number({ min: 0, max: 1000 }));

    const seriesData = data.map((value, index) => ({
      x: labels[index],
      y: value,
      goals: [
        {
          name: 'Expected',
          value: faker.datatype.number({ min: 0, max: 1000 }), // Replace with your expected values
          strokeHeight: 5,
          strokeColor: '#775DD0',
        },
      ],
    }));

    const options = {
      series: [
        {
          name: 'Actual',
          data: seriesData,
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '60%',
        },
      },
      colors: ['#00c1e3'],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
          fillColors: ['#00E396', '#775DD0'],
        },
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
