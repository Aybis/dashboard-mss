import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  borderRadius: 10,
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
        display: false,
        borderWidth: 4,
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
      text: 'Project by Unit',
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

export default function ChartBar() {
  const DASHBOARD = useSelector((state) => state.dashboard);

  const labels = DASHBOARD.dataByUnit.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        yAxesID: 'yAxes',
        label: 'Project Won',
        data: DASHBOARD.dataByUnit.map((item) => item.won),
        backgroundColor: '#67e8f9',
      },
      {
        yAxesID: 'yAxes',
        label: 'Project Lose',
        data: DASHBOARD.dataByUnit.map((item) => item.lose),
        backgroundColor: '#93c5fd',
      },
      {
        yAxesID: 'yAxes',
        label: 'Project Submission',
        data: DASHBOARD.dataByUnit.map((item) => item.submission),
        backgroundColor: '#d4d4d8',
      },
    ],
  };

  return <Bar options={options} data={data} height={120} />;
}
