// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Title,
//   Tooltip,
//   BarElement,
//   ArcElement,
// } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';

// ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, ArcElement);

// const options = {
//   indexAxis: 'y' as const,
//   elements: {
//     bar: {
//       borderWidth: 2,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//   },
//   aspectRatio: 1.5,
// };

// const labels = ['Current', '1-30 Days', '31-60 Days', '61-90 Days', '> 90 Days'];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Percent',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// export const AccountReceivableChart = () => {
//   return <Pie data={data} options={options} style={{ marginTop: 30 }} />;
// };

import { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { useGetCsrPlan } from '../../api/useGetCsrPlan';

export const CorporatePlanChart = () => {
  const { data: csrPlans } = useGetCsrPlan();

  useEffect(() => {
    if (!csrPlans) return;

    const labels = csrPlans && csrPlans?.map(csrPlan => csrPlan.account);
    const series = csrPlans && csrPlans?.map(csrPlan => Number(csrPlan.plan));

    const getChartOptions = () => {
      return {
        series,
        colors: [
          '#1C64F2',
          '#ca6d16',
          '#8eafef',
          '#FFA500',
          '#007180',
          '#7ed43c',
          '#5a3cd4',
          '#d4463c',
        ],
        chart: {
          height: 420,
          width: '100%',
          type: 'pie',
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
        stroke: {
          colors: ['white'],
          lineCap: '',
        },
        plotOptions: {
          pie: {
            labels: {
              show: true,
            },
            size: '100%',
            dataLabels: {
              offset: -25,
            },
          },
        },
        labels,
        dataLabels: {
          enabled: true,
          style: {
            fontFamily: 'Inter, sans-serif',
          },
        },
        legend: {
          position: 'bottom',
          fontFamily: 'Inter, sans-serif',
        },
        yaxis: {
          labels: 'Unit',
        },
        xaxis: {
          labels: 'Unit',
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      };
    };

    const chart = new ApexCharts(document.getElementById('pie-corporate-plan'), getChartOptions());

    chart.render();
    return () => {
      chart.destroy();
    };
  }, [csrPlans]);

  return <div id="pie-corporate-plan"></div>;
};
