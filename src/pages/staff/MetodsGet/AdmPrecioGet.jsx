/*
 * Programador: Benjamin Orellana
 * Fecha Cración: 15 / 06 / 2024
 * Versión: 1.0
 *
 * Descripción:
 * Este archivo (AdmPrecioGet.jsx) es el componente el cual renderiza los datos de la creacion de convenios
 * Estos datos llegan cuando se completa el formulario de FormAltaConve
 *
 * Tema: Configuración
 * Capa: Frontend
 * Contacto: benjamin.orellanaof@gmail.com || 3863531891
 */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { formatearFecha } from '../../../Helpers';
import { Link } from 'react-router-dom';
import NavbarStaff from '../NavbarStaff';
import '../../../styles/MetodsGet/Tabla.css';
import '../../../styles/staff/background.css';
import Footer from '../../../components/footer/Footer';
import FormAltaConve from '../../../components/Forms/FormAltaConve';
import IntegranteConveGet from './IntegranteConveGet';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';
import FormAltaPrecio from '../../../components/Forms/FormAltaPrecio';
import FormAltaIntegranteConve from '../../../components/Forms/FormAltaIntegranteConve';

const AdmPrecioGet = () => {
  // useState que controla el modal de nuevo usuario
  const [modalNewValor, setModalNewValor] = useState(false);

  //URL estatica, luego cambiar por variable de entorno
  const URL = 'http://localhost:8080/admprecio/';

  // Estado para almacenar la lista de Task
  const [valores, setValores] = useState([]);

  //------------------------------------------------------
  // 1.3 Relacion al Filtrado - Inicio - Benjamin Orellana
  //------------------------------------------------------

  let results = [];

  //------------------------------------------------------
  // 1.3 Relacion al Filtrado - Final - Benjamin Orellana
  //------------------------------------------------------

  const abrirModal = () => {
    setModalNewValor(true);
  };
  const cerarModal = () => {
    setModalNewValor(false);
    obtenerValores();
  };
  useEffect(() => {
    // utilizamos get para obtenerValores los datos contenidos en la url
    axios.get(URL).then((res) => {
      setValores(res.data);
      obtenerValores();
    });
  }, []);

  // Función para obtener todos los Valores desde la API
  const obtenerValores = async () => {
    try {
      const response = await axios.get(URL);
      setValores(response.data);
    } catch (error) {
      console.log('Error al obtener los valores:', error);
    }
  };

  const handleEliminarValor = async (id) => {
    const confirmacion = window.confirm('¿Seguro que desea eliminar?');
    if (confirmacion) {
      try {
        const url = `${URL}${id}`;
        const respuesta = await fetch(url, {
          method: 'DELETE'
        });
        await respuesta.json();
        const arrayValores = valores.filter((valores) => valores.id !== id);

        setValores(arrayValores);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const obtenerValor = async (id) => {
    try {
      const url = `${URL}${id}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      // setSelectedUser(resultado);
      // setModalUserDetails(true); // Abre el modal de detalles del usuario
    } catch (error) {
      console.log('Error al obtener el usuario:', error);
    }
  };

  // Función para ordenar los usuarios de forma creciente basado en el id
  const ordenarValoresCreciente = (valores) => {
    return [...valores].sort((a, b) => a.id - b.id);
  };

  // Llamada a la función para obtener los usuarios ordenados de forma creciente
  const sortedvalores = ordenarValoresCreciente(results);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const records = sortedvalores.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(sortedvalores.length / itemsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

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
          {/* <div className="flex justify-center">
            <h1 className="pb-5">
              Listado de Usuarios: &nbsp;
              <span className="text-center">
                Cantidad de registros: {results.length}
              </span>
            </h1>
          </div> */}

          {/* formulario de busqueda */}
          {/* <form className="flex justify-center pb-5">
            <input
              value={search}
              onChange={searcher}
              type="text"
              placeholder="Buscar usuarios"
              className="border rounded-sm"
            />
          </form> */}
          {/* formulario de busqueda */}

          <div className="flex justify-center pb-10">
            <Link to="#">
              <button
                onClick={abrirModal}
                className="bg-[#58b35e] hover:bg-[#4e8a52] text-white py-2 px-4 rounded transition-colors duration-100 z-10"
              >
                Nuevos Valores
              </button>
            </Link>
          </div>

          <>
            <table className="w-11/12 mx-auto">
              <thead className="text-white bg-[#fc4b08] ">
                <tr key={valores.id}>
                  <th>ID</th>
                  <th>Precio</th>
                  <th>Descuento</th>
                  <th>Precio Final</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {valores.map((valores) => (
                  <tr key={valores.id}>
                    <td>{valores.id}</td>
                    <td>{valores.precio}</td>
                    <td>{valores.descuento}</td>
                    <td>{valores.preciofinal}</td>
                    {/* ACCIONES */}
                    <td>
                      <button
                        onClick={() => handleEliminarValor(valores.id)}
                        type="button"
                        className="py-2 px-4 my-1 bg-red-500 text-white rounded-md"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
          {/* Modal para abrir formulario de clase gratis */}
          <FormAltaPrecio isOpen={modalNewValor} onClose={cerarModal} />

        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdmPrecioGet;
