import React from "react";
import "./main.css";
import chevrolet from "../../assets/img/chevrolet.png";
import lada from "../../assets/img/lada.png";
import lamborghini from "../../assets/img/lamborghini.png";
import ferrai from "../../assets/img/ferrai.png";
import { NavLink } from "react-router-dom";

export const Car = () => {
  return (
    <div className="Car">
      <div className="container">
        <div className="car2-inner">
          <h1 className="car2-h2">Modellari</h1>
          <ul className="car2-list">
            <li className="list2-style">
              <NavLink  to={"/car"}>
                <img className="list2-img" src={chevrolet} alt="" />
              </NavLink>
              <h3 className="list2-h3">CHEVROLET</h3>
            </li>
            <li className="list2-style">
              <NavLink to={"/car"}>
                <img className="list-img2" src={lada} alt="" />
              </NavLink>
              <h3 className="list2-h3">LADA</h3>
            </li>
            <li className="list2-style">
              <NavLink to={"/car"}>
                <img className="list2-img" src={lamborghini} alt="" />
              </NavLink>
              <h3 className="list2-h3">LAMBORGHINE</h3>
            </li>
            <li className="list2-style">
              <NavLink to={"/car"}>
                <img className="list2-img" src={ferrai} alt="" />
              </NavLink>
              <h3 className="list2-h3">FERRARI</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
