import { CiIceCream } from "react-icons/ci";
import React from "react";
import "../index.css";
const Header = () => {
  return (
    <div className="header">
      <span>
        <CiIceCream size={30} className="icon" />
        <h3>Zénitude</h3>
      </span>
      <p>Savourer</p>
    </div>
  );
};

export default Header;
