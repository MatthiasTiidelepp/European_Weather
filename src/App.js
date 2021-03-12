import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CityDropdown from './components/CityDropdown'
import WeatherInfo from './components/WeatherInfo';

function App() {
  // States for the current dropdown value, the list of cities
  // for dropdown, and the fetched weather data.

  const [ city, setCity ] = useState('Tallinn')
  const [ cities, setCities ] = useState([])
  const [ weather, setWeather ] = useState()

  // Getting a list of all european region capitals.
  // This will run once on app start.
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://restcountries.eu/rest/v2/regionalbloc/eu'
      )
    setCities(result.data.map(c => c.capital))
    }

    fetchData()
  }, [])

  // Getting an object with info of
  // weather conditions in the selected city.
  // This will run and get new conditions every time
  // the state for the currently selected city updates.
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      setWeather(result.data)
    }

    fetchData()
  }, [ city ])

  const handleDropdown = (event)  => {
    setCity(event.target.value)
  }

  return (
    <div>
      <div className="mainContainer">

        <div className="titleContainer">
          <p className="titleText">
            European weather
          </p>
  
          <CityDropdown
            cities={cities}
            city={city}
            setCity={setCity}
            handleDropdown={handleDropdown} 
          />
        </div>
  
        {!weather ?
          null
          : <WeatherInfo
            weather={weather}
          />
        }
      </div>
      
      <footer className="footerText">
        by Matthias Tiidelepp
      </footer>
    </div>
  );
}

export default App;