import React from 'react';
import './LoginPanel.css';
import trophyLogo from './../img/trophy.svg';

const loginpanel = () => {
  return <div className="loginPanelContainer">
  <img id="trophyLogo" src={trophyLogo} alt="Trophy icon"/>
  <p className = "logoText">LAST MAN STANDING</p>
  </div>

};

export default loginpanel;
