/*
 * Programadores: Benjamin Orellana (back) y Lucas Albornoz (front)
 * Fecha Creación: 16 / 05 / 2024
 * Versión: 1.0
 *
 * Descripción:
 *  Este archivo (FormAltaNovedad.jsx) es el componente donde realizamos un formulario para
 *  la tabla novedad, este formulario aparece en la web del staff
 *
 * 
 * Tema: Configuración del Formulario
 * Capa: Frontend
 *
 * Contacto: benjamin.orellanaof@gmail.com || 3863531891
 */

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ModalSuccess from "./ModalSuccess";
import ModalError from "./ModalError";
import Alerta from "../Error";

const FormAltaNovedad = ({ isOpen, onClose }) => {
  const [users, setUsers] = useState([]);
  const [selectedSede, setSelectedSede] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]); // Estado para usuarios seleccionados

  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const textoModal = 'Novedad creada correctamente.';

  // yup sirve para validar formulario este ya trae sus propias sentencias
  // este esquema de cliente es para utilizar su validacion en los inputs
  const nuevoNovedadSchema = Yup.object().shape({
    titulo: Yup.string().required('El Titulo es obligatorio'),
    sede: Yup.string().required('La Sede es obligatoria'),

    state: Yup.boolean().required(),
    created_at: Yup.date().nullable(true),
    updated_at: Yup.date().nullable(true)
  });

  useEffect(() => {
    obtenerUsers(selectedSede);
  }, [selectedSede]);

  const obtenerUsers = async (sede) => {
    try {
      let response;
      if (sede === 'todas' || sede === '') {
        response = await axios.get('http://localhost:8080/users');
      } else {
        response = await axios.get('http://localhost:8080/users', {
          params: { sede }
        });
      }
      setUsers(response.data);
    } catch (error) {
      console.log('Error al obtener los usuarios:', error);
    }
  };

  const handleCheckboxChange = (userId) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.includes(userId)
        ? prevSelectedUsers.filter((id) => id !== userId)
        : [...prevSelectedUsers, userId]
    );
  };

 const handleSubmitNovedad = async (valores) => {
   try {
     if (valores.sede === '' || valores.titulo === '') {
       alert('Por favor, complete todos los campos obligatorios.');
     } else {
       const data = {
         sede: valores.sede,
         titulo: valores.titulo,
         mensaje: valores.mensaje,
         vencimiento: valores.vencimiento,
         estado: valores.estado,
         users: selectedUsers // IDs de usuarios seleccionados
       };

       const respuesta = await fetch('http://localhost:8080/novedades/', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
           'Content-Type': 'application/json'
         }
       });

       if (!respuesta.ok) {
         throw new Error('Error en la solicitud POST: ' + respuesta.status);
       }

       const result = await respuesta.json();
       console.log('Registro insertado correctamente:', result);

       setShowModal(true);

       setTimeout(() => {
         setShowModal(false);
       }, 3000);
     }
   } catch (error) {
     console.error('Error al insertar el registro:', error.message);

     setErrorModal(true);

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
            sede: '',
            titulo: '',
            mensaje: '',
            user: 0,
            vencimiento: '',
            estado: 1,
            state: false,
            created_at: null,
            updated_at: null
          }}
          enableReinitialize={!isOpen}
          // cuando hacemos el submit esperamos a que cargen los valores y esos valores tomados se lo pasamos a la funcion handlesubmit que es la que los espera
          onSubmit={async (values, { resetForm }) => {
            await handleSubmitNovedad(values);

            resetForm();
          }}
          validationSchema={nuevoNovedadSchema}
        >
          {({ isSubmitting, setFieldValue, errors, touched }) => {
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
                      as="select"
                      id="sede"
                      name="sede"
                      className="form-select mt-2 block w-full p-3 text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                      onChange={(e) => {
                        const selected = e.target.value;
                        setFieldValue('sede', selected);
                        setSelectedSede(selected);
                      }}
                      required
                    >
                      <option value="" disabled>
                        Sede: Todas
                      </option>
                      <option value="todas">Todas</option>
                      <option value="monteros">Monteros</option>
                      <option value="concepcion">Concepción</option>
                    </Field>
                    {errors.sede && touched.sede ? (
                      <Alerta>{errors.sede}</Alerta>
                    ) : null}
                  </div>

                  <div className="mb-4 px-4">
                    <label className="form-label">
                      Selecciona uno o más usuarios:
                    </label>
                    {users.map((user) => (
                      <div key={user.id} className="form-check">
                        <input
                          type="checkbox"
                          id={`user-${user.id}`}
                          className="form-check-input"
                          value={user.id}
                          onChange={() => handleCheckboxChange(user.id)}
                          checked={selectedUsers.includes(user.id)}
                        />
                        <label
                          htmlFor={`user-${user.id}`}
                          className="form-check-label"
                        >
                          {user.name}
                        </label>
                      </div>
                    ))}
                    {/* Mostrar errores de validación si es necesario */}
                    {errors.user && touched.user ? (
                      <Alerta>{errors.user}</Alerta>
                    ) : null}
                  </div>

                  <div className="mb-3 px-4">
                    <label
                      htmlFor="vencimiento"
                      className="block font-medium left-0"
                    >
                      <span className="text-black text-base pl-1">
                        Fecha de publicacion de la tarea
                      </span>
                    </label>

                    <Field
                      name="vencimiento"
                      type="date"
                      className="mt-2 block w-full p-3  text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                    />
                    {/* <ErrorMessage name="vencimiento" component="div" className="text-red-500" /> */}
                  </div>

                  <div className="mb-3 px-4">
                    <Field
                      id="titulo"
                      type="text"
                      className="mt-2 block w-full p-3  text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                      placeholder="Titulo de la tarea"
                      name="titulo"
                      maxLength="70"
                    />
                    {errors.titulo && touched.titulo ? (
                      <Alerta>{errors.titulo}</Alerta>
                    ) : null}
                  </div>

                  <div className="mb-3 px-4">
                    <Field
                      id="mensaje"
                      type="textarea"
                      className="mt-2 block w-full p-3  text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                      placeholder="Mensaje"
                      name="mensaje"
                      maxLength="70"
                    />
                    {errors.mensaje && touched.mensaje ? (
                      <Alerta>{errors.mensaje}</Alerta>
                    ) : null}
                  </div>

                  <div className="mx-auto flex justify-center my-5">
                    <input
                      type="submit"
                      value="Subir Novedad"
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
}

FormAltaNovedad.defaultProps = {
    novedad: {},
};

export default FormAltaNovedad