import React, { Component, useState } from 'react';
import FoodData from './food-data';
import Axios from 'axios';

class Summary extends Component {

  render() {

    return (
      <div>
        <FoodData date='2019-10-05'/>
      </div>
    )
  }
}
export default Summary;
