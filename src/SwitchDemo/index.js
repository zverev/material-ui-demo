import React, { Component } from 'react'
import { Switch } from 'react-toolbox'

import styles from './styles.sass'

export default class SwitchDemo extends Component {
  componentWillMount() {
    this.setState({
      value: true
    })
  }

  render() {
    const { label, icon } = this.props

    return (
      <div className={styles.switchDemo}>
        {icon}
        <span>{label}</span>
        <Switch
          checked={this.state.value}
          onChange={(v) => {this.setState({ value: v })}}/>
      </div>
    )
  }
}
