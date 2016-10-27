import React, { Component } from 'react'
import { Button } from 'react-toolbox'
import { CloseIcon } from '../icons.js'

import styles from './styles.sass'

export default class SidebarHeaderBar extends Component {
  render() {
    const { onCloseButtonClick } = this.props

    return (
      <div className={styles.sidebarHeaderBar}>
        <Button onClick={onCloseButtonClick}>
          <CloseIcon fill={'#fff'}/>
        </Button>
      </div>
    )
  }
}
