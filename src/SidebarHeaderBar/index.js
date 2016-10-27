import React, { Component } from 'react'
import { Button, Dropdown } from 'react-toolbox'
import { CloseIcon } from '../icons.js'

import styles from './styles.sass'

export default class SidebarHeaderBar extends Component {
  render() {
    const { onCloseButtonClick } = this.props

    return (
      <div className={styles.sidebarHeaderBar}>
        <Button onClick={onCloseButtonClick}>
          <CloseIcon fill={'#fff'}/>
        </Button>
        <DropdownFoo />
      </div>
    )
  }
}

class DropdownFoo extends React.Component {
  componentWillMount() {
    this.setState({
      value: 0,
      values: [
        { value: 0, label: 'England' },
        { value: 1, label: 'Spain'},
        { value: 2, label: 'Thailand' },
        { value: 3, label: 'USA'}
      ]
    })
  }

  handleChange(value) {
    this.setState({ value });
  }

  render () {
    return (
      <Dropdown
        onChange={(value) => this.handleChange(value)}
        source={this.state.values}
        value={this.state.value}
      />
    );
  }
}
