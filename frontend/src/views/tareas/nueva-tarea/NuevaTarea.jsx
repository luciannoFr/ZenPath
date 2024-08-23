import { Form } from "react-bootstrap";
import "./nuevaTarea.css"; // Considera renombrar el archivo CSS si es necesario
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

export const NuevoVideo = () => {
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

    const req = await fetch("http://localhost:3000/videos", { // Cambiado a /videos
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        token: state.token,
      },
    });

    const res = await req.json(); // Asegúrate de esperar la conversión a JSON

    if (req.ok) {
      navigate("/videos"); // Cambiado a /videos
    } else {
      alert(res.msg);
    }
  };

  return (
    <main className="nuevo-video-container"> {/* Considera renombrar el contenedor CSS */}
      <Form onSubmit={handleSubmit}>
        <h2 className="text-center">Nuevo Video</h2>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese un título"
            name="Title" // Asegúrate de que el nombre coincide con el nombre del campo en el backend
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="url">
          <Form.Label>URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la URL del video"
            name="URL" // Asegúrate de que el nombre coincide con el nombre del campo en el backend
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una descripción"
            name="Description" // Asegúrate de que el nombre coincide con el nombre del campo en el backend
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
