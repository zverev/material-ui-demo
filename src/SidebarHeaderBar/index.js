import React, { Component } from 'react'
import { Button, Dropdown } from 'react-toolbox'
import { CloseIcon } from '../icons.js'
import DropdownsDemo from '../DropdownsDemo'

import styles from './styles.sass'

export default class SidebarHeaderBar extends Component {
  render() {
    const { onCloseButtonClick } = this.props

    return (
      <div className={styles.sidebarHeaderBar}>
        <Button onClick={onCloseButtonClick}>
          <CloseIcon fill={'#fff'}/>
        </Button>
        <DropdownsDemo />
      </div>
    )
  }
}
