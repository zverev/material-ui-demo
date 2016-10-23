import { Checkbox, Button, Sidebar, AppBar } from 'react-toolbox'
import DatePicker from 'react-toolbox/lib/date_picker'
import React, { Component } from 'react'
import { CloseIcon } from './icons.js'

class SidebarContents extends Component {
  componentWillMount() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <DatePicker label='Birthdate' sundayFirstDayOfWeek onChange={(date) => this.setState({ date })} value={this.state.date} />
    )
  }
}


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
