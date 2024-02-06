import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";
const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  //! Регистрация
  const handleRegister = async (formData) => {
    try {
      await axios.post(`${API}/api/users/`, formData);
      navigate("/login");
    } catch (error) {
      console.error("Ошибка регистрации:", error.response);
      setError(true);
    }
  };
  //! Логин
  const handleLogin = async (formData, email) => {
    try {
      const res = await axios.post(`${API}/api/auth/token/login/`, formData);
      localStorage.setItem("email", email);
      navigate("/");
      setUser(email);
      navigate("/home");
    } catch (error) {
      setError(Object.values(error.response.data));
    }
  };

  const values = { handleRegister, error, handleLogin, user };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
