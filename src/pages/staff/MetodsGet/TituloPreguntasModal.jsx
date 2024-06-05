/*
 * Programador: Emir Segovia
 * Fecha Cración: 05 / 06 / 2024
 * Versión: 1.0
 *
 * Descripción:
 * Este archivo (TituloPreguntasModal.jsx) es el componente el cual renderiza los titulos de la de las preguntas frecuentes.
 *
 * Tema: Renderizacion
 * Capa: Frontend
 * Contacto: emirvalles90f@gmail.com || 3865761910
 */

import React from 'react';

const TituloPreguntasModal = ({ isOpen, onClose, preguntas, onPreguntaSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-content bg-white p-6 rounded shadow-lg">
        <button className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 cursor-pointer" onClick={onClose}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 className="text-xl font-bold mb-4">Preguntas Frecuentes</h2>
        <ul>
          {preguntas.map(pregunta => (
            <li key={pregunta.id} onClick={() => onPreguntaSelect(pregunta)} className="cursor-pointer hover:text-blue-500">{pregunta.titulo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TituloPreguntasModal;
