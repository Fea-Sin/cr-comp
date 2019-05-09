import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Testone from 'comta'

const reactContainer = document.getElementById('__react-content');

function render(container) {
  ReactDOM.render(
    <div>
      <h2>comta test</h2>
      <Testone />
    </div>, container
  )
}

render(reactContainer)