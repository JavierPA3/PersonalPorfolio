import './crudOne.css'
export const CrudOne = () => {
  return (
    <>
        <main className="mainPage">
            <section>
                <header>
                    <h2>CrudOne</h2>
                </header>

                <article className="crudOneBody">
                    <p>Este proyecto se divide en dos partes:</p>
                        <ol>
                            <li>Api realizada con PHP.</li>
                            <li>Frontend realizado con Angular.</li>
                        </ol>

                </article>
                <hr/>
                <article className="crudPartOne">
                    <header>
                        <h3>1. Api realizada con PHP</h3>
                    </header>
                    <p>Es una API desarrollada en php con un Crud hacia una base de datos.</p>
                    <p>En esta API utilizamos el modelo singleton para manipular la base de datos.</p>
                    <p>Tendremos los métodos: Get, Post, Delete, Put.</p>
                    <ol>
                        <div className="liDiv">
                        <li>Get: Para obtener los datos de la base de datos.</li>
                        <img src="img/crud1.png" alt="crud1" className="crudPictures"/>
                        </div>
                        <div className="liDiv">
                        <li>Post: Para insertar datos en la base de datos.</li>
                        <img src="img/crud2.png" alt="crud1" className="crudPictures" />
                        </div>
                        <div className="liDiv">
                        <li>Delete: Para eliminar datos de la base de datos.</li>
                        <img src="img/crud3.png" alt="crud1"  className="crudPictures"/>
                        </div>
                        <div className="liDiv">
                        <li>Put: Para actualizar datos de la base de datos.</li>
                        <img src="img/crud4.png" alt="crud1" className="crudPictures"/>
                        </div>
                    </ol>
                   
                </article>
                <hr/>
                <article className="crudPartTwo">
                    <h3>Frontend realizado con Angular.</h3>
                    <div className='pDivsCrud'>
                    <p>En el frontend se realizó un crud con Angular llamando a la API creada con PHP.</p>
                    <img src="img/crud5.png" alt="crud1" className="crudPictures"/>
                    </div>
                    <div className='pDivsCrud'>
                    <p>Editar contactos:</p>
                    <img src="img/crud6.png" alt="crud1" className="crudPictures"/>
                    </div>
                    <div className='pDivsCrud'>
                    <p>Eliminar contacto:</p>
                    <img src="img/crud7.png" alt="crud1" className="crudPictures"/>
                    </div>
                    <div className='pDivsCrud'>
                    <p>Crear contactos:</p>
                    <img src="img/crud8.png" alt="crud1" className="crudPictures"/>
                    </div>
                    <div className='pDivsCrud'>
                    </div>
                   </article>
            </section>
        </main>
    </>
  )
}
