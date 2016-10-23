import React, { Component } from 'react'

export default ({children, condition}) => {
  if (condition) {
    return children
  } else {
    return <div />
  }
}
