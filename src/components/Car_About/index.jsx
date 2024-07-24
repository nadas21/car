import React from "react";
import "./main.css";
import car from "../../assets/img/car.png";

export const Car_about = () => {
  return (
    <div className="Car_about">
      <div className="container">
        <div className="Car_about-inner">
          <h2 className="car-about-h2">Chevrolet Malibu</h2>
          <h4 className="car-about-text">329 900 000 so‘m dan</h4>
          <a className="car-about-img" href="#">
            <img src={car} alt="car" width={270} height={120} />
          </a>
          <div className="about-text">
            <h4 className="car-about-h4">
              Marka:<p className="car-about-p">CHEVROLET</p>
            </h4>
            <h4 className="car-about-h4">
              Tanirovkasi::<p className="car-about-p">yoq</p>
            </h4>
            <h4 className="car-about-h4">
              Motor:<p className="car-about-p">1.6</p>
            </h4>
            <h4 className="car-about-h4">
              Year::<p className="car-about-p">2016</p>
            </h4>
            <h4 className="car-about-h4">
              Color::<p className="car-about-p">Oq</p>
            </h4>
            <h4 className="car-about-h4">
              Distance:<p className="car-about-p">3000 km</p>
            </h4>
            <h4 className="car-about-h4">
              Gearbook:<p className="car-about-p">Avtomat karobka</p>
            </h4>
            <p className="car-about-p">
              Deseription: Mishina ideal holatda krasska top toza 100tali. Ayol
              kishiniki judayam akuratno haydalgan.{" "}
            </p>
            <hr />
            <h4 className="car-about-item-h4">
            Umumiy_xarajat:<p className="car-about-p">329 900 000 so'm dan</p>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
