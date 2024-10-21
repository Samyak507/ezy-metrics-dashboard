import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../css/sidebar.css"

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <Link to="/">Dashboard</Link>
      </div>
      <div className={`nav-item ${location.pathname === '/leads' ? 'active' : ''}`}>
        <Link to="/leads">Leads</Link>
      </div>
      <div className={`nav-item ${location.pathname === '/analytics' ? 'active' : ''}`}>
        <Link to="/analytics">Analytics</Link>
      </div>
      <div className={`nav-item ${location.pathname === '/reports' ? 'active' : ''}`}>
        <Link to="/reports">Reports</Link>
      </div>
    </div>
  );
};

export default Sidebar;
