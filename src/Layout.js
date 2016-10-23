import React, { Component } from 'react'
import { AppBar, Checkbox, IconButton, Button } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';

import Map from './Map.js'
// const styles = {}
import styles from './styles.sass'

export default class LayoutTest extends React.Component {
    componentWillMount() {
      this.setState({
        drawerActive: false,
        drawerPinned: false,
        sidebarPinned: false
      })
    }

    toggleDrawerActive() {
        this.setState({ drawerActive: !this.state.drawerActive });
    }

    toggleDrawerPinned() {
        this.setState({ drawerPinned: !this.state.drawerPinned });
    }

    toggleSidebar() {
        this.setState({ sidebarPinned: !this.state.sidebarPinned });
    }

    render() {
        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive}
                    pinned={this.state.drawerPinned} permanentAt='xxxl'
                    onOverlayClick={() => this.toggleDrawerActive()}>
                    <p>
                        Navigation, account switcher, etc. go here.
                    </p>
                </NavDrawer>
                <Panel>
                    <div className={styles.controlPane}>
                      <Button label='sidebar' onClick={() => this.toggleSidebar()}/>
                    </div>
                    <div className={styles.mapPane}>
                        <Map />
                    </div>
                </Panel>
                <Sidebar pinned={ this.state.sidebarPinned } width={ 5 }>
                    <div><IconButton icon='close' onClick={() => this.toggleSidebar()}/></div>
                    <div style={{ flex: 1 }}>
                        <p>Supplemental content goes here.</p>
                    </div>
                </Sidebar>
            </Layout>
        );
    }
}
