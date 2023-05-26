import React from 'react'
import ReactDOM from 'react-dom'
import { Pokedex } from './Pokedex'

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <Pokedex />
  </React.StrictMode>,
  document.getElementById('root'),
)
