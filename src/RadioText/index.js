import React from 'react'
import styles from './styles.sass'

export default function RadioText({ textLeft, textRight }) {
  return (
    <div className={styles.radioText}>
      <span className={styles.textLeft}>{textLeft}</span>
      <span className={styles.textRight}>{textRight}</span>
    </div>
  )
}
