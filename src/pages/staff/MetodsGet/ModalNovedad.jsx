import React from 'react';

const ModalNovedad = ({ isOpen, onClose, mensaje }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-6 rounded shadow-lg z-10">
        <h2 className="text-xl font-semibold mb-4">Detalle de la Novedad</h2>
        <div
          className="text-gray-800 mb-4 overflow-y-auto max-w-[900px]"
          dangerouslySetInnerHTML={{ __html: mensaje }}
        />
        <button
          onClick={onClose}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalNovedad;