import React, { Component } from 'react';
import { FoodData } from './food-data';
import Axios from 'axios';
import DropDown from './dropdown';
import Footer from '../Footer/navigation-footer';
import Recommendations from './recommendations';

class Home extends Component{

render(){
 
  return (
    <div>
      <DropDown/>
      <Recommendations />
      <Footer title={"View today's food"} link={'/summary'}/>
    </div>
  )
}
}
export default Home;