import React, { Component } from 'react';

class Hobbies extends Component {
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
      <div className={ style }>
        <h1>
          Under Construction :o 
        </h1>
      </div>
    );
  }
}

export default Hobbies;
