import React from 'react'
import "./main.css"
import Chevrolet from "../../assets/img/Chevrolet Tahoe.png"
import damas from "../../assets/img/damas.png"
import Chevrolet2 from "../../assets/img/Chevrolet Equinox.png" 
import nexsi from "../../assets/img/nexsi.png"
import {Button} from "../../components/button"
import { NavLink } from 'react-router-dom'

export const Models = () => {
  return (
    <div className='Models'>
        <Button/>
        <div className='container'>
            <div className='models-inner'>
            <h1 className='car-h2'>Modellar turlari</h1>
                <ul className='car-list'>
                    <li  className='list-style' >
                    <NavLink  to={"/external"}>
                        <img className='list-img' src={Chevrolet} alt="" />
                    </NavLink>
                        <h3 className='list-h3'>Chevrolet Tahoe</h3>
                        <p className='list-p'>Narxi: 329 900 000 </p>
                    </li>
                    <li className='list-style'>
                    <NavLink  to={"/external"}>
                        <img className='list-img' src={damas} alt="" />
                    </NavLink>
                        <h3 className='list-h3'>CHEVROLET DAMAS VAN</h3>
                        <p className='list-p'>Narxi: 329 900 000 </p>
                    </li>
                    <li className='list-style'>
                    <NavLink  to={"/external"}>
                        <img className='list-img' src={Chevrolet2} alt="" />
                    </NavLink>
                        <h3 className='list-h3'>Chevrolet Equinox</h3>
                        <p className='list-p'>Narxi: 329 900 000 </p>
                    </li>
                    <li className='list-style'>
                    <NavLink  to={"/external"}>
                        <img className='list-img' src={nexsi} alt="" />
                    </NavLink>
                        <h3 className='list-h3'>Chevrolet Nexia</h3>
                        <p className='list-p'>Narxi: 329 900 000 </p>
                    </li>
                    <li className='list-style'>
                    <NavLink  to={"/external"}>
                        <img className='list-img' src={nexsi} alt="" />
                    </NavLink>
                        <h3 className='list-h3'>Chevrolet Nexia</h3>
                        <p className='list-p'>Narxi: 329 900 000 </p>
                    </li>
                    <li className='list-style'>
                    <NavLink  to={"/external"}>
                        <img className='list-img' src={nexsi} alt="" />
                    </NavLink>
                        <h3 className='list-h3'>Chevrolet Nexia</h3>
                        <p className='list-p'>Narxi: 329 900 000 </p>
                    </li>
                    <li className='list-style'>
                    <NavLink  to={"/external"}>
                        <img className='list-img' src={nexsi} alt="" />
                    </NavLink>
                        <h3 className='list-h3'>Chevrolet Nexia</h3>
                        <p className='list-p'>Narxi: 329 900 000 </p>
                    </li>
                    <li className='list-style'>
                    <NavLink  to={"/external"}>
                        <img className='list-img' src={nexsi} alt="" />
                    </NavLink>
                        <h3 className='list-h3'>Chevrolet Nexia</h3>
                        <p className='list-p'>Narxi: 329 900 000 </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
