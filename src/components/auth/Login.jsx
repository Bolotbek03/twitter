import React, { useState } from "react";
import logo from "../../image/xLogo.jpg";
import "./Login.css";
import { useAuth } from "../../context/AuthContextProvider";

const Login = () => {
  const { handleLogin, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSave = () => {
    if (!email.trim() || !password.trim()) {
      alert("Заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("password", password);
      formData.append("email", email);
      handleLogin(formData, email);
    }
  };
  return (
    <div className="login-container">
      {/* {error ? alert({ error }) : null} */}
      <div className="logo-content">
        <img className="logo" src={logo} alt="" />
        <br />
        <h4 className="h4">Авторизация</h4>
      </div>
      <div className="input-container">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          type="text"
          placeholder="Электронная почта"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          type="password"
          placeholder="Пароль"
        />
        <button onClick={handleSave}>Вход</button>
      </div>
    </div>
  );
};

export default Login;
