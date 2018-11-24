import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lab extends Component {
    // constructor(props){
    //     super(props);
    //     console.log(props);
    //     this.state = { labnum: props.labnum, topic:'', laburl: ''};
    // }
    render() {
        // var title = this.props.labtitle;
        var topic = this.props.topic;
        
        return (
            <div className="lab">
                <br />
                <div className="row">
                    <p>
                        {topic}
                    </p>
                </div>
                <div className="row">
                    {this.props.laburl}
                </div>
            </div>
            
        );
    }
}

export default Lab;
