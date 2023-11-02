import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from 'chart.js';
import { Bar, Chart, Pie } from 'react-chartjs-2';
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
};

const labels = ['UT DCare', 'Poliklinit UT', 'YKBUT', 'UT School'];

const data = {
  labels,
  datasets: [
    {
      label: 'Unit',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(100, 180, 120, 0.5)',
    },
  ],
};

export const ProjectChart = () => {
  return <Pie data={data} options={options} />;
};
