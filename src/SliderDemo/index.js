import React, { Component } from 'react'
import { Slider } from 'react-toolbox'

export default class SliderDemo extends Component {
  componentWillMount() {
    this.setState({
      value: 0
    })
  }

  render() {
    return (
      <Slider
        min={0}
        max={10}
        step={1}
        snaps={true}
        value={this.state.value}
        onChange={(value) => { this.setState({ value }) }}
      />
    )
  }
}
