import React, { Component } from 'react'
import UpdatedComp from './Hoc'

 class ClickCount extends Component {
  
  render() {
    const {count,incrementCount} = this.props
    return (
        <>
        <span>Click Counter :  </span>
      <button onClick={incrementCount}>ClickCount {count}</button>
      </>
    )
  }
}

export default UpdatedComp (ClickCount)