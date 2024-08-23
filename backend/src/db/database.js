// Requerimos mysql.
import { createConnection } from "mysql2/promise";

// Creamos una funcion para realizar la conexion a la bd.
const connectDB = async () => {
  try {
    return await createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "ZenPath",
    });
  } catch (error) {
    console.log(error);
  }
};

// Exportamos la funcion para realizar la conexion desde cualquier archivo.
export { connectDB };
