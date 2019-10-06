import React, { useState, useEffect } from 'react';
import beef from '../../assets/beef-steak-svgrepo-com.svg';
import axios from 'axios'
import car from '../../assets/car-compact-svgrepo-com.svg';
import shower from '../../assets/bathtub-with-opened-shower-svgrepo-com.svg';
import house from '../../assets/real-estate-house-property-for-business-svgrepo-com.svg';
import Recommendations from './recommendations';

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

    console.log(data);
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
                </div>


                <div className={'emissions-data'}>
                    <span>CO2 Emmissions</span>
                    <strong className={'emissions'}>{data ? data.emissions_per_day_kg : ''} kg</strong>
                </div>
                <div className={'serving-data'}>(Serving:{data ? data.amount_per_day : ''})</div>

                
                <div className={'metrics'}>
                    <h4 className={'metrics-heading'}>
                        Which has the same impact as:
                    </h4>
                    <div className={'metrics-container'}>
                        <div className={'metrics-item'}>
                            <img className={'icon'} src={car} alt={''}/>
                            <span className={'metric-data'}><strong>{data? data.driven_miles : ''}</strong> Miles</span>
                        </div>
                        <div className={'metrics-item'}>
                            <img className={'icon'} src={shower} alt={''}/>
                            <span className={'metric-data'}><strong>{data ? data.showers : ''}</strong> Showers (8 minutes)</span>
                        </div>
                        <div className={'metrics-item'}>
                            <img className={'icon'} src={house} alt={''}/>
                            <span className={'metric-data'}><strong>{data ? data.heating_days : ''}</strong> Days heating a house</span>
                        </div>
                    </div>
                </div>
                <Recommendations/>
            </div>
            <button className={'button_primary'}>+ Add this food today</button>

        </div>
        </>
    )
};

