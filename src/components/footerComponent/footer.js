import React, { Component } from 'react';
import email from "../../icons/email.png";
import github from "../../icons/github.png";
import insta from "../../icons/instagram.png";
import linkedIn from "../../icons/linkedIn.png";
import spotify from "../../icons/spotify.png";
// import { Link } from 'react-router-dom';


class Footer extends Component {
  render() {
    var emailadr = "mailto:skangkim0114@gmail.com"
    var gitadr = "https://github.com/skangkim";
    var linkedInadr = "https://www.linkedin.com/in/sukang-kim-94a332153/";
    var spotifyadr = "https://open.spotify.com/user/1a1z6fvex6lh8iaclw4lg1tzk/playlist/3sN5qbi4Wg2edpJGySF9Kg?si=o62m5XElS4mI6k9I0HNqWg";
    var instaadr = "https://www.instagram.com/dai1ypicts/";
    return (
      <footer>
        <hr />
        <div className="col-icon">
          <a href= { emailadr }><img className="icon" src={ email } alt="email"/></a>
          <a href= { gitadr }><img className="icon" src={ github } alt="github"/></a>
          <a href= { linkedInadr }><img className="icon" src={ linkedIn } alt="linkedIn"/></a>
          <a href= { spotifyadr }><img className="icon" src={ spotify } alt="spotify"/></a>
          <a href= { instaadr }><img className="icon" src={ insta } alt="insta"/></a>
        </div>
      </footer>
    );
  }
}
export default Footer;
