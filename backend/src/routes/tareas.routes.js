import {
  obtenerTareas,
  crearTarea,
  obtenerTarea,
  actualizarTarea,
  eliminarTarea,
} from "../controllers/tareas.controller.js";

import { Router } from "express";

const tareasRouter = Router();

tareasRouter.get("/tareas", obtenerTareas);

tareasRouter.get("/tareas/:id", obtenerTarea);

tareasRouter.post("/tareas", crearTarea);

tareasRouter.put("/tareas/:id", actualizarTarea);

tareasRouter.delete("/tareas/:id", eliminarTarea);

export { tareasRouter };
