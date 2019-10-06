import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Axios from 'axios'


class Setting extends Component {
  state = {
    data: []
  }
  fetchData = () => {
    Axios.get('/days/data').then(response => {
      console.log(response)
      this.setState({
        data: response.data
      })
    }).then(error => {
      console.log(error)
    })
  }
  componentDidMount = () => {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <h1>HI HI</h1>
        <h2>HI HI</h2>

        <p>Hello from Setting</p>
        {JSON.stringify(this.state.data)}
        <div>
          <LineChart width={300} height={200} data={this.state.data}>
            <Line type="monotone" dataKey="emissions" stroke="#8884d8"/>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="day" />
            <YAxis/>
          </LineChart>
        </div>

      </div>
    )
  }
}
export default Setting;