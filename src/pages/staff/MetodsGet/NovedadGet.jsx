/*
 * Programador: Benjamin Orellana
 * Fecha Cración: 01 / 04 / 2024
 * Versión: 1.0
 *
 * Descripción:
 * Este archivo (NovedadGet.jsx) es el componente el cual renderiza los datos de los novedads
 * Estos datos llegan cuando se completa el formulario de Quiero trabajar con ustedes
 *
 * Tema: Configuración
 * Capa: Frontend
 * Contacto: benjamin.orellanaof@gmail.com || 3863531891
 */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { formatearFecha } from '../../../Helpers'
import { Link } from 'react-router-dom';
import NavbarStaff from '../NavbarStaff';
import '../../../styles/MetodsGet/Tabla.css'
import "../../../styles/staff/background.css";
import Footer from '../../../components/footer/Footer';
import FormAltaNovedad from '../../../components/Forms/FormAltaNovedad';
import { useAuth } from '../../../AuthContext';

// Componente funcional que maneja la lógica relacionada con los Novedad
const NovedadGet = () => {
  const [modalNewNovedad, setModalNewNovedad] = useState(false);

  const { userLevel } = useAuth();

  const abrirModal = () => {
    setModalNewNovedad(true)
  };
  const cerarModal = () => {
    setModalNewNovedad(false)
    obtenerNovedades();
  };

  //URL estatica, luego cambiar por variable de entorno
  const URL = 'http://localhost:8080/novedades/'

  // Estado para almacenar la lista de Novedad
  const [novedad, setNovedad] = useState([])

  //------------------------------------------------------
  // 1.3 Relacion al Filtrado - Inicio - Benjamin Orellana
  //------------------------------------------------------
  const [search, setSearch] = useState("")

  //Funcion de busqueda, en el cuadro
  const searcher = (e) => {
    setSearch(e.target.value);
  }

  let results = []

  if (!search) {
    results = novedad
  } else {
    results = novedad.filter((dato) => {
      const nameMatch = dato.sede.toLowerCase().includes(search.toLowerCase())

      return (
        nameMatch
      )
    })
  }

  //------------------------------------------------------
  // 1.3 Relacion al Filtrado - Final - Benjamin Orellana
  //------------------------------------------------------

  useEffect(() => {
    // utilizamos get para obtenerNovedad los datos contenidos en la url
    axios.get(URL)
      .then((res) => {
        setNovedad(res.data);
        obtenerNovedades();
      })
  }, [])

  // Función para obtener todos las novedades desde la API
  const obtenerNovedades = async () => {
    try {
      const response = await axios.get(URL);
      setNovedad(response.data);
    } catch (error) {
      console.log('Error al obtener las novedades:', error);
    }
  }

  const handleEliminarNovedad = async id => {
    const confirmacion = window.confirm('¿Seguro que desea eliminar?');
    if (confirmacion) {
      try {
        const url = `${URL}${id}`;
        const respuesta = await fetch(url, {
          method: 'DELETE'
        });
        await respuesta.json();

        // Filtrar las novedades
        const arraynovedad = novedad.filter((novedad) => novedad.id !== id);
        setNovedad(arraynovedad);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const obtenerNovedad = async (id) => {
    try {

      const url = `${URL}${id}`

      console.log(url)

      const respuesta = await fetch(url)

      const resultado = await respuesta.json()

      setNovedad(resultado)


    } catch (error) {
      console.log(error)
    }
  }

  // Función para ordenar los novedads de forma decreciente basado en el id
  const ordenarNovedadDecreciente = (novedads) => {
    return [...novedads].sort((a, b) => b.id - a.id);
  };

  // Llamada a la función para obtener los novedads ordenados de forma decreciente
  const sortednovedad = ordenarNovedadDecreciente(results);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const records = sortednovedad.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(sortednovedad.length / itemsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  function prevPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
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
            <Link to="/dashboard">
              <button className="py-2 px-5 bg-[#fc4b08] rounded-lg text-sm text-white hover:bg-orange-500">
                Volver
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <h1 className="pb-5">
              Listado de Novedades: &nbsp;
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
              placeholder="Buscar novedades"
              className="border rounded-sm"
            />
          </form>
          {/* formulario de busqueda */}

          {(userLevel === 'admin' || userLevel === 'administrador') && (
            <div className="flex justify-center pb-10">
              <Link to="#">
                <button
                  onClick={abrirModal}
                  className="bg-[#58b35e] hover:bg-[#4e8a52] text-white py-2 px-4 rounded transition-colors duration-100 z-10"
                >
                  Nueva Novedad
                </button>
              </Link>
            </div>
          )}

          {Object.keys(results).length === 0 ? (
            <p className="text-center pb-10">
              La novedad NO Existe ||{' '}
              <span className="text-span"> Novedad: {results.length}</span>
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto">
                {records.map((novedad) => (
                  <div
                    key={novedad.id}
                    className="border border-gray-300 p-4 rounded-lg"
                  >
                    <h2 className="text-xl font-semibold">{novedad.sede}</h2>
                    <p className="text-gray-600 mb-2">{novedad.user}</p>
                    <p className="text-gray-600 mb-2">
                      {formatearFecha(novedad.vencimiento)}
                    </p>
                    <p className="text-gray-600 mb-4 overflow-y-auto max-h-[100] h-[100px]">
                      {novedad.mensaje}
                    </p>
                    <div className="flex justify-end space-x-4">
                      {(userLevel === 'admin' ||
                        userLevel === 'administrador') && (
                        <div>
                          <button
                            onClick={() => handleEliminarNovedad(novedad.id)}
                            className="py-2 px-4 mr-3 bg-red-500 text-white rounded-md hover:bg-red-600"
                          >
                            Eliminar
                          </button>
                          <button
                            // onClicsek={() => handleEditarNovedad(novedad.id)}
                            className="py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                          >
                            Editar
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <nav className="flex justify-center items-center my-10">
                <ul className="pagination">
                  <li className="page-item">
                    <a href="#" className="page-link" onClick={prevPage}>
                      Prev
                    </a>
                  </li>
                  {numbers.map((number, index) => (
                    <li
                      className={`page-item ${
                        currentPage === number ? 'active' : ''
                      }`}
                      key={index}
                    >
                      <a
                        href="#"
                        className="page-link"
                        onClick={() => changeCPage(number)}
                      >
                        {number}
                      </a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a href="#" className="page-link" onClick={nextPage}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </>
          )}
          {/* Modal para abrir formulario de clase gratis */}
          <FormAltaNovedad isOpen={modalNewNovedad} onClose={cerarModal} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NovedadGet