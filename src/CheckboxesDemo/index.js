import React, { Component } from 'react'
import CheckboxItem from '../CheckboxItem'
import CheckboxGroup from '../CheckboxGroup'
import { extend } from 'lodash'
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
                        { id: '112', visible: false, label: 'Участок 1', author: 'Burtseva Nelly', modified: new Date(2015, 11, 5) },
                        { id: '113', visible: true, label: 'Участок 1', author: 'Burtseva Nelly', modified: new Date(2015, 11, 5) }
                    ]
                },
                {
                    id: '12',
                    label: 'Сравнительно',
                    expanded: true,
                    children: [
                        { id: '121', visible: false, label: 'Участок 1', author: 'Burtseva Nelly', modified: new Date(2015, 11, 5) },
                        { id: '122', visible: true, label: 'Участок 1', author: 'Burtseva Nelly', modified: new Date(2015, 11, 5) },
                        { id: '123', visible: false, label: 'Участок 1', author: 'Burtseva Nelly', modified: new Date(2015, 11, 5) }
                    ]
                }
            ]
        })
    }

    onChildChange(v) {
      console.log(find(this.state, v.id))
    }

    render() {
        return (
            <CheckboxGroup group={this.state} onChange={(v) => this.onChildChange(v)}/>
        )
    }
}

function find(tree, id, arPath=[id]) {
  if (tree.id == id) {
    return tree
  }

  if (!tree.children) {
    return null
  }

  for (let i = 0; i < tree.children.length; i++) {
    let r = find(tree.children[i], id, [].concat(arPath, id, [].concat(arPath, id)))
    if (r) {
      return extend({ arPath }, r)
    }
  }
}
