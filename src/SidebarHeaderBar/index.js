import React, { Component } from 'react'
import { Button } from 'react-toolbox'
import { CloseIcon } from '../icons.js'

export default class SidebarHeaderBar extends Component {
  render() {
    const { onCloseButtonClick } = this.props

    return (
      <Button onClick={onCloseButtonClick}>
        <CloseIcon />
      </Button>
    )
  }
}
