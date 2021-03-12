import React from 'react'

const CityDropdown = ({ cities, city, handleDropdown }) => {
  return (
    <>
      <select className="citiesDropdown" value={city} onChange={handleDropdown} >
        {cities.map(c => {
          return(
            <option key={c}>
              {c}
            </option>
          )
        })}
      </select> 
    </>
  )
}

export default CityDropdown