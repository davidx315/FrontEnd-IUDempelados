import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Estado from '../components/estado/Estado'
import NavBar from '../components/interfaceUsuario/NavBar'
import Inventario from '../components/inventario/Inventario'
import Marca from '../components/marca/Marca'
import TipoEquipo from '../components/tipoEquipo/TipoEquipo'

export default function MainRouter() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route  path='/' element={<Estado />}/>
            <Route  path='/marcas' element={<Marca />}/>
            <Route  path='/tipoequipos' element={<TipoEquipo />}/>
            <Route  path='/inventarios' element={<Inventario />}/>
        </Routes>
    </BrowserRouter>
  )
}
