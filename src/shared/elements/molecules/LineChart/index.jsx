import React, { useMemo } from 'react';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// ChartJS.register(Tooltip, Title, ArcElement, Legend);

const scores = [80, 25, 50, 100, 150, 200, 20];
const labels = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo',
];

const options = {
  fill: true,
  animations: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};

export const LineChart = () => {
  const data = useMemo(() => {
    return {
      datasets: [
        {
          label: 'Calorias',
          tension: 0.3,
          data: scores,
          borderColor: 'rgb(246, 106, 118)',
          backgroundColor: 'rgb(246, 106, 118)',
        },
      ],
      labels,
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};
