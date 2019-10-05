import React from 'react';

const fakeData = {
    foodItem: 'Apple',
    amount: '1/day',
    emissions: '0.0329',
    miles: '0.0877',
    showers: '0.2192'
};

export const FoodData = () => {


    return (
        <div>
            <p>{fakeData.foodItem}</p>
            <button>ADD</button>

        </div>
    )
};