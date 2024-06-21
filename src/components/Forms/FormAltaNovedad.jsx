import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ModalSuccess from './ModalSuccess';
import ModalError from './ModalError';
import Alerta from '../Error';

const FormAltaNovedad = ({ isOpen, onClose }) => {
  const [users, setUsers] = useState([]); // Asegurarse de que se inicializa como un array vacío
  const [selectedSede, setSelectedSede] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const textoModal = 'Novedad creada correctamente.';

  const nuevoNovedadSchema = Yup.object().shape({
    titulo: Yup.string().required('El Titulo es obligatorio'),
    sede: Yup.string().required('La Sede es obligatoria'),
    mensaje: Yup.string().required('El Mensaje es obligatorio'),
    vencimiento: Yup.date().nullable(true)
  });

  useEffect(() => {
    if (isOpen) {
      obtenerUsers(selectedSede);
    }
  }, [isOpen, selectedSede]);

  const obtenerUsers = async (sede) => {
    try {
      const response =
        sede === 'todas' || sede === ''
          ? await axios.get('http://localhost:8080/users')
          : await axios.get('http://localhost:8080/users', {
              params: { sede }
            });

      setUsers(response.data);
    } catch (error) {
      console.log('Error al obtener los usuarios:', error);
      setUsers([]); // Asegurarse de que users se establece como un array vacío en caso de error
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
      const data = {
        sede: valores.sede,
        titulo: valores.titulo,
        mensaje: valores.mensaje,
        vencimiento: valores.vencimiento,
        estado: valores.estado,
        user: selectedUsers
      };

      const respuesta = await fetch('http://localhost:8080/novedades/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });

      if (!respuesta.ok)
        throw new Error('Error en la solicitud POST: ' + respuesta.status);

      const result = await respuesta.json();
      console.log('Registro insertado correctamente:', result);

      setShowModal(true);
      setTimeout(() => setShowModal(false), 3000);
    } catch (error) {
      console.error('Error al insertar el registro:', error.message);
      setErrorModal(true);
      setTimeout(() => setErrorModal(false), 3000);
    }
  };

  return (
    <div
      className={`h-screen w-screen mt-16 fixed inset-0 flex pt-10 justify-center ${
        isOpen ? 'block' : 'hidden'
      } bg-gray-800 bg-opacity-75 z-50`}
    >
      <div className="container-inputs">
        <Formik
          initialValues={{
            sede: '',
            titulo: '',
            mensaje: '',
            vencimiento: '',
            estado: 1
          }}
          enableReinitialize
          onSubmit={async (values, { resetForm }) => {
            await handleSubmitNovedad(values);
            resetForm();
          }}
          validationSchema={nuevoNovedadSchema}
        >
          {({ errors, touched, setFieldValue }) => (
            <div className="py-0 max-h-[500px] max-w-[400px] w-[400px] overflow-y-auto bg-white rounded-xl">
              <Form className="formulario max-sm:w-[300px] bg-white">
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
                  {Array.isArray(users) && users.length > 0 ? (
                    users.map((user) => (
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
                    ))
                  ) : (
                    <p>No users available</p>
                  )}
                </div>
                <div className="mb-3 px-4">
                  <label
                    htmlFor="vencimiento"
                    className="block font-medium left-0"
                  >
                    <span className="text-black text-base pl-1">
                      Fecha de vencimiento
                    </span>
                  </label>
                  <Field
                    name="vencimiento"
                    type="date"
                    className="mt-2 block w-full p-3 text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  />
                </div>
                <div className="mb-3 px-4">
                  <Field
                    id="titulo"
                    type="text"
                    className="mt-2 block w-full p-3 text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
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
                    as="textarea"
                    className="mt-2 block w-full p-3 text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                    placeholder="Mensaje"
                    name="mensaje"
                    maxLength="255"
                  />
                  {errors.mensaje && touched.mensaje ? (
                    <Alerta>{errors.mensaje}</Alerta>
                  ) : null}
                </div>
                <div className="mx-auto flex justify-center my-5">
                  <input
                    type="submit"
                    value="Subir Novedad"
                    className="bg-orange-500 py-2 px-5 rounded-xl text-white font-bold hover:cursor-pointer hover:bg-[#fc4b08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100"
                    id="click2"
                  />
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

FormAltaNovedad.defaultProps = {
  novedad: {}
};

export default FormAltaNovedad;
