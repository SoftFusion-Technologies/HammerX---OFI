import React from 'react';
import "../../../styles/MetodsGet/GetUserId.css";

const IntegranteDetails = ({ user, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className='flex justify-between text-[20px] pb-4 items-center'>
          <h2 className='font-bignoodle tracking-wide text-[#fc4b08]'>Detalles del Integrante</h2>
          <div className="pr-2 cursor-pointer font-semibold" onClick={onClose}>x</div>
        </div>
        <p><span className='font-semibold '>Nombre:</span> {user.nombre}</p>
        <p><span className='font-semibold '>DNI:</span> {user.dni}</p>
        <p><span className='font-semibold '>Teléfono:</span> {user.telefono}</p>
        <p><span className='font-semibold '>Email:</span> {user.email}</p>
        <p><span className='font-semibold '>Sede:</span> {user.sede}</p>
      </div>
    </div>
  );
};

export default IntegranteDetails;
