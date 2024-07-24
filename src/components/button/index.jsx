import React from 'react'
import "./main.css"
import { NavLink } from 'react-router-dom'

export const Button = () => {
  return (
    <div className='Button'>
        <div className='container'>
        <div className='btn-inner'>
              <p className='btn-p'>Bosh sahifa  modellar</p>
             <NavLink to={"/admin"}>
             <button className='button-btn'>Admin o'tish</button>
             </NavLink>
            </div>
        </div>
    </div>
  )
}
