import React from 'react'

const WeatherInfo = ({ image, weather }) => {
  return (
    <div className="weatherContainer">
      <p className="weatherText">
        {weather.current.temperature} °C, {weather.current.weather_descriptions[0]}
      </p>
      <img className="weatherImage" src={image} alt="current weather icon" />
    </div>
  )
}

export default WeatherInfo