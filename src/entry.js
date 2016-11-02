import React, { createClass } from 'react'
import { render } from 'react-dom'
import Layout from './Layout.js'
import styles from './styles.sass'

window.addEventListener('load', () => {
  let el = document.createElement('div')
  el.className = styles['react-container']
  document.querySelector('body').appendChild(el)
  render(<Layout />, el)
})
