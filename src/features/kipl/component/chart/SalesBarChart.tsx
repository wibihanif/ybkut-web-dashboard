import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const SalesBarChart = () => {
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

    // Generate actual and expected data
    const data = labels.map(() => faker.datatype.number({ min: 0, max: 1000 }));
    const expectedData = labels.map(() => faker.datatype.number({ min: 0, max: 1000 }));

    const seriesData = data.map((value, index) => ({
      x: labels[index],
      y: value,
      goals: [
        {
          name: 'Expected',
          value: expectedData[index],
          strokeHeight: 5,
          strokeColor: 'rgba(75, 85, 99, 1)',
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
      colors: ['rgba(253, 224, 71, 1)'],
      dataLabels: {
        enabled: true,
        formatter: (val: number) => {
          // Show 'actual' value in the middle of the bar
          return val.toString();
        },
        style: {
          colors: ['rgba(75, 85, 99, 1)'], // White text color for numbers inside bars
        },
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
          fillColors: ['rgba(253, 224, 71, 1)', 'rgba(75, 85, 99, 1)'],
        },
      },
      tooltip: {
        enabled: true,
      },
    };

    const chart = new ApexCharts(document.getElementById('line-charttt'), options);

    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="line-charttt"></div>;
};
