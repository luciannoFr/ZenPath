import { useContext, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import { userType } from "../../context/userTypes";
import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  const { stateDispatch } = useContext(UserContext);

  const [form, setForm] = useState({
    usuario: "",
    contrasenia: "",
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const peticion = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json",
      },
    });

    const response = await peticion.json();

    if (peticion.ok) {
      stateDispatch({
        type: userType.login,
        token: response.token,
        usuario: form.usuario,
      });
    }

    alert(response.msg);
  };

  return (
    <main className="login-container">
      <div className="blur-background"></div>

      <Form className="login-form" onSubmit={handleSubmit}>
      <div className="login-header">
      <img
            src="./public/circulo-de-usuario.svg"
            alt="User Icon"
          />

        <h2 className="login-title">Login</h2>
        
      </div>
        <div className="input-container">
          <FloatingLabel
            controlId="usuario"
            label="Nombre de Usuario"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="example123"
              name="usuario"
              onChange={handleChange}
            />
          </FloatingLabel>
          <img
            src="./public/usuario.svg"
            alt="User Icon"
            className="input-icon"
          />
        </div>

        <div className="input-container">
          <FloatingLabel
            controlId="contrasenia"
            label="Contraseña"
            className="mb-3 password-input"
          >
            <Form.Control
              type="password"
              placeholder="name12312"
              name="contrasenia"
              onChange={handleChange}
            />
          </FloatingLabel>
          <img
            src="./public/password.svg"
            alt="Password Icon"
            className="input-icon"
          />
        </div>

        <button className="button-login" type="submit">
          Iniciar Sesión
        </button>
        <button className="button-login" type="submit">
          <Link className="Register" to={"/register"}>Regístrate</Link>
        </button>
      </Form>
    </main>
  );
};
