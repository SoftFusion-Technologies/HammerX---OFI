import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alerta from "../Error";

const LoginForm = ({ onLogin }) => {
  const [errorModal, setErrorModal] = useState(false);

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Ingrese un correo electrónico válido")
      .required("El Correo Electrónico es Obligatorio"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La Contraseña es obligatoria"),
  });

  const handleSubmitLogin = async (values) => {
    try {
      // Realizar la solicitud al servidor para validar las credenciales del usuario
      const response = await fetch("http://localhost:8080/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values), // Envía los datos de inicio de sesión (correo electrónico y contraseña)
      });
  
      // Verificar si la respuesta es exitosa (código 200)
      if (response.ok) {
        // Supongamos que el inicio de sesión es exitoso y se recibe una respuesta del servidor
        // Aquí puedes incluir lógica adicional, como almacenar tokens de autenticación, etc.
  
        // Redirigir al usuario a la página del staff después de una respuesta exitosa
        window.location.href = "http://localhost:5173/staff";
      } else {
        // En caso de que la respuesta no sea exitosa, manejar el error
        throw new Error("Inicio de sesión fallido. Por favor, verifique sus credenciales.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario
    }
  };
  

  return (
    <div className="h-screen w-screen mt-16 fixed inset-0 flex pt-10 justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="container-inputs">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            handleSubmitLogin(values);
          }}
          validationSchema={loginSchema}
        >
          {({ errors, touched }) => (
            <div className="py-0 max-h-[500px] overflow-y-auto bg-white rounded-xl">
              <Form className="formulario max-sm:w-[300px] bg-white">
                <div className="mb-3 px-4">
                  <Field
                    id="email"
                    type="text"
                    className="mt-2 block w-full p-3 text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                    placeholder="Correo Electrónico"
                    name="email"
                  />
                  {errors.email && touched.email ? (
                    <Alerta>{errors.email}</Alerta>
                  ) : null}
                </div>

                <div className="mb-3 px-4">
                  <Field
                    id="password"
                    type="password"
                    className="mt-2 block w-full p-3 text-black formulario__input bg-slate-100 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                    placeholder="Contraseña"
                    name="password"
                  />
                  {errors.password && touched.password ? (
                    <Alerta>{errors.password}</Alerta>
                  ) : null}
                </div>

                <div className="mx-auto flex justify-center my-5">
                  <button
                    type="submit"
                    className="bg-orange-500 py-2 px-5 rounded-xl text-white font-bold hover:cursor-pointer hover:bg-[#fc4b08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100"
                  >
                    Iniciar Sesión
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
