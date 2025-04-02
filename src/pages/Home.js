// src/pages/Home.js
import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Welcome to Social Media Analytics</h1>
        <p>Track and analyze social media trends.</p>
      </div>
    </div>
  );
};

export default Home;
