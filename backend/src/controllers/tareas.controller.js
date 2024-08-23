import { connectDB } from "../db/database.js";
import { validarJWT } from "../helpers/validarJWT.js";

export const obtenerTareas = async (req, res) => {
  const connection = await connectDB();

  // Comentamos las líneas que validan el token y la autorización
  // const token = req.headers.token;
  // const usuario = await validarJWT(token);

  // if (!usuario) {
  //   return res.status(403).json({
  //     msg: "No estás autorizado para realizar esta acción",
  //   });
  // }

  try {
    // Modificamos la consulta para traer todos los videos
    const [results] = await connection.query("SELECT VideoID, Title, URL, Description, CreatedAt FROM videos");

    return res.json(results);
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
    return res.status(500).json({ msg: "Error al obtener las tareas" });
  }
};

export const obtenerTarea = async (req, res) => {
  const { id } = req.params;

  const connection = await connectDB();

  const [results] = await connection.query("SELECT * FROM TAREAS WHERE id=?", [
    id,
  ]);

  return res.json(results[0]);
};

export const crearTarea = async (req, res) => {
  const { Title, Description, link } = req.body;

  // Tomamos el token desde los headers de la peticion de la siguiente manera:
  const token = req.headers.token;

  // En caso de que no exista el token, retornamos un mensaje de error.
  if (!token) {
    return res.status(401).json({
      msg: "No estas autorizado para realizar esta acción",
    });
  } else {
    // Utilizamos el helper para validar el token.
    const usuario = await validarJWT(token);

    if (!usuario)
      return res.status(403).json({
        msg: "No estas autorizado para realizar esta accion",
      });

    const connection = await connectDB();

    // Ejecutamos la consulta de inserción.
    await connection.query(
      "INSERT INTO `videos`(`Title`, `URL`, `Description`) VALUES (?,?,?)",[Title, link ,Description]);

    // Respondemos al cliente.
    res.json({
      msg: "Tarea creada",
    });
  }
};

export const actualizarTarea = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;

  const token = req.headers.token;
  const usuario = await validarJWT(token);

  const connection = await connectDB();

  if (!usuario)
    return res.status(403).json({
      msg: "No estas autorizado para realizar esta accion",
    });

  await connection.query(
    "UPDATE TAREAS SET nombre=?, descripcion=? WHERE id=?",
    [nombre, descripcion, id]
  );

  res.json({
    msg: "Tarea actualizada",
  });
};

export const eliminarTarea = async (req, res) => {
  const { id } = req.params;

  const token = req.headers.token;
  const usuario = await validarJWT(token);

  const connection = await connectDB();

  if (!usuario)
    return res.status(403).json({
      msg: "No estas autorizado para realizar esta accion",
    });

  await connection.query("DELETE FROM TAREAS WHERE id=?", [id]);

  res.json({
    msg: "Tarea eliminada",
  });
};
