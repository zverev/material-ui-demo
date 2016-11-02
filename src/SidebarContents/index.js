import React, { Component } from 'react'
import TabsDemo from '../TabsDemo'
import SidebarHeaderBar from '../SidebarHeaderBar'
import FlexboxDemo from '../FlexboxDemo'
import classNames from 'classnames'

import styles from './styles.sass'

export default class SidebarContents extends Component {
  render() {
    const { onCloseButtonClick, sidebarPinned, onSliderChange } = this.props

    return (
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <SidebarHeaderBar onCloseButtonClick={onCloseButtonClick} />
        </div>
        <div className={styles.content}>
          <FlexboxDemo />
        </div>
      </div>
    )
  }
}
