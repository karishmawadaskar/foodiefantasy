import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";

function navbar() {
    return (
        <div className="navbar-container">
        <h1 >
        routing
        </h1>
        <div className="navbar">
        <Link to="/"className='navbar-page'>
          Home
          </Link>
        <Link to="/about" className="navbar-page">About</Link>
        <Link to="/contact" className="navbar-page">Contact</Link>
   
    </div>
    </div>
    )
}
export default navbar;