import React from 'react'

const WeatherInfo = ({ weather }) => {
  return (
    <div className="weatherContainer">
      <p id="temperature" className="weatherText">
        {Math.round(weather.main.temp)} °C
      </p>
      <p id="description" className="weatherText">
        {weather.weather[0].description}
      </p>
      <img className="weatherImage" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="current weather icon" />
    </div>
  )
}

export default WeatherInfo