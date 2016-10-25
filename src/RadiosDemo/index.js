import React, { Component } from 'react'
import { RadioGroup, RadioButton } from 'react-toolbox'
import styles from './styles.sass'

function RadioText({ textLeft, textRight }) {
  return (
    <div className={styles.radioText}>
      <span className={styles.textLeft}>{textLeft}</span>
      <span className={styles.textRight}>{textRight}</span>
    </div>
  )
}

export default class RadiosDemo extends Component {
  componentWillMount() {
    this.setState({
      radioValue: 'bar'
    })
  }

  handleRadioChange(radioValue) {
    this.setState({ radioValue })
  }

  render() {
    return (
      <RadioGroup name='comic' value={this.state.radioValue} onChange={(v) => this.handleRadioChange(v)}>
        <RadioButton label={<RadioText textLeft="Последних" textRight="27 Янв — 18 Янв" />} value='foo'/>
        <RadioButton label='From Hell' value='bar' disabled/>
        <RadioButton label='V for a Vendetta' value='baz'/>
        <RadioButton label='Watchmen' value='qux'/>
      </RadioGroup>
    )
  }
}
