import React from "react";
import Navbar from "./components/Navbar";
import "../App.css";

const AddPortfolio = () => {
  return (
    <>
      <Navbar />
      <div className="custom-page add-portfolio d-flex justify-content-center align-items-center">
        <form className="box p-4">
          <h3 className="text-center">Add Portfolio</h3>
          <label htmlFor="title">Title</label>
          <br />
          <input type="text" name="title" id="title" />
          <br />
          <button type="submit" className="btn-custom">
            Add Portfolio
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPortfolio;
