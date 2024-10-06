function List_items({ array }) {
    return (
        <>
            {array.map(pais => <li key={pais.id}>{pais.pais} <br/> {pais.gentilicio}</li>)}
        </>
    )
}

export default List_items;