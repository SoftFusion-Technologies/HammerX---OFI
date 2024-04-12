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

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import Alerta from '../Error'

import '../../styles/Forms/FormPostulante.css'

const FormPostulante = () => {
    
    
    // yup sirve para validar formulario este ya trae sus propias sentencias
    // este esquema de cliente es para utilizar su validacion en los inputs
    const nuevoPostulanteSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(100, 'El nombre es muy largo')
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
        redes: Yup.string().max(100, 'Redes sociales demasiado largas'),
        observaciones: Yup.string().max(100, 'Observaciones demasiado largas'),
        valoracion: Yup.number()
            .min(0, 'La valoración mínima es 0')
            .max(10, 'La valoración máxima es 10')
            .nullable(true),
        state: Yup.boolean().required(),
        created_at: Yup.date().nullable(true),
        updated_at: Yup.date().nullable(true)
    })

    const handleSubmitPostu = async (valores) => {
        try {
            // Verificar si los campos obligatorios están vacíos
            if (
                valores.email === '' ||
                valores.celular === '' ||
                valores.edad === '' ||
                valores.puesto === '' ||
                valores.info === '' ||
                valores.redes === '' ||
                valores.observacion === ''
            ) {
                alert('Por favor, complete todos los campos obligatorios.');
            } else {
                // Realizar la solicitud POST al servidor
                const respuesta = await fetch('http://localhost:8080/postulante/', {
                    method: 'POST',
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                // Verificar si la solicitud fue exitosa
                if (!respuesta.ok) {
                    throw new Error('Error en la solicitud POST: ' + respuesta.status);
                }

                // Convertir la respuesta a JSON
                const data = await respuesta.json();
                console.log('Registro insertado correctamente:', data);
            }
        } catch (error) {
            console.error('Error al insertar el registro:', error.message);
        }
    };

    return (
        <div className='container-inputs'>
            {/*
                Formik es una biblioteca de formularios React de terceros.
                Proporciona programación y validación de formularios básicos.
                Se basa en componentes controlados
                y reduce en gran medida el tiempo de programación de formularios.
            */}
            <Formik
                // valores con los cuales el formulario inicia y este objeto tambien lo utilizo para cargar los datos en la API
                initialValues={{
                    name: '',
                    email: '',
                    celular: '',
                    edad: '',
                    puesto: '',
                    sede: '',
                    info: '',
                    redes: '',
                    observaciones: '',
                    valoracion: null,
                    state: false,
                    created_at: null,
                    updated_at: null
                }}
                enableReinitialize
                // cuando hacemos el submit esperamos a que cargen los valores y esos valores tomados se lo pasamos a la funcion handlesubmit que es la que los espera
                onSubmit={async (values, { resetForm }) => {
                    await handleSubmitPostu(values)

                    resetForm()
                }}
                validationSchema={nuevoPostulanteSchema}
            >
                {({ errors, touched }) => {
                    return (
                        <Form className='mt-10 formulario'>
                            
                            <div className='mb-4'>
                                <Field
                                    id='name'
                                    type='text'
                                    className='mt-2 block w-full p-3  text-black formulario__input'
                                    placeholder='Nombre y Apellido'
                                    name='name'
                                    maxLength='31'
                                />
                                {errors.name && touched.name
                                    ? <Alerta>
                                        {errors.name}
                                    </Alerta>
                                    : null}
                            </div>

                            <div className='mb-4'>
                                <Field
                                    id='email'
                                    type='email'
                                    className='mt-2 block w-full p-3  text-black formulario__input'
                                    placeholder='Email'
                                    name='email'
                                />
                                {errors.email && touched.email
                                    ? <Alerta>
                                        {errors.email}
                                    </Alerta>
                                    : null}
                            </div>

                            <div className='mb-4'>
                                <Field
                                    id='celular'
                                    type='tel'
                                    className='mt-2 block w-full p-3  text-black formulario__input'
                                    placeholder='Número sin (+) ni espacios'
                                    name='celular'
                                    maxLength='14'
                                />
                                {errors.celular && touched.celular
                                    ? <Alerta>
                                        {errors.celular}
                                    </Alerta>
                                    : null}
                            </div>

                            <div className='mb-4'>
                                <Field
                                    id='edad'
                                    type='text'
                                    className='mt-2 block w-full p-3  text-black formulario__input'
                                    placeholder='Edad'
                                    name='edad'
                                    maxLength='14'
                                />
                                {errors.edad && touched.edad
                                    ? <Alerta>
                                        {errors.edad}
                                    </Alerta>
                                    : null}
                            </div>

                            <div className='mb-4'>
                                <Field
                                    id='puesto'
                                    type='text'
                                    className='mt-2 block w-full p-3  text-black formulario__input'
                                    placeholder='Puesto'
                                    name='puesto'
                                    maxLength='14'
                                />
                                {errors.puesto && touched.puesto
                                    ? <Alerta>
                                        {errors.puesto}
                                    </Alerta>
                                    : null}
                            </div>

                            <div className='mb-4'>
                                <Field
                                    id='sede'
                                    type='text'
                                    className='mt-2 block w-full p-3  text-black formulario__input'
                                    placeholder='Sede'
                                    name='sede'
                                    maxLength='14'
                                />
                                {errors.sede && touched.sede
                                    ? <Alerta>
                                        {errors.sede}
                                    </Alerta>
                                    : null}
                            </div>

                            <div className='mb-4'>
                                <Field
                                    id='info'
                                    type='text'
                                    className='mt-2 block w-full p-3  text-black formulario__input'
                                    placeholder='Info'
                                    name='info'
                                    maxLength='14'
                                />
                                {errors.info && touched.info
                                    ? <Alerta>
                                        {errors.info}
                                    </Alerta>
                                    : null}
                            </div>

                            <div className='mb-4'>
                                <Field
                                    id='redes'
                                    type='text'
                                    className='mt-2 block w-full p-3  text-black formulario__input'
                                    placeholder='Redes'
                                    name='redes'
                                    maxLength='14'
                                />
                                {errors.redes && touched.redes
                                    ? <Alerta>
                                        {errors.redes}
                                    </Alerta>
                                    : null}
                            </div>

                            <div className='mb-4'>
                                <Field
                                    id='observacion'
                                    type='text'
                                    className='mt-2 block w-full p-3  text-black formulario__input'
                                    placeholder='Observacion'
                                    name='observacion'
                                    maxLength='14'
                                />
                                {errors.observacion && touched.observacion
                                    ? <Alerta>
                                        {errors.observacion}
                                    </Alerta>
                                    : null}
                            </div>

                            <div className='mb-4'>
                                <Field
                                    id='valoracion'
                                    type='text'
                                    className='mt-2 block w-full p-3  text-black formulario__input'
                                    placeholder='Valoracion'
                                    name='valoracion'
                                    maxLength='14'
                                />
                                {errors.valoracion && touched.valoracion
                                    ? <Alerta>
                                        {errors.valoracion}
                                    </Alerta>
                                    : null}
                            </div>
                            <div className='mb-4'>
                                <Field
                                    as='textarea'
                                    id='notas'
                                    type='text'
                                    className='mt-2 block w-full p-3  h-40 text-black text-xl'
                                    placeholder='Dejanos una nota para poder contactarte mas rapido'
                                    name='notas'
                                    maxLength='301'
                                />
                                {errors.notas && touched.notas
                                    ? <Alerta>
                                        {errors.notas}
                                    </Alerta>
                                    : null}
                            </div>
                            {/* input para el checkBox */}

                            {/* <label className="labelCheckbox">
                <input
                  type="checkbox"
                  id="chekboxInput"
                  // onChange={(e) => setCheckbox(!checkbox)}
                />
                <span
                // className={checkbox === true ? 'chekSpan' : 'chekSpanFalse'}
                ></span>
              </label> */}

                            {/* {checkbox === true ? <p>Gracias por confirmar!😌</p> : <p>CONFIRMAR😜</p>} */}
                            <input
                                type='submit'
                                value={'Enviar Consulta'}
                                className='mt-5 w-full bg-blue-700 p-3 text-white uppercase font-bold text-lg hover:cursor-pointer hover:bg-blue-900'
                                id='click2'
                            />

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
