import { FloatingLabel, Form } from "react-bootstrap";
import "./register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

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
    <main className="register-container ">
      <div className="register-header">
        <h2 className="register-title">Registro</h2>
        <span>Complete los datos para crear un usuario</span>
      </div>
      <Form className="register-form" onSubmit={handleSubmit}>
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

        <FloatingLabel controlId="correo" label="Correo" className="mb-3">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="correo"
            onChange={handleChange}
          />
        </FloatingLabel>

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
        <FloatingLabel
          controlId="confirmarContrasenia"
          label="Confirmar Contraseña"
          className="mb-3 password-input"
        >

        </FloatingLabel>
        <FloatingLabel type="number" controlId="number_cell"
        label="Número de Celular"
        className="mb-3">

        </FloatingLabel>

        <button className="button-register" type="submit">
          Registrarse
        </button>
      </Form>
    </main>
  );
};
