import React, { createClass } from 'react'
import { CalculateIcon, DownloadIcon, LayersIcon, PrintIcon, VolumeIcon, ScanIcon } from '../icons.js'
import { Tab, Tabs } from 'react-toolbox'
import DatePickerDemo from '../DatePickerDemo'
import TimePickerDemo from '../TimePickerDemo'
import CheckboxDemo from '../CheckboxDemo'
import DialogDemo from '../DialogDemo'
import RadiosDemo from '../RadiosDemo'
import SliderDemo from '../SliderDemo'
import TabsDemo from '../TabsDemo'
import styles from './styles.sass'
import Chance from 'chance'

const chance = new Chance()

export default createClass({
  componentWillMount() {
    this.setState({
      tabIndex: 0
    })
  },

  render() {
    return (
      <div className={styles.componentsDemo}>
        <Tabs index={this.state.tabIndex} fixed onChange={(tabIndex) => this.setState({ tabIndex })}>
          <Tab label={<PrintIcon/>}>
            <div className={styles.componentTitle}>Checkboxes:</div>
            <CheckboxDemo label={randomSentence()} checked={true} />
            <div className={styles.componentTitle}>RadioButtons:</div>
            <RadiosDemo />
            <div className={styles.componentTitle}>Slider:</div>
            <SliderDemo />
          </Tab>
          <Tab label={<LayersIcon/>}>
            <div className={styles.componentTitle}>DatePicker:</div>
            {tryCreateComponent(DatePickerDemo)}
            <div className={styles.componentTitle}>TimePicker:</div>
            {tryCreateComponent(TimePickerDemo)}
            <div className={styles.componentTitle}>Dialog:</div>
            {tryCreateComponent(DialogDemo)}
          </Tab>
        </Tabs>
      </div>
    )
  }
})

function randomSentence() {
  return chance.sentence({ words: chance.integer({ min: 1, max: 5 }) })
}

function tryCreateComponent(componentClass) {
  let component
  try {
    component = React.createElement(componentClass, {})
  } catch(e) {
    component = React.createElement('div', {}, e.message)
  }
  return component
}
