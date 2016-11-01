import React, { createClass } from 'react'
import { Checkbox } from 'react-toolbox'
import styles from './styles.sass'

export default createClass({
  componentWillMount() {
    const { checked } = this.props

    this.setState({ checked })
  },

  render() {
    const { label } = this.props
    const { checked } = this.state

    return (
      <div className={styles.checkboxDemo}>
        <Checkbox checked={checked} onChange={() => this.setState({ checked: !checked })} />
        <span className={styles.label} onClick={() => this.setState({ checked: !checked })}>{label}</span>
      </div>
    )
  }
})
