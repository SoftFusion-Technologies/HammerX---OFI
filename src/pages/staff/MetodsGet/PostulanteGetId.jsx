import React from 'react';
import "../../../styles/MetodsGet/GetUserId.css";

const PostulanteDetails = ({ user, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className='flex justify-between text-[20px] pb-4 items-center'>
          <h2 className='font-bignoodle tracking-wide text-[#fc4b08]'>Detalles del Postulante</h2>
          <div className="pr-2 cursor-pointer font-semibold" onClick={onClose}>x</div>
        </div>
        <p><span className='font-semibold '>ID:</span> {user.id}</p>
        <p><span className='font-semibold '>Nombre:</span> {user.name}</p>
        <p><span className='font-semibold '>Email:</span> {user.edad}</p>
        <p><span className='font-semibold '>Email:</span> {user.sexo}</p>
        <p><span className='font-semibold '>Rol:</span> {user.puesto}</p>
        <p><span className='font-semibold '>Sede:</span> {user.sede}</p>
        <p><span className='font-semibold '>Valoracion:</span> {user.valoracion}</p>
      </div>
    </div>
  );
};

export default PostulanteDetails;
