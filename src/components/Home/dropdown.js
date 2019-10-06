import React, { Component } from 'react'
import axios from 'axios'
import { FoodData } from './food-data';

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
    this.setState.show = !this.setState.show;
//    axios.get('/food/' + this.state.Item).then( (response) => {
//        this.setState({
//            dataObject:response.data,
//        })
//        console.log(response.data);
//    }).catch((error)=>{
//        console.log(error);
//    });
}
setItem = (value) =>{
   this.setState({
       Item:value,
   })
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
       <button onClick={this.getItem}>Enter</button>

       { this.state.show ? <FoodData /> : null}
       </>
   )
}
}
export default DropDown;