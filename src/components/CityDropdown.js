import React from 'react'

const CityDropdown = ({ cities, city, setCity, handleDropdown }) => {
  return (
    <>
      <select className="citiesDropdown" value={city} onChange={handleDropdown} >
        {cities.map(c => {
          return(
            <option key={c} onSelect={() => {setCity(c)}}>
              {c}
            </option>
          )
        })}
      </select> 
    </>
  )
}

export default CityDropdown