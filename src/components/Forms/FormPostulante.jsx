/*
 * Programador: Benjamin Orellana
 * Fecha Cración: 06 / 04 / 2024
 * Versión: 1.0
 *
 * Descripción:
 *  Este archivo (FormPostulante.jsx) es el componente donde realizamos un formulario para
 *  la tabla Postulantes, este formulario aparece en la web oficial, para que los usuarios
 *  que navegan por la web puedan ver este formulario
 * 
 * Tema: Configuración del Formulario
 * Capa: Frontend
 * 
 * Contacto: benjamin.orellanaof@gmail.com || 3863531891
 */

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import Alerta from '../Error'

import '../../styles/Forms/FormPostulante.css'

const FormPostulante = () => {
    
    const navigate = useNavigate();
    
    // yup sirve para validar formulario este ya trae sus propias sentencias
    // este esquema de cliente es para utilizar su validacion en los inputs
    const nuevoPostulanteSchema = Yup.object().shape({
        nomape: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(255, 'El nombre es muy largo')
            .required('El Nombre es Obligatorio'),
        email: Yup.string()
            .email('Email no válido')
            .required('El Email es obligatorio'),
        celular: Yup.string()
            .min(8, 'El número es muy corto')
            .max(255, 'Número demasiado largo')
            .required('El Celular es obligatorio'),
        edad: Yup.string().required('La Edad es obligatoria'),
        puesto: Yup.string()
            .max(255, 'Puesto demasiado largo')
            .required('El Puesto es obligatorio'),
        sede: Yup.string()
            .max(255, 'Sede demasiado larga')
            .required('La Sede es obligatoria'),
        info: Yup.string().max(100, 'Información adicional demasiado larga'),
        redes: Yup.string().max(255, 'Redes sociales demasiado largas'),
        observaciones: Yup.string().max(255, 'Observaciones demasiado largas'),
        valoracion: Yup.number()
            .min(0, 'La valoración mínima es 0')
            .max(10, 'La valoración máxima es 10')
            .nullable(true),
        state: Yup.boolean().required(),
        created_at: Yup.date().nullable(true),
        updated_at: Yup.date().nullable(true)
    });

    const handleSubmitPostu = async (valores) => {
        let respuesta
        if (
            nomape === '' &&
            email === '' &&
            celular === 0 &&
            edad === '' &&
            checkbox === false
        ) {
            alert('No puede contener espacios sin rellenar');
        } else if (
            nomape === '' &&
            email === '' &&
            celular === 0 &&
            edad === '' &&
            checkbox != false
        ) {
            respuesta = await fetch('http://localhost:3000/postulantes/', {
                method: 'POST', // metodo post para hacer el insert de datos en la url
                body: JSON.stringify(valores), // convierte en string los valores cargados
                headers: {
                    'Content-Type': 'application/json'
                    //Content-Type dice al cliente que tipo de contenido será retornado. en este caso un JSON
                }
            });
        } else {
            alert('Verifique la casilla por favor');
        }

        await respuesta.json()
        // setModal(true)

        setTimeout(() => {
            // setModal(false)
            navigate('/')
        }, 3000)
    }
  return (
      <div className="container-inputs">
          {/*
                Formik es una biblioteca de formularios React de terceros.
                Proporciona programación y validación de formularios básicos.
                Se basa en componentes controlados 
                y reduce en gran medida el tiempo de programación de formularios. 
            */}
          <Formik

              // valores con los cuales el formulario inicia y este objeto tambien lo utilizo para cargar los datos en la API
              initialValues={{
                  nombre: '',
                  apellido: '',
                  numero: '',
                  email: '',
                  notas: '',
                  checkbox: false,
              }}

              enableReinitialize={true}
              // cuando hacemos el submit esperamos a que cargen los valores y esos valores tomados se lo pasamos a la funcion handlesubmit que es la que los espera
              onSubmit={async (values, { resetForm }) => {
                  await handleSubmit(values)

                  resetForm()
              }}
              validationSchema={nuevoClienteSchema}
          >
              {({ errors, touched }) => {
                  return (

                      <Form
                          className="mt-10 formulario"
                      >
                          <div className="mb-4">
                              <Field
                                  id="nombre"
                                  type="text"
                                  className="mt-2 block w-full p-3  text-black formulario__input"
                                  placeholder="Nombre"
                                  name="nombre"
                                  maxLength="31"

                              />
                              {errors.nombre && touched.nombre ? (
                                  <Alerta>{errors.nombre}</Alerta>
                              ) : null}
                          </div>

                          {/* <div className="mb-4">
                              <Field
                                  id="apellido"
                                  type="text"
                                  className="mt-2 block w-full p-3  text-black formulario__input"
                                  placeholder="Apellido"
                                  name="apellido"
                                  maxLength="31"
                            APELLIDO Y NOMBRE ES EL MISMO CAMPO
                              />

                              {errors.apellido && touched.apellido ? (
                                  <Alerta>{errors.apellido}</Alerta>
                              ) : null}
                          </div> */}

                          <div className="mb-4">
                              <Field
                                  id="email"
                                  type="email"
                                  className="mt-2 block w-full p-3  text-black formulario__input"
                                  placeholder="Email"
                                  name="email"
                              />
                              {errors.email && touched.email ? (
                                  <Alerta>{errors.email}</Alerta>
                              ) : null}
                          </div>

                          <div className="mb-4">
                              <Field
                                  id="numero"
                                  type="tel"
                                  className="mt-2 block w-full p-3  text-black formulario__input"
                                  placeholder="Número sin (+) ni espacios"
                                  name="numero"
                                  maxLength="14"

                              />
                              {errors.numero && touched.numero ? (
                                  <Alerta>{errors.numero}</Alerta>
                              ) : null}
                          </div>

                          <div className="mb-4">
                              <Field
                                  as="textarea"
                                  id="notas"
                                  type="text"
                                  className="mt-2 block w-full p-3  h-40 text-black text-xl"
                                  placeholder="Dejanos una nota para poder contactarte mas rapido"
                                  name="notas"
                                  maxLength="301"
                              />
                              {errors.notas && touched.notas ? (
                                  <Alerta>{errors.notas}</Alerta>
                              ) : null}
                          </div>
                          {/* input para el checkBox */}

                          <label className='labelCheckbox' >
                              <input type="checkbox" id="chekboxInput"
                                  onChange={(e) => setCheckbox(!checkbox)}
                              />
                              <span className={checkbox === true ? 'chekSpan' : 'chekSpanFalse'}></span>
                          </label>

                          {/* {checkbox === true ? <p>Gracias por confirmar!😌</p> : <p>CONFIRMAR😜</p>} */}
                          <input
                              type="submit"
                              value={'Enviar Consulta'}
                              className="mt-5 w-full bg-blue-700 p-3 text-white uppercase font-bold text-lg hover:cursor-pointer hover:bg-blue-900"
                              id='click2'
                          >
                          </input>
                            {/* REALIZAR MODAL */}
                          {/* {modal === true ? <ModalEnviado
                              modal={modal}
                              setModal={setModal}
                          /> : ""} */}
                      </Form>
                  )
              }}
          </Formik>
      </div>
  )
}

FormPostulante.defaultProps = {
    postulante: {}
}
// defaultProps es una propiedad del componente React que le permite establecer valores predeterminados para el argumento props.
// en este caso a nuestro objeto de cliente le asignamos por defecto que este vacio
export default FormPostulante