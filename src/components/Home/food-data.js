import React, { Component, useState, useEffect } from 'react';
import almond from '../../assets/almond-svgrepo-com.svg';
import beef from '../../assets/beef-steak-svgrepo-com.svg';
import axios from 'axios'
import Recommendations from '../Home/recommendations';



export const FoodData = (props) => {
    const [data, setData] = useState();
    const getData = () => {
        axios.get('/food').then( (response) => {
            setData(response.data[0])
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    }
    useEffect(() => {
        getData();
    }, [])

    console.log(data)
    return (
        <>
        <div className={'app-container'}>
            <h2>Search and Track</h2>
            {/* <label htmlFor="foods">Add a food item</label>
            <select id="foods">
                <option>Food 1</option>
                <option>Food 2</option>
            </select> */}
            <div className={'card'}>
                <span className={'card-pointer'}></span>
                <div className={'card-header'}>
                    <img className={'icon'} src={beef} alt={'img'}/>
                    <h3 className={'card-name'}>{data ? data.food_item : ''} </h3>
                    <div className={'card-emissions'}>
                        <span className={'emissions'}>{data ? data.emissions_per_day_kg : ''}</span>
                        <span>(Serving:{data ? data.amount_per_day : ''})</span>
                    </div>
                </div>
                <div className={'metrics'}>
                    <h4 className={'metrics-heading'}>
                        The same impact as:
                    </h4>
                    <div className={'metrics-container'}>
                        <div className={'metrics-item'}>
                            <p className={'styled-data'}>{data? data.driven_miles : ''} Miles driven</p>
                        </div>
                        <div className={'metrics-item'}>
                            <img className={'icon'} src={almond} alt={''}/>
                            <p className={'styled-data'}>{data ? data.showers : ''} Showers (8 minutes)</p>
                        </div>
                        <div className={'metrics-item'}>
                            <img className={'icon'} src={almond} alt={''}/>
                            <p className={'styled-data'}>{data ? data.heating_days : ''} Days heating a house</p>
                        </div>
                    </div>
                </div>

                <Recommendations />
            </div>
            <button className={'button_primary'}>+ Add this food today</button>

        </div>
        </>
    )
};

export default FoodData;