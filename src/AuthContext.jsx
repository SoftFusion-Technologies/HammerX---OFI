import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [userName, setUserName] = useState("");

  const login = (token, username) => { // Ajusta la función login para aceptar el nombre de usuario
    setAuthToken(token);
    setUserName(username); // Establece el nombre de usuario
    localStorage.setItem('authToken', token);
    localStorage.setItem('userName', username); // Guarda el nombre de usuario en el almacenamiento local
  };

  const logout = () => {
    setAuthToken(null);
    setUserName(""); // Limpia el nombre de usuario al cerrar sesión
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
  };

  return (
    <AuthContext.Provider value={{ authToken, userName, login, logout }}> {/* Pasa el nombre de usuario al contexto */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
