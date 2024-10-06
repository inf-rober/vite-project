import { useContext } from "react"
import { DataContext } from "./DataContext";
function Table() {
    const {data} = useContext(DataContext); //! Ahora data proviene del componente DataProvider del archivo DataContext.jsx
    return (
        <>
            <h1>Parte 4. Obteniendo datos de un JSON</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Lenguaje</th>
                        <th>Bio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 ?
                            <tr>
                                <td>{data[0].name}</td>
                                <td>{data[0].language}</td>
                                <td>{data[0].bio}</td>
                            </tr> :
                            <tr>
                                <td>Cargando datos...</td>
                                <td>Cargando datos...</td>
                                <td>Cargando datos...</td>
                            </tr>
                    }
                    {
                        data.length > 0 ?
                            <tr>
                                <td>{data[1].name}</td>
                                <td>{data[1].language}</td>
                                <td>{data[1].bio}</td>
                            </tr> :
                            <tr>
                                <td>Cargando datos...</td>
                                <td>Cargando datos...</td>
                                <td>Cargando datos...</td>
                            </tr>
                    }
                    {
                        data.length > 0 ?
                            <tr>
                                <td>{data[2].name}</td>
                                <td>{data[2].language}</td>
                                <td>{data[2].bio}</td>
                            </tr> :
                            <tr>
                                <td>Cargando datos...</td>
                                <td>Cargando datos...</td>
                                <td>Cargando datos...</td>
                            </tr>
                    }
                </tbody>
            </table>
        </>
    )

}

export default Table