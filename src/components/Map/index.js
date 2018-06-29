import React, {Component, Fragment} from 'react'
import {GoogleMap, Marker, withGoogleMap, Polyline, InfoWindow} from "react-google-maps"
import {Consumer as MapConsumer} from "../../context/locations"

const defaultCenter = {lat: -34.397, lng: 150.644}

const Gmap = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={defaultCenter}
    center={
      props.locationItems.length && props.locationItems[props.locationItems.length - 1]
      || defaultCenter
    }
  >
    <Polyline
      path={props.locationItems}
      geodesic={true}
      options={{
        strokeColor: '#ff2527'
      }}
    />
    {props.locationItems.map((position, i) => (
      <Fragment key={position.lng}>
        <Marker
          onClick={props.handleOpenItem(position)}
          position={position}
          label={`${++i}`}
          draggable
          onDragEnd={props.handleChangeCoords(position)}
        />
        {props.openItem && props.openItem.lng === position.lng
          && props.openItem.lat === position.lat
          && (
            <InfoWindow
              options={{pixelOffset: new google.maps.Size(0,-30)}}
              position={position}
              onCloseClick={props.handleOpenItem(position)}>
              <div>{position.name}</div>
            </InfoWindow>
          )
        }
      </Fragment>
    ))}
  </GoogleMap>)

class Map extends Component{
  state = {
    openItem: null
  }

  handleOpenItem = (item) => e => {
    this.setState({openItem: this.state.openItem === item ? null : item})
  }

  render() {
    const {openItem} = this.state
    return (
      <div>
        <MapConsumer>
            {({locations, handleChangeCoords}) => (
              <Gmap
                openItem={openItem}
                handleChangeCoords={handleChangeCoords}
                handleOpenItem={this.handleOpenItem}
                locationItems={locations}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            )}
        </MapConsumer>
      </div>
    )
  }
}

export default Map
