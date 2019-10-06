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
                        <span>(Serving:{data ? data.amount_per_day : ''})</span>
                    </div>
                </div>
                <div className={'card-header'}>
                    <div className={'card-emissions'}>
                        <span className={'emissions'}>This is contributing to <strong>{data ? data.emissions_per_day_kg : ''}kg</strong> of you daily greenhouse gas emissions</span>
                    </div>
                </div>
                <div className={'metrics'}>
                    <h4 className={'metrics-heading'}>
                        Which has the same impact as:
                    </h4>
                    <div className={'metrics-container'}>
                        <div className={'metrics-item'}>
                            <img className={'icon'} src={almond} alt={''}/>
                            <p className={'styled-data'}>Driving <strong>{data? data.driven_miles : ''}</strong> Miles</p>
                        </div>
                        <div className={'metrics-item'}>
                            <img className={'icon'} src={almond} alt={''}/>
                            <p className={'styled-data'}>Taking <strong>{data ? data.showers : ''}</strong> Showers (8 Minute)</p>
                        </div>
                        <div className={'metrics-item'}>
                            <img className={'icon'} src={almond} alt={''}/>
                            <p className={'styled-data'}>Heating a House for {data ? data.heating_days : ''} Days</p>
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

