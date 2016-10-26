import React, { Component } from 'react'
import { Button, AppBar, Tabs, Tab } from 'react-toolbox'
import { CloseIcon } from '../icons.js'
import TabsDemo from '../TabsDemo'
import DatePickerDemo from '../DatePickerDemo'
import CheckboxesDemo from '../CheckboxesDemo'
import RadiosDemo from '../RadiosDemo'
import If from '../If.js'

import styles from './styles.sass'

const scrollThreshold = 30

export default class SidebarContents extends Component {
  componentWillMount() {
    this.setState({
      date: new Date(),
      tabIndex: 0,
      lastScrollPosition: 0,
      showHeader: true
    })
  }

  componentDidMount() {
    this.contentEl.addEventListener('scroll', (e) => this.handleScroll(e))
  }

  componentWillUnmount() {
    this.contentEl.removeEventListener('scroll', (e) => this.handleScroll(e))
  }

  handleScroll(event) {
      let scrollTop = event.srcElement.scrollTop
      if (scrollTop < scrollThreshold) {
          this.setState({
            lastScrollPosition: scrollTop,
            showHeader: true
          })
      } else {
          this.setState({
            lastScrollPosition: scrollTop,
            showHeader: false
          })
      }
  }

  onTabChange(tabIndex) {
    this.setState({ tabIndex })
  }

  render() {
    const { onCloseButtonClick, sidebarPinned } = this.props

    return (
      <div className={styles.sidebar}>
        <div className={styles.header + ' ' + (this.state.showHeader ? styles.headerVisible : '')}>
          <div className={styles.headerBar}>
            <Button onClick={onCloseButtonClick}>
              <CloseIcon />
            </Button>
          </div>
          <DatePickerDemo />
          <TabsDemo index={this.state.tabIndex} onChange={(tabIndex) => this.onTabChange(tabIndex)} />
        </div>
        <If condition={this.state.tabIndex === 0}>
          <div className={styles.content} ref={(r) => { this.contentEl = r }}>
            <RadiosDemo />
            <CheckboxesDemo />
            <RadiosDemo />
            <CheckboxesDemo />
          </div>
        </If>
      </div>
    )
  }
}
