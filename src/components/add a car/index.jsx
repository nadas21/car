import React from "react";
import Anel2 from "../panel2";
import "./main.css";
import tag from "../../assets/img/tag.png"

export const Cars = () => {
  return (
    <div className="Cars">
      <div className="container">
        <div className="cars-inner">
          <Anel2 />
          <ul className="cars-list">
            <li className="cars-item-list">
              <h2 className="cars-h2"> <img src={tag} width={16} height={32} alt="tag" /> Mashinalar</h2>
              <div className="cars-box">
                <button className="cars-btn"> Kategoriya qo’shish</button>
                <button className="cars-btn">Mashina qo‘shish</button>
              </div>
            </li>
            <li className="cars-item-list">
              <a className="cars-a" href="#">
                #
              </a>
              <p className="cars-p">Markasi</p>
              <p className="cars-p">Gearbook</p>
              <p className="cars-p">Tanirovkasi</p>
              <p className="cars-p">Motor</p>
              <p className="cars-p">Year</p>
              <p className="cars-p">Color</p>
              <p className="cars-p">Distance</p>
            </li>
            <li className="cars-item-list">
              <p className="carsitem-p">1</p>
              <p className="carsitem-p">CHEVROLET</p>
              <p className="carsitem-p">Avtomat karobka</p>
              <p className="carsitem-p">Yoq</p>
              <p className="carsitem-p">1.6</p>
              <p className="carsitem-p">2016</p>
              <p className="carsitem-p">Oq</p>
              <p className="carsitem-p">3000km</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
