import { useContext, useEffect, useState } from "react";
import "./tareas.css"; 
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { userType } from "../../context/userTypes";

export const Tareas = () => {
  const [videos, setVideos] = useState([]);

  const { state, stateDispatch } = useContext(UserContext);

  const logOut = () => {
    stateDispatch({
      type: userType.logOut,
    });
  };

  const getVideos = async () => {
    const req = await fetch("http://localhost:3000/tareas", {
      headers: {
        token: state.token,
      },
    });

    const res = await req.json();

    if (req.ok) {
      setVideos(res);
    } else {
      alert(res.msg);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  const getEmbedUrl = (url) => {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <main className="container">
      <div className="header">
        <h1>Videos</h1>
        <div className="actions">
          <Link to="/tareas/nueva-tarea" className="button">
            Nuevo Video
          </Link>
          <button className="button" onClick={logOut}>
            Cerrar Sesión
          </button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Video</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video, i) => (
            <tr key={i}>
              <td>{video.Title}</td>
              <td>{video.Description}</td>
              <td>
                <iframe
                  width="200"
                  height="150"
                  src={getEmbedUrl(video.URL)}
                  title={video.Title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </td>
              <td className="actions">
                <Link to={`editar-tarea/${video.VideoID}`} className="button">
                  Editar
                </Link>
                <Link to={`eliminar-tarea/${video.VideoID}`} className="button delete">
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
