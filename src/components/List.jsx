function List() {
    const gentilicios = [
        {id : 1, pais : "Chile", gentilicio : "Chileno"},
        {id : 2, pais : "Alemania", gentilicio : "Alemán"},
        {id : 3, pais : "Francia", gentilicio : "Francés"},
        {id : 4, pais : "Japón", gentilicio : "Japonés"},
        {id : 5, pais : "Brasil", gentilicio : "Brasileño"},
        {id : 6, pais : "USA", gentilicio : "Norteamericano"}
    ]
    return (
        <div>
            <h1 id="h1-list">Parte 3. Lista de objetos regulares utilizando map</h1>
            <h3>Gentilicios</h3>
            <ul>
                {gentilicios.map(pais => <li key={pais.id}>{pais.pais} <br/> {pais.gentilicio}</li>)}
            </ul>
        </div>
    )
}

export default List