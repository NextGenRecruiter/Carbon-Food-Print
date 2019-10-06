import React, { Component, useState } from 'react';
import almond from '../../assets/almond-svgrepo-com.svg';
import beef from '../../assets/beef-steak-svgrepo-com.svg';
import car from '../../assets/car-compact-svgrepo-com.svg';
import shower from '../../assets/bathtub-with-opened-shower-svgrepo-com.svg';
import house from '../../assets/real-estate-house-property-for-business-svgrepo-com.svg';
import Axios from 'axios';


const fakeData = {
    foodItem: 'Beef Steak',
    amount: '75g',
    emissions: '7.73',
    miles: '19.72',
    showers: '2.00',
    heat: '1.22'
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
                    
                    
                </div>
                <div className={'emissions-data'}>
                    <strong>CO2 Emmissions</strong>
                    <span className={'emissions'}>{fakeData.emissions} kg</span>
                </div>
                <div className={'serving-data'}>(Serving:{fakeData.amount})</div>

                
                <div className={'metrics'}>
                    <h4 className={'metrics-heading'}>
                        The same impact as:
                    </h4>
                    <div className={'metrics-container'}>
                        <div className={'metrics-item'}>
                            <img className={'icon'} src={car} alt={''}/>
                            <span className={'metric-data'}><strong>{fakeData.miles}</strong> Miles driven</span>
                        </div>
                        <div className={'metrics-item'}>
                            <img className={'icon'} src={shower} alt={''}/>
                            <span className={'metric-data'}><strong>{fakeData.showers}</strong> Showers (8 minutes)</span>
                        </div>
                        <div className={'metrics-item'}>
                            <img className={'icon'} src={house} alt={''}/>
                            <span className={'metric-data'}><strong>{fakeData.heat}</strong> Days heating a house</span>
                        </div>
                    </div>
                </div>

                <button className={'button_primary'}>+ Add this food today</button>
            </div>
            
        </div>
        </>
    )
};