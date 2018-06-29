import React, {Component} from 'react'
import Locations from './Locations'
import Map from './Map'
import Search from './Search'
import {Provider as LocationProvider} from "../context/locations"

class App extends Component{
  state = {
    locations: []
  }

  handleAddLocation = (newLocation) => {
    this.setState(({locations}) => ({locations: locations.concat(newLocation)}))
  }

  handleRemoveLocation = (removedLocation) => e => {
    this.setState(({locations}) => ({
      locations: locations.filter(location => (
        location.lat !== removedLocation.lat && location.lng !== removedLocation.lng
      ))
    }))
  }

  handleChangeCoords = location => coords => {
    const updatedLocation = {...location, lat: coords.latLng.lat(), lng: coords.latLng.lng()}

    this.setState(({locations}) => ({
      locations: locations.map(item => item === location ? updatedLocation : item)
    }))
  }

  handleMoveLocation = (from, to) => {
    const {locations} = this.state
    const locationsCopy = locations.slice()
    const movedElement = locations[from]
    locationsCopy.splice(from, 1)
    locationsCopy.splice(to, 0, movedElement)

    this.setState(() => ({locations: locationsCopy}))
  }

  render() {
    const {locations} = this.state
    const providerData = {
      locations,
      handleAddLocation: this.handleAddLocation,
      handleRemoveLocation: this.handleRemoveLocation,
      handleMoveLocation: this.handleMoveLocation,
      handleChangeCoords: this.handleChangeCoords
    }
    return (
      <LocationProvider value={providerData}>
        <Search/>
        <Locations />
        <Map/>
      </LocationProvider>
    )
  }
}

export default App
