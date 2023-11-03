import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const labels = ['Laptop', 'Tablet E-Learning', 'Projector', 'Simulator Electric', 'Computer'];

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

export const NominalPurchase = () => {
  return <Line options={options} data={data} />;
};
