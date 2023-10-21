import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router } from '@mui/icons-material'
import { PokemonProvider } from './context/PokemonContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReadPokemon from './components/ReadPokemon'


function App() {
  const [count, setCount] = useState(0)

  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/:page' element={<ReadPokemon />} />
          <Route element={<ReadPokemon />} path='/' />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  )
}

export default App
