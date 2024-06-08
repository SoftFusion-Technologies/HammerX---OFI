/*
 * Programador: Benjamin Orellana
 * Fecha Cración: 01 / 04 / 2024
 * Versión: 1.0
 *
 * Descripción:
 * Este archivo (IntegranteConveGet.jsx) es el componente el cual renderiza los datos de la creacion de convenios
 * Estos datos llegan cuando se completa el formulario de FormAltaConve
 *
 * Tema: Configuración
 * Capa: Frontend
 * Contacto: benjamin.orellanaof@gmail.com || 3863531891
 */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { formatearFecha } from '../../../Helpers';
import { Link } from 'react-router-dom';
import NavbarStaff from '../NavbarStaff';
import '../../../styles/MetodsGet/Tabla.css';
import '../../../styles/staff/background.css';
import Footer from '../../../components/footer/Footer';
import FormAltaIntegranteConve from '../../../components/Forms/FormAltaIntegranteConve';

const IntegranteConveGet = ({ integrantes }) => {
  // Estado para almacenar la lista de personas
  const { id_conv, id_adm } = useParams();
  const [integrante, setIntegrantes] = useState([]);
  const [modalNewConve, setmodalNewConve] = useState(false);

  const abrirModal = () => {
    setmodalNewConve(true);
  };
  const cerarModal = () => {
    setmodalNewConve(false);
    obtenerIntegrantes2();
  };
  // Estado para almacenar el término de búsqueda
  const [search, setSearch] = useState('');

  //URL estatica, luego cambiar por variable de entorno
  const URL = 'http://localhost:8080/integrantes/';
  const URL2 =`http://localhost:8080/admconvenios/${id_conv}/integrantes/`


  useEffect(() => {
    // utilizamos get para obtenerPersonas los datos contenidos en la url
    axios.get(URL2).then((res) => {
      setIntegrantes(res.data);
      obtenerIntegrantes2();
    });
  }, []);

  // Función para obtener todos los personClass desde la API
  const obtenerIntegrantes2 = async () => {
    try {
      const response = await axios.get(URL2);
      setIntegrantes(response.data);
    } catch (error) {
      console.log('Error al obtener las personas :', error);
    }
  };

  // Función para obtener todos los personClass desde la API
  useEffect(() => {
    const obtenerIntegrantes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/admconvenios/${id_conv}/integrantes/`
        );
        setIntegrantes(response.data);
      } catch (error) {
        console.error('Error al obtener los integrantes:', error);
      }
    };

    obtenerIntegrantes();
  }, [id_conv, id_adm]);

  const handleEliminarIntegrante = async (id) => {
    const confirmacion = window.confirm('¿Seguro que desea eliminar?');
    if (confirmacion) {
      try {
        const url = `${URL}${id}`;
        const respuesta = await fetch(url, {
          method: 'DELETE'
        });
        await respuesta.json();
        const arrayIntegrante = integrante.filter(
          (integrante) => integrante.id !== id
        );

        setIntegrantes(arrayIntegrante);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const obtenerIntegrante = async (id) => {
    try {
      const url = `${URL}${id}`;

      console.log(url);

      const respuesta = await fetch(url);

      const resultado = await respuesta.json();

      setIntegrantes(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let results = [];

  if (!search) {
    results = integrante;
  } else if (search) {
    results = integrante.filter((dato) => {
      const nameMatch = dato.nameConve
        .toLowerCase()
        .includes(search.toLowerCase());

      return nameMatch;
    });
  }

  // Función para ordenar los integrante de forma decreciente basado en el id
  const ordenarintegranteDecreciente = (integrante) => {
    return [...integrante].sort((a, b) => b.id - a.id);
  };

  // Llamada a la función para obtener los integrantes ordenados de forma decreciente
  const sortedintegrante = ordenarintegranteDecreciente(results);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const records = sortedintegrante.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(sortedintegrante.length / itemsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  function prevPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <NavbarStaff />
      <div className="dashboardbg h-contain pt-10 pb-10">
        <div className="bg-white rounded-lg w-11/12 mx-auto pb-2">
          <div className="pl-5 pt-5">
            <Link to="/dashboard/admconvenios">
              <button className="py-2 px-5 bg-[#fc4b08] rounded-lg text-sm text-white hover:bg-orange-500">
                Volver
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <h1 className="pb-5">
              Listado de Integrantes: &nbsp;
              <span className="text-center">
                Cantidad de registros: {results.length}
              </span>
            </h1>
          </div>

          {/* formulario de busqueda */}
          <form className="flex justify-center pb-5">
            <input
              value={search}
              onChange={searcher}
              type="text"
              placeholder="Buscar Integrante"
              className="border rounded-sm"
            />
          </form>
          {/* formulario de busqueda */}

          <div className="flex justify-center pb-10">
            <Link to="#">
              <button
                onClick={abrirModal}
                className="bg-[#58b35e] hover:bg-[#4e8a52] text-white py-2 px-4 rounded transition-colors duration-100 z-10"
              >
                Nuevo Integrante
              </button>
            </Link>
          </div>

          {Object.keys(results).length === 0 ? (
            <p className="text-center pb-10">
              El Integrante NO Existe ||{' '}
              <span className="text-span"> Integrantes: {results.length}</span>
            </p>
          ) : (
            <>
              <table className="w-11/12 mx-auto">
                <thead className=" bg-[#fc4b08]  text-white">
                  <tr key={integrante.id}>
                    {/* <th className='thid'>ID</th> */}
                    <th>Notas</th>
                    <th>Nombre y Apellido</th>
                    <th>DNI</th>
                    <th>Telefono</th>
                    <th>Email</th>
                    <th>Sede</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((integrante) => (
                    <tr key={integrante.id}>
                      {/* <td onClick={() => obtenerIntegrante(integrante.id)}>
                        {i.id}
                      </td> */}
                      <td>
                        <button
                          className="bg-blue-500 text-white p-1 rounded"
                          // onClick={() => handleAgregarNota(integrante.id)}
                        >
                          Agregar Nota
                        </button>
                      </td>
                      <td onClick={() => obtenerIntegrante(integrante.id)}>
                        {integrante.nombre}
                      </td>
                      <td onClick={() => obtenerIntegrante(integrante.id)}>
                        {integrante.dni}
                      </td>
                      <td onClick={() => obtenerIntegrante(integrante.id)}>
                        {integrante.telefono}
                      </td>
                      <td onClick={() => obtenerIntegrante(integrante.id)}>
                        {integrante.email}
                      </td>

                      <td onClick={() => obtenerIntegrante(integrante.id)}>
                        {integrante.sede}
                      </td>
                      {/* <td onClick={() => obtenerIntegrante(i.id)}>
                        {formatearFecha(i.vencimiento)}
                      </td> */}

                      {/* ACCIONES */}
                      <td className="">
                        <button
                          onClick={() =>
                            handleEliminarIntegrante(integrante.id)
                          }
                          type="button"
                          className="py-2 px-4 my-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <nav className="flex justify-center items-center my-10">
                <ul className="pagination space-x-2">
                  <li className="page-item">
                    <a href="#" className="page-link" onClick={prevPage}>
                      Prev
                    </a>
                  </li>

                  <li className="page-item">
                    <a href="#" className="page-link" onClick={nextPage}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </>
          )}
          <FormAltaIntegranteConve
            isOpen={modalNewConve}
            onClose={cerarModal}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '10px'
  },
  conveBox: {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    boxSizing: 'border-box',
    flex: '1 1 calc(33% - 20px)', // Ajusta el ancho para permitir más espacio entre cuadros
    margin: '10px',
    minWidth: '250px' // Ajusta el tamaño mínimo para que los cuadros no sean demasiado pequeños
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    fontSize: '14px'
  },
  // Media queries
  '@media (max-width: 1200px)': {
    conveBox: {
      flex: '1 1 calc(50% - 20px)' // Dos columnas para pantallas medianas
    }
  },
  '@media (max-width: 768px)': {
    conveBox: {
      flex: '1 1 calc(100% - 20px)' // Una columna para pantallas pequeñas
    }
  }
};

export default IntegranteConveGet;