import React, { Component } from 'react'
import CheckboxItem from '../CheckboxItem'
import styles from './styles.sass'

export default class CheckboxGroup extends Component {
    render() {
        const { children, label } = this.props

        return (
            <div className={styles.checkboxGroup}>
                <CheckboxItem label={label} />
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        )
    }
}
