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
      navigate("/login");
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
          <FloatingLabel controlId="Username" label="Username" className="mb-3">
            <Form.Control
              type="text"
              placeholder="John"
              name="username"
              onChange={handleChange}
            />
          </FloatingLabel>
         
        </div>

        <div className="input-container">
          <FloatingLabel controlId="Password" label="Password" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Doe"
              name="password"
              onChange={handleChange}
            />
          </FloatingLabel>
        </div>

        <div className="input-container">
          <FloatingLabel controlId="Email" label="Email" className="mb-3">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              onChange={handleChange}
            />
          </FloatingLabel>
        </div>

        <div className="input-container">
          <FloatingLabel
            controlId="phone"
            label="Phone number"
            className="mb-3 password-input"
          >
            <Form.Control
              type="text"
              placeholder="1234567890"
              name="phone"
              onChange={handleChange}
            />
          </FloatingLabel>
        </div>

        <button className="button-register" type="submit">
        Regístrate
        </button>

      </Form>
    </main>
  );
};

