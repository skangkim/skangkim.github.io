import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
// import style from '../../Assets/css/default.min.css'
// import { Link } from 'react-router-dom';

class Header extends Component {
  showSettings (event) {
    event.preventDefault();
  }
  render() {
    return (
      <header>
        <Menu width={ '200px' }>
          <Link to="/" className="main">Main </Link>
          <Link to="/AboutMe" className="about"> About Me </Link>
          <Link to="/Resume" className="resume-tab"> Resume </Link>
          <Link to="/Projects" className="projects"> Projects </Link>
          <Link to="/Teaching" className="teaching"> Teaching </Link>
          <Link to="/Hobbies" className="hobbies"> Hobbies </Link>
        </Menu>
        <div className="row">
          <p>  Sukang Sabina Kim</p>
        </div>
        <div className="smallTitle" > Computer Science @ U of M </div>
        <br />
      </header>
    );
  }
}

export default Header;
