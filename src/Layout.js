import { Button, Layout, Panel, Sidebar } from 'react-toolbox'
import React, { Component } from 'react'
import { MenuIcon } from './icons.js'
import SidebarContents from './SidebarContents'
import FlexboxDemo from './FlexboxDemo'
import styles from './styles.sass'
import Map from './Map.js'
import If from './If.js'

export default class LayoutTest extends React.Component {
  componentWillMount() {
    this.setState({
      sidebarPinned: false,
      zoom: 12
    })
  }

  toggleSidebar() {
    this.setState({ sidebarPinned: !this.state.sidebarPinned })
  }

  render() {
    return (
      <Layout>
        <Panel>
          <div className={styles.controlPane}>
            <If condition={!this.state.sidebarPinned}>
            <Button raised onClick={() => this.toggleSidebar()}>
              <MenuIcon />
            </Button>
            </If>
          </div>
          <div className={styles.mapPane}>
            {/* <Map zoom={this.state.zoom} /> */}
            <FlexboxDemo />
          </div>
        </Panel>
        <Sidebar className={styles.sidebar} pinned={this.state.sidebarPinned} width={5}>
          <SidebarContents
            onCloseButtonClick={() => this.toggleSidebar()} sidebarPinned={this.state.sidebarPinned}
            onSliderChange={(value) => {this.setState({ zoom: value })}}
          />
        </Sidebar>
      </Layout>
    )
  }
}
