import { useContext, useEffect, useState } from "react";
import "./tareas.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { userType } from "../../context/userTypes";

export const Tareas = () => {
  const [tareas, setTareas] = useState([]);

  const { state, stateDispatch } = useContext(UserContext);

  const logOut = () => {
    stateDispatch({
      type: userType.logOut,
    });
  };

  const getTareas = async () => {
    const req = await fetch("http://localhost:3000/tareas", {
      headers: {
        token: state.token,
      },
    });

    const res = await req.json();

    if (req.ok) {
      setTareas(res);
    } else {
      alert(res.msg);
    }
  };

  useEffect(() => {
    getTareas();
  }, []);

  return (
    <main className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h1>Tareas</h1>
        <div className="d-flex flex-row gap-2">
          <Link
            role="button"
            to={"/tareas/nueva-tarea"}
            className="btn btn-primary d-flex justify-content-center align-items-center"
          >
            Nueva Tarea
          </Link>

          <button
            className="btn btn-primary"
            type="button"
            onClick={() => logOut()}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea, i) => (
            <tr key={i}>
              <td>{tarea.nombre}</td>
              <td>{tarea.descripcion}</td>

              <td className="d-flex gap-2">
                <Link
                  to={`editar-tarea/${tarea.id}`}
                  className="btn btn-primary btn-sm"
                >
                  Editar
                </Link>
                <Link
                  to={`eliminar-tarea/${tarea.id}`}
                  className="btn btn-danger btn-sm"
                >
                  Eliminar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
