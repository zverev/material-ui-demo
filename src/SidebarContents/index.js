import React, { Component } from 'react'
import { Button, AppBar, Tabs, Tab } from 'react-toolbox'
import { CloseIcon, PrintIcon, CalculateIcon } from '../icons.js'
import TabsDemo from '../TabsDemo'
import SidebarHeaderBar from '../SidebarHeaderBar'
import DatePickerDemo from '../DatePickerDemo'
// import CheckboxesDemo from '../CheckboxesDemo'
import Chance from 'chance'
import CheckboxDemo from '../CheckboxDemo'
import RadiosDemo from '../RadiosDemo'
import SwitchDemo from '../SwitchDemo'
import SliderDemo from '../SliderDemo'
import If from '../If.js'

import styles from './styles.sass'

const scrollThreshold = 30
const chance = new Chance()

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
    // this.contentEl.addEventListener('scroll', (e) => this.handleScroll(e))
  }

  componentWillUnmount() {
    // this.contentEl.removeEventListener('scroll', (e) => this.handleScroll(e))
  }

  handleScroll(event) {
      // let scrollTop = event.srcElement.scrollTop
      // if (scrollTop < scrollThreshold) {
      //     this.setState({
      //       lastScrollPosition: scrollTop,
      //       showHeader: true
      //     })
      // } else {
      //     this.setState({
      //       lastScrollPosition: scrollTop,
      //       showHeader: false
      //     })
      // }
  }

  onTabChange(tabIndex) {
    this.setState({ tabIndex })
  }

  render() {
    const { onCloseButtonClick, sidebarPinned, onSliderChange } = this.props

    return (
      <div className={styles.sidebar}>
        <div className={styles.header + ' ' + (this.state.showHeader ? styles.headerVisible : '')}>
          <div className={styles.headerChild + ' ' + styles.headerBar}>
            <SidebarHeaderBar onCloseButtonClick={onCloseButtonClick} />
          </div>
          <div className={styles.headerChild + ' ' + styles.datepickerContainer}>
            {/* <DatePickerDemo /> */}
          </div>
          <div className={styles.headerChild}>
            {/* <TabsDemo index={this.state.tabIndex} onChange={(tabIndex) => this.onTabChange(tabIndex)} /> */}
          </div>
        </div>
        {/* <If condition={this.state.tabIndex === 0}> */}
          {/* <div className={styles.content} ref={(r) => { this.contentEl = r }}> */}
          <div className={styles.content}>
            <SwitchDemo label={randomSentence()} icon={<PrintIcon />} />
            <SliderDemo onChange={onSliderChange} />
            <CheckboxDemo label={randomSentence()} checked={true} />
            <CheckboxDemo label={randomSentence()} checked={false} />
            <CheckboxDemo label={randomSentence()} checked={true} />
            {/* <RadiosDemo /> */}
            {/* <CheckboxesDemo /> */}
            {/* <RadiosDemo /> */}
            {/* <CheckboxesDemo /> */}
            {/* <RadiosDemo /> */}
            {/* <CheckboxesDemo /> */}
          </div>
        {/* </If> */}
      </div>
    )
  }
}

function randomSentence() {
  return chance.sentence({ words: chance.integer({ min: 1, max: 5 }) })
}
