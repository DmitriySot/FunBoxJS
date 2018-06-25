import React, {Component, Fragment} from 'react'
import {render} from 'react-dom'

class App extends Component {
  render() {
    return(
      <Fragment>
      Hello World!
    </Fragment>
  )
  }
}

render(
<App />,
  document.getElementById('root')
)
