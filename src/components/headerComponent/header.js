import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="row">
          <p> <mark> Sukang Sabina Kim</mark></p>
        </div>
        
        <div className="smallTitle" > Computer Scientist </div>
        <br />
      </header>

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

export default Header;
