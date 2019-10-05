import React, { Component} from 'react';
import './App.css';
// import Header from '../Header/Header'
import Home from '../Home/Home'
import Summary from '../Summary/Summary'
import Dashboard from '../Dashboard/Dashboard'
import Social from '../Social/Social'
import { HashRouter as Router, Route} from 'react-router-dom'

class App extends Component{
  
  render(){
    return(
      <div>
        <Router>
          <Route  path='/Home' exact component={Home}/>
          <Route  path='/Dashboard' exact component={Dashboard}/>
          <Route  path='/Summary' component={Summary}/>
          <Route  path='/Social' exact component={Social}/>
        </Router>
      </div>
    )
  }

} 

export default App;
