import React, { Component } from 'react'
import { Slider } from 'react-toolbox'

export default class SliderDemo extends Component {
  componentWillMount() {
    this.setState({
      value: 12
    })
  }

  render() {
    const { onChange } = this.props

    return (
      <Slider
        min={9}
        max={17}
        step={1}
        snaps={true}
        value={this.state.value}
        onChange={(value) => {
          this.setState({ value })
          onChange(value)
        }}
      />
    )
  }
}
