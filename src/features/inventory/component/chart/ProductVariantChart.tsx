import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  BarElement,
  ArcElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, ArcElement);

const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  aspectRatio: 1.5,
};

const labels = ['UT DCare', 'Poliklinit UT', 'YKBUT', 'UT School'];

const data = {
  labels,
  datasets: [
    {
      label: 'Unit',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const ProductVariantChart = () => {
  return <Pie data={data} options={options} style={{ marginTop: 30 }} />;
};
