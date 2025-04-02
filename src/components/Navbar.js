// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">Social Media Analytics</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/top-users">Top Users</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/trending-posts">Trending Posts</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/feed">Feed</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
