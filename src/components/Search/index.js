import React, {Component} from 'react'
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox'
import {Consumer as MapConsumer} from "../../context/locations";

class Search extends Component {
  handlePickPlace = handler => () => {
    const places = this.searchBox.getPlaces().slice(-1)
    const {geometry, name} = places[0]
    handler({
      lat: geometry.location.lat(),
      lng: geometry.location.lng(),
      name
    })
  }

  onSearchBoxMounted = ref => this.searchBox = ref

  render() {
    return (
        <MapConsumer>
          {({handleAddLocation}) => (
            <StandaloneSearchBox
              ref={this.onSearchBoxMounted}
              onPlacesChanged={this.handlePickPlace(handleAddLocation)}
            >
              <input
                type="text"
                placeholder="Customized your placeholder"
                style={{
                  boxSizing: `border-box`,
                  border: `1px solid transparent`,
                  width: `240px`,
                  height: `32px`,
                  padding: `0 12px`,
                  borderRadius: `3px`,
                  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                  fontSize: `14px`,
                  outline: `none`,
                  textOverflow: `ellipses`,
                }}
              />
            </StandaloneSearchBox>
          )}
        </MapConsumer>
    )
  }
}

export default Search
