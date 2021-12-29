import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import faker from 'faker';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  borderRadius: 20,
  responsive: true,
  bezierCurve: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        borderWidth: 4,
      },
      ticks: {
        min: 0,
        max: 1000,
        stepSize: 200, // <----- This prop sets the stepSize
      },
    },
    x: {
      grid: {
        borderWidth: 4,
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        padding: 24,
        font: {
          size: 16,
        },
      },
    },
    title: {
      display: true,
      text: 'Progress by Unit',
      padding: {
        bottom: 32,
        top: 12,
      },
      font: {
        size: 24,
      },
    },
  },
};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'September',
  'Oktober',
  'November',
  'Desember',
];

// let valueGradient = null;

// const testGradient = () => {
//   if (typeof document !== 'undefined') {
//     // will run in client's browser only
//     let ctx = window.document.getElementById('chartLine').getContext('2d');

//     /*** Gradient ***/
//     valueGradient = ctx.createLinearGradient(0, 0, 0, 510);
//     valueGradient.addColorStop(0, 'rgba(250,174,50,1)');
//     valueGradient.addColorStop(1, 'rgba(250,174,50,0)');
//     // valueGradient = gradient;
//   }
// };

export default function ChartStackBar() {
  const data = {
    labels,
    datasets: [
      {
        label: 'Goverment Service',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: '#39B4F3',
        backgroundColor: '#39B4F3',
        lineTension: 0.3,
      },
      {
        label: 'Enterprise Business',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: '#2012FE',
        backgroundColor: '#2012FE',
        lineTension: 0.3,
      },
      {
        label: 'Telco And SME',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: '#10b981',
        backgroundColor: '#10b981',
        lineTension: 0.3,
      },
    ],
  };
  return <Line id="chartLine" options={options} data={data} height={100} />;
}
