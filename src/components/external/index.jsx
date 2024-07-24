import React from "react";
import "./main.css";
import archa from "../../assets/img/archa.png";
import bildirish from "../../assets/img/bildirish.png";
import car2 from "../../assets/img/car2.png";
import gradus from "../../assets/img/360.png";
import { Car_about } from "../Car_About";
import { Button } from "../button";

export const External = () => {
  return (
    <div className="external">
      <div className="container">
        <div className="external-inner">
          <div className="external-box">
            <h3 className="external-box-h2">Chevrolet Malibu</h3>
            <a className="external-box" href="#">
              <img className="external-a" src={archa} alt="archa" />
              <img className="external-a" src={bildirish} alt="bildirish" />
            </a>
          </div>
          <img
            className="external-img"
            src={car2}
            alt="car2"
            width={824}
            height={444}
          />
          <img
            className="external-gradus"
            src={gradus}
            alt="gradus"
            width={32}
            height={32}
          />
          <p className="external-p">
            Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning
            rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.
          </p>
          <div className="external-radio">
            <div className="external-tashqi" >
              <input className="external-input" type="radio" id="dewey" name="drone" value="dewey" />
              <label className="external-label" for="dewey">Tashqi</label>
            </div>
            <div className="external-tashqi">
              <input className="external-input" type="radio" id="dewey" name="drone" value="dewey" />
              <label className="external-label" for="dewey">Ichki makon</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
