import React from 'react';
import { GoogleMap,withGoogleMap,withScriptjs } from 'react-google-maps';

// export default withScriptjs(withGoogleMap(props => {
//   return <GoogleMap {...props} ref={props.onMapMounted}>{props.children}</GoogleMap>
// }))

export default withScriptjs(withGoogleMap(props => {
  return props.children
}))
