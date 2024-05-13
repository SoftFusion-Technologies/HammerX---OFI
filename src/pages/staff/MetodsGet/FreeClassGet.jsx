/*
 * Programador: Benjamin Orellana
 * Fecha Cración: 01 / 04 / 2024
 * Versión: 1.0
 *
 * Descripción:
 * Este archivo (FreeClassGet.jsx) es el componente el cual renderiza los datos de los que envian para clase gratis
 * Estos datos llegan cuando se completa el formulario de Quiero probar una clase
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

const FreeClassGet = () => {

  // Estado para almacenar la lista de personas
  const [personClass, setPersonClass] = useState([]);


  // Estado para almacenar el término de búsqueda
  const [search, setSearch] = useState("")

  //URL estatica, luego cambiar por variable de entorno
  const URL = 'http://localhost:8080/testclass/'

  useEffect(() => {
    // utilizamos get para obtenerPersonas los datos contenidos en la url
    axios.get(URL)
      .then((res) => {
        setPersonClass(res.data);
        obtenerPersonsClass();
      })
  }, []);

  // Función para obtener todos los personClass desde la API
  const obtenerPersonsClass = async () => {
    try {
      const response = await axios.get(URL);
      setPersonClass(response.data);
    } catch (error) {
      console.log('Error al obtener las personas :', error);
    }
  };

  const handleEliminarPersonClass = async id => {
    try {
      const url = `${URL}${id}`
      const respuesta = await fetch(url, {
        method: 'DELETE'
      })
      await respuesta.json()
      const arrayPersonClass = personClass.filter(personClass => personClass.id !== id)

      setPersonClass(arrayPersonClass)
    }
    catch (error) {
      console.log(error)
    }
  }

  const obtenerPersonClass = async (id) => {
    try {

      const url = `${URL}${id}`

      console.log(url)

      const respuesta = await fetch(url)

      const resultado = await respuesta.json()

      setPersonClass(resultado)


    } catch (error) {
      console.log(error)
    }
  }

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  let results = []

  if (!search) {
    results = personClass

  } else if (search) {
    results = personClass.filter((dato) => {
      const nameMatch = dato.name.toLowerCase().includes(search.toLowerCase());
      const lastNameMatch = dato.last_name.toLowerCase().includes(search.toLowerCase());
      const dniMatch = dato.dni.includes(search);
      const celularMatch = dato.celular.includes(search);
      const sedeMatch = dato.sede.toLowerCase().includes(search.toLowerCase());
      const objetivoMatch = dato.objetivo.toLowerCase().includes(search.toLowerCase());

      return nameMatch || lastNameMatch || dniMatch || celularMatch || sedeMatch || objetivoMatch;
    });
  }

  // Función para ordenar los personClass de forma decreciente basado en el id
  const ordenarPersonasDecreciente = (personClass) => {
    return [...personClass].sort((a, b) => b.id - a.id);
  };

  // Llamada a la función para obtener los personClasss ordenados de forma decreciente
  const sortedpersonClass = ordenarPersonasDecreciente(results);

  return (
    <>
      <NavbarStaff />
      <div className="dashboardbg h-contain pt-10 pb-10">
        <div className='bg-white rounded-lg w-11/12 mx-auto'>
          <div className='pl-5 pt-5'>
            <Link to="/dashboard">
              <button className='py-2 px-5 bg-[#fc4b08] rounded-lg text-sm text-white hover:bg-orange-500'>
                Volver
              </button>
            </Link>
          </div>
          <div className='flex justify-center'>
            <h1 className="pb-5">
              Listado de personClasss :{' '}
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
              placeholder="Buscar Clientes mediante el NOMBRE"
              className="border rounded-sm"
            />
          </form>

          {Object.keys(results).length === 0 ? (
            <p className="text-center pb-10">
              El personClass NO Existe ||{' '}
              <span className="text-span"> personClass: {results.length}</span>
            </p>
          ) : (
            <>
              <table className='w-11/12 mx-auto'>
                <thead className="bg-[#fc4b08]  text-white">
                  <tr key={personClass.id}>
                    <th className='thid'>ID</th>
                    <th>Solicitud</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>DNI</th>
                    <th>Cel</th>
                    <th>Sede</th>
                    <th>Objetivo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedpersonClass.map((personClass) => (
                    <tr key={personClass.id}>
                      <td onClick={() => obtenerPersonClass(personClass.id)}>
                        {personClass.id}
                      </td>
                      <td onClick={() => obtenerPersonClass(personClass.id)}>
                        {formatearFecha(personClass.created_at)}
                      </td>
                      <td onClick={() => obtenerPersonClass(personClass.id)}>
                        {personClass.name}
                      </td>
                      <td onClick={() => obtenerPersonClass(personClass.id)}>
                        {personClass.last_name}
                      </td>
                      <td onClick={() => obtenerPersonClass(personClass.id)}>
                        {personClass.dni}
                      </td>
                      <td onClick={() => obtenerPersonClass(personClass.id)}>
                        {personClass.celular}
                      </td>
                      <td onClick={() => obtenerPersonClass(personClass.id)}>
                        {personClass.sede}
                      </td>

                      <td onClick={() => obtenerPersonClass(personClass.id)}>
                        {personClass.objetivo}
                      </td>

                      {/* ACCIONES */}
                      <td className='flex gap-2'>
                        <button
                          onClick={() => handleEliminarPersonClass(personClass.id)}
                          type="button"
                          className="py-2 px-4 my-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Eliminar
                        </button>
                        <button
                          onClick={() => contactarpersonClass(personClass.celular)}
                          type="button"
                          className="py-2 px-4 my-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                          Contactar
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
      </div>
      <Footer />
    </>
  )
}

export default FreeClassGet