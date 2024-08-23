---

# Sistema de Salud Mental - ZenPath

Bienvenido al Sistema de Salud Mental, una aplicación moderna para gestionar y mejorar la salud mental utilizando React y Vite. Este proyecto tiene como objetivo proporcionar herramientas y recursos para apoyar a los usuarios en su bienestar emocional y psicológico.

## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Características](#características)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Instalación](#instalación)
5. [Uso](#uso)
6. [Contribución](#contribución)

## Descripción

El Sistema de Salud Mental está diseñado para ofrecer una experiencia interactiva y accesible para el apoyo en salud mental. La aplicación permite a los usuarios realizar autoevaluaciones, acceder a recursos educativos y conectarse con profesionales. 

## Características

- **Recursos Educativos**: libros, videos y consejos sobre salud mental.
- **Conexión con Profesionales**: Opciones para contactar a terapeutas y consejeros.
- **Interfaz Intuitiva**: Diseñada para facilitar el uso y la navegación.
- **Zona de Publicaciones**: Un espacio tipo blog donde los usuarios pueden publicar sus pensamientos, experiencias y reflexiones. Permite la interacción y el apoyo mutuo entre los usuarios.
- **Zona de "paz mental**: videos, musicas y podcast  donde los usuarios puedan acceder y sentir la calma que estan buscando

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para desarrollo con React.
- **CSS Modules** o **Styled Components**: Para el diseño de la interfaz.
- **Axios** o **Fetch**: Para la comunicación con APIs.
- **React Router**: Para la gestión de rutas dentro de la aplicación.
- **Git**: utilizado para realizar el guardado de cambios y versiones del sistema en el repositorio.
- **XAMPP**: utilizado para tener guardado la base de datos y ajustar las funcionalidades del sistema

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/luciannoFr/ZenPath
   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd ZenPath
   cd frontend
   ```

3. **Instala las dependencias:**

   ```bash
   npm install
   ```
4.**Configurar la base de datos:**
   - Abre XAMPP y asegúrate de que los servicios de **Apache** y **MySQL** están en ejecución.
   - Accede a **phpMyAdmin** a través de `http://localhost/phpmyadmin`.
   - Crea una base de datos llamada `tasks_db`.
   - Importa el archivo de base de datos proporciando en `backend/src/db/ZenPath.sql`
     - En **phpMyAdmin**, selecciona la base de datos `tasks_db`.
     - Ve a la pestaña **Importar** y selecciona el archivo `ZenPath.sql` del repositorio.
     - Haz clic en **Continuar** para importar el esquema y los datos.


5. **Inicia el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

   La aplicación debería estar disponible en `http://localhost:3000`

## Uso

1. **Registro e Inicio de Sesión**: Regístrate y accede a la aplicación para comenzar.
2. **Explora las Funcionalidades**: Navega a través de las diferentes secciones como el blog, recursos y contacto con profesionales.
3. **Comunicate con nosotros**: Contacta con nosotros si quieres dar un consejo para mejorar la aplicación.

## Ambiente Educativo

Este proyecto ha sido desarrollado como parte de una hackatón en un entorno educativo. El objetivo principal es aprender y experimentar con nuevas tecnologías y metodologías en un contexto colaborativo. Apreciamos la participación de todos los miembros del equipo y los comentarios constructivos para seguir mejorando y aprendiendo, muchas gracias.

##Links de gestion de proyecto(Trello y Jira)
- Trello: https://trello.com/b/SsHXff2V/zenpath
- Jira: https://refugioparanimales.atlassian.net/jira/software/projects/HAC/boards/2/timeline?shared=&atlOrigin=eyJpIjoiMDE1YzczMzlkYTI1NDg4Nzk0YjA0MzEwNDJmMTU3ODQiLCJwIjoiaiJ9
