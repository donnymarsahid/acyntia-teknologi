import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={navbar ? "navbar-nav fixed-top change" : "navbar-nav fixed-top"}>
      <div className="container d-flex justify-content-between">
        <div className="logo">
          <Link to="/" className="text-decoration-none">
            <p className="m-0">Acyntia Teknologi</p>
          </Link>
        </div>
        <div className="link">
          <ul className="m-0 p-0 d-flex">
            <Link to="/" className="text-decoration-none">
              <li>Home</li>
            </Link>
            <li>Service</li>
            <Link to="/contactUs" className="text-decoration-none">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
