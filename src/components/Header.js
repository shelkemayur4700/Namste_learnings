import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header-container">
      <div className="img-container">
        <img
          className="img"
          src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png"
          alt="brand_logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
