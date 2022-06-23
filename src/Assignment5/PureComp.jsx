import './style.css'

import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Fasna K A',
         arr:[10]
      }
    }

    handleUpdate = () => {
        // // this.setState({ name : this.state.name})
        // this.setState({ name : 'Azhar'})

        const number = Math.round(Math.random() *10)
        const {arr} = this.state
        const arrCopy = [...arr]
        arrCopy.push(number)

        this.setState({ arr: arrCopy })
        console.log(arrCopy)
        
    }

  render() {
    console.log('Component Updated',this.state.arr);

    return (
      <div>
        <h1 className='App'>Pure Component</h1>
        Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values. If the value of the previous state or props and the new state or props is the same, the component is not re-rendered.
        <ul>
            <li>Prevents re-rendering of Component if props or state is the same</li>
            <li>Takes care of “shouldComponentUpdate” implicitly</li>
            <li>State and Props are Shallow Compared</li>
        </ul>

        <h1>Name:{this.state.name} </h1>

{
    this.state.arr.map(val => <h3>{val}</h3>)
}
<button onClick={this.handleUpdate} >Change</button>


      </div>
    )
  }
}

export default PureComp
