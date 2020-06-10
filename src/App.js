import React, { Component } from 'react';
import Title from './components/title/Title';
import Form from './components/form/Form';
import Weather from './components/weather/Weather';

import apiConfig from './apiKeys';

import './App.scss';

const API_KEY = apiConfig.weatherApiKey;

class App extends Component {

  state = {
    temperature: '',
    humidity: '',
    description: '',
    city:'',
    country:'',
    icon: '',
    error: null
  }

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
      const data = await response.json();

    this.setState({
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      city: data.name,
      country: data.sys.country,
      icon: data.weather[0].main,
      error: ''
    });

    } catch (err) {
      console.log(err.message);
      alert('Please fill in all fields');
      this.setState({
        error: err.message
      }, () => console.log(this.state))
    }
    
  }



  render() {

    const { temperature, humidity, description, city, country, icon, error } = this.state;

    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather} 
        />
        <Weather 
        temperature={temperature}
        humidity={humidity}
        description={description}
        city={city}
        country={country}
        icon={icon}
        error={error}
        />
      </div>
    );
  }
  
}

export default App;
