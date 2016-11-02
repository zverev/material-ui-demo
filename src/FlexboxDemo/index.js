import React, { createClass } from 'react'
import classNames from 'classnames'
import styles from './styles.sass'
import Chance from 'chance'

const chance = new Chance()

export default createClass({
  render() {
    return (
      <div>
        <FlexPane
          label={'row; space-between'}
          className={classNames(styles.directionRow, styles.justifySpaceBetween)}
        />
        <FlexPane
          label={'row; space-around'}
          className={classNames(styles.directionRow, styles.justifySpaceAround)}
        />
        <FlexPane
          label={'row; flex-start'}
          className={classNames(styles.directionRow, styles.justifyFlexStart)}
        />
        <FlexPane
          label={'row; center'}
          className={classNames(styles.directionRow, styles.justifyCenter)}
        />
        <FlexPane
          label={'row; flex-end'}
          className={classNames(styles.directionRow, styles.justifyFlexEnd)}
        />
        <FlexPane
          label={'column; center; space-between'}
          className={classNames(styles.directionColumn, styles.alignCenter, styles.justifySpaceBetween)}
        />
        <FlexPane
          label={'column; center; space-around'}
          className={classNames(styles.directionColumn, styles.alignCenter, styles.justifySpaceAround)}
        />
      </div>
    )
  }
})

function FlexPane({ className, label }) {
  return (
    <div className={styles['flexPaneWrapper']}>
      <div className={styles['label']}>{label}</div>
      <div className={classNames(styles['flexPane'], className)}>
        {[0,1,2,3,4].map((n, i) => (
          <div className={styles['flexItem']} key={i}>{n}</div>
        ))}
      </div>
    </div>
  )
}
