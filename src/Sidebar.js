import { Checkbox, Button, Sidebar, AppBar, Tabs, Tab, Panel, RadioGroup, RadioButton } from 'react-toolbox'
import DatePicker from 'react-toolbox/lib/date_picker'
import React, { Component } from 'react'
import { CloseIcon, CalculateIcon, DownloadIcon, LayersIcon, PrintIcon, VolumeIcon, ScanIcon } from './icons.js'
import DatePickerDemo from './DatePickerDemo'
import CheckboxesDemo from './CheckboxesDemo'
import RadiosDemo from './RadiosDemo'
import RadioText from './RadioText'

import styles from './styles.sass'



class SidebarContents extends Component {
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
    return (
      <div className={styles.sidebarContents}>
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
    )
  }
}


export default class extends Component {
  render() {
    const { onCloseButtonClick, sidebarPinned } = this.props

    return (
      <Sidebar pinned={sidebarPinned} width={5} scrollY={true}>
          <AppBar flat>
            <Button onClick={onCloseButtonClick}>
              <CloseIcon />
            </Button>
          </AppBar>
          <div style={{ flex: 1 }}>
            <SidebarContents />
          </div>
      </Sidebar>
    )
  }
}
