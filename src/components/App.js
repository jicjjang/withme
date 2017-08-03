import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  onPlus: PropTypes.func,
  onSubstract: PropTypes.func,
  onRandomizeColor: PropTypes.func
}

function createWarning(funcName) {
  return () => console.warn(funcName + ' is not defined.')
}

const defaultProps = {
  onPlus: () => createWarning('onPlus'),
  onSubstract: () => createWarning('onSubstract'),
  onRandomizeColor: () => createWarning('onRandomizeColo')
}

class App extends Component {
  render () {
    return (
      <div>test</div>
    )
  }
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default App
