import React from 'react'
import { Button } from '../../components/button'
import { Car } from '../../components/carinfo'
import { Panel } from '../../components/panel'
import Anel2 from '../../components/panel2'
import "./main.css"
import { Cars } from '../../components/add a car'

export const Home = () => {
  return (
    <div to="/" className='Home'>
        <Button/>
        <Car/>
    </div>
  )
}
