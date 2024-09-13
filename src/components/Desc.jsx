import PropTypes from 'prop-types';

const Desc = ({ desc }) => {
    return (
        <div>
            <h3>Descripción</h3>
            {
                /* Utilizando operador ternario para mostrar un párrafo u otro según el prop que reciba el componente Desc (Desc está inserto dentro del componente App) */
                desc == 'React' 
                ?                  
                <p> 
                    <b>React</b> es una biblioteca de JavaScript de código abierto para construir interfaces de usuario, desarrollada y
                    mantenida por Facebook y una comunidad de desarrolladores.
                    Se utiliza principalmente para crear aplicaciones de una sola página (SPAs) donde se necesita una experiencia de usuario dinámica y fluida.
                </p> 
                :               
                <p>
                    <b>Vite</b> es una herramienta de construcción (build tool) y un entorno de desarrollo para aplicaciones web modernas.
                    Fue creada por Evan You, el creador de Vue.js, con el objetivo de ofrecer un desarrollo más rápido y eficiente,
                    especialmente para aplicaciones basadas en JavaScript y frameworks como Vue, React y otros.
                </p>
            }
        </div> 
    )
}

Desc.propTypes = {
    desc : PropTypes.string.isRequired
}

export default Desc // Fundamental, no olvidar exportar el componente para poder utilizardo en otros archivos.