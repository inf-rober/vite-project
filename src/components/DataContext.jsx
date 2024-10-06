//? Archivo que ilustra el uso del concepto de "contexto" en React
import React, { createContext, useEffect, useState } from 'react';
export const DataContext = createContext();
function DataProvider({ children }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("./test_data.json")
            .then(response => response.json())
            .then(datos => setData(datos))
            .catch(error => console.error("Error fetching data: ", error));
    }, []) //? Cuando el segundo argumento del hook es un arreglo vacío, se carga el efecto al cargarse el componente.
    return (
        <>
            <DataContext.Provider value={{ data, setData }}>
                {children}
            </DataContext.Provider>
        </>
    )
}

export default DataProvider
