// Dashboard.js
import React from 'react';
import "../css/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="widget">
        <h3>Widget 1</h3>
        <div className="widget-content">Content for widget 1</div>
      </div>
      <div className="widget">
        <h3>Widget 2</h3>
        <div className="widget-content">Content for widget 2</div>
      </div>
      <div className="widget">
        <h3>Widget 3</h3>
        <div className="widget-content">Content for widget 3</div>
      </div>
    </div>
  );
};

export default Dashboard;
