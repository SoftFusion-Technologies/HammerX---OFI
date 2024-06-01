import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  // Definir estados locales para el token de autenticación y el nombre de usuario
  const [authToken, setAuthToken] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Obtener el token y el nombre de usuario desde el localStorage
    const token = localStorage.getItem('authToken');
    const username = localStorage.getItem('userName');
    // Si hay un token en el localStorage, establecerlo en el estado local
    if (token) {
      setAuthToken(token);
    }
    // Si hay un nombre de usuario en el localStorage, establecerlo en el estado local
    if (username) {
      setUserName(username);
    }
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  const login = (token, username) => {
    // Establecer el token y el nombre de usuario en el estado local
    setAuthToken(token);
    setUserName(username);
    // Guardar el token y el nombre de usuario en el localStorage
    localStorage.setItem('authToken', token);
    localStorage.setItem('userName', username);
  };

  const logout = () => {
    // Limpiar el token y el nombre de usuario del estado local
    setAuthToken(null);
    setUserName("");
    // Remover el token y el nombre de usuario del localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
  };

  return (
    <AuthContext.Provider value={{ authToken, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
