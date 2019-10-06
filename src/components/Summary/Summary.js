import React, { Component } from 'react';
import FoodSummaryData from './food-summary-data'

class FoodData extends Component {

    render() {

        return (
            <div>
              <FoodSummaryData date={'2019-10-05'} />
            </div>
        )
    }
}

export default FoodData;