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

// Componente funcional que maneja la lógica relacionada con los Novedad
const NovedadGet = () => {

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
        try {
            const url = `${URL}${id}`
            const respuesta = await fetch(url, {
                method: 'DELETE'
            })
            await respuesta.json()
            const arraynovedad = novedad.filter(novedad => novedad.id !== id)

            setNovedad(arraynovedad)
        }
        catch (error) {
            console.log(error)
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
                            placeholder="Buscar novedads"
                            className="border rounded-sm"
                        />

                    </form>
                    {/* formulario de busqueda */}

                    {Object.keys(results).length === 0 ? (
                        <p className="text-center pb-10">
                            La novedad NO Existe ||{' '}
                            <span className="text-span"> Novedad: {results.length}</span>
                        </p>
                    ) : (
                        <>
                            <table className='w-11/12 mx-auto'>
                                <thead className=" bg-[#fc4b08]  text-white">
                                    <tr key={novedad.id}>
                                        {/* <th className='thid'>ID</th> */}
                                        <th>Sede</th>
                                        <th>Usuario</th>
                                        <th>Fecha</th>
                                       <th>Mensaje</th>
                                         <th>Acciones</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                        {sortednovedad.map((novedad) => (
                                        <tr key={novedad.id}>
                                            {/* <td onClick={() => obtenerNovedad(novedad.id)}>
                                                {novedad.id}
                                            </td> */}
                                            <td onClick={() => obtenerNovedad(novedad.id)}>
                                                {novedad.sede}
                                            </td>
                                            <td onClick={() => obtenerNovedad(novedad.id)}>
                                                {novedad.user}
                                            </td>
                                        
                                            <td onClick={() => obtenerNovedad(novedad.id)}>
                                                {formatearFecha(novedad.vencimiento)}
                                            </td>
                                            {/* ACCIONES */}
                                            <td className='flex gap-2'>
                                                <button
                                                    onClick={() => handleEliminarnovedad(novedad.id)}
                                                    type="button"
                                                    className="py-2 px-4 my-1 bg-red-500 text-white rounded-md hover:bg-red-600"
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
            </div>
            <Footer />
        </>
    )
}

export default NovedadGet