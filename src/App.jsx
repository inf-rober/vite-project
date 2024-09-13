import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './styles/App.css'
import Desc from './components/Desc.jsx' // Import mío

function App({tag}) { // Este prop lo codifiqué yo
  const [desc, setDesc] = useState("Vite") // Hook que utilicé para modificar el componente Desc
  return (
    <>
    <h1 id="h1-app">Parte 1. Operador ternario, props, estados, hooks</h1>
    {/* <span>{tag}</span> {/* Este span lo codifiqué yo */} 
      <div>  
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {
          /* 
            Utilizando un operador ternario para modificar la descripción según
            el estado de desc en determinado momento.
          */
          desc == "Vite"
          ?
          <button onClick={() => setDesc("React")}>
            Cambiar descripción
          </button>
          :
          <button onClick={() => setDesc("Vite")}>
          Cambiar descripción
          </button>
        }
      </div>
      <Desc desc={desc}/> {/* Invocando componente con su prop correspondiente */}
    </>
  )
}

export default App
