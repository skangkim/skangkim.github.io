import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
// components
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
// import Columns from './components/columnComponent/columns'
import HorizColumns from './components/columnComponent/columns_mobile'
import Homepage from './components/pages/homePage'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// import Products from './components/pages/products';
import AboutMe from './components/pages/aboutMe'
import Hobbies from './components/pages/hobbies'
import Projects from './components/pages/projects'
import Resume from './components/pages/resume'
import Teaching from './components/pages/teaching'

// import Lab from './components/labComponent/lab'

import './Assets/css/default.min.css'
class App extends Component {
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

    return (
      <Router>
      <div className="App">
        <Header />
        <div className="row"> 
          <Route exact path='/' component={Homepage} />
          {/* <Route exact path='/Products' component={Products} /> */}
          <Route exact path='/AboutMe' component={AboutMe} />
          <Route exact path='/Hobbies' component={Hobbies} />
          <Route exact path='/Projects' component={Projects} />
          <Route exact path='/Resume' component={Resume} />
          <Route exact path='/Teaching' component={Teaching} />
          <Route exact path='/Teaching/Lab9' component={Teaching} />
          <Route exact path='/Teaching/Lab8' component={Teaching} />
          <Route exact path='/Teaching/Lab7' component={Teaching} />
          <Route exact path='/Teaching/Lab6' component={Teaching} />
          <Route exact path='/Teaching/Lab5' component={Teaching} />
          <Route exact path='/Teaching/Lab4' component={Teaching} />
          <Route exact path='/Teaching/Lab3' component={Teaching} />
          <Route exact path='/Teaching/Lab2' component={Teaching} />
          <Route exact path='/Teaching/Lab1' component={Teaching} />

        </div>
        <Footer />
      </div>
      </Router>
    );
    
  }
}

export default App;
