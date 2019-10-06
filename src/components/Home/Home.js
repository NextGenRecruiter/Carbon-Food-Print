import React, { Component } from 'react';
import DropDown from './dropdown';
import Footer from '../Footer/navigation-footer';

class Home extends Component{

render(){
 
  return (
    <div className={'app'}>
      <DropDown/>
      <Footer 
        dashboardLink={'dashboard'}
        homeLink={'/home'}
        summaryLink={'/summary'}
        titleDashboardLink={'Dashboard'}
        titleHomeLink={'Home'}
        titleSummaryLink={'Summary'}
      />
    </div>
  )
}
}
export default Home;