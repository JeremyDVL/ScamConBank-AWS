import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a
        href="/#"
        className="navbar-brand mb-1 h1">
          <img
          className="align-top ml-5 mr-4"
          src={require("./images/bank.png")}
          width="30" height="30" alt=''
          /><h4 className="mr-5 ml-3">ScamCon</h4>
        </a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link pl-5 ml-5 mr-5" href="#/create/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/data/">AllData</a>
          </li>         
        </ul>
      </div>
    </nav>
    </>
  );
}



export default NavBar;  