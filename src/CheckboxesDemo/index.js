import React, { Component } from 'react'
import CheckboxItem from '../CheckboxItem'
import { Panel } from 'react-toolbox'
import styles from './styles.sass'

export default class CheckboxesDemo extends Component {
    componentWillMount() {
        this.setState({
            'check1': false,
            'check2': true
        })
    }

    render() {
        return (
            <Panel>
                <div className={styles.checkboxItem}>
                    <CheckboxItem
                        checked={this.state.check1}
                        label={'Участок 1'}
                        modified={new Date(2015, 11, 5)}
                        author={'Burtseva Nelly'}
                        onChange={(value) => { this.setState({ check1: value }) }}
                    />
                    </div>
                <div className={styles.checkboxItem}>
                    <CheckboxItem
                        className={styles.checkboxItem}
                        checked={this.state.check2}
                        label={'2 участок Объем земляных работ - 04.08 - 29.10'}
                        modified={new Date(2016, 10, 5)}
                        author={'Голубев Максим'}
                        onChange={(value) => { this.setState({ check2: value }) }}
                    />
                </div>
            </Panel>
        )
    }
}
