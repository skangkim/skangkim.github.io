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
    return (
      <div className="home hobby">
        Under Construction !!
        <br/>
        ~ Trynna show you guys the 1000000% ~
      </div>
    );
  }
}

export default Projects;
