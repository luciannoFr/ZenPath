import { register, login } from '../controllers/auth.controller.js';

//requerimos el metodo router de express.
import { Router } from 'express';

// Inicializamos el metodo.
const userRouter = Router();

// Creamos una ruta /register con el metodo 'POST' ya que recibiremos datos desde el cliente a traves de este metodo.
userRouter.post('/register', register);

// Lo mismo que el registro pero con el login.
userRouter.post('/login', login);

// Exportamos las rutas
export { userRouter };