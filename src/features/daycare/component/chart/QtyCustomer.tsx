import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
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

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'];

const data = {
  labels,
  datasets: [
    {
      label: 'Member',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 12 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(100, 180, 70, 0.5)',
    },
  ],
};

export const QtyCustomer = () => {
  return <Bar options={options} data={data} />;
};
