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
import React, { useEffect, useState } from 'react'
import { formatearFecha } from '../../Helpers'
import axios from 'axios';
import '../../styles/MetodsGet/Tabla.css'

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
        <div id="main-container">
            {/* notificacion */}
            <div className="notification">
                <p>Bienvenido, Benja! 🤗</p>
                <span className="progress"></span>
            </div>

            <h1 className="titulo">
                Listado de personClasss :{' '}
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
                    El personClass NO Existe ||{' '}
                    <span className="text-span"> personClass: {results.length}</span>
                </p>
            ) : (
                <>
                    <table>
                        <thead className="table-primary text-white">
                            <tr key={personClass.id}>
                                    <th>ID</th>
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
                                    <td>
                                        <button
                                            onClick={() => handleEliminarPersonClass(personClass.id)}
                                            type="button"
                                            className="btn btn-danger p-3 bg-red-600 text-white boton"
                                        >
                                            Eliminar
                                        </button>
                                        <button
                                            onClick={() => contactarpersonClass(personClass.celular)}
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

export default FreeClassGet