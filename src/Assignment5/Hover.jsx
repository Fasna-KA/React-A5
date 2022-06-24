import React, { Component } from 'react'
import UpdatedComp from './Hoc'


 class Hover extends Component {
  render() {
    const {count,incrementCount} = this.props
    return (
      <h2 onMouseOver={incrementCount}> Example :  Hover {count}</h2>
    )
  }
}

export default UpdatedComp (Hover)