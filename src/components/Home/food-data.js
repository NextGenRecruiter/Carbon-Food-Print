import React, { Component, useState } from 'react';
import almond from '../../assets/almond-svgrepo-com.svg'
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

export const FoodData = (props) => {
    const [item, setItem] = useState([]);
    Axios.get('/days/' + props.date).then(response => {
        setItem(response.data)
    }).then(error => {
        console.log(error)
    })
    return (
        <>
        <div className={'food-card-container'}>
            <div className={'food-card'}>
                <div className={'header-container'}>
                   <p>{fakeData.foodItem} (Serving:{fakeData.amount})</p>
                </div>
                <div className={'icon-container'}>
                    <img className={'styled-img'} src={almond} alt={'img'}/>
                    <p className={'emissions'}>{fakeData.emissions}</p>
                </div>
                <div className={'info-container'}>
                    <div className={'info-heading'}>
                        What Does This Mean??
                    </div>
                    <div clasName={'info'}>
                        <div className={'info-item'}>
                            <img className={'styled-img'} src={almond} alt={'img'}/>
                            <p className={'styled-data'}>{fakeData.miles}</p>
                        </div>
                        <div className={'info-item'}>
                            <img className={'styled-img'} src={almond} alt={'img'}/>
                            <p className={'styled-data'}>{fakeData.miles}</p>
                        </div>
                        <div className={'info-item'}>
                            <img className={'styled-img'} src={almond} alt={'img'}/>
                            <p className={'styled-data'}>{fakeData.miles}</p>
                        </div>
                    </div>
                </div>

                
            </div>
            <button className={'add-button'}>+ Add this food today</button>
            
        </div>
        </>
    )
};
