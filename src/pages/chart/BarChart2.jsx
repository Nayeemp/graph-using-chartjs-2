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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const monthly = {
  '2023-09': 0.0,
  '2023-08': 443.0,
  '2023-07': 23822.936,
  '2023-06': 1212.12,
  '2023-05': 39571.1,
  '2023-04': 94558.64,
  '2023-03': 219555.25,
  '2023-02': 211341.68,
  '2023-01': 392491.55,
  '2022-12': 235022.45,
  '2022-11': 336871.23,
  '2022-10': 394133.89,
};

const keys = Object.keys(monthly);

let labels = [];

for (const key of keys) {
  labels.push(key);
}

//   console.log('labels = ', labels);

let datasetsArray = [];

for (const key in monthly) {
  const value = monthly[key];
  datasetsArray.push(value);
}

function BarChart2() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: datasetsArray,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default BarChart2;
