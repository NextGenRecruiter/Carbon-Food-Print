import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import car from '../../assets/car-compact-svgrepo-com.svg';
import shower from '../../assets/bathtub-with-opened-shower-svgrepo-com.svg';
import house from '../../assets/real-estate-house-property-for-business-svgrepo-com.svg';

class FoodData extends Component {
    state = {
        foods: [],
        totals: []
    }
    fetchFoods = () => {
        // list of all foods in the current day
        Axios.get('/days/foods').then(response => {
            console.log(response)
            this.setState({
                ...this.state,
                foods: response.data[0].foods
            })
        }).then(error => {
            console.log(error)
        })
    }
    fetchTotals = () => {
        // list of the totals comparisons
        Axios.get('/days/totals').then(response => {
            console.log(response)
            this.setState({
                ...this.state,
                totals: response.data[0]
            })
        }).then(error => {
            console.log(error)
        })
    }
    componentDidMount() {
        this.fetchFoods();
        this.fetchTotals();
    }

    render() {

        return (
            <div className="app-container">
                <span className="date">{this.props.date}10-05-2019</span>
                <h2>Today's Impact</h2>
                
                    
                <div className="card">
                    
                    <div className={'emissions-data'}>
                	   <span>Co2 Emissions Today:</span> 
                       <strong>{this.state.totals.emissions}kg</strong>
                	</div>
                    <div className="metrics">
                        <h4 className={'metrics-heading'}>
                        Which has the same impact as:
                        </h4>
                        <div className={'metrics-container'}>
                            <div className={'metrics-item'}>
                              <img className={'icon'} src={car} alt={''}/>
                		      <p>{this.state.totals.miles} Miles Driven</p>
                            </div>
                            <div className={'metrics-item'}>
                            <img className={'icon'} src={shower} alt={''}/>
                		      <p>{this.state.totals.showers} Showers (8 minutes)</p>
                            </div>
                            <div className={'metrics-item'}>
                            <img className={'icon'} src={house} alt={''}/>
                              <p>{this.state.totals.heating} Days heating a house</p>
                            </div>
                       </div>
                    </div>

                    <div className={'food-list-container'}>
                        <h3>Food that you have logged today</h3>
                        
                        <ul className={'food-list'}>
                            {this.state.foods.map(food => {
                                return <li key={food}>{food}</li>
                            })}
                        </ul>
                        <Link to='/Home' className="button_primary"><span className="icon plus">+</span>Add another food today</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default FoodData;