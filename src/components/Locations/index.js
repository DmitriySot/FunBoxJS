import React, {Component} from 'react'
import LocationItem from './Item'
import {Consumer as MapConsumer} from '../../context/locations'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

class LocationList extends Component{
  handleDragEnd = handleDrag => drag => {
    drag.destination && handleDrag(drag.source.index, drag.destination.index)
  }

  render() {
    return (
      <MapConsumer>
        {({locations, handleRemoveLocation, handleMoveLocation}) => (
          <DragDropContext onDragEnd={this.handleDragEnd(handleMoveLocation)}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <ul ref={provided.innerRef}>
                  {locations.map((location, i) =>
                    <Draggable key={location.lng} draggableId={location.lng} index={i}>
                      {(provided, snapshot) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <LocationItem
                            key={location.lng}
                            location={location}
                            handleRemoveLocation={handleRemoveLocation}
                          />
                        </li>
                      )}
                    </Draggable>
                  )}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </MapConsumer>
    )
  }
}

export default LocationList
