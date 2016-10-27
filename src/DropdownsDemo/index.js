import React, { Component } from 'react'
import { Dropdown } from 'react-toolbox'
import customTheme from './customTheme.sass'
import styles from './styles.sass'

export default class DropdownsDemo extends Component {
  componentWillMount() {
    this.setState({
      value0: 0,
      values0: [
        { value: 0, label: 'England' },
        { value: 1, label: 'Spain'},
        { value: 2, label: 'Thailand' },
        { value: 3, label: 'USA'}
      ],
      value1: 0,
      values1: [
        { value: 0, label: 'England' },
        { value: 1, label: 'Spain'},
        { value: 2, label: 'Thailand' },
        { value: 3, label: 'USA'}
      ]
    })
  }

  handleChange0(value0) {
    this.setState({ value0 });
  }

  handleChange1(value1) {
    this.setState({ value1 });
  }

  render () {
    return (
      <div className={styles.dropdownsDemo}>
        <div className={styles.dropdown}>
          <Dropdown
            onChange={(value) => this.handleChange0(value)}
            source={this.state.values0}
            value={this.state.value0}
          />
        </div>
        <div className={styles.dropdown}>
          <Dropdown
            theme={customTheme}
            onChange={(value) => this.handleChange1(value)}
            source={this.state.values1}
            value={this.state.value1}
          />
        </div>
      </div>
    );
  }
}
