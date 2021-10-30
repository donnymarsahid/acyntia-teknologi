import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar-nav fixed-top change">
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
            <Link to="/" className="text-decoration-none">
              <li>Service</li>
            </Link>
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
