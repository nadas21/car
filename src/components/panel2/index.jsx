import React from 'react';
import './main.css';
import { NavLink } from 'react-router-dom';

function Anel2() {
  return (
    <div className="app">
      <div className="button-container">
       <NavLink to={"/home"}>
       <button className="profile-button">Asosiyga qaytish</button>
       </NavLink>
      </div>
      <div className="profile-picture-container">
        <img src="path_to_image.jpg" alt="Profile" className="profile-picture" />
      </div>
    </div>
  );
}

export default Anel2;
