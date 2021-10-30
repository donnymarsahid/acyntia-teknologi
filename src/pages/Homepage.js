import React from "react";
import Navbar from "../assets/components/Navbar";
import "./style.css";
import chart from "../assets/img/line-chart.png";
import computer from "../assets/img/computer.png";
import heartbeat from "../assets/img/heartbeat.png";
import exPortfolio from "../assets/img/ex-portfolio.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="jumbotron d-flex justify-content-center align-items-center flex-column">
          <h1>ACYNTIA TEKNOLOGI</h1>
          <h3>Leading Solution Provider</h3>
          <button className="btn-jumbotron">WHAT WE DO</button>
        </div>
        <section className="service">
          <div className="box-title d-flex justify-content-center">
            <div className="title text-center">
              <h3>Our Services</h3>
              <p>Acyntia Teknologi was formed in 2021 and the number of employees has increased to 24 full time employees</p>
            </div>
          </div>
          <div className="card-service mt-4">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="box">
                    <h5>Business Consultant</h5>
                    <img src={chart} alt="chart" width="85" />
                    <p>Provide consulting services for investors coming to Indonesia and business matching opportunities</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <h5>IT Consultant & Solutions</h5>
                    <img src={computer} alt="chart" width="85" />
                    <p>IT application development consulting for commercials, retails, banking, financial institutions</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <h5>Telecommunication Infrastructure</h5>
                    <img src={heartbeat} alt="chart" width="85" />
                    <p>Implementation, maintenance, troubleshoot, and management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio service">
          <div className="box-title d-flex justify-content-center">
            <div className="title text-center">
              <h3>Portfolio</h3>
              <Link to="/add-portfolio">
                <button className="btn-add-portfolio">ADD PORTFOLIO</button>
              </Link>
            </div>
          </div>
          <div className="card-portfolio mt-4">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="box">
                    <img src={exPortfolio} alt="ex-portfolio" width="100%" />
                    <div className="title-portfolio d-flex justify-content-between">
                      <p className="m-0">Portfolio One</p>
                      <div className="icon">
                        <Link to="/update-portfolio">
                          <i class="far fa-edit me-3"></i>
                        </Link>
                        <i className="fas fa-trash"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
