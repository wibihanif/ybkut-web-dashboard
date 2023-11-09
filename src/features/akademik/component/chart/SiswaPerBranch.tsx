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

const labels = [
  'Bontang',
  'Tanjung Redeb',
  'Damai',
  'Balikpapan',
  'Lampung',
  'Banjarmasin',
  'Batu Kajang',
  'Adaro',
  'Samarinda',
  'Pekanbaru',
  'Medan',
  'Ujung Pandang',
  'Palembang',
  'Surabaya',
  'Jakarta',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Siswa',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(100, 180, 120, 0.5)',
    },
  ],
};

export const ChartSiswaPerBranch = () => {
  return <Line options={options} data={data} />;
};