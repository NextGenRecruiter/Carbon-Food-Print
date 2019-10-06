import React, {useState, useEffect} from 'react';
import axios from 'axios'

export const Recommendations = () => {
  const [data, setData] = useState();
    const getData = () => {
        axios.get('/type').then( (response) => {
            setData(response.data)
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
            <h3>Recommendations for lower impact</h3>
            {data ? data.map(i => {
              return(
                <div className={'metrics-container'}>
                  <div className={'metrics-item'}>
                      <p className={'styled-data'}>{data? `${i.food_item} (${i.emissions_per_day_kg}kg/day)` : ''}</p>
                  </div>
                </div>
              )
            }) : null}
        </div>
        </>
    )
};

export default Recommendations;