/*
 * Programadores: Benjamin Orellana (back) y Lucas Albornoz (front)
 * Fecha Creación: 01 / 06 / 2024
 * Versión: 1.0
 *
 * Descripción:
 *  Este archivo (FormAltaPrecio.jsx) es el componente donde realizamos un formulario para
 *  la tabla Precio, este formulario aparece en la web del staff
 *
 *
 * Tema: Configuración del Formulario
 * Capa: Frontend
 *
 * Contacto: benjamin.orellanaof@gmail.com || 3863531891
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ModalSuccess from './ModalSuccess';
import ModalError from './ModalError';
import Alerta from '../Error';

const FormAltaPrecio = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const textoModal = 'Precios(Valores) creado correctamente.';

  // yup sirve para validar formulario este ya trae sus propias sentencias
  // este esquema de cliente es para utilizar su validacion en los inputs
  const nuevoPrecioSchema = Yup.object().shape({
    precio: Yup.string().required('El Precio es obligatorio'),
    descuento: Yup.string().required('El Descuento es obligatorio')
    // preciofinal: Yup.string().required('La descripción es obligatoria')
  });

  const handlePrecioChange = (values, setFieldValue) => {
    const precio = parseFloat(values.precio) || 0;
    const descuento = parseFloat(values.descuento) || 0;
    const precioFinal = precio - (precio * descuento) / 100;
    setFieldValue('preciofinal', precioFinal.toFixed(2));
  };  
  const handleSubmitPrecio = async (valores) => {
    try {
      // Verificamos si los campos obligatorios están vacíos
      if (valores.precio === '' || valores.descuento === '') {
        alert('Por favor, complete todos los campos obligatorios.');
      } else {
        // Realizamos la solicitud POST al servidor
        const respuesta = await fetch('http://localhost:8080/admprecio/', {
          method: 'POST',
          body: JSON.stringify(valores),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        // Verificamos si la solicitud fue exitosa
        if (!respuesta.ok) {
          throw new Error('Error en la solicitud POST: ' + respuesta.status);
        }

        // Convertimos la respuesta a JSON
        const data = await respuesta.json();
        console.log('Registro insertado correctamente:', data);

        // Mostrar la ventana modal de éxito
        setShowModal(true);

        // Ocultar la ventana modal de éxito después de 3 segundos
        setTimeout(() => {
          setShowModal(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error al insertar el registro:', error.message);

      // Mostrar la ventana modal de error
      setErrorModal(true);

      // Ocultar la ventana modal de éxito después de 3 segundos
      setTimeout(() => {
        setErrorModal(false);
      }, 3000);
    }
  };

  return (
    <div
      className={`h-screen w-screen mt-16 fixed inset-0 flex pt-10 justify-center ${
        isOpen ? 'block' : 'hidden'
      } bg-gray-800 bg-opacity-75 z-50`}
    >
      <div className={`container-inputs`}>
        {/*
                Formik es una biblioteca de formularios React de terceros.
                Proporciona programación y validación de formularios básicos.
                Se basa en componentes controlados
                y reduce en gran medida el tiempo de programación de formularios.
            */}
        <Formik
          // valores con los cuales el formulario inicia y este objeto tambien lo utilizo para cargar los datos en la API
          initialValues={{
            precio: '',
            descuento: '0%',
            preciofinal: ''
          }}
          enableReinitialize={!isOpen}
          // cuando hacemos el submit esperamos a que cargen los valores y esos valores tomados se lo pasamos a la funcion handlesubmit que es la que los espera
          onSubmit={async (values, { resetForm }) => {
            await handleSubmitPrecio(values);

            resetForm();
          }}
          validationSchema={nuevoPrecioSchema}
        >
          {({ isSubmitting, setFieldValue, errors, touched, values }) => {
            return (
              <div className="py-0 max-h-[500px] max-w-[400px] w-[400px] overflow-y-auto bg-white rounded-xl">
                {' '}
                {/* Cuando se haga el modal, sacarle el padding o ponerle uno de un solo digito */}
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

                  <div className="mb-4 px-4">
                    <Field
                      id="precio"
                      name="precio"
                      type="text"
                      className="mt-2 block w-full p-3 text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                      placeholder="Precio"
                      maxLength="14"
                      onChange={(e) => {
                        setFieldValue('precio', e.target.value);
                        handlePrecioChange(
                          { ...values, precio: e.target.value },
                          setFieldValue
                        );
                      }}
                    />
                  </div>
                  <div className="mb-4 px-4">
                    <Field
                      id="descuento"
                      name="descuento"
                      type="text"
                      className="mt-2 block w-full p-3 text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                      placeholder="Descuento"
                      maxLength="14"
                      onChange={(e) => {
                        setFieldValue('descuento', e.target.value);
                        handlePrecioChange(
                          { ...values, descuento: e.target.value },
                          setFieldValue
                        );
                      }}
                    />
                  </div>
                  <div className="mb-4 px-4">
                    <Field
                      id="preciofinal"
                      name="preciofinal"
                      type="text"
                      className="mt-2 block w-full p-3 text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                      placeholder="Precio Final"
                      maxLength="14"
                      readOnly
                      value={values.preciofinal}
                    />
                  </div>

                  <div className="mx-auto flex justify-center my-5">
                    <input
                      type="submit"
                      value="Crear Valor"
                      className="bg-orange-500 py-2 px-5 rounded-xl text-white  font-bold hover:cursor-pointer hover:bg-[#fc4b08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100"
                      id="click2"
                    />
                  </div>
                </Form>
              </div>
            );
          }}
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

FormAltaPrecio.defaultProps = {
  precios: {}
};

export default FormAltaPrecio;