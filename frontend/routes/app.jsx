import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SobreNosotros from './pages/SobreNosotros';
import InicioSesion from './pages/InicioSesion';
import Registro from './pages/Registro';  // Agrega esta línea si tienes una página de registro

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SobreNosotros />} />
        <Route path="/iniciar-sesion" element={<InicioSesion />} />
        <Route path="/registrarse" element={<Registro />} />  {/* Ruta para registro */}
      </Routes>
    </Router>
  );
}

export default App;
