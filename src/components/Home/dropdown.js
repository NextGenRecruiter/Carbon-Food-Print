import React, { Component } from 'react'
import axios from 'axios'
import { FoodData } from './food-data';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

class DropDown extends Component{
   state = {
       foodItem:[
           'Apple',
           'Avocado',
           'Banana',
           'Beans',
           'Beef',
           'Beer',
           'Berries',
           'grapes',
           'bread',
           'cheese',
           'chicken',
           'chocolate(dark)',
           'chocolate(milk)',
           'citrus fruit',
           'coffee',
           'Eggs',
           'Fish(farm)',
           'Lamb',
           'Almond Milk',
       ],
       Item:'',
       dataObject:[],
       show: false
   }
componentDidMount = () =>{
   this.getItem();
}

getItem = () =>{
//    axios.get('/food/').then( (response) => {
//        this.setState({
//            dataObject:response.data,
//        })
//        //console.log(response.data);
//    }).catch((error)=>{
//        console.log(error);
//    });
}
setItem = (value) =>{
   this.setState({
       Item:value,
   })
}


foodCard = () => {
    return (
        <FoodData />
    )
}

render(){

   return(
       <>
       <select onChange={event => {console.log(event.target.value); this.setItem(event.target.value)}}>
       {this.state.foodItem.map(i => {
           return(
               <option key={i}>{i}</option>
           )
       })}
       </select>
       <Link onClick={this.getItem} to={`/home/${this.state.Item}`}>Enter</Link>
       <Switch>
       <Route
          path={'/home/beef'}
          render={this.foodCard}
        />
       </Switch>
       </>
   )
}
}
export default DropDown;