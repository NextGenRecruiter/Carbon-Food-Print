import React, { Component } from 'react';
import DropDown from './dropdown';
import Footer from '../Footer/navigation-footer';

class Home extends Component{

render(){
 
  return (
    <div className={'app'}>
      <DropDown/>
      <Footer title={"View today's food"} link={'/summary'}/>
    </div>
  )
}
}
export default Home;