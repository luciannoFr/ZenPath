import {
  obtenerVideos,
  obtenerVideo,
  crearVideo,
  actualizarVideo,
  eliminarVideo

} from "../controllers/tareas.controller.js";

import { Router } from "express";

const tareasRouter = Router();

tareasRouter.get("/tareas", obtenerVideos);

tareasRouter.get("/tareas/:id", obtenerVideo);

tareasRouter.post("/tareas", crearVideo);

tareasRouter.put("/tareas/:id", actualizarVideo);

tareasRouter.delete("/tareas/:id", eliminarVideo);

export { tareasRouter };
