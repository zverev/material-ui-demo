import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'react-toolbox/lib/commons.scss';
import Drawer from 'react-toolbox/lib/drawer'
import {Button, IconButton} from 'react-toolbox/lib/button'

import 'leaflet/dist/leaflet.css'
import classes from './styles.sass'

console.log(classes);

const position = [51.505, -0.09]
const map = (
    <div>
    <Map center={position} zoom={13}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
        </Popup>
      </Marker>
    </Map> 
    <Drawer active={true} onOverlayClick={() => { console.log('foo') }}>
      <h5>This is your Drawer.</h5>
      <p>You can embed any content you want, for example a Menu.</p>
    </Drawer>
    </div>
)

class DrawerTest extends React.Component {
  componentWillMount () {
    this.setState({
      active: false
    })
  }

  handleToggle () {
    this.setState({active: !this.state.active});
  }

  render () {
    return (
      <div>
        <Button label='Show Drawer' raised accent onClick={() => this.handleToggle()} />
        <Drawer active={this.state.active} onOverlayClick={() => this.handleToggle()}>
          <h5>This is your Drawer.</h5>
          <p>You can embed any content you want, for example a Menu.</p>
        </Drawer>
      </div>
    );
  }
}

window.addEventListener('load', () => {
  let el = document.createElement('div')
  el.className = classes.root
  document.querySelector('body').appendChild(el)
  render(<DrawerTest />, el)
})
