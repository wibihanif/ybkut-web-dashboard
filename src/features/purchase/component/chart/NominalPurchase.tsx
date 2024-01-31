import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { faker } from '@faker-js/faker';

export const NominalPurchase = () => {
  useEffect(() => {
    const labels = ['Laptop', 'Tablet E-Learning', 'Projector', 'Simulator Electric', 'Computer'];
    const options = {
      xaxis: {
        show: true,
        categories: ['Laptop', 'Tablet E-Learning', 'Projector', 'Simulator Electric', 'Computer'],
        labels: {
          show: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
      },
      series: [
        {
          name: 'Unit',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          color: '#3845a3',
        },
      ],
      chart: {
        sparkline: {
          enabled: false,
        },
        // height: '100%',
        // width: '100%',
        type: 'area',
        fontFamily: 'Inter, sans-serif',
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

      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: '#3845a3', // Change this to the desired color
          gradientToColors: ['#3845a3'], // Change this to the desired color
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
    };

    const chart = new ApexCharts(document.getElementById('line-chart'), options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="line-chart"></div>;
};
