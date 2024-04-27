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
import React, { useEffect, useState } from 'react'
import { formatearFecha } from '../../Helpers'
import axios from 'axios';
import '../../styles/MetodsGet/Tabla.css'

// Componente funcional que maneja la lógica relacionada con los postulantes
const PostulanteGet = () => {

  //URL estatica, luego cambiar por variable de entorno
  const URL = 'http://localhost:8080/postulante/'

  // Estado para almacenar la lista de postulantes
  const [postulantes, setPostulantes] = useState([])

  //------------------------------------------------------
  // 1.3 Relacion al Filtrado - Inicio - Benjamin Orellana
  //------------------------------------------------------
  const [search, setSearch] = useState("")
  const [sexoFilter, setSexoFilter] = useState(null)
  const [edadFilter, setEdadFilter] = useState(null)

  const handleEdadChange = (e) => {
    setEdadFilter(e.target.value)
  }

  const handleResetEdadFilter = () => {
    setEdadFilter(null)
  }

  const handleSexoChange = (e) => {
    const selectedSexo = e.target.value;

    // Si el radio button seleccionado ya estaba seleccionado anteriormente,
    // establece sexoFilter a null para desmarcarlo
    if (sexoFilter === selectedSexo) {
      setSexoFilter(null);
    } else {
      setSexoFilter(selectedSexo);
    }
  }
  const handleResetSexoFilter = () => {
    setSexoFilter(null);
  }

  const calcularRangoEdad = (edad) => {
    if (edad >= 18 && edad <= 21) return "18-21"
    if (edad >= 21 && edad <= 23) return "21-23"
    if (edad >= 23 && edad <= 25) return "23-25"
    if (edad > 25) return ">25"
  }

  //Funcion de busqueda, en el cuadro
  const searcher = (e) => {
    setSearch(e.target.value);
  }

  let results = []

  if (!search && !sexoFilter && !edadFilter) {
    results = postulantes
  } else {
    results = postulantes.filter((dato) => {
      const nameMatch = dato.name.toLowerCase().includes(search.toLowerCase())
      const emailMatch = dato.email.toLowerCase().includes(search.toLowerCase())
      const puestoMatch = dato.puesto.toLowerCase().includes(search.toLowerCase())
      const sedeMatch = dato.sede.toLowerCase().includes(search.toLowerCase())
      const sexoMatch = !sexoFilter || dato.sexo === sexoFilter
      const edadMatch = !edadFilter || calcularRangoEdad(dato.edad) === edadFilter

      return (
        nameMatch ||
        emailMatch ||
        puestoMatch ||
        sedeMatch
      ) && sexoMatch && edadMatch
    })
  }

  //------------------------------------------------------
  // 1.3 Relacion al Filtrado - Final - Benjamin Orellana
  //------------------------------------------------------

  useEffect(() => {
    // utilizamos get para obtenerPostulante los datos contenidos en la url
    axios.get(URL)
      .then((res) => {
        setPostulantes(res.data);
        obtenerPostulantes();
      })
  }, [])

  // Función para obtener todos los postulantes desde la API
  const obtenerPostulantes = async () => {
    try {
      const response = await axios.get(URL);
      setPostulantes(response.data);
    } catch (error) {
      console.log('Error al obtener los postulantes:', error);
    }
  }

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

    window.open(`${link}`, '_blank')
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
        <p>Bienvenido! 🤗</p>
        <span className="progress"></span>
      </div>

      <h1 className="titulo">
        Listado de Postulantes :{' '}
        <span className="text-center textoP">
          Cantidad de registros : {results.length}
        </span>
      </h1>


      {/* formulario de busqueda */}
      <form className="search">
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Buscar postulantes"
          className="input-form"
        />
       
      </form>
      {/* formulario de busqueda */}

      {/* filtros por sexo */}
      <div>
        <div>
          <label>
            <input
              type="radio"
              value="masculino"
              checked={sexoFilter === "masculino"}
              onChange={handleSexoChange}
            />
            Masculino
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              value="femenino"
              checked={sexoFilter === "femenino"}
              onChange={handleSexoChange}
            />
            Femenino
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value=""
              checked={!sexoFilter}
              onChange={handleResetSexoFilter}
            />
            Limpiar sexo  
          </label>
        </div>
      </div>
      {/* filtros por sexo */}

      {/* Filtro de edad */}
      <div>
        <div>
          <label>
            <input
              type="radio"
              value="18-21"
              checked={edadFilter === "18-21"}
              onChange={handleEdadChange}
            />
            18 a 21
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="21-23"
              checked={edadFilter === "21-23"}
              onChange={handleEdadChange}
            />
            21 a 23
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="23-25"
              checked={edadFilter === "23-25"}
              onChange={handleEdadChange}
            />
            23 a 25
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value=">25"
              checked={edadFilter === ">25"}
              onChange={handleEdadChange}
            />
            Mayores a 25
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value=""
              checked={!edadFilter}
              onChange={handleResetEdadFilter}
            />
            Limpiar edad
          </label>
        </div>
      </div>
      {/* Filtro de edad */}

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
                <th>Edad</th>
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
                    {postulante.edad}
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