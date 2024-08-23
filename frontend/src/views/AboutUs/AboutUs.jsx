import './AboutUs.css';
import { useNavigate } from 'react-router-dom'; // Asegúrate de que react-router-dom esté instalado


export const AboutUs = () => {
    const navigate = useNavigate(); // Hook para la navegación
  
    const handleLoginClick = () => {
      navigate('/login'); // Redirige a la página de inicio de sesión
    };
    const handleRegisterClick = () => {
        navigate('/register'); // Redirige a la página de inicio de sesión
      };
  
    return (
      <div className="sobre-nosotros">
        <header className="sobre-nosotros-header">
          <h1>Sobre ZenPath</h1>
          <button className="login-button" onClick={handleLoginClick}>
            Iniciar Sesión
          </button>
        </header>
        <section className="sobre-nosotros-content">
          <h2>¿Quiénes Somos?</h2>
          <p>
            Bienvenidos a ZenPath, un proyecto de salud mental nacido en Formosa con la misión de ofrecer un refugio seguro y acogedor para aquellos que enfrentan momentos difíciles. Creado como parte de una hackatón, ZenPath nace del deseo de proporcionar un espacio donde las personas puedan encontrar apoyo y compartir sus experiencias sin costo alguno.
          </p>
  
          <h2>Nuestra Misión</h2>
          <p>
            En ZenPath, nuestra misión es brindar un entorno de paz y comprensión para aquellos que necesitan ayuda emocional. Nos esforzamos por ofrecer un lugar donde cada individuo pueda sentirse escuchado y apoyado, sin preocuparse por barreras económicas. Nuestro objetivo es crear un espacio inclusivo y empático que promueva la salud mental y el bienestar.
          </p>
  
          <h2>Nuestra Visión</h2>
          <p>
            Imaginamos un futuro donde cada persona, sin importar su situación, tenga acceso a un espacio seguro para expresar sus emociones y recibir apoyo. Queremos ser un faro de esperanza en Formosa y más allá, asegurando que nadie tenga que enfrentar sus problemas en soledad.
          </p>
  
          <h2>¿Cómo Funciona?</h2>
          <p>
            ZenPath ofrece un entorno en línea accesible y libre de juicios donde las personas pueden conectarse con otros que comparten experiencias similares. Facilitamos encuentros grupales y conversaciones individuales para que nuestros usuarios puedan expresar sus sentimientos, recibir apoyo y encontrar consuelo. Todo esto se realiza sin necesidad de registro previo y de forma gratuita, con la intención de que el proceso sea lo más accesible y cómodo posible.
          </p>
  
          <h2>Valores Fundamentales</h2>
          <ul>
            <li><strong>Empatía:</strong> Escuchamos y comprendemos las experiencias de cada individuo con sensibilidad y respeto.</li>
            <li><strong>Accesibilidad:</strong> Nuestros servicios son completamente gratuitos para asegurar que todos tengan la oportunidad de recibir apoyo.</li>
            <li><strong>Confidencialidad:</strong> Valoramos la privacidad de nuestros usuarios y garantizamos un entorno seguro para compartir.</li>
            <li><strong>Prevención:</strong> Creamos un espacio seguro para evitar que otros enfrenten situaciones similares a las que nosotros mismos hemos vivido.</li>
          </ul>
          <div className="conteiner">
            <h2>Empezar Ahora</h2>
            <button className="buttom-start" onClick={handleRegisterClick}>
            Empezar Ahora
            </button>
          </div>
          
        </section>
        

        <footer className="sobre-nosotros-footer">
          <p>© {new Date().getFullYear()} ZenPath. Todos los derechos reservados.</p>
        </footer>
      </div>
    );
  };

export default AboutUs;
