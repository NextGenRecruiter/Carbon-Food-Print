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
        Axios.get('/days/foods/' + this.props.date).then(response => {
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
    componentDidMount() {
        this.fetchFoods();
        this.fetchTotals();
    }

    render() {

        return (
            <div>
                <h2>{this.props.date}</h2>
                <h2>Summary</h2>
                <p>Co2 Emissions Today: {this.state.totals.emissions}</p>
                <p>{this.state.totals.miles} Miles Driven</p>
                <p>{this.state.totals.showers} Showers (8 minutes)</p>
                <p>{this.state.totals.heating} Days heating a house</p>

                <h2>Food that you have logged today</h2>
                <Link to='/Home'><button>Add another food today</button></Link>
                <ul>
                    {this.state.foods.map(food => {
                        return <li>{food}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default FoodData;