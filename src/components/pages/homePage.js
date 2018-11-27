import React, { Component } from 'react';
import window_pic from '../../image/window.jpeg';
import bicycle from '../../image/bicycle.jpeg';
import flower_paint from '../../image/flower_paint.jpeg';
import flower_res from '../../image/flower_restaurant.jpeg';
import sculpture from '../../image/sculpture.jpeg';
import flower_street from '../../image/flower_street.jpeg';
import { slide as Menu } from 'react-burger-menu';

class Homepage extends Component {

  constructor() {
    super(); 
    this.state = {
      width: window.innerWidth,
    };
  }

  showSettings (event) {
    event.preventDefault();
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  };
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  }


  render() {
    const { width } = this.state;
    const isMobile = width <= 700;
    var style = "";
    if (isMobile) {
      style="";
    }
    return (
      <div className="home">
        <div className="row">
          <div className="col-image">
            <img src={ flower_paint } alt="flower_paint" />
          </div>
          <div className="col-image">
            <img src={ window_pic } alt="window" />
          </div>
          <div className="col-image">
            <img src={ sculpture } alt="sculpture" />
          </div>
        </div>
        <div className="row">
          <div className="col-image">
            <img src={ flower_street } alt="flower_street" />
          </div>
          <div className="col-image">
            <img src={ bicycle } alt="bicycle" />
          </div>
          <div className="col-image">
            <img src={ flower_res } alt="flower_res" />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
