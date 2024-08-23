import { Form } from "react-bootstrap";
import "./nuevaTarea.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

export const NuevaTarea = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const { state } = useContext(UserContext);

  const handleChange = ({ target }) => {
    const { value, name } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const req = await fetch("http://localhost:3000/tareas", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        token: state.token,
      },
    });

    const res = req.json();

    if (req.ok) {
      navigate("/tareas");
    } else {
      alert(res.msg);
    }
  };
  return (
    <main className="nueva-tarea-container">
      <Form onSubmit={handleSubmit}>
        <h2 className="text-center">Nueva Tarea</h2>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese un nombre"
            name="nombre"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcion">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una descripcion"
            name="descripcion"
            onChange={handleChange}
          />
        </Form.Group>

        <button className="btn btn-primary w-100" type="submit">
          Crear
        </button>
      </Form>
    </main>
  );
};
