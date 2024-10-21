// reportGenerator.js

import jsPDF from 'jspdf';

/**
 * Generates a PDF report from the provided leads data.
 * @param {Array} leads - Array of lead objects containing {id, name, email, status}.
 */
export const generatePDFReport = (leads) => {
  const doc = new jsPDF();

  // Add a title
  doc.text('Lead Report', 10, 10);

  // Add some spacing and loop through the leads to add details
  leads.forEach((lead, index) => {
    const yPosition = 20 + (index * 10);
    doc.text(`${index + 1}. ${lead.name} - ${lead.email} (${lead.status})`, 10, yPosition);
  });

  // Save the PDF file
  doc.save('lead-report.pdf');
};
