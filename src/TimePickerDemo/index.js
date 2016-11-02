import React, { createClass } from 'react'
import { TimePicker } from 'react-toolbox'

export default createClass({
  componentWillMount() {
    let time = new Date()
    time.setHours(4)
    time.setMinutes(20)
    this.setState({ time })
  },

  render () {
  	return (
      <TimePicker label={'Finishing time'} onChange={(time) => { this.setState({ time }) }} value={this.state.time} />
    )
  }
})
