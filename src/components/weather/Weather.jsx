import React, { Component } from 'react'

import './weather.styles.scss';

class Weather extends Component {

    

    render() {
        const {error, temperature, city, country, humidity, description, icon } = this.props;
        let displayIcon = '11';
        switch (icon) {
            case "Clouds":
                displayIcon = 'fa-cloud'
                break;
            case "Rain":
                displayIcon = 'fa-cloud-showers-heavy'
                break;
            case "Clear":
                displayIcon = 'fa-sun'
                break;
            case "Thunderstorm":
                displayIcon = 'fa-bolt'
                break;
            case "Drizzle":
                displayIcon = 'fa-cloud-rain'
                break;
            case "Snow":
                displayIcon = 'fa-snowflake'
                break;
            default:
                displayIcon = icon
                break;
        }
        
        return (
            <div>
                {
                !error && city && country && description ? 
                (
                <div className="weather-container">
                <i className = {`fas ${displayIcon} fa-8x`} />
                <p>Temperature: {temperature}&#8457;</p>
                <p>City: {city}</p>
                <p>Humidity: {humidity}</p>
                <p>Description: {description}</p>
                 </div>   ) :
                null
            }
            </div>
        )
    }
}

export default Weather;