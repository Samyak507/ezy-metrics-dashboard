// Reports.js
import React from 'react';
import jsPDF from 'jspdf';
import { leads } from '../utils/dummyData';
import { convertArrayToCSV } from 'convert-array-to-csv';
import "../css/mainContent.css";

const Reports = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Lead Report', 10, 10);
    leads.forEach((lead, index) => {
      doc.text(`${index + 1}. ${lead.name} - ${lead.email} (${lead.status})`, 10, 20 + index * 10);
    });
    doc.save('lead-report.pdf');
  };

  const generateCSV = () => {
    const csv = convertArrayToCSV(leads);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'lead-report.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="reports mt-20">
      <h2>Generate Reports</h2>
      <button onClick={generatePDF}>Download PDF Report</button>
      <button onClick={generateCSV}>Download CSV Report</button>
    </div>
  );
};

export default Reports;
