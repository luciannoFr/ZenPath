import { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

export const EditarTarea = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
  });

  const { state } = useContext(UserContext);

  const handleChange = ({ target }) => {
    const { value, name } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const getTarea = async () => {
    const req = await fetch(`http://localhost:3000/tareas/${id}`, {
      headers: {
        token: state.token,
      },
    });

    const res = await req.json();

    if (req.ok) {
      setForm(res);
    } else {
      alert(res.msg);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const req = await fetch(`http://localhost:3000/tareas/${id}`, {
      method: "PUT",
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

  useEffect(() => {
    getTarea();
  }, []);

  return (
    <main className="nueva-tarea-container">
      <Form onSubmit={handleSubmit}>
        <h2 className="text-center">Editar Tarea</h2>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese un nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcion">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una descripcion"
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
          />
        </Form.Group>

        <button className="btn btn-primary w-100" type="submit">
          Actualizar
        </button>
      </Form>
    </main>
  );
};
