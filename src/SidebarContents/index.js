import React, { Component } from 'react'
import { Button, AppBar, Tabs, Tab } from 'react-toolbox'
import { CloseIcon, CalculateIcon, DownloadIcon, LayersIcon, PrintIcon, VolumeIcon, ScanIcon } from '../icons.js'
import DatePickerDemo from '../DatePickerDemo'
import CheckboxesDemo from '../CheckboxesDemo'
import RadiosDemo from '../RadiosDemo'

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
          <AppBar flat>
            <Button onClick={onCloseButtonClick}>
              <CloseIcon />
            </Button>
          </AppBar>
        </div>
        <div className={styles.content}>
          <DatePickerDemo />
          <Tabs index={this.state.tabIndex} fixed onChange={(tabIndex) => this.onTabChange(tabIndex)}>
            <Tab label={<CloseIcon/>}>{
              <div>
                <RadiosDemo />
                <CheckboxesDemo />
              </div>}</Tab>
            <Tab label={<ScanIcon/>}><small>Secondary content</small></Tab>
            <Tab label={<CalculateIcon/>}><small>Disabled content</small></Tab>
            <Tab label={<DownloadIcon/>}><small>Fourth content hidden</small></Tab>
            <Tab label={<LayersIcon/>}><small>Fifth content</small></Tab>
            <Tab label={<VolumeIcon/>}><small>Fifth content</small></Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}
