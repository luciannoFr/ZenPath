import { BrowserRouter, Route, Routes } from "react-router-dom";
import {AboutUs} from "../views/AboutUs/AboutUs";
import { Login } from "../views/login/Login";
import { Register } from "../views/register/Register";
import { Tareas } from "../views/tareas/Tareas";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { NuevaTarea } from "../views/tareas/nueva-tarea/NuevaTarea";
import { EditarTarea } from "../views/tareas/editar-tarea/EditarTarea";
import { EliminarTarea } from "../views/tareas/eliminar-tarea/EliminarTarea";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/tareas/nueva-tarea" element={<NuevaTarea />} />
          <Route path="/tareas/editar-tarea/:id" element={<EditarTarea />} />
          <Route
            path="/tareas/eliminar-tarea/:id"
            element={<EliminarTarea />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
