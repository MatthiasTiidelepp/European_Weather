import React from 'react'

const CityDropdown = ({ cities, city, handleDropdown }) => {
  return (
    <>
      <select className="citiesDropdown" value={city.capital} onChange={handleDropdown} >
        {cities.map(c => {
          return (
            <option key={c.capital}>
              {c.capital}
            </option>
          )
        })}
      </select> 
    </>
  )
}

export default CityDropdown