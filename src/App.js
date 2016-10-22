import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'react-toolbox/lib/commons.scss';
import Drawer from 'react-toolbox/lib/drawer'
import {Button, IconButton} from 'react-toolbox/lib/button'

import 'leaflet/dist/leaflet.css'
import styles from './styles.sass'

const position = [51.505, -0.09]

export default function App () { return (
    <div className={styles.root}>
      <Map center={position} zoom={13} className={styles['leaflet-container']}>
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
      <Drawer active={false} onOverlayClick={() => { console.log('foo') }}>
        <h5>This is your Drawer.</h5>
        <p>You can embed any content you want, for example a Menu.</p>
      </Drawer>
    </div>
) }
