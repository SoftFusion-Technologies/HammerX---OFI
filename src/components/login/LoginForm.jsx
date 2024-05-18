import React, { useState } from "react";
import Modal from "react-modal";
import Alerta from "../Error";
import { useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";
import "../../styles/login.css";

Modal.setAppElement("#root");

const LoginForm = () => {
  // Estado para los valores del formulario
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // Hook de navegación
  const navigate = useNavigate();

  // Estado para mostrar/ocultar contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Estado para los errores de validación
  const [errors, setErrors] = useState({});

  // Estado para indicador de carga
  const [loading, setLoading] = useState(false);

  // Estado para controlar apertura/cierre del modal de error
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mensaje a mostrar en el modal de error
  const [modalMessage, setModalMessage] = useState("");

  // Función para alternar entre mostrar/ocultar contraseña
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Manejar cambios en los inputs del formulario
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values); // Validar campos
    setErrors(validationErrors); // Actualizar errores

    // Verificar si hay errores de validación
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true); // Habilitar indicador de carga

      axios
        .post("http://localhost:8080/login", values)
        .then((res) => {
          setLoading(false); // Deshabilitar indicador de carga
          if (res.data === "Success") {
            navigate("/dashboard");
          } else {
            setModalMessage("Usuario o Contraseña incorrectos");
            setIsModalOpen(true);
          }
        })
        .catch((err) => {
          setLoading(false); // Deshabilitar indicador de carga
          console.log(err);
        });
    }
  };

  return (
    <div className="h-screen w-full">
      <div className="dashboardbg h-screen w-full flex justify-between items-center mx-auto">
        <div className="py-5 bg-white rounded-xl mx-auto">
          <form
            className="w-[400px] max-w-[400px] mx-auto max-sm:w-[300px] max-sm:max-w-[300px]"
            onSubmit={handleSubmit}
          >
            <div className="m-5">
              <h1 className="font-montserrat text-[25px] font-medium tracking-wide text-center">
                Login
              </h1>
            </div>

            <div className="mb-3 px-4">
              <input
                id="email"
                type="email"
                className="mt-2 block w-full p-3 text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                placeholder="Correo Electrónico"
                name="email"
                onChange={handleInput}
              />
              {errors.email && <Alerta>{errors.email}</Alerta>}
            </div>

            <div className="mb-3 px-4">
              <div className="relative flex items-center">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="mt-2 block w-full p-3 text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  placeholder="Contraseña"
                  name="password"
                  onChange={handleInput}
                />
                {errors.password && <Alerta>{errors.password}</Alerta>}
                <button
                  className="absolute right-0 mr-4 text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
                  type="button"
                  onClick={toggleShowPassword}
                  style={{ transform: "translateY(25%)" }}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            <div className="mx-auto flex justify-center my-5">
              <button
                type="submit"
                className="bg-orange-500 py-2 px-5 rounded-xl text-white font-bold hover:cursor-pointer hover:bg-[#fc4b08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Error Modal"
        className="flex justify-center items-center h-screen"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
          <h2 className="text-lg font-semibold mb-4">Error</h2>
          <div>{modalMessage}</div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default LoginForm;
