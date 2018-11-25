import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import profile_image from '../../image/cropped-me.gif'

class AboutMe extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  };

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 700;
    var style = "col right";
    if (isMobile) {
      style="";
      var add_padding = <br />;
    }
    return (
      <div className={ style }>
        <div className="profile">
          <img src={ profile_image } alt="profile"/>
          <p> {add_padding}
            Hi! My name is Sukang Kim, but feel free to call me Sabina. 
            <br /> I am an undergraduate engineering student at the University of Michigan studying Computer Science.
            <br /> I have a great passion in learning, applying, and teaching Computer Science.
            <br /> After graduation in April 2020, I intend to become a software engineer.
            <br />
            <br /> <b> About me ...  </b>
            <br /> I'm a driven learner and a passionate teacher!
            <br /> As an incoming freshman who had no CS background, I was intimidated by others who already had experience in CS.
            However, as a driven learner, I was able to explore CS and found my passion in CS.
            <br /> I am genuinly amazed by how easy it is to learn and explore challeneges, so it's always interesting!
            I am greatful that I was able to find my passion in my freshman year. 
            Therefore, I want to influence people that CS is actually fairly simple to understand in contrast to seemingly complicated terminologies.
            <br /> 
            <br /> I'm also a huge fan of art!
            <br /> I love to explore and go to art museums in my free time. Taking pictures and painting with my amateur skills calm me down. 
            <br /> This Winter 2019, I'm planning to take figure drawing class. I also intend to take art history class next year, so please recommend me an art history class at the U of M!
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
