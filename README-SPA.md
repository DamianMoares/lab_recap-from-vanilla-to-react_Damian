Resumen del laboratorio: de vainilla a React
logo_ironhack_azul 7

LABORATORIO | De JavaScript puro a React
Objetivos de aprendizaje
Después de este ejercicio, usted podrá:

Crea una interfaz de usuario desde cero utilizando HTML y CSS.
Manipular el DOM para mostrar dinámicamente los datos obtenidos de una API.
Se utiliza async/awaitpara gestionar operaciones asíncronas de JavaScript.
Transformar una aplicación JavaScript pura en un componente React moderno.
Gestiona el estado de la aplicación y los eventos del usuario en React usando hooks como useStatey useEffect.

Requisitos
Haz un fork de este repositorio.
Clona este repositorio.

Envío
Una vez finalizado, ejecute los siguientes comandos:
$ git add .
$ git commit -m "Solved lab"
$ git push origin master
Crea una solicitud de extracción para que tus ayudantes de cátedra puedan revisar tu trabajo.

Prueba tu código
Para este laboratorio, ¡tu navegador es tu entorno de prueba! No hay pruebas unitarias preescritas. Verificarás que tu código funciona de la siguiente manera:

Abra su index.htmlarchivo utilizando la extensión Live Server de VSCode.
Comprueba en el navegador si tus perfiles de usuario se muestran correctamente.
Abra la consola en las herramientas para desarrolladores para comprobar si hay errores.
Este proceso de confirmación visual y comprobación en la consola es una habilidad fundamental para todo desarrollador web.


Instrucciones
En este laboratorio, crearemos una pequeña aplicación que obtiene datos de usuario de una API externa y los muestra. Comenzaremos con HTML, CSS y JavaScript básicos, y luego la refactorizaremos para convertirla en una aplicación React más potente y fácil de mantener. Esto afianzará tu comprensión de cómo se conectan todas estas tecnologías.


Iteración 0 – Configuración del proyecto
Primero, vamos a crear la estructura de archivos básica para nuestro proyecto. Dentro de la raíz de la carpeta del laboratorio, crea los siguientes archivos y carpetas:

/
|-- index.html
|-- style.css
|-- app.js
Esta sencilla estructura es todo lo que necesitamos para la primera parte de nuestro laboratorio.


Iteración 1 – La base estática (HTML y CSS)
Vamos a establecer la estructura básica de nuestra aplicación. Necesitamos un archivo HTML para la estructura y un archivo CSS para el estilo.

Tu objetivo es crear una página sencilla con un título, un contenedor para las tarjetas de usuario y un botón de "Cargar más".

En index.html:

Copia y pega el siguiente código. Esto establece la estructura básica y vincula nuestra hoja de estilos con el archivo de script.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User Profiles</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>User Profiles</h1>
    </header>
    <main>
      <div id="user-list-container">
        <!-- Users will be added here by JavaScript -->
      </div>
      <button id="load-more-btn">Load More</button>
    </main>
    <script src="app.js"></script>
  </body>
</html>
En style.css:

Copia y pega este código CSS para que nuestra aplicación tenga un aspecto limpio y presentable.

body {
  font-family: sans-serif;
  background-color: #f4f4f9;
  text-align: center;
}

#user-list-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 2rem 0;
}

.user-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 200px;
  text-align: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-card img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

button:disabled {
  background-color: #aaa;
}
En este punto, si abres index.htmlcon Live Server, deberías ver el título y el botón, pero ningún usuario. ¡Eso es lo que solucionaremos a continuación!


Iteración 2: Obtener y mostrar usuarios con JavaScript puro.
¡Ahora es el momento de dar vida a nuestra página! Usaremos JavaScript para obtener los datos del usuario desde una API y crear dinámicamente las tarjetas de usuario.

Trabajarás en el app.jsarchivo.

Tu tarea es:

Seleccione los elementos DOM necesarios ( user-list-containery load-more-btn).
Crea una asyncfunción que obtenga datos de https://dummyjson.com/users.
Para cada usuario devuelto por la API, cree un divcon la clase user-card.
Rellena la tarjeta con la imagen y el nombre del usuario.
Agregue la nueva tarjeta al user-list-container.
Agregue un detector de eventos de clic al botón para activar esta función.
Consejo

Recuerda gestionar el estado de carga deshabilitando el botón durante la solicitud de obtención de datos para evitar clics múltiples. Utiliza un try...catch...finallybloque para un manejo de errores robusto.

Haga clic para ver la solución.

Iteración 3: Refactorización a una aplicación React.
Nuestra aplicación JavaScript pura funciona, pero a medida que las aplicaciones crecen, gestionar el DOM manualmente se vuelve complejo. Vamos a refactorizar nuestro proyecto para usar React, lo que facilita enormemente la gestión del estado de la interfaz de usuario.

Primero, configura un nuevo proyecto de React. La forma más rápida es usar Vite. Abre tu terminal y ejecuta:

# npm 6.x
npm create vite@latest my-react-app --template react

# npm 7+, extra double-dash is needed:
npm create vite@latest my-react-app -- --template react
Navegue hasta su nuevo proyecto ( cd my-react-app), instale las dependencias ( npm install) e inicie el servidor de desarrollo ( npm run dev).

Tu tarea consiste en recrear el visor de perfiles de usuario como un componente de React.

Elimine el contenido de src/App.cssy reemplácelo con el CSS de nuestro style.cssarchivo.
En src/App.jsx, crea un componente llamado UserList.
Utilice el useStategancho para gestionar una matriz de users, un loadingbooleano y el skipcontador.
Utilice el useEffecthook para obtener el lote inicial de usuarios cuando el componente se monte por primera vez.
Crea una función fetchUsersque contenga la async/awaitlógica. Cuando obtengas nuevos usuarios, agrégalos al usersarray de estado existente.
Renderiza la lista de usuarios mapeando el usersarray de estado.
Agrega un botón que se active fetchUsersal hacer clic.
Precaución

Al mapear un array para crear elementos en React, no olvides agregar una keypropiedad única a cada elemento, como <div key={user.id}>. Esto ayuda a React a identificar qué elementos han cambiado, se han agregado o se han eliminado.

Haga clic para ver la solución.

¡Feliz programación! ❤️