/*
 * Programador: Benjamin Orellana
 * Fecha Cración: 01 / 04 / 2024
 * Versión: 1.0
 *
 * Descripción:
 * Este archivo (PostulanteGet.jsx) es el componente el cual renderiza los datos de los postulantes
 * Estos datos llegan cuando se completa el formulario de Quiero trabajar con ustedes
 *
 * Tema: Configuración
 * Capa: Frontend
 * Contacto: benjamin.orellanaof@gmail.com || 3863531891
 */
import React, { useEffect, useState, useRef } from 'react'
import { formatearFecha } from '../../Helpers'
import axios from 'axios';
import '../../styles/MetodsGet/Tabla.css'

// Componente funcional que maneja la lógica relacionada con los postulantes
const PostulanteGet = () => {

  // Estado para almacenar la lista de postulantes
  const [postulantes, setPostulantes] = useState([]);

  // Estado para almacenar el término de búsqueda
  const [search, setSearch] = useState("")

  //URL estatica, luego cambiar por variable de entorno
  const URL = 'http://localhost:8080/postulante/'


  useEffect(() => {
    // utilizamos get para obtenerPostulante los datos contenidos en la url
    axios.get(URL)
      .then((res) => {
        setPostulantes(res.data);
        obtenerPostulantes();
      })
  }, []);

  // Función para obtener todos los postulantes desde la API
  const obtenerPostulantes = async () => {
    try {
      const response = await axios.get(URL);
      setPostulantes(response.data);
    } catch (error) {
      console.log('Error al obtener los postulantes:', error);
    }
  };


  const handleEliminarPostulante = async id => {
    try {
      const url = `${URL}${id}`
      const respuesta = await fetch(url, {
        method: 'DELETE'
      })
      await respuesta.json()
      const arrayPostulantes = postulantes.filter(postulante => postulante.id !== id)

      setPostulantes(arrayPostulantes)
    }
    catch (error) {
      console.log(error)
    }
  }

  const obtenerPostulante = async (id) => {
    try {

      const url = `${URL}${id}`

      console.log(url)

      const respuesta = await fetch(url)

      const resultado = await respuesta.json()

      setPostulantes(resultado)


    } catch (error) {
      console.log(error)
    }
  }

  const contactarPostulante = (celular) => {
    const link = `https://api.whatsapp.com/send/?phone=%2B549${celular}&text&type=phone_number&app_absent=0`;

    window.open(`${link}`, '_blank');
  };

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  let results = []

  if (!search) {
    results = postulantes

  } else if (search) {
    results = postulantes.filter((dato) => {
      const nameMatch = dato.name.toLowerCase().includes(search.toLowerCase());
      const sexoMatch = dato.sexo.toLowerCase().includes(search.toLowerCase());
      const emailMatch = dato.email.toLowerCase().includes(search.toLowerCase());
      const puestoMatch = dato.puesto.toLowerCase().includes(search.toLowerCase());
      const sedeMatch = dato.sede.toLowerCase().includes(search.toLowerCase());

      return nameMatch || sexoMatch || emailMatch || puestoMatch || sedeMatch; // Agrega otras condiciones aquí
    });
  }

  // Función para ordenar los postulantes de forma decreciente basado en el id
  const ordenarPostulantesDecreciente = (postulantes) => {
    return [...postulantes].sort((a, b) => b.id - a.id);
  };

  // Llamada a la función para obtener los postulantes ordenados de forma decreciente
  const sortedPostulantes = ordenarPostulantesDecreciente(results);

  return (
    <div id="main-container">
      {/* notificacion */}
      <div className="notification">
        <p>Bienvenido, Benja! 🤗</p>
        <span className="progress"></span>
      </div>

      <h1 className="titulo">
        Listado de Postulantes :{' '}
        <span className="text-center textoP">
          Cantidad de registros : {results.length}
        </span>
      </h1>

      <a id="a" className="text-decoration-none" target="_blank"></a>

      {/* formulario de busqueda */}
      <form className="search">
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Buscar Clientes mediante el NOMBRE"
          className="input-form"
        />
        <i className="button-form" onClick={searcher}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </i>
      </form>

      {Object.keys(results).length === 0 ? (
        <p className="text-center mt-12 font-mono parrafo">
          El Postulante NO Existe ||{' '}
          <span className="text-span"> Postulante: {results.length}</span>
        </p>
      ) : (
        <>
          <table>
            <thead className="table-primary text-white">
              <tr key={postulantes.id}>
                <th>ID</th>
                <th>Nombre</th>
                <th>Sexo</th>
                <th>Puesto</th>
                <th>sede</th>
                <th>Valoración</th>
                <th>Postulación</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {sortedPostulantes.map((postulante) => (
                <tr key={postulante.id}>
                  <td onClick={() => obtenerPostulante(postulante.id)}>
                    {postulante.id}
                  </td>
                  <td onClick={() => obtenerPostulante(postulante.id)}>
                    {postulante.name}
                  </td>
                  <td onClick={() => obtenerPostulante(postulante.id)}>
                    {postulante.sexo}
                  </td>
                  <td onClick={() => obtenerPostulante(postulante.id)}>
                    {postulante.puesto}
                  </td>
                  <td onClick={() => obtenerPostulante(postulante.id)}>
                    {postulante.sede}
                  </td>
                  <td onClick={() => obtenerPostulante(postulante.id)}>
                    {postulante.valoracion === "" || postulante.valoracion === null
                      ? 'El postulante no tiene ninguna valoración'
                      : postulante.valoracion}
                  </td>
                  <td onClick={() => obtenerPostulante(postulante.id)}>
                    {formatearFecha(postulante.created_at)}
                  </td>
                  {/* ACCIONES */}
                  <td>
                    <button
                      onClick={() => handleEliminarPostulante(postulante.id)}
                      type="button"
                      className="btn btn-danger p-3 bg-red-600 text-white boton"
                    >
                      Eliminar
                    </button>
                    <button
                      onClick={() => contactarPostulante(postulante.celular)}
                      type="button"
                      className="btn btn-info p-3 bg-blue-600 text-white boton"
                    >
                      Contactar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>  
  )
}

export default PostulanteGet