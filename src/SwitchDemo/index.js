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
        <div className={styles.icon}>{icon}</div>
        <span className={styles.label}>{label}</span>
        <Switch
          className={styles.switch}
          checked={this.state.value}
          onChange={(v) => {this.setState({ value: v })}}/>
      </div>
    )
  }
}
