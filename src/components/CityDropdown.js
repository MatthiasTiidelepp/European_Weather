import React from 'react'

// Component for the displaying the list of cities as a dropdown that has the functionality of changing the state 'city'
const CityDropdown = ({ cities, city, handleDropdown }) => {
  return (
    <select className="citiesDropdown" value={city.capital} onChange={handleDropdown} >
      {cities.map(c => {
        return (
          <option key={c.capital}>
            {c.capital}
          </option>
        )
      })}
    </select>
  )
}

export default CityDropdown