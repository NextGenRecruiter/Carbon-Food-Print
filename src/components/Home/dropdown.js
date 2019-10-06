import React, { Component } from 'react'
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
       show: true
   }
// componentDidMount = () =>{
//    this.getItem();
// }

getItem = () =>{
    this.setState({show: false});
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
       <div className={'app-container dropdown'}>
          <label>Add a food item</label>
         <select onChange={event => {console.log(event.target.value); this.setItem(event.target.value)}}>
          <option value="-1">Select a food</option>
         {this.state.foodItem.map(i => {
             return(
                 <option key={i}>{i}</option>
             )
         })}
         </select>
         <Link className={'dropdown-search'} onClick={this.getItem} to={`/home/${this.state.Item}`}>Enter</Link>
         {this.state.show && <div id={'fun-fact'}>
          <h2>Did you know...</h2>
          <p>Water Has a <strong>High</strong> Carbon Footprint</p>
          <p>The efforts to maintain and purify our drinking water can take a huge toll on carbon emissions. Water conservation is one of the keys to reducing our CO2 output and saving our planet from global warming. </p>
         </div>}
       </div>

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