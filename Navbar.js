import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand text-white" to="/">NavBar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link text-white" to="/">Home <span className="sr-only"></span></Link>
          </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/Card">Card</Link>
          </li> 
                <li className="nav-item">
                     <Link className="nav-link text-white" to="/Contact">Contact</Link>
                </li>
             </ul>
          </div>
        </nav>
    );
}

export default Navbar;