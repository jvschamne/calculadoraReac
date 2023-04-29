import { useState } from 'react'
import './App.css'

import Calculadora from './components/Calculadora'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Calculadora/>
        
    </div>
  )
}

export default App
