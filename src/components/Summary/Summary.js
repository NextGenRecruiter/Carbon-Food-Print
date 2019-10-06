import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'

class FoodData extends Component {
    state = {
        foods: [],
        totals: []
    }
    componentDidMount = () => {
        // list of all foods in the current day
        Axios.get('/days/foods/' + this.props.date).then(response => {
            console.log(response)
            this.setState({
                ...this.state,
                foods: response.data[0].foods
            })
        }).then(error => {
            console.log(error)
        })
        // list of the totals comparisons
        Axios.get('/days/totals/' + this.props.date).then(response => {
            console.log(response)
            this.setState({
                ...this.state,
                totals: response.data[0]
            })
        }).then(error => {
            console.log(error)
        })
    }

    render() {

        return (
            <div class="app-container">
                <span class="date">{this.props.date}05-20-2019</span>
                <h2>Today's Impact</h2>
                <div class="card">
                	<h3>Summary</h3>
                	<p>Co2 Emissions Today: <span>147{this.state.totals.emissions} kg</span></p>
                	<div class="metrics">
                		<p>{this.state.totals.miles} Miles Driven</p>
                		<p>{this.state.totals.showers} Showers (8 minutes)</p>
                		<p>{this.state.totals.heating} Days heating a house</p>
                	</div>
                </div>
                <div>
                	<h3>Food that you have logged today</h3>
                	<Link to='/Home' class="button_primary"><span class="icon plus">+</span>Add another food today</Link>
                </div>
                <ul>
                	<li>Avocado</li>
                	<li>Steak</li>
                	<li>Potatos</li>
                    {this.state.foods.map(food => {
                        return <li>{food}Avocado</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default FoodData;