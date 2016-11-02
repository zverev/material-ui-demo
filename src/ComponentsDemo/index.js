import React, { createClass } from 'react'
import DatePickerDemo from '../DatePickerDemo'
import TimePickerDemo from '../TimePickerDemo'
import CheckboxDemo from '../CheckboxDemo'
import RadiosDemo from '../RadiosDemo'
import SliderDemo from '../SliderDemo'
import TabsDemo from '../TabsDemo'
import styles from './styles.sass'
import Chance from 'chance'


const chance = new Chance()

export default createClass({
  render() {
    return (
      <div className={styles.componentsDemo}>
        <div className={styles.componentTitle}>Checkboxes:</div>
        <CheckboxDemo label={randomSentence()} checked={true} />
        <div className={styles.componentTitle}>RadioButtons:</div>
        <RadiosDemo />
        <div className={styles.componentTitle}>DatePicker:</div>
        <DatePickerDemo />
        <div className={styles.componentTitle}>TimePicker:</div>
        <TimePickerDemo />
        <div className={styles.componentTitle}>Slider:</div>
        <SliderDemo />
      </div>
    )
  }
})

function randomSentence() {
  return chance.sentence({ words: chance.integer({ min: 1, max: 5 }) })
}
