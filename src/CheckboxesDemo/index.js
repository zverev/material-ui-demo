import React, { Component } from 'react'
import CheckboxItem from '../CheckboxItem'


export default class CheckboxesDemo extends Component {
    render() {
        return (
            <CheckboxItem
                label={'2 участок Объем земляных работ - 04.08 - 29.10'}
                modified={new Date(2016, 10, 5)}
                author={'Голубев Максим'}
            />
        )
    }
}
