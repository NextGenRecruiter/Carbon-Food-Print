import React, { Component } from 'react';
import { LineChart, BarChart, Bar, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Axios from 'axios'
import './Dashboard.css';


class Setting extends Component {
  state = {
    data: [],
    greatest: { emissions: 0 }
  }
  fetchData = () => {
    Axios.get('/days/data').then(response => {
      console.log(response)
      this.setState({
        ...this.state,
        data: response.data
      })
      this.findGreatest();
    }).then(error => {
      console.log(error)
    })
  }
  findGreatest = () => {
    let array = this.state.data;
    for (let i in array) {
      if (array[i].emissions > this.state.greatest.emissions) {
        this.setState({
          ...this.state,
          greatest: array[i]
        })
      }
    }
  }
  componentDidMount = () => {
    this.fetchData();
  }
  renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${this.state.data.emissions}`}</text>;
  };

  render() {
    return (
      <div>
        <div className='height-of-header'></div>
        <div>
          <h3>Your Carbon Foodprint this week:</h3>
          <LineChart width={400} height={200} data={this.state.data} className='chart'>
            <Line type="monotone" dataKey="emissions" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="day" />
            <YAxis />
          </LineChart>
          <BarChart width={400} height={200} data={this.state.data} className='chart'>
            <XAxis dataKey="day" />
            <YAxis dataKey='emissions'/>
            <Bar type="monotone" dataKey="uv" barSize={30} fill="#8884d8"
              label={this.renderCustomBarLabel} />
          </BarChart>
        </div>
        <p></p>
        <h3>Your peak emission day: {this.state.greatest.emissions} kg</h3>
        <p>Comparable to:</p>
        <ul>
          <li>Driving {this.state.greatest.miles} miles,</li>
          <li>Taking {this.state.greatest.showers} showers, or</li>
          <li>Heating your house for {this.state.greatest.heating} days</li>
        </ul>



      </div>
    )
  }
}
export default Setting;