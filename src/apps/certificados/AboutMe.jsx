import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './aboutme.css';
import { Window } from '../../components/window/Window';

export const AboutMe = ({ closeWindow, windowImage }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false); 
  const [isSymblogWindowOpen, setIsSymblogWindowOpen] = useState(false); 
  const [isCrudOneOpen, setIsCrudOneOpen] = useState(false);
  const [isPitchEventingOpen, setIsPitchEventingOpen] = useState(false);
  const [isTfgOpen, setIsTfgOpen] = useState(false);
  const [isPythonApiOpen, setIsPythonApiOpen] = useState(false);
  const [isPorfolioOpen, setIsPorfolioOpen] = useState(false);

  const openNewWindow = () => {
    setIsWindowOpen(true); 
  };

  const closeWindowHandler = () => {
    setIsWindowOpen(false); 
  };

  const openSymblogWindow = () => {
    setIsSymblogWindowOpen(true); 
  };

  const closeSymblogWindow = () => {
    setIsSymblogWindowOpen(false); 
  };

  const openCrudOne = () => {
    setIsCrudOneOpen(true); 
  }
  const closeCrudOne = () => {
    setIsCrudOneOpen(false); 
  }
  const openPitchEventing = () => {
    setIsPitchEventingOpen(true); 
  }
  const closePitchEventing = () => {
    setIsPitchEventingOpen(false); 
  }
  const openTfg = () => {
    setIsTfgOpen(true); 
  }
  const closeTfg = () => {
    setIsTfgOpen(false); 
  }
  const openPythonApi = () => {
    setIsPythonApiOpen(true); 
  }
  const closePythonApi = () => {
    setIsPythonApiOpen(false); 
  }
  const openPorfolio = () => {
    setIsPorfolioOpen(true); 
  }
  const closePorfolio = () => {
    setIsPorfolioOpen(false); 
  }


  return (
    <>
      <main className="mainPage">
        <section>
          <article className="titleArticle">
            <img src="img/yo.jpg" alt="Javier Postigo Arévalo" className="mySelfPicture" />
            <div>
              <h1>Javier Postigo Arévalo</h1>
              <marquee>
                <p>Técnico Superior en Desarrollo de Aplicaciones Web.</p>
              </marquee>
            </div>
          </article>
          <hr />
          <article className="aboutMeArticle">
            <h2>Sobre mí</h2>
            <p>
              Soy un desarrollador de aplicaciones web <i><strong>resolutivo</strong></i> y <i><strong>ambicioso</strong></i>. Interesado en adentrarme al mundo laboral del desarrollo web. Busco encajar en un equipo talentoso que me pueda ayudar a crecer profesionalmente.
            </p>
            <p>
              Si está interesado en conocer mis aspectos más personales, pulse
              <button onClick={openNewWindow} className="invisibleButton">aquí.</button>
            </p>
          </article>
          <hr />
          <article className="skillsArticle">
            <ul>
              <h2>Habilidades técnicas</h2>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Docker</li>
              <li>Git</li>
              <li>TypeScript</li>
              <li>SQL</li>
              <li>Php</li>
              <li>Java</li>
            </ul>
            <ul>
              <h2>Habilidades personales</h2>
              <li>Creativo</li>
              <li>Trabajo en equipo</li>
              <li>Proactivo</li>
              <li>Resolutivo</li>
              <li>Detallista</li>
              <li>Pensamiento analítico</li>
              <li>Organizado</li>
              <li>Autodidacta</li>
              <li>Comunicativo</li>
              <li>Empático</li>
            </ul>
          </article>
          <hr />
          <article className="conocimientosAdquiridos">
            <ul>
              <h2>Conocimientos adquiridos</h2>
              <li>Manejo de base de datos</li>
              <li>Desarrollo de aplicaciones web front/back</li>
              <li>Diseño y desarrollo de páginas web</li>
              <li>Desarrollo de aplicaciones móviles</li>
              <li>Desarrollo de APIs</li>
              <li>Depuración de código</li>
              <li>Control de versiones</li>
              <li>Desarrollo de páginas web en WordPress</li>
              <li>Desarrollo de plugins de WordPress</li>
              <li>Desarrollo de aplicaciones web en el área del análisis deportivo aplicado al fútbol</li>
            </ul>
          </article>
          <hr />
          <h2>Formación</h2>
          <article className="formation">
            <div className="titulo">
              <h4>Título Bachillerato</h4>
              <p>I.E.S El Tablero</p>
              <span>2020-2022</span>
            </div>
            <div className="titulo">
              <h4>Desarrollo de aplicaciones web</h4>
              <p>I.E.S Gran Capitán</p>
              <span>2022-2024</span>
            </div>
          </article>
          <hr />
          <article className="experienciaLaboral">
            <h2>Experiencia laboral</h2>
            <div className="experienciaContainer">
              <div>
                <img src="img/ccf.png" alt="Córdoba CF" className="logoExperiencia" />
              </div>
              <div>
                <h4>Córdoba Club de Fútbol</h4>
                <p>Contrato en prácticas</p>
                <span>Marzo - Junio - 2024</span>
              </div>
              <div>
                <h4>Funciones</h4>
                <ul>
                  <li>Desarrollo de aplicaciones web en el área del análisis deportivo aplicado al fútbol</li>
                  <li>Análisis y filtrado de datos sobre partidos</li>
                  <li>Manipulación de bases de datos</li>
                  <li>Desarrollo de scripts Python</li>
                  <li>Desarrollo de scripts con JavaScript</li>
                </ul>
              </div>
            </div>
          </article>
          <hr />
          <article>
          <h2>Formación y certificados</h2>
          <div className='certificadosScroll'>
            <div className='certificado'>
              <p>Python para profesionales. Mejora tu desarrollo.</p>
              <img src='CV/UC-f9359168-7779-4c0b-ac8b-803e1d54adfd.jpg' alt='Certificado de Python' />
            </div>
            <div className='certificado'>
              <p>JavaScript: de cero hasta los detalles (ES5).</p>
              <img src='CV/UC-dd928a46-ab20-42f8-88a8-41de48aafe1b.jpg' alt='Certificado de JavaScript' />
            </div>  
            <div className='certificado'>
              <p>Master en SQL Server: Desde cero a nivel profesional.</p>
              <img src='CV/UC-ff2e92d4-513e-47ec-9978-d1902909944c.jpg' alt='Certificado de SQL Server' />
            </div>
            <div className='certificado'>
              <p>Patrones de diseño en JavaScript y TypeScript.</p>
              <img src='CV/UC-9583fe64-f194-4065-b07f-4224d3566e76.jpg' alt='Certificado de Patrones de Diseño' />
            </div>
            <div className='certificado'>
              <p>TypeScript: tu completa guía y manual de mano.</p>
              <img src='CV/UC-ef38bb04-1f79-455f-ade8-3f8326bc594c.jpg' alt='Certificado de TypeScript' />
            </div>
            <div className='certificado'>
              <p>First certificate in English B2.</p>
              <img src='CV/B2.jpg' alt='Certificado B2 en inglés' />
            </div>
            <div className='certificado'>
              <p>Preliminary English test B1.</p>
              <img src='CV/b1.jpg' alt='Certificado B1 en inglés' />
            </div>
          </div>
        </article>
        <hr/>
                  <article className='proyectos'>
            <h2>Proyectos</h2>
            <div className='proyectosContainer'>
              <div>
                <h4>Crud 1</h4>
                <p>Crud sencillo con Angular y una API con php.</p>
                <button onClick={openCrudOne} className="invisibleButton">Más detalles</button>
              </div>
              <div>
                <h4>Symblog</h4>
                <p>Página web sobre blogs.</p>
                <button onClick={openSymblogWindow} className="invisibleButton">Más detalles</button>
              </div>
              <div>
                <h4>PitchEventing</h4>
                <p>Análisis de pases CCF.</p>
                <button onClick={openPitchEventing} className="invisibleButton">Más detalles</button>
              </div>
              <div>
                <h4>TFG</h4>
                <p>Predicciones sobre jugadores.</p>
                <button onClick={openTfg} className="invisibleButton">Más detalles</button>
              </div>
              <div>
                <h4>Python Api</h4>
                <p>Aplicación de busquedas de peliculas.</p>
                <button onClick={openPythonApi} className="invisibleButton">Más detalles</button>
              </div>
              <div>
                <h4>Porfolio</h4>
                <p>Mi porfolio profesional</p>
                <button onClick={openPorfolio} className="invisibleButton">Más detalles</button>
              </div>
            </div>
          </article>
          <hr />
          <article className='contacto'>
          <h2>Contacto</h2>
          <div className='contactoContainer'>
            <div className='contacto2'>
              <p><a href='mailto:javier.postigo.arevalo@gmail.com'><img src='img/MSN Email.png' alt='Correo Electrónico'/></a></p>
              <p><a href='tel:603 40 40 45'><img src='img/Fax.png' alt='Número de teléfono'/></a></p>
              <p><a href='https://www.linkedin.com/in/javier-postigo-ar%C3%A9valo-14b5702b1/' ><img src='img/lkd.png' alt='Linkedin'/></a></p>
              <p><a href='https://www.infojobs.net/candidate/cv/view/index.xhtml?codeCv=4c3d4be1-55b9-4980-93de-3353defe8763&dgv=16472794439549385952'><img src='img/file.png' alt='Infojobs'/></a></p>
              <p><a href='https://github.com/JavierPA3'><img src='img/github.png' alt='Github'/></a></p>
            </div>
          </div>
        </article>
          <hr />
          <article className="descargarCv">
            <a href="CV/Javier PostigoCv.pdf" download="Javier PostigoCv.pdf">Descargar Cv</a>
          </article>
        </section>
      </main>

      {isWindowOpen &&
        ReactDOM.createPortal(
          <Window
            app="MoreAboutMe"
            onClose={closeWindowHandler}
            imageWindow={windowImage}
            nameWindow="Más sobre mí"
          />,
          document.body
        )}

      {isSymblogWindowOpen &&
        ReactDOM.createPortal(
          <Window
            app="Symblog"
            onClose={closeSymblogWindow}
            imageWindow={windowImage}
            nameWindow="Symblog"
          />,
          document.body
        )}

      {isCrudOneOpen &&
        ReactDOM.createPortal(
          <Window
            app="CrudOne"
            onClose={closeCrudOne}
            imageWindow={windowImage}
            nameWindow="Crud 1"
          />,
          document.body
        )}
      
      {isPitchEventingOpen &&
        ReactDOM.createPortal(
          <Window
            app="PitchEventing"
            onClose={closePitchEventing}
            imageWindow={windowImage}
            nameWindow="PitchEventing"
          />,
          document.body
        )}
        {isTfgOpen &&
        ReactDOM.createPortal(
          <Window
            app="Tfg"
            onClose={closeTfg}
            imageWindow={windowImage}
            nameWindow="TFG"
          />,
          document.body
        )}
        {isPythonApiOpen &&
        ReactDOM.createPortal(
          <Window
            app="PythonApi"
            onClose={closePythonApi}
            imageWindow={windowImage}
            nameWindow="PythonApi"
          />,
          document.body
        )}
        {isPorfolioOpen &&
        ReactDOM.createPortal(
          <Window
            app="Porfolio"
            onClose={closePorfolio}
            imageWindow={windowImage}
            nameWindow="Porfolio"
          />,
          document.body
        )}
    </>
  );
};
