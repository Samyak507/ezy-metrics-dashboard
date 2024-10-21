// ModalLeadDetails.js
import React from 'react';
import Modal from 'react-modal';

const ModalLeadDetails = ({ lead, onClose }) => {
  return (
    <Modal isOpen={!!lead} onRequestClose={onClose}>
      <h2>{lead.name}'s Details</h2>
      <p>Email: {lead.email}</p>
      <p>Status: {lead.status}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ModalLeadDetails;
