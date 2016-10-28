import React, { Component } from 'react'
import CheckboxItem from '../CheckboxItem'
import styles from './styles.sass'

export default class CheckboxGroup extends Component {
    render() {
        const { group: { label, expanded, id, children, visible }, onChange } = this.props

        return (
            <div className={styles.checkboxGroup}>
                <CheckboxItem label={label} onChange={() => onChange({ id, visible: !visible, expanded, children })}/>
                <div className={styles.children}>
                    {children.map((node) => {
                        const { id, expanded, visible, label, author, modified } = node
                        if (typeof expanded !== 'undefined') {
                            // group
                            return (
                              <div key={id} className={styles.child}>
                                <CheckboxGroup group={node} onChange={onChange} />
                              </div>
                            )
                        } else if (typeof visible !== 'undefined') {
                            // node
                            return (
                              <div key={id} className={styles.child}>
                                <CheckboxItem
                                  id={id}
                                  visible={visible}
                                  label={label}
                                  author={author}
                                  modified={modified}
                                  onChange={(v) => {
                                    onChange(v)
                                  }}
                                />
                              </div>
                            )
                        }
                        return <div/>
                    })}
                </div>
            </div>
        )
    }
}
