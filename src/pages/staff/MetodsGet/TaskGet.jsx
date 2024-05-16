/*
 * Programador: Benjamin Orellana
 * Fecha Cración: 01 / 04 / 2024
 * Versión: 1.0
 *
 * Descripción:
 * Este archivo (TaskGet.jsx) es el componente el cual renderiza los datos de los tasks
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

// Componente funcional que maneja la lógica relacionada con los Task
const TaskGet = () => {

    //URL estatica, luego cambiar por variable de entorno
    const URL = 'http://localhost:8080/schedulertask/'

    // Estado para almacenar la lista de Task
    const [task, setTask] = useState([])

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
        results = task
    } else {
        results = task.filter((dato) => {
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
        // utilizamos get para obtenerTask los datos contenidos en la url
        axios.get(URL)
            .then((res) => {
                setTask(res.data);
                obtenerTask();
            })
    }, [])

    // Función para obtener todos las taskes desde la API
    const obtenerTasks = async () => {
        try {
            const response = await axios.get(URL);
            settask(response.data);
        } catch (error) {
            console.log('Error al obtener las tareas:', error);
        }
    }

    const handleEliminarTask = async id => {
        try {
            const url = `${URL}${id}`
            const respuesta = await fetch(url, {
                method: 'DELETE'
            })
            await respuesta.json()
            const arraytask = task.filter(task => task.id !== id)

            setTask(arraytask)
        }
        catch (error) {
            console.log(error)
        }
    }

    const obtenerTask = async (id) => {
        try {

            const url = `${URL}${id}`

            console.log(url)

            const respuesta = await fetch(url)

            const resultado = await respuesta.json()

            settask(resultado)


        } catch (error) {
            console.log(error)
        }
    }

    // Función para ordenar los tasks de forma decreciente basado en el id
    const ordenarTaskDecreciente = (task) => {
        return [...task].sort((a, b) => b.id - a.id);
    };

    // Llamada a la función para obtener los task ordenados de forma decreciente
    const sortedTask = ordenarTaskDecreciente(results);

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
                            Listado de Tareas: &nbsp;
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
                            placeholder="Buscar tasks"
                            className="border rounded-sm"
                        />

                    </form>
                    {/* formulario de busqueda */}

                    {Object.keys(results).length === 0 ? (
                        <p className="text-center pb-10">
                            La Tarea NO Existe ||{' '}
                            <span className="text-span"> Tarea: {results.length}</span>
                        </p>
                    ) : (
                        <>
                            <table className='w-11/12 mx-auto'>
                                <thead className=" bg-[#fc4b08]  text-white">
                                    <tr key={task.id}>
                                        <th className='thid'>ID</th> 
                                        <th>Tarea</th>
                                        <th>Descripcion</th>
                                        <th>Hora</th>
                                            <th>Días</th>
                                            <th>Usuario</th>
                                            <th>Estado</th>
                                        <th>Acciones</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {task.map((task) => (
                                        <tr key={task.id}>
                                            <td onClick={() => obtenerTask(task.id)}>
                                                {task.id}
                                            </td> 
                                            <td onClick={() => obtenerTask(task.id)}>
                                                {task.titulo}
                                            </td>
                                            <td onClick={() => obtenerTask(task.id)}>
                                                {task.descripcion}
                                            </td>
                                            <td onClick={() => obtenerTask(task.id)}>
                                                {task.hora}
                                            </td>
                                            <td onClick={() => obtenerTask(task.id)}>
                                                {task.dias}
                                            </td>
                                            <td onClick={() => obtenerTask(task.id)}>
                                                {task.user}
                                            </td>
                                            <td onClick={() => obtenerTask(task.id)}>
                                                {task.state}
                                            </td>
                                            
                                            {/* ACCIONES */}
                                            <td className='flex gap-2'>
                                                <button
                                                    onClick={() => handleEliminartask(task.id)}
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

export default TaskGet