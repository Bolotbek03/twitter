import React, { useState } from "react";
import "./Register.css";
import logo from "../../image/xLogo.jpg";
import { useAuth } from "../../context/AuthContextProvider";
const Register = () => {
  const { handleRegister, error } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSave = () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !userName.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      alert("Заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("username", userName);
      formData.append("email", email);
      formData.append("password", password);
      handleRegister(formData);
    }
  };
  return (
    <div className="register-container">
      <div className="logoand">
        <img className="logo" src={logo} alt="" />
        <br />
        <h4>Create account</h4>
      </div>
      <div className="input-container">
        <input
          onChange={(e) => setFirstName(e.target.value)}
          className="input-field"
          type="text"
          placeholder="Имя"
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          className="input-field"
          type="text"
          placeholder="Фамилия"
        />
        <input
          onChange={(e) => setUserName(e.target.value)}
          className="input-field"
          type="text"
          placeholder="Никнейм"
        />
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
        <button onClick={handleSave}>Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default Register;
