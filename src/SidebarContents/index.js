import React, { Component } from 'react'
import { Button, AppBar, Tabs, Tab } from 'react-toolbox'
import { CloseIcon } from '../icons.js'
import TabsDemo from '../TabsDemo'
import DatePickerDemo from '../DatePickerDemo'
import CheckboxesDemo from '../CheckboxesDemo'
import RadiosDemo from '../RadiosDemo'
import If from '../If.js'

import styles from './styles.sass'

export default class SidebarContents extends Component {
  componentWillMount() {
    this.setState({
      date: new Date(),
      tabIndex: 0
    })
  }

  onTabChange(tabIndex) {
    this.setState({ tabIndex })
  }

  render() {
    const { onCloseButtonClick, sidebarPinned } = this.props

    return (
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <div className={styles.headerBar}>
            <Button onClick={onCloseButtonClick}>
              <CloseIcon />
            </Button>
          </div>
          <DatePickerDemo />
          <TabsDemo index={this.state.tabIndex} onChange={(tabIndex) => this.onTabChange(tabIndex)} />
        </div>
        <div className={styles.content}>
          <If condition={this.state.tabIndex === 0}>
            <div>
              <RadiosDemo />
              <CheckboxesDemo />
            </div>
          </If>
        </div>
      </div>
    )
  }
}
