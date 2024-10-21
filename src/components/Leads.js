// Leads.js
import React from 'react';
import { leads } from '../utils/dummyData';


const Leads = () => {
  return (
    <div className="leads mt-20">
      <h2>Leads</h2>
      {leads.map((lead) => (
        <div key={lead.id} className="lead">
          <p><strong>Name:</strong> {lead.name}</p>
          <p><strong>Email:</strong> {lead.email}</p>
          <p><strong>Status:</strong> {lead.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Leads;
