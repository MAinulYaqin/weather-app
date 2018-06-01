import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API_KEY = 'fb234db3d1e625c41b4b72bc222de3ce';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : undefined
    }
  }

  componentWillMount() {
    this.fetchData('Surabaya')
  }

  async fetchData(city) {
    let fetching = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    let fetchingFinished = await fetching.json()

    this.setState({data: fetchingFinished})

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to weather App</h1>
        </header>
        <p className="App-intro">
          description {console.log(this.state.data)}
        </p>
      </div>
    );
  }
}

export default App;
