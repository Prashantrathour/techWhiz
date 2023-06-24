import React from 'react'
import { Route, Routes, json } from 'react-router-dom'
import { Homepage } from './Homepage'


import Signup from '../components/Signup'
import Login from '../components/Login'
import SoftSkills from './Softskills'

export const MainRoutes = () => {
  const token=JSON.parse(localStorage.getItem('token'))
  console.log(token)
  return <Routes>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Homepage/>}/>
    {token?<Route path='/softskills' element={<SoftSkills/>}/>:"login"}
    {token? <Route path='/interviews' element={<SoftSkills/>}/>:"login"}
   
  </Routes>
}
