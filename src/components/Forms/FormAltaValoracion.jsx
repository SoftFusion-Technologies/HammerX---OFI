/*
 * Programadores: Benjamin Orellana (back) y Lucas Albornoz (front)
 * Fecha Cración: 06 / 04 / 2024
 * Versión: 1.0
 *
 * Descripción:
 *  Este archivo (FormAltaValoracionjsx) es el componente donde realizamos un formulario para
 *  la tabla Valoracion, este formulario aparece en la web del staff
 *
 *
 * Tema: Configuración del Formulario
 * Capa: Frontend
 *
 * Contacto: benjamin.orellanaof@gmail.com || 3863531891
 */

import React, { useState } from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ModalSuccess from './ModalSuccess';
import ModalError from './ModalError';
import Alerta from '../Error';

const FormAltaValoracion = ({ isOpen, onClose, user }) => {
  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const textoModal = 'Se valoró correctamente el postulante.';

  const nuevoValSchema = Yup.object().shape({
    valoracion: Yup.string().required('La valoración es obligatoria'),
    observaciones: Yup.string().required('Las observaciones son obligatorias')
  });

  return (
    <div
      className={`h-screen w-screen mt-16 fixed inset-0 flex pt-10 justify-center ${
        isOpen ? 'block' : 'hidden'
      } bg-gray-800 bg-opacity-75 z-50`}
    >
      <div className={`container-inputs`}>
        <Formik
          initialValues={{
            valoracion: '',
            observaciones: ''
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              const response = await fetch(
                `http://localhost:8080/postulantes/${user.id}`,
                {
                  method: 'PUT',
                  body: JSON.stringify(values),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }
              );

              if (!response.ok) {
                throw new Error(
                  'Error en la solicitud PUT: ' + response.status
                );
              }

              setShowModal(true);
              setTimeout(() => {
                setShowModal(false);
              }, 3000);
            } catch (error) {
              console.error('Error al insertar el registro:', error.message);
              setErrorModal(true);
              setTimeout(() => {
                setErrorModal(false);
              }, 3000);
            } finally {
              resetForm();
            }
          }}
          validationSchema={nuevoValSchema}
        >
          {({ isSubmitting }) => (
            <div className="py-0 max-h-[500px] max-w-[400px] w-[400px] overflow-y-auto bg-white rounded-xl">
              <Form className="formulario max-sm:w-[300px] bg-white ">
                <div className="flex justify-between">
                  <div className="tools">
                    <div className="circle">
                      <span className="red toolsbox"></span>
                    </div>
                    <div className="circle">
                      <span className="yellow toolsbox"></span>
                    </div>
                    <div className="circle">
                      <span className="green toolsbox"></span>
                    </div>
                  </div>
                  <div
                    className="pr-6 pt-3 text-[20px] cursor-pointer"
                    onClick={onClose}
                  >
                    x
                  </div>
                </div>
                <h1 className="mb-3 px-4">
                  <span className='text-orange-600'>Postulante: </span> {user.name}
                </h1>

                <div className="mb-3 px-4">
                  <Field
                    id="valoracion"
                    type="text"
                    className="mt-2 block w-full p-3  text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                    placeholder="Valorar"
                    name="valoracion"
                    maxLength="70"
                  />
                </div>
                <div className="mb-3 px-4">
                  <Field
                    id="observaciones"
                    as="textarea"
                    className="mt-2 block w-full p-3  text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                    placeholder="Observaciones"
                    name="observaciones"
                    maxLength="70"
                  />
                  {/* <ErrorMessage name="observaciones" component={Alerta} /> */}
                </div>
                <div className="mx-auto flex justify-center my-5">
                  <button
                    type="submit"
                    className="bg-orange-500 py-2 px-5 rounded-xl text-white  font-bold hover:cursor-pointer hover:bg-[#fc4b08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100"
                    id="click2"
                    disabled={isSubmitting}
                  >
                    Valorar
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
      <ModalSuccess
        textoModal={textoModal}
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
      <ModalError isVisible={errorModal} onClose={() => setErrorModal(false)} />
    </div>
  );
};

FormAltaValoracion.defaultProps = {
  valoracion: {}
};

export default FormAltaValoracion;