import React from 'react'
import PropTypes from 'prop-types'

const LocationItem = ({location, handleRemoveLocation}) =>  (
  <div>
    {location.name} <button onClick={handleRemoveLocation(location)} style={{color: 'tomato'}}>✖</button></div>
)

LocationItem.propTypes = {
  location: PropTypes.object.isRequired,
  handleRemoveLocation: PropTypes.func
}

export default LocationItem
