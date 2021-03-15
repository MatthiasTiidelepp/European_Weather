import React from 'react'

const WeatherInfo = ({ weather, week, day }) => {
  
  const createTableChildren = () => {
    let children = []

    for (let i = 0; i < 7; i++) {
      if ((day + i) % 7 === day) {
        children.push(
          <tr key={i}>
            <td id="day" className="weatherText">today:</td>
            <td id="temperature" className="weatherText">{Math.round(weather.current.temp)} °C</td>
            <td id="description" className="weatherText">{weather.current.weather[0].description}</td>
            <td><img className="weatherImage" src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} alt="current weather icon" /></td>
          </tr>
        )
      } else {
        children.push(
          <tr key={i}>
            <td id="day" className="weatherText">{week[(day + i) % 7]}:</td>
            <td id="temperature" className="weatherText">{Math.round(weather.daily[i - 1].temp.day)} °C</td>
            <td id="description" className="weatherText">{weather.daily[i - 1].weather[0].description}</td>
            <td><img className="weatherImage" src={`http://openweathermap.org/img/wn/${weather.daily[i - 1].weather[0].icon}@2x.png`} alt="current weather icon" /></td>
          </tr>
        )
      }
    }

    return children
  }
 
  return (
    <table className="weatherTable">
      <tbody>
        {createTableChildren()}
      </tbody>
    </table>
  )
}

export default WeatherInfo