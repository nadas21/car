import React from "react";
import "./main.css";
import { Car_about } from "../../components/Car_About";
import { External } from "../../components/external";
import { Button } from "../../components/button";

export const About = () => {
  return (
    <div className="About">
      <Button />
      <div className="container">
        <Car_about />
        <External />
      </div>
    </div>
  );
};
