import React, { Component } from 'react';

class Projects extends Component {
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
    }
    return (
      <div className="home">
        <div className={ style }>
          <h1>
            PROJECTS
          </h1>
          <p>
              PROJECTS
            Dummy text goes here!
            Dummy text goes here!
            Dummy text goes here!
            Dummy text goes here!
            Dummy text goes here! ohohoh
            
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;
