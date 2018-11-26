import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="row">
          <p>  Sukang Sabina Kim</p>
        </div>
        {/* <div className="smallTitle" > -- </div> */}
        <div className="smallTitle" > Computer Science @ U of M </div>
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
