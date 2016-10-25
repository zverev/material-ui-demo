import React, { Component } from 'react'
import CheckboxItem from '../CheckboxItem'
import CheckboxGroup from '../CheckboxGroup'
import { Panel } from 'react-toolbox'
import styles from './styles.sass'

export default class CheckboxesDemo extends Component {
    componentWillMount() {
        this.setState({
            id: '1',
            label: 'Проделанные работы',
            expanded: true,
            children: [
                {
                    id: '11',
                    label: 'Накопительно',
                    expanded: false,
                    children: [
                        { id: '111', visible: true, label: 'Участок 1', author: 'Burtseva Nelly', modified: new Date(2015, 11, 5) },
                        { id: '112', visible: true, label: 'Участок 1', author: 'Burtseva Nelly', modified: new Date(2015, 11, 5) },
                        { id: '113', visible: true, label: 'Участок 1', author: 'Burtseva Nelly', modified: new Date(2015, 11, 5) }
                    ]
                },
                {
                    id: '12',
                    label: 'Сравнительно',
                    expanded: true,
                    children: [
                        { id: '121', visible: true, label: 'Участок 1', author: 'Burtseva Nelly', modified: new Date(2015, 11, 5) },
                        { id: '122', visible: true, label: 'Участок 1', author: 'Burtseva Nelly', modified: new Date(2015, 11, 5) },
                        { id: '123', visible: true, label: 'Участок 1', author: 'Burtseva Nelly', modified: new Date(2015, 11, 5) }
                    ]
                }
            ]
        })
    }

    render() {
        return (
            <CheckboxGroup group={this.state} />
        )
    }
}
