import React, { Component } from 'react';
import { FoodData } from '../Summary/food-data';

class Home extends Component{

render(){
  return (
    <div>
   <p>Hello from Home</p>
   <FoodData/>
    </div>
  )
}
}
export default Home;