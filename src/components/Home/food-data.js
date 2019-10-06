import React, { Component, useState } from 'react';
import almond from '../../assets/almond-svgrepo-com.svg';
import beef from '../../assets/beef-steak-svgrepo-com.svg';
import car from '../../assets/car-compact-svgrepo-com.svg';
import Axios from 'axios';


const fakeData = {
    foodItem: 'Apple',
    amount: '1/day',
    emissions: '0.0329',
    miles: '0.0877',
    showers: '0.2192'
};

export const FoodData = (props) => {
    const [item, setItem] = useState([]);
    Axios.get('/days/' + props.date).then(response => {
        setItem(response.data)
    }).then(error => {
        console.log(error)
    })
    return (
        <>
        <div className={'app-container'}>
            <h2>Search and Track</h2>
            <label for="foods">Add a food item</label>
            <select id="foods">
                <option>Food 1</option>
                <option>Food 2</option>
            </select>
            <div className={'card'}>
                <span className={'card-pointer'}></span>
                <div className={'card-header'}>
                    <img className={'icon'} src={beef} alt={'img'}/>
                    <h3 className={'card-name'}>{fakeData.foodItem} </h3>
                    <div className={'card-emissions'}>
                        <span className={'emissions'}>{fakeData.emissions}</span>
                        <span>(Serving:{fakeData.amount})</span>
                    </div>
                </div>
                <div className={'metrics'}>
                    <h4 className={'metrics-heading'}>
                        The same impact as:
                    </h4>
                    <div className={'metrics-container'}>
                        <div className={'metrics-item'}>
                            <p className={'styled-data'}>{fakeData.miles} Miles driven</p>
                        </div>
                        <div className={'metrics-item'}>
                            <img className={'icon'} src={car} alt={''}/>
                            <p className={'styled-data'}>{fakeData.miles} Showers (8 minutes)</p>
                        </div>
                        <div className={'metrics-item'}>
                            <img className={'icon'} src={almond} alt={''}/>
                            <p className={'styled-data'}>{fakeData.miles} Days heating a house</p>
                        </div>
                    </div>
                </div>

                
            </div>
            <button className={'button_primary'}>+ Add this food today</button>
            
        </div>
        </>
    )
};