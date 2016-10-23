import { Checkbox, Button, Sidebar, AppBar } from 'react-toolbox'
import React, { Component } from 'react'
import { CloseIcon } from './icons.js'

export default class extends Component {
  render() {
    const { onCloseButtonClick, sidebarPinned } = this.props

    return (
      <Sidebar pinned={sidebarPinned} width={5}>
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

function SidebarContents() {
  return <div/>
}
