import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import Form from './components/Form.jsx' // Importándo componente Form (modificación mía)
import List from './components/List.jsx'
import Data from './components/Data.jsx' 
import 'bootstrap/dist/css/bootstrap.min.css'; //! Fundamental para que funcione Bootstrap

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tag={'Lorem ipsum dolor by rosm-dev (o_o)'}/> {/* Utilizando el prop que codifiqué en App.jsx con una cadena lorem */}
    <Form /> {/* Invocándo componente (modificación mía)*/}
    <List />
    <Data />
  </StrictMode>,
)
