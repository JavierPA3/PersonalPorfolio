import './Tfg.css'
export const Tfg = () => {
  return (
    <main className="mainPage">
      <header>
      <h1>TFG</h1>
      <h3>Proyecto FutApi</h3>
      </header>
      <article>
        <h2>Introducción</h2>
        <p>
          El Trabajo de Fin de Grado (TFG) es una parte fundamental de mi formación como Técnico Superior en Desarrollo de Aplicaciones Web. A lo largo de este proyecto, he tenido la oportunidad de aplicar los conocimientos y habilidades adquiridos durante mi formación, así como de explorar nuevas tecnologías y enfoques para el desarrollo de aplicaciones web.
        </p>
        <p>
          FutApi es un proyecto que nace de mi pasión por el fútbol y mi interés en el desarrollo de aplicaciones web. La idea principal detrás de FutApi es elaborar una serie de predicciones aplicadas al fútbol.
        </p>
        <p>Todo esto esta conseguido gracias a la creacion de modelos de machine learning.</p>
        <p>Tenemos modelos que realizan: </p>
        <ul>
          <li>Predicciones mediante regresiones lineales sobre goles, asistencias y acciones de creación de gol.</li>
          <li>Mediante el algoritmo de clasificacion, con estadísticas de un jugador, puede clasificar a este en un rol de portero, defensa, mediocentro o delantero.</li>
          <li>Mediante el algoritmo de clustering, con estadísticas de un jugador, puede buscar hasta 20 jugadores con estadísticas similares.</li>
        </ul>
        <a href='https://github.com/JavierPA3/Futapi_'>Documentación del proyecto</a>
      </article>
    </main>
  )
}
