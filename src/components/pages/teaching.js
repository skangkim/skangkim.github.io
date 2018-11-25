import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Lab from '../labComponent/lab';

class Teaching extends Component {
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
    var lab9url = <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTwEYjy-bgUcG_MOJsos1creQkZCueBN3XYYvA2BzsT9Y7eSxg2MV8A-SLbLaWkZggJ44V-r6jd4P1R/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    var lab8url = <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRRRGPQrMZl_ugE1_BhTokUTQq3pSUEL7p3F477ck7sDXNbWQof3i98Mrgm641JNGqkpYWl6kBC7kKJ/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    var lab7url = <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSq_TM-Itl6gcgcUIfV-NiQJPn_7bJzrY_1tydfa4Nj4QnEuVKai55198ZK55rq5tmtzzcs9i0nmLU9/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    var lab6url = <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQfPFB4mY-Qj3CYLrbOgYK0K94-BIXi10oZpRq45IduX7R7pteeTx5fLK1OfAFTowNClrLLMndbRTTb/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    var lab5url = <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTBo9t_HnRWHv-ON2ubaUw-PAVib2bFLzUDw2Jdy4tj5_t_gdjWM3Je3JFPJMdWes4oyMadcG7YCNdt/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    var lab4url = <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT-bjvogI6qtC3FUOcK3WunGzU_Djx6ZKYskN_7Kndi1auZ4oY1ajFAgjJ9ehhRAS0Lqz12AXoCScUg/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    var lab3url = <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRyAMYdasJuuWg4lihht6L08rr-Cr9nk6p2CtIuMF4o5EaOsa0lDB23tgKkQTI84RDkP9deXgZ-gOqY/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    var lab2url = <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRr9WhwIS1XG7v8xhby7tforhqZJiPZP2OiSrzBrbNX_FLlFH3LNy9nKttFczkD4cLTBrBrCkcyQPQQ/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    var lab1url = <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR_cX2t7EQwhhXzZv3uO4BE8RYCf8ZPAQ41ofXTf_pia63MSnyGDVz7Ob72JVT4G8c1S1W1l46xAinE/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

    return (
      <Router> 
        <div className={ style }>
          <div className="row-lab">
            <div className="col">
              <Link to="/Teaching/Lab9" className="lab-link"> Lab 9 </Link>
            </div>
            <div className="col">
              <Link to="/Teaching/Lab8" className="lab-link"> Lab 8 </Link>
            </div>
            <div className="col">
              <Link to="/Teaching/Lab7" className="lab-link"> Lab 7 </Link>
            </div>
            <div className="col">
              <Link to="/Teaching/Lab6" className="lab-link"> Lab 6 </Link>
            </div>
            <div className="col">
              <Link to="/Teaching/Lab5" className="lab-link"> Lab 5 </Link>
            </div>
            <div className="col">
              <Link to="/Teaching/Lab4" className="lab-link"> Lab 4 </Link>
            </div>
            <div className="col">
              <Link to="/Teaching/Lab3" className="lab-link"> Lab 3 </Link>
            </div>
            <div className="col">
              <Link to="/Teaching/Lab2" className="lab-link"> Lab 2 </Link>
            </div>
            <div className="col">
              <Link to="/Teaching/Lab1" className="lab-link"> Lab 1 </Link>
            </div>
          </div>

          <div className="row">
            {/* <Route exact path='/Teaching' component={Teaching} /> */}
            <Route exact path='/Teaching/Lab10' render={(props)=> <Lab {...props} labtitle="Lab 10" topic="n/a" laburl="n/a"/>} />
            <Route exact path='/Teaching/Lab9' render={(props)=> <Lab {...props} labtitle="Lab 9" topic="Graphs and MST" laburl={lab9url} />} />
            <Route exact path='/Teaching/Lab8' render={(props)=> <Lab {...props} labtitle="Lab 8" topic="Binary Trees, Binary Search Trees, AVL Trees" laburl={lab8url} />} />
            <Route exact path='/Teaching/Lab7' render={(props)=> <Lab {...props} labtitle="Lab 7" topic="Hash Table" laburl={lab7url} />} />
            <Route exact path='/Teaching/Lab6' render={(props)=> <Lab {...props} labtitle="Lab 6" topic="Midterm Question Review & Unordered_map and _set" laburl={lab6url} />} />
            <Route exact path='/Teaching/Lab5' render={(props)=> <Lab {...props} labtitle="Lab 5" topic="Sorting Algorithms" laburl={lab5url} />} />
            <Route exact path='/Teaching/Lab4' render={(props)=> <Lab {...props} labtitle="Lab 4" topic="Heaps & PQs" laburl={lab4url} />} />
            <Route exact path='/Teaching/Lab3' render={(props)=> <Lab {...props} labtitle="Lab 3" topic="Arrays, Linked Lists, Vectors, Stacks & Queues" laburl={lab3url} />} />
            <Route exact path='/Teaching/Lab2' render={(props)=> <Lab {...props} labtitle="Lab 2" topic="Complexity Analysis" laburl={lab2url} />} />
            <Route exact path='/Teaching/Lab1' render={(props)=> <Lab {...props} labtitle="Lab 1" topic="Intro to 281 & projects" laburl={lab1url} />} />
          </div>
        </div>
      </Router>
        

    );
  }
}

export default Teaching;
