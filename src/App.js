import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CityDropdown from './components/CityDropdown'
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [ city, setCity ] = useState('Tallinn')
  const [ cities, setCities ] = useState([])
  const [ weather, setWeather ] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://restcountries.eu/rest/v2/regionalbloc/eu'
      )
    setCities(result.data.map(c => c.capital))
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${city}`
      )
    setWeather(result.data)
    }

    fetchData()
  }, [ city ])

  const handleDropdown = (event)  => {
    setCity(event.target.value)
  }

  return (
    <div className="container">
      <CityDropdown
        cities={cities}
        city={city}
        setCity={setCity}
        handleDropdown={handleDropdown} 
      />

      {!weather ?
        null
        : <WeatherInfo
          image={weather.current.weather_icons[0]}
          weather={weather}
          />
      }
    </div>
  );
}

export default App;