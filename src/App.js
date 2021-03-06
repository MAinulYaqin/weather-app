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
      wind: undefined,
      img: '/img/md-weather-iconset/weather-clear.png'
    }
  }

  componentDidMount() {
    this.formHandle()
  }

  async fetchData(e) {
    e.preventDefault()

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${e.target.elements.city.value}&appid=${API_KEY}&units=metric`;
    let fetching = await fetch(url)
    let fetchingFinished = await fetching.json()

    this.setState({
      weather: fetchingFinished.weather[0].description,
      temp: fetchingFinished.main.temp,
      wind: fetchingFinished.wind.speed
    })

    console.log(fetchingFinished)
  }

  async formHandle() {
    let dom = await document.getElementById('city-input')
    dom.addEventListener('focus', () => {
        dom.style.borderBottom = '1px solid #000000c9'
    })
    dom.addEventListener('blur', () => {
        dom.style.borderBottom = '1px solid #0000008c'
    })
  }

  render() {
    return (
      <div className="App">
        <h3>Weather App</h3>
        <div className="sub-container">
          <Form getWeather={(e) => this.fetchData(e)} />
          <Weather weather={this.state.weather} temp={this.state.temp} wind={this.state.wind} img={this.state.img}/>
        </div>
      </div>
    );
  }
}

export default App;
