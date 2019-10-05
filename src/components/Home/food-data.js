import React from 'react';
import almond from '../../assets/almond-svgrepo-com.svg'

const fakeData = {
    foodItem: 'Apple',
    amount: '1/day',
    emissions: '0.0329',
    miles: '0.0877',
    showers: '0.2192'
};

export const FoodData = () => {
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