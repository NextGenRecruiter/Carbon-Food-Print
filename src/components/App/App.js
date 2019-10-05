import React, { Component} from 'react';
import './App.css';
import Header from '../Header/Header'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Summary from '../Summary/Summary'
import Setting from '../Setting/Setting'
import Social from '../Social/Social'
import { HashRouter as Router, Route} from 'react-router-dom'

class App extends Component{
  
  render(){
    return(
      <div>
        <Header />
        <Router>
          <Route  path='/Login' exact component={Login}></Route>
          <Route  path='/Home' exact component={Home}></Route>
          <Route  path='/Summary' exact component={Summary}></Route>
          <Route  path='/Setting' exact component={Setting}></Route>
          <Route  path='/Social' exact component={Social}></Route>
        </Router>
      </div>
    )
  }

} 

export default App;
