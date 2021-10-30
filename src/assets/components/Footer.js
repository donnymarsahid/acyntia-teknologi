import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Footer = () => {
  return (
    <footer class="d-flex align-items-center mt-5">
      <div class="container-footer">
        <div class="row">
          <div class="col-md-4 call">
            <p>Contact Us Via</p>
            <p>
              <a href="/">
                Hub : 0838-7223-9021 <br />
              </a>
              <a href="/">Email : acyntiateknologi@gmail.com</a>
            </p>
            <ul className="p-0">
              <li>
                <Link to="/" className="link-footer">
                  <p>Term & Condition</p>
                </Link>
              </li>
              <Link to="/" className="link-footer">
                <p>Privacy Policy</p>
              </Link>
            </ul>
          </div>
          <div class="col-md-4 text-center sosmed">
            <p>Follow Us</p>
            <a href="http://instagram.com/boola_olahraga">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="http://facebook.com/boolaolahraga">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="http://www.twitter.com/boola_olahraga">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
          <div class="col-md-4 footer-menu">
            <p>FOOTER MENU</p>
            <ul>
              <li>
                <Link to="/" className="link-footer">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link to="/" className="link-footer">
                  <p>Contact Us</p>
                </Link>
              </li>
              <li>
                <Link to="/" className="link-footer">
                  <p>News</p>
                </Link>
              </li>
            </ul>
          </div>
          <p class="text-center mt-5">&copy; copyright 2021 | Acyntia Teknologi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
