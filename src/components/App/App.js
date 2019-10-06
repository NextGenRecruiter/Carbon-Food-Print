import React, { Component} from 'react';
import './App.css';
// import Header from '../Header/Header'
import Home from '../Home/Home'
import Summary from '../Summary/Summary'
import Dashboard from '../Dashboard/Dashboard'
import Social from '../Social/Social'
import { HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Header from '../Header/Header';

class App extends Component{
  
  render(){
    return(
      <div>
        <Header/>
        <Router>
          <Switch>
            <Route  path='/home' component={Home}/>
            <Route  path='/dashboard' exact component={Dashboard}/>
            <Route  path='/summary' exact component={Summary}/>
            <Route  path='/social' exact component={Social}/>
            <Redirect to="/home" />
          </Switch>
        </Router>
      </div>
    )
  }

} 

export default App;
