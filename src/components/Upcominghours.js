import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

const labels = ['30°', '89°', '33°', '23°', '12°', '23°', '16°', '20°'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Upcoming hours',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#5c9ce5',
    },
  ],
};

export function Upcominghours() {
  return (
    <div className='w-full p-4 bg-white rounded-3xl'>
      <Bar options={options} data={data} />
    </div>
  );
}
