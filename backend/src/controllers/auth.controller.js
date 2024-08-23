import { connectDB } from "../db/database.js";
import bcrypt from "bcrypt";
import { generarJWT } from "../helpers/generarJWT.js";

export const register = async (req, res) => {
  const { username, password, email, phone } = req.body;

  const connection = await connectDB();

  // Encriptar la contraseña
  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql =
    "INSERT INTO users (username, passwordHash, email, number_cell) VALUES (?,?,?,?)";

  try {
    await connection.query(sql, [username, hashedPassword, email, phone]);
    res.json({ msg: "Registrado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al registrar el usuario" });
  }
};


export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const connection = await connectDB();

    // Buscamos el usuario en la base de datos.
    const sql = "SELECT * FROM users WHERE Username=? LIMIT 1";
    const [results] = await connection.query(sql, [username]);

    // Imprimir los resultados de la consulta para depuración.
    console.log("Resultados de la consulta:", results);

    // Verificamos si se encontró el usuario.
    if (!results[0]) {
      return res.status(400).json({ msg: "El username no existe" });
    }

    // Extraemos el hash de la contraseña.
    const passwordHash = results[0].PasswordHash;

    // Verificamos que el hash de la contraseña esté presente.
    if (!passwordHash) {
      return res.status(500).json({ msg: "Error al obtener el hash de la contraseña" });
    }

    // Imprime la contraseña ingresada y el hash almacenado para verificar.
    console.log("Contraseña ingresada:", password);
    console.log("Hash almacenado:", passwordHash);

    // Comparamos las contraseñas.
    const validarPassword = bcrypt.compareSync(password, passwordHash);

    // En caso de que no coincidan, retornamos un error.
    if (!validarPassword) {
      return res.status(401).json({ msg: "El usuario o contraseña no coinciden" });
    }

    // Generamos el token con el id del usuario.
    const token = await generarJWT({ id: results[0].UserID });

    // Retornamos el token con un mensaje al cliente.
    return res.json({ msg: "Inicio de sesión exitoso", token });

  } catch (error) {
    console.error("Error en el login:", error);
    return res.status(500).json({ msg: "Error en el servidor" });
  }
};