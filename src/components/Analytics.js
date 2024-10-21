// Analytics.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import "../global.css";

const Analytics = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Lead Conversions',
        data: [12, 19, 3, 5, 2],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
      },
    },
  };

  return (
    <div className="analytics mt-20">
      <h2>Analytics</h2>
      <div className="chart-container max-h-96">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Analytics;
