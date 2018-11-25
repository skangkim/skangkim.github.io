import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Columns extends Component {
  render() {
    return (
        // <div className="row">
        <div className="col left"> 
          <div className="tab">

              <Link to="/" className="main">Main</Link>
              <br />
              <Link to="/AboutMe" className="about"> About Me </Link>
              <br />
              <Link to="/Resume" className="resume-tab"> Resume </Link>
              <br />
              <Link to="/Projects" className="projects"> Projects </Link>
              <br />
              <Link to="/Teaching" className="teaching"> Teaching </Link>
              <br />
              <Link to="/Hobbies" className="hobbies"> Hobbies </Link>
              <br />
          </div>
        </div>

        /* <div className="logo">
          LOGO
        </div>

        <nav>
          <ul>
            <li className="first">
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/Products"> Products </Link>
            </li>
            <li className="last">
              <Link to="/"> Contact </Link>
            </li>
          </ul>
        </nav> */
    );
  }
}

export default Columns;
