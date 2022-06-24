import React from 'react'

function HighOrderComp() {
  return (
    <div>
        <h1 className='App'>High Order Component</h1>
        <ul>
            <li>The Higher-Order component is simply called HOC.</li>
            <li>To share common functionality between components</li>
            <li>A pattern where a function takes a component as an argument and returns a new component.</li>
            <b>const NewComponent = higherOrderComponent( originalComponent )</b>
            <b>const EnhancedComponent = higherOrderComponent( originalComponent )</b>
            <li>It is an advanced technique in React for reusing component logic.</li>
            <li>A Higher-Order component is a function that takes a component and returns a new component by adding additional functionalities to the component. </li>
            <li>HOC is wrapped in the original component.</li>
            <li>Higher-Order component is an advanced technique in ReactJS for reusing component logic.</li>
            <li>HOCs are not part of the React API. But, It is a pattern that emerges from React’s compositional nature.</li>
        </ul>

    </div>
  )
}

export default HighOrderComp