import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HorizColumns extends Component {
  render() {
    return (
        // <div className="row">
        <div className="tab"> 
              <Link to="/" className="main">Main</Link> | 
              <Link to="/AboutMe" className="about"> About Me </Link> | 
              <Link to="/Resume" className="resume-tab"> Resume </Link> | 
              <Link to="/Projects" className="projects"> Projects </Link> | 
              <Link to="/Teaching" className="teaching"> Teaching </Link> | 
              <Link to="/Hobbies" className="hobbies"> Hobbies </Link>
          </div>
    );
  }
}

export default HorizColumns;
