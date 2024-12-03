import React from 'react'
import './pitcheventing.css'
export const PitchEventing = () => {
  return (
    <>
        <main className='mainPage'>
            <header className='headerPitch'>
            <h1>PitchEventing - Córdoba Club de Fútbol.</h1>
            <p>El Córdoba Club de Fútbol es un club de fútbol español de la ciudad de Córdoba, en Andalucía. Fue fundado en 1954 y juega en el Estadio Nuevo Arcángel. Actualmente juegan en la categoria de plata, La Liga Hypermotion.</p>
            <img src="img/pitch1.png" alt="PitchEventing" className='pitchImage'/>
            </header>
            <hr/>


            <article className='articlePitch'>
                <h3>¿Que es PitchEventing?</h3>
                <p>Es un mapa de eventing creado con JavaScript, que mediante unos descriptores podemos pintar sobre el campo los pases realizados.</p>
                <p>Estos pases son guardados en un excel.</p>
                <p>Gracias a estos datos recibidos, podemos generar mediante scripts de python mapas y gráficas que ayudan al entrenador a crear tácticas.</p>
                <hr/>
                <p>Hay scripts para:</p>
                    <ul>
                        <li>Generar mapa de red de pases.</li>
                        <li>Generar mapa de calor.</li>
                        <li>Generar gráfica de pases.</li>
                        <li>Pases realizados por X jugador.</li>
                        <li>Calculo de puntuacion de un pase basandose en la peligrosidad.</li>
                        <li>Sumatorio total de pases peligrosos.</li>
                        <li>Mapa de tiros.</li>
                    </ul>
                <h3>Ejemplo:</h3>
                <div className='picsPitch'>
                <img src="img/pitch3.png" alt="PitchEventing" className='pitchImagePonf'/>
                <img src="img/pitch4.png" alt="PitchEventing" className='pitchImagePonf1'/>
                </div>
            </article>
        </main>
    </>
  )
}
