import React, { Component } from 'react';
import caen from "../../icons/caen.png";
import eecs from "../../icons/eecs.png";
import tub from "../../icons/tub.png";
// import na from "../../icons/na.png";
import ksea from "../../icons/ksea.png";

class Resume extends Component {
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
      <div className={style}>
        <div className="resume">
          {/* Experience */}
          <p className="header top"> EXPERIENCE </p>
          <hr />
          {/* CAEN */}
          <div className="resume-row">
            <img src={ caen } className="col" alt="caen" /> 
            <div className="col resume-right">
              <div className="row"> 
                <b className="company"> Computer-Aided Engineering Network </b>
                <div className="locdate"> Ann Arbor, MI </div>   
              </div>
              <div className="row"> 
                <div className="position"> Widnows System Administrator </div>
                <div className="locdate"> Jul 2018 - Aug 2018 </div>   
              </div>
            </div>
          </div>
          <div className="description">
            <ul>
              <li> Initiated and developed a college-wide an error reporting Windows Desktop tool using python to facilitate efficient 
                communication between users and CAEN software engineers </li>
              <li> Reported 1,000+ records by constructing an automatic software deployment reporting tool using python and the Google Cloud Platform 
                for software engineers to diagnose problems </li>
              <li> Improved efficiency of diagnosis of deployment errors by constructing a script that automatically sends 
                error messages on Slack channel using a Slack bot API </li>
            </ul>
          </div>
          < div className="resume-row" />
          {/* IA */}
          <div className="resume-row">
            <img src={ eecs } className="col"  alt="eecs" /> 
            <div className="col resume-right">
              <div className="row"> 
                <b className="company"> EECS Instructional Staff at the University of Michigan </b>
                <div className="locdate"> Ann Arbor, MI </div>   
              </div>
              <div className="row"> 
                <div className="position"> Instructional Aide (Teaching Assistant) - EECS 281: Data Structures & Algorithms </div>
                <div className="locdate"> Sep 2018 - present </div>   
              </div>
            </div>
          </div>
          <div className="description">
            <ul>
              <li> Assisted a class of 730 students in designing, constructing, and testing projects that utilize data structures and algorithms
                during Office Hours as well as online Q&A web service </li>
              <li> Instructed 2-hour weekly lab sessions covering course materials, software tools, code optimization tips, and exam questions </li>
              
            </ul>
          </div>

          {/* PROJECTS */}
          <br />
          <p className="header"> PROJECTS  </p>
          <hr />
          {/* TUB Autonomous Robot Programming Project */}
          <div className="resume-row">
            <img src={ tub } className="col"   alt="tub" /> 
            <div className="col resume-right">
              <div className="row"> 
                <b className="company"> Technical University of Berlin </b>
                <div className="locdate"> Berlin, Germany </div>   
              </div>
              <div className="row"> 
                <div className="position"> Software Engineer for Autonomous Robot Programming Project </div>
                <div className="locdate"> May 2018 - Jun 2018 </div>   
              </div>
            </div>
          </div>
          <div className="description">
            <ul>
              <li> Developed a python script to connect and control m3pi robot to move and to display data on its screen via Bluetooth </li>
              <li> Implemented a closed-loop control algorithm on C++ with Mbed OS platform to make robot to automatically follow a line and
                find a designated warehouse station given an input </li>
              <li> Awarded first place in a competition by surpassing the other team’s time record by average of ~37.89% </li>
            </ul>
          </div>
          < div className="row" />
          {/* iOS */}
          <div className="resume-row">
            {/* <div className="col left1">
              <img src={ na } alt="N/A" /> 
            </div> */}
            <div className="col resume-right">
              <div className="row"> 
                <b className="company"> iOS App Group Project </b>
                <div className="locdate"> Ann Arbor, MI </div>   
              </div>
              <div className="row"> 
                <div className="position"> Developer of EAT - Eat in All the Time </div>
                <div className="locdate"> Jul 2018 </div>   
              </div>
            </div>
          </div>
          <div className="description">
            <ul>
              <li> Designed an iOS application using Swift to assist college students to optimize ingredients on hand and reduce spending </li>
              <li> Constructed backend using Core Data that produces a list of potential recipes based on a list of ingredients the user inputs </li>
              <li> Implemented a shopping list feature and a favorites bar feature to provide quick access to pre-organized list of recipes </li>
            </ul>
          </div>


          {/* LEADERSHIP */}

          <p className="header"> LEADERSHIP </p>
          <hr />
          {/* KSEA */}
          <div className="resume-row">
            <img src={ ksea }  className="col"   alt="ksea" /> 
            <div className="col resume-right">
              <div className="row"> 
                <b className="company"> Korean American Scientists and Engineers Association (KSEA) </b>
                <div className="locdate"> Ann Arbor, MI </div>   
              </div>
              <div className="row"> 
                <div className="position"> Vice President & Treasurer | Past: Event Coordinator </div>
                <div className="locdate"> Aug 2017 - present </div>   
              </div>
            </div>
          </div>
          <div className="description">
            <ul>
              <li> Increased attendance of Mass Meeting by 100% by actively managing workflow, advertising, and promoting KSEA </li>
              <li> Initiated and managed the bi-weekly emails to increase awareness of KSEA and to inform general members of upcoming events </li>
              <li> Managed 10 board members and facilitated transparent communication by initiating incorporation of task management software </li>
            </ul>
          </div>

          {/* LANGUAGES */}
          <p className="header"> LANGUAGES </p>
          <hr />
          {/* KSEA */}
          <div className="description lang">
            <ul>
              <li> Proficient with C++ </li>
              <li> Intermediate with Python, C, Swift, CSS, HTML, JavaScript, React JS </li>
              <li> Fluent in Korean and English </li>
            </ul>
          </div>

          {/* ACTIVITIES */}
          <p className="header"> ACTIVITIES </p>
          <hr />
          {/* KSEA */}
          <div className="description lang">
            <ul>
              <li> Girls in Electrical Engineering and Computer Science (GEECS) </li>
              <li> Women in Science and Engineering Residence Program (WISE RP) </li>
            </ul>
          </div>

        </div> 
      </div> // col right
    );
  }
}

export default Resume;
