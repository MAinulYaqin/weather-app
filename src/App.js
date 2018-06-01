import React, { Component } from 'react';

// components
import Form from './components/form'
import Weather from './components/weather'
import './App.css';

const API_KEY = 'fb234db3d1e625c41b4b72bc222de3ce';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: undefined,
      temp: undefined,
      wind: undefined
    }
  }

  async fetchData(e) {
    e.preventDefault()

    console.log(e.target.elements.city.value)
    let fetching = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.elements.city.value}&appid=${API_KEY}&units=metric`)
    let fetchingFinished = await fetching.json()

    this.setState({
      weather: fetchingFinished.weather[0].description,
      temp: fetchingFinished.main.temp,
      wind: fetchingFinished.wind.speed
    })

    console.log(fetchingFinished)
  }

  render() {
    return (
      <div className="App">
        <Form getWeather={(e) => this.fetchData(e)} />
        <Weather weather={this.state.weather} temp={this.state.temp} wind={this.state.wind} />
      </div>
    );
  }
}

export default App;
