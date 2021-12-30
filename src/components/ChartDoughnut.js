import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  cutout: '80%',
  borderRadius: 30,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        padding: 32,
        font: {
          size: 18,
        },
        margin: {
          top: 20,
        },
      },
    },
    title: {
      padding: {
        bottom: 32,
        top: 12,
      },

      display: true,
      text: 'Project Won dan Lose',
      font: {
        size: 24,
      },
    },
  },
};

export default function ChartDoughnut() {
  const DASHBOARD = useSelector((state) => state.dashboard);

  let filterData = DASHBOARD.data.filter(
    (item) => item.status_id === 5 || item.status_id === 7,
  );

  const data = {
    labels: filterData.map((item) => item.name),
    datasets: [
      {
        label: '# of Votes',
        data: filterData.map((item) => item.total),
        backgroundColor: ['#39B4F3', '#2012FE'],
        borderWidth: 2,
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
}
