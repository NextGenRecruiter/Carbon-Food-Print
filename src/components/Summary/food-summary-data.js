import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'

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
                	<h3>Summary</h3>
                	<p>Co2 Emissions Today: <span>{this.state.totals.emissions}kg</span></p>
                	<div className="metrics">
                		<p>{this.state.totals.miles} Miles Driven</p>
                		<p>{this.state.totals.showers} Showers (8 minutes)</p>
                		<p>{this.state.totals.heating} Days heating a house</p>
                	</div>
                </div>
                <div>
                	<h3>Food that you have logged today</h3>
                	<Link to='/Home' className="button_primary"><span className="icon plus">+</span>Add another food today</Link>
                </div>
                <ul>
                    {this.state.foods.map(food => {
                        return <li key={food}>{food}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default FoodData;