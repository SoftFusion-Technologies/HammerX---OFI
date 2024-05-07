/*
 * Programador: Benjamin Orellana
 * Fecha Cración: 01 / 04 / 2024
 * Versión: 1.0
 *
 * Descripción:
 * Este archivo (UserGet.jsx) es el componente el cual renderiza los datos de los usuarios
 * Estos datos llegan cuando se da de alta un nuevo usuario
 *
 * Tema: Configuración
 * Capa: Frontend
 * Contacto: benjamin.orellanaof@gmail.com || 3863531891
 */
import React, { useEffect, useState } from 'react'
import NavbarStaff from './NavbarStaff';
import axios from 'axios';
import '../../styles/MetodsGet/Tabla.css'
import "../../styles/staff/background.css";
import { Link } from 'react-router-dom';

// Componente funcional que maneja la lógica relacionada con los Users
const UserGet = () => {

  //URL estatica, luego cambiar por variable de entorno
  const URL = 'http://localhost:8080/users/'

  // Estado para almacenar la lista de users
  const [users, setUsers] = useState([])

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
    results = users
  } else {
    results = users.filter((dato) => {
      const nameMatch = dato.name.toLowerCase().includes(search)
      const emailMatch = dato.email.toLowerCase().includes(search)
      const levelMatch = dato.level.toLowerCase().includes(search)
      const idMatch = dato.id.toString().toLowerCase().includes(search); // Convertimos el ID a cadena y luego a minúsculas antes de la comparación
      return nameMatch || emailMatch || levelMatch || idMatch
    })
  }

  //------------------------------------------------------
  // 1.3 Relacion al Filtrado - Final - Benjamin Orellana
  //------------------------------------------------------

  useEffect(() => {
    // utilizamos get para obtenerUsuarios los datos contenidos en la url
    axios.get(URL)
      .then((res) => {
        setUsers(res.data);
        obtenerUsers();
      })
  }, [])

  // Función para obtener todos los usuarios desde la API
  const obtenerUsers = async () => {
    try {
      const response = await axios.get(URL);
      setUsers(response.data);
    } catch (error) {
      console.log('Error al obtener los usuarios:', error);
    }
  }

  const handleEliminarUser = async id => {
    try {
      const url = `${URL}${id}`
      const respuesta = await fetch(url, {
        method: 'DELETE'
      })
      await respuesta.json()
      const arrayUsers = users.filter(user => user.id !== id)

      setUsers(arrayUsers)
    }
    catch (error) {
      console.log(error)
    }
  }

  const obtenerUser = async (id) => {
    try {

      const url = `${URL}${id}`

      console.log(url)

      const respuesta = await fetch(url)

      const resultado = await respuesta.json()

      setUsers(resultado)


    } catch (error) {
      console.log(error)
    }
  }

  // Función para ordenar los usuarios de forma creciente basado en el id
  const ordenarUsersCreciente = (users) => {
    return [...users].sort((a, b) => a.id - b.id)
  };

  // Llamada a la función para obtener los usuarios ordenados de forma creciente
  const sortedUsers = ordenarUsersCreciente(results)

  return (
    <>
      <NavbarStaff />
      <div className='dashboardbg h-contain pt-10 pb-10'>
        <div className='bg-white rounded-lg w-11/12 mx-auto'>
            <div className='pl-5 pt-5'>
              <Link to="/staff">
                <button className='py-2 px-5 bg-[#fc4b08] rounded-lg text-sm text-white hover:bg-orange-500'>
                  Volver
                </button>
              </Link>
            </div>
            <div className='flex justify-center'>
              <h1 className="pb-5">
                Listado de Usuarios : &nbsp;
                <span className="text-center">
                  Cantidad de registros : {results.length}
                </span>
              </h1>
            </div>


          {/* formulario de busqueda */}
          <form className="flex justify-center pb-5">
            <input
              value={search}
              onChange={searcher}
              type="text"
              placeholder="Buscar usuarios"
              className="border rounded-sm"
            />
          </form>
          {/* formulario de busqueda */}


          {Object.keys(results).length === 0 ? (
            <p className="text-center pb-10">
              El Usuario NO Existe ||{' '}
              <span className="text-span"> Usuario: {results.length}</span>
            </p>
          ) : (
            <>
              <table className='w-11/12 mx-auto p'>
                <thead className="text-white bg-[#fc4b08] ">
                  <tr key={users.id}>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Sede</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedUsers.map((user) => (
                    <tr key={user.id}>
                      <td onClick={() => obtenerUser(user.id)}>
                        {user.id}
                      </td>
                      <td onClick={() => obtenerUser(user.id)}>
                        {user.name}
                      </td>
                      <td onClick={() => obtenerUser(user.id)}>
                        {user.email}
                      </td>
                      <td onClick={() => obtenerUser(user.id)}>
                        {user.level}
                      </td>
                      <td onClick={() => obtenerUser(user.id)}>
                        {user.sede}
                      </td>
                      {/* ACCIONES */}
                      <td>
                        <button
                          onClick={() => handleEliminarUser(user.id)}
                          type="button"
                          className="py-2 px-4 my-1 bg-red-500 text-white rounded-md"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <hr className='mt-10' />
              </table>
            </>
          )}

        </div>
        {/* notificacion
      <div className="notification">
        <p>Bienvenido! 🤗</p>
        <span className="progress"></span>
      </div> */}

      </div>
    </>
  )
}

export default UserGet