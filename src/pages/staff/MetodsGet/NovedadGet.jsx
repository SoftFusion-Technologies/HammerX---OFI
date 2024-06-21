import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { formatearFecha } from '../../../Helpers';
import { Link } from 'react-router-dom';
import NavbarStaff from '../NavbarStaff';
import '../../../styles/MetodsGet/Tabla.css';
import "../../../styles/staff/background.css";
import Footer from '../../../components/footer/Footer';
import FormAltaNovedad from '../../../components/Forms/FormAltaNovedad';
import { useAuth } from '../../../AuthContext';

const NovedadGet = () => {
  const [modalNewNovedad, setModalNewNovedad] = useState(false);
  const { userLevel } = useAuth();
  const [search, setSearch] = useState("");
  const [novedad, setNovedad] = useState([]);
  const URL = 'http://localhost:8080/novedades/';

  useEffect(() => {
    obtenerNovedades();
  }, []);

  const abrirModal = () => {
    setModalNewNovedad(true);
  };

  const cerarModal = () => {
    setModalNewNovedad(false);
    obtenerNovedades();
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const obtenerNovedades = async () => {
    try {
      const response = await axios.get(URL);
      setNovedad(response.data);
    } catch (error) {
      console.log('Error al obtener las novedades:', error);
    }
  };

  const handleEliminarNovedad = async id => {
    const confirmacion = window.confirm('¿Seguro que desea eliminar?');
    if (confirmacion) {
      try {
        const url = `${URL}${id}`;
        await fetch(url, { method: 'DELETE' });
        const arraynovedad = novedad.filter((novedad) => novedad.id !== id);
        setNovedad(arraynovedad);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const results = !search ? novedad : novedad.filter((dato) => {
    return dato.sede.toLowerCase().includes(search.toLowerCase());
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const records = results.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(results.length / itemsPerPage);
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
          <form className="flex justify-center pb-5">
            <input
              value={search}
              onChange={searcher}
              type="text"
              placeholder="Buscar novedades"
              className="border rounded-sm"
            />
          </form>

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
                  <div key={novedad.id} className="border border-gray-300 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">{novedad.sede}</h2>
                    <p className="text-gray-600 mb-2">{novedad.titulo}</p>
                    <p className="text-gray-600 mb-2">
                      {novedad.novedadUsers && novedad.novedadUsers.length > 0
                        ? novedad.novedadUsers.map((novedadUser) => novedadUser.user.name).join(', ')
                        : 'No users assigned'}
                    </p>
                    <p className="text-gray-600 mb-2">
                      {formatearFecha(novedad.vencimiento)}
                    </p>
                    <p className="text-gray-600 mb-4 overflow-y-auto max-h-[100] h-[100px]">
                      {novedad.mensaje}
                    </p>
                    <div className="flex justify-end space-x-4">
                      {(userLevel === 'admin' || userLevel === 'administrador') && (
                        <div>
                          <button
                            onClick={() => handleEliminarNovedad(novedad.id)}
                            className="py-2 px-4 mr-3 bg-red-500 text-white rounded-md hover:bg-red-600"
                          >
                            Eliminar
                          </button>
                          <button
                            // onClick={() => handleEditarNovedad(novedad.id)}
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
                    <li className={`page-item ${currentPage === number ? 'active' : ''}`} key={index}>
                      <a href="#" className="page-link" onClick={() => changeCPage(number)}>
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
          <FormAltaNovedad isOpen={modalNewNovedad} onClose={cerarModal} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NovedadGet;
