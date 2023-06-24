import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from './Homepage'
import { Softskills } from './Softskills'
import { Interviews } from './Interviews'
import Signup from '../components/Signup'
import Login from '../components/Login'

export const MainRoutes = () => {
  return <Routes>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/softskills' element={<Softskills/>}/>
    <Route path='/interviews' element={<Interviews/>}/>
  </Routes>
}
