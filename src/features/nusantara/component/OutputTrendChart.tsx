import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';
import { Box } from '@mantine/core';

export const OutputTrendChart = () => {
  useEffect(() => {
    const labels = ['2019', '2020', '2021', '2022', '2023', '2024', '2025'];

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

    const chart = new ApexCharts(document.getElementById('line-chartttt-output'), options);

    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div
      className="border text-white text-lg p-5"
      style={{
        borderRadius: 8,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        padding: 10,

        backgroundColor: 'transparent',
        border: '1px solid #31313d',
        // transition: 'transform 0.3s ease-in-out',
      }}>
      UT SCHOOL UTPUT TREND
      <Box
        id="line-chartttt-output"
        style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
      />
    </div>
  );
};
