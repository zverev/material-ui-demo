import { Button, Layout, Panel, Sidebar } from 'react-toolbox'
import React, { Component } from 'react'
import { MenuIcon } from './icons.js'
import SidebarContents from './SidebarContents'
import styles from './styles.sass'
import Map from './Map.js'
import If from './If.js'

export default class LayoutTest extends React.Component {
  componentWillMount() {
    this.setState({
      sidebarPinned: false
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
            <Map />
          </div>
        </Panel>
        <Sidebar pinned={this.state.sidebarPinned} width={5} scrollY={true}>
          <SidebarContents
            onCloseButtonClick={() => this.toggleSidebar()} sidebarPinned={this.state.sidebarPinned}
          />
        </Sidebar>
      </Layout>
    )
  }
}
