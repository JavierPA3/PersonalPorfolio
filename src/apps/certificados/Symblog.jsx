import './symblog.css';
export const Symblog = () => {
  return (
    <>
       <main className="mainPage">
        <section>
            < header className="titleSymblog">
                <h1 className='headerSymblog'>Symblog 2DAW</h1>
                <h2 className='subheaderSymblog'>creating a blog in Symfony2 by Javier Postigo Arévalo</h2>
            </header>
            <hr/>
            <article className='symblogBody'>
                <div className='symblogBodyDiv'>
                <p>
                    Symblog es una página web que diseñe y desarrolle durante el último mes de mi formación en Desarrollo de Aplicaciones Web. La idea principal era crear un blog personal en el que pudiera compartir mis conocimientos y experiencias en el campo de la programación y el desarrollo web.
                </p>
                <img src="img/symblog1.png" alt="Symblog" className="symblogImage" />
                </div>
                <div className='symblogBodyDiv'>
                <p>
                    La página cuenta con varias funcionalidades interesantes, como la posibilidad de crear, editar y eliminar entradas de blog, así como la capacidad de comentar y valorar las publicaciones de otros usuarios. Además, implementé un sistema de autenticación y autorización para garantizar la seguridad de los datos y la privacidad de los usuarios.
                </p>
                <img src="img/symblog2.png" alt="Symblog" className="symblogImage" />

                </div>
                <div className='symblogBodyDiv'>
                <p>
                    Durante el desarrollo de Symblog, utilicé Symfony2, un popular framework de PHP que me permitió crear una aplicación web robusta y escalable. También trabajé con tecnologías como Doctrine, Twig y Bootstrap para mejorar la funcionalidad y el diseño del blog.
                </p>
                <img src="img/symblog3.png" alt="Symblog" className="symblogImage" />

                </div>
            </article>
            <hr/>
            <article className='apartadoTécnico'>
                <h2>Aspectos técnicos</h2>
                <p>Para el proyecto, me he basado en un MVC, utilizando el manejo de los modelos que son hijos de un DBAbstractModel.
                
                </p>
                <p>Las rutas han sido separadas y aseguradas para usuarios comunes o para administradores.</p>
                <p>El proyecto está desplegado de forma local, mediante XAMPP apache. La base de datos utilizada esta alojada en PhpMyAdmin.</p>
                <p>Para la realización de este proyecto he utilizado las siguientes tecnologías:
                    <ul className='flexUl'>
                        <li>Twig</li>
                        <li>Vendor</li>
                        <li>Bootstrap</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>Symfony2</li>
                        <li>Doctrine</li>
                        <li>Composer</li>
                        <li>Illumate</li>
                        <li>GrahamCampbell</li>
                        <li>Vlucas</li>
                    </ul>
                </p>
            </article>
            <hr/>
            <article className='apartadoPersonal'>
                <h2>Aspectos personales</h2>
                <p>Este proyecto ha sido una gran oportunidad para poner en práctica mis conocimientos en programación web y aprender nuevas tecnologías y técnicas de desarrollo. Me ha permitido mejorar mis habilidades en PHP, Symfony2 y MySQL, así como en el diseño y la implementación de aplicaciones web complejas.</p>
                <p>Si desean saber mas sobre Symblog, no duden en contactar conmigo.</p>
            </article>
        </section>
        </main>
    </>
  )
}
