import React from 'react'

// Component for displaying the days of the week and the corresponding weather conditions (temperature, weather description and an icon representing the conditions) as a table
const WeatherInfo = ({ weather, week, day }) => {

  // Function that generates and returns rows and cells for the weathertable
  const createTableChildren = () => {
    // Initialize an emtpy array that will be returned at the end of the function
    let children = []

    // Push table row to the 'children' array with the current day's weather information
    children.push(
      <tr key={0}>
        <td id="day" className="weatherText">today:</td>
        <td id="temperature" className="weatherText">{Math.round(weather.current.temp)} °C</td>
        <td id="description" className="weatherText">{weather.current.weather[0].description}</td>
        <td><img className="weatherImage" src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}.png`} alt="current weather icon" /></td>
      </tr>
    )

    // A for loop that runs 6 times (once for each remaining day of the week) and pushes a row to the 'children' array with each day's weather information
    for (let i = 1; i < 7; i++) {
      children.push(
        <tr key={i}>
          <td id="day" className="weatherText">{week[(day + i) % 7]}:</td>
          <td id="temperature" className="weatherText">{Math.round(weather.daily[i - 1].temp.day)} °C</td>
          <td id="description" className="weatherText">{weather.daily[i - 1].weather[0].description}</td>
          <td><img className="weatherImage" src={`http://openweathermap.org/img/wn/${weather.daily[i - 1].weather[0].icon}.png`} alt="current weather icon" /></td>
        </tr>
      )
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