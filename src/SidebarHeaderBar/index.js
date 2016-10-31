import React, { Component } from 'react'
import { Button, Dropdown } from 'react-toolbox'
import { CloseIcon } from '../icons.js'
import DropdownsDemo from '../DropdownsDemo'

import customButtonTheme from './customButtonTheme.sass'
import styles from './styles.sass'

export default class SidebarHeaderBar extends Component {
  render() {
    const { onCloseButtonClick } = this.props

    return (
      <div className={styles.sidebarHeaderBar}>
        {/* <DropdownsDemo /> */}
        <Button theme={customButtonTheme} onClick={onCloseButtonClick}>
          <CloseIcon fill={'#fff'}/>
        </Button>
      </div>
    )
  }
}
