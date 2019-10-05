import React, { Component} from 'react';
import './App.css';
// import Header from '../Header/Header'
import Home from '../Home/Home'
import Summary from '../Dashboard/Dashboard'
import Dashboard from '../Dashboard/Dashboard'
import Social from '../Social/Social'
import { HashRouter as Router, Route} from 'react-router-dom'
import Header from '../Header/Header';
import Footer from '../Footer/navigation-footer';

class App extends Component{
  
  render(){
    return(
      <div>
        <Header/>
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
