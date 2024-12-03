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
        enabled: true,
        formatter: (val: number) => {
          // Show 'actual' value in the middle of the bar
          return val.toString();
        },
        style: {
          colors: ['#010101'], // White text color for numbers inside bars
        },
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
          fillColors: ['#00E396', '#775DD0'],
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
