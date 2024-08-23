import { Link, useNavigate, useParams } from "react-router-dom";
import "./eliminarTarea.css";
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";

export const EliminarTarea = () => {
  const { id } = useParams();
  const { state } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const req = await fetch(`http://localhost:3000/tareas/${id}`, {
      method: "DELETE",
      headers: {
        token: state.token,
      },
    });

    const res = await req.json();

    if (req.ok) {
      alert(res.msg);
      navigate("/tareas");
    } else {
      alert(res.msg);
    }
  };

  return (
    <main className="eliminar-tarea-container">
      <form className="eliminar-card" onSubmit={handleSubmit}>
        <span>¿Estas seguro que quieres eliminar esta tarea?</span>
        <div className="d-flex flex-row gap-2 mt-3">
          <button type="submit" className="btn btn-danger">
            Eliminar
          </button>
          <Link to={"/tareas"} role="button" className="btn btn-secondary">
            Cancelar
          </Link>
        </div>
      </form>
    </main>
  );
};
