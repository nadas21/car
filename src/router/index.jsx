import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Models } from '../pages/models'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { External } from '../components/external'
import { Cars2 } from '../pages/cars2'

export const RouteWrapper = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/car' element={<Models/>}/>
        <Route path='/external' element={<About/>}/>
        <Route path='/admin' element={<Cars2/>}/>
        <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}
