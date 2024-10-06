import { useState } from 'react'; //? Hook.
import '../styles/Form.css';

function Form() {

    const [formData, setFormData] = useState(
        {
            name      : '',
            email     : '',
            message   : ''  
        }
    ); //? Inicializando Hook.

    const [formErrors, setFormErrors] = useState (
        {
            name      : '',
            email     : '',
            message   : ''            
        }
    )

    //? Funciones controladoras de eventos .
    const testEvent1 = (event) => {
        console.log(`Esto se ha activado por un evento ${event.type}`);
    }
    const testEvent2 = (event) => {
        event.stopPropagation(); //? Esto tiene por razón evitar el bubbling de eventos.
        console.log(`Esto se ha activado por un evento ${event.type}`);
    }
    const eventCustomHandler = (event) => {
        const {name, value} = event.target;  //? Esto es una asignación utilizando desestructuración.
        setFormData((prevFormData) => ({
            ...prevFormData, // Utiliza el operador de propagación para copiar el objeto anterior en un nuevo objeto.
            [name]:value, //! Forma de acceder dinámicamente a un objeto, basicamente es un nuevo par clave-valor.
        }));
        //? Función para tratar las validaciones del formulario
        setFormErrors((prevFormErrors) => ({
            ...prevFormErrors, 
            [name]:'', 
        }));
    }
    const eventHandlerSubmit = (event) => {
        event.preventDefault(); //? Evita que el botón submit nos envíe a otra página.
        const newFormErrors = {};
        if (formData.name.trim() === '') {
            newFormErrors.name = 'Debes proveer un nombre'
        } else if (formData.email.trim() === '') {
            newFormErrors.email = 'Debes proveer un correo electrónico'
        }
        // Condicional para verificar si se produce o no un error 
        if (Object.keys(newFormErrors).length > 0) {
            setFormErrors(newFormErrors)
        } else {
            console.log("¡Formulario válido!", formData);
        }
    }

    return (
        <>
            <h1>Parte 2. Formularios, eventos, validaciones</h1>
            <h3>Formulario de contacto</h3>
            <form id="Form" onSubmit={eventHandlerSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input id="name" type="text" name="name" onChange={eventCustomHandler} value={formData.name}/>
                    {formErrors.name && <span className='error'>{formErrors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input id="email" type="text" name="email" onChange={eventCustomHandler} value={formData.email}/>
                    {formErrors.email && <span className='error'>{formErrors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="message" >Mensaje</label>
                    <textarea id="message" name="message" onChange={eventCustomHandler} value={formData.message} ></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Form;