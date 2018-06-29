import {withGoogleMap,withScriptjs} from 'react-google-maps'

export default withScriptjs(withGoogleMap(props => {
  return props.children
}))
