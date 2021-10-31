import React from "react";
import Footer from "../assets/components/Footer";
import Navbar from "./components/Navbar";
import "../App.css";

const UpdatePortfolio = () => {
  return (
    <>
      <Navbar />
      <div className="custom-page add-portfolio d-flex justify-content-center align-items-center">
        <form className="box p-4">
          <h3 className="text-center">Update Portfolio</h3>
          <label htmlFor="title">Title</label>
          <br />
          <input type="text" name="title" id="title" />
          <br />
          <button type="submit" className="btn-custom">
            Update Portfolio
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdatePortfolio;
