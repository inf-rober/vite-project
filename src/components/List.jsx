import List_items from "./List_items"

function List() {
    const gentilicios = [
        {id : 1, pais : "Chile", gentilicio : "Chileno"},
        {id : 2, pais : "Alemania", gentilicio : "Alemán"},
        {id : 3, pais : "Francia", gentilicio : "Francés"},
        {id : 4, pais : "Japón", gentilicio : "Japonés"},
        {id : 5, pais : "Brasil", gentilicio : "Brasileño"},
        {id : 6, pais : "Estados Unidos", gentilicio : "Norteamericano"}
    ]
    return (
        <>
            <h1>Parte 3. Lista de objetos regulares utilizando map</h1>
            <h3>Gentilicios</h3>
            <ul>
                {gentilicios.length === 0 ? <p>El arreglo que contiene los objetos regulares está vacío.</p> : <List_items array={gentilicios}/>}
            </ul>
        </>
    )
}

export default List