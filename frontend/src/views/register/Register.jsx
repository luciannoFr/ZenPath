import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    usuario: "",
    correo: "",
    contrasenia: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const req = await fetch("http://localhost:3000/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await req.json();

    if (req.ok) {
      navigate("/");
    }

    alert(res.msg);
  };

  return (
    <main className="register-container">
      <div className="blur-background"></div>

      <Form className="register-form" onSubmit={handleSubmit}>
        <div className="register-header">
          <img
            src="./public/circulo-de-usuario.svg"
            alt="User Icon"
          />
          <h2 className="register-title">Registro</h2>
          <span>Complete los datos para crear un usuario</span>
        </div>

        <div className="input-container">
          <FloatingLabel controlId="nombre" label="Nombre" className="mb-3">
            <Form.Control
              type="text"
              placeholder="John"
              name="nombre"
              onChange={handleChange}
            />
          </FloatingLabel>
         
        </div>

        <div className="input-container">
          <FloatingLabel controlId="apellido" label="Apellido" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Doe"
              name="apellido"
              onChange={handleChange}
            />
          </FloatingLabel>
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
        </div>

        <div className="input-container">
          <FloatingLabel controlId="correo" label="Correo" className="mb-3">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="correo"
              onChange={handleChange}
            />
          </FloatingLabel>
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
        </div>

        <button className="button-register" type="submit">
        <Link className="Register" to={"/login"}>Regístrate</Link>
        </button>

      </Form>
    </main>
  );
};

