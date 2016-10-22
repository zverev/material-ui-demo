import React from 'react'
import { render } from 'react-dom'
import App from './App.js'
import styles from './styles.sass'

window.addEventListener('load', () => {
  let el = document.createElement('div')
  el.className = styles['react-container']
  document.querySelector('body').appendChild(el)
  render(<App />, el)
})