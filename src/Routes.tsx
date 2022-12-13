import React from "react"
import {Routes,Route} from 'react-router-dom'

//Pages
import {NotFound} from './Pages/NotFound'
import {Home} from './Pages/Home'
import {Estados} from './Pages/Estados'
import {Municipios} from "./Pages/Municipios"

export default()=>{
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/estado' element={<Estados/>} />
      <Route path='/municipio' element={<Municipios/>}/>
    </Routes>    
  )
}