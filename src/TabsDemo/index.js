import React, { Component } from 'react'
import { Tabs, Tab } from 'react-toolbox'
import { CalculateIcon, DownloadIcon, LayersIcon, PrintIcon, VolumeIcon, ScanIcon } from '../icons.js'

export default class TabsDemo extends Component {
  render() {
    const { onChange, index } = this.props

    return (
      <Tabs index={index} fixed onChange={onChange}>
        <Tab label={<PrintIcon/>}></Tab>
        <Tab label={<ScanIcon/>}></Tab>
        <Tab label={<CalculateIcon/>}></Tab>
        <Tab label={<DownloadIcon/>}></Tab>
        <Tab label={<LayersIcon/>}></Tab>
        <Tab label={<VolumeIcon/>}></Tab>
      </Tabs>
    )
  }
}
