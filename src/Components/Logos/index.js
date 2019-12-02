import React from "react";

import "./styles.css";

import Livelo from "../../Assets/logo-livelo.png";
import AIS from "../../Assets/logo-ais.svg";

const Logos = () => (
  <div className="logo row">
    <div className="logoItem col-xs-6">
      <img id="Livelo" src={Livelo} alt="Livelo" />
    </div>
    <div className="logoItem col-xs-6">
      <img id="AIS" src={AIS} alt="Livelo" />
    </div>
  </div>
);

export default Logos;
