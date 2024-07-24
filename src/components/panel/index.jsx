import React from "react";
import "./main.css";
import { FaHome, FaQuestion, FaStore } from "react-icons/fa";

export const Panel = () => {
  return (
    <div className="panel">
      <div className="container2">
        <div className="panel-inner">
          <div className="side-panel">
            <div className="box">
              <div className="side-panel-item">
                <FaHome />
                <span>Asosiy</span>
              </div>
              <div className="side-panel-item">
                <FaStore />
                <span>E'lonlar</span>
              </div>
              <div className="side-panel-item">
                <FaQuestion />
                <span>Savollar</span>
              </div>
            </div>
            <div className="theme-toggle">
              <button className="theme-button light" />
              <button className="theme-button dark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
