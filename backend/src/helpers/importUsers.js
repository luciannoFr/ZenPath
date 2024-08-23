import fs from 'fs';
import mysql from 'mysql2/promise'; // Usamos la versión promisificada para trabajar con async/await

// Configuración de la conexión a la base de datos
const connectionConfig = {
  host: 'localhost',
  user: 'root', // Cambia esto por tu usuario de MariaDB en XAMPP
  password: '', // Cambia esto por tu contraseña de MariaDB en XAMPP
  database: 'ZenPath',
};

// Lee el archivo SQL
const sqlFile = 'users.sql';

const importData = async () => {
  try {
    // Lee el contenido del archivo SQL
    const sql = fs.readFileSync(sqlFile, 'utf8');
    console.log('Contenido del archivo SQL:', sql); // Mensaje de depuración

    // Crea la conexión a la base de datos
    const connection = await mysql.createConnection(connectionConfig);
    console.log('Conectado a la base de datos.');

    // Ejecuta el archivo SQL con INSERT IGNORE para manejar duplicados
    await connection.query(sql);
    console.log('Datos insertados correctamente.');

    // Cierra la conexión
    await connection.end();
    console.log('Conexión cerrada.');
  } catch (error) {
    console.error('Error al importar datos:', error);
  }
};

// Ejecuta la función
importData();
