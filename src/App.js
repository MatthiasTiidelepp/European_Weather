import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import CityDropdown from './components/CityDropdown'
import WeatherInfo from './components/WeatherInfo'

function App() {
  // States for the the list of cities, current dropdown value, and the fetched weather data.
  const [ cities, setCities ] = useState()
  const [ city, setCity ] = useState({ capital: 'Tallinn', coordinates: [59, 26] })
  const [ weather, setWeather ] = useState()

  // An array of weekdays and the current date to generate weekday names for the forecast
  const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const day = new Date().getDay()

  // Getting a list of all european region capitals.
  // This will run once on app start.
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://restcountries.eu/rest/v2/regionalbloc/eu'
      )
      await setCities(result.data.map(c => {
        return (
          {
            'capital': c.capital,
            'coordinates': c.latlng
          }
        )
      }))
    }

    fetchData()
  }, [])

  // Getting an object with info of weather conditions in the selected city.
  // This will run and get new conditions every time the state for the currently selected city updates.
  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = await process.env.REACT_APP_API_KEY
      const result = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.coordinates[0]}&lon=${city.coordinates[1]}&units=metric&exclude=minutely,hourly,alerts&appid=${API_KEY}`)
      setWeather(result.data)
    }

    fetchData()
  }, [ city ])

  // Event handler for setting the current city to the one chosen from dropdown
  const handleDropdown = (event)  => {
    setCity(
      {
        'capital': event.target.value,
        'coordinates': cities.find(c => c.capital === event.target.value).coordinates
      }
    )
  }

  return (
    <div>
      <Header />

      <div className="mainContainer">

        {!cities ?
          null
          : <div className="dropdownContainer">
            <CityDropdown
              cities={cities}
              city={city}
              setCity={setCity}
              handleDropdown={handleDropdown}
            />
          </div>
        }

        {!weather ?
          null
          : <WeatherInfo
            weather={weather}
            week={week}
            day={day}
          />
        }
      </div>

      <footer className="footerText">
        by Matthias Tiidelepp
      </footer>
    </div>
  )
}

export default App