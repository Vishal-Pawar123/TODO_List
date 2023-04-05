import React, { Component } from 'react'
import ShowList from './ShowList'

class AddTask extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         inputValue : '',
         nameList : [],
      }
    }
    
    HandleInput = (event) => {
        this.setState({
            inputValue : event.target.value

        })
    }

    HandleSubmit = (event) => {
        const newNameList = [...this.state.nameList, this.state.inputValue]
        this.setState({
            nameList : newNameList
        })
        event.preventDefault()
        
    }

    RemoveItem = (index) => {
        const newList = [...this.state.nameList]
        newList.splice(index,1)
        this.setState({
            nameList : newList
        })
    }

    render() {
        return (
        <div className='p-2 m-3'>
            <form className='form-group' onSubmit={this.HandleSubmit}>
                <input className='form-control-sm w-25' type="text" placeholder='Add Task Here' onChange={this.HandleInput} />
                <button className='btn-primary'>Add Task</button>
            </form>
            <br />
            <div>{this.state.nameList.map((x,index) => <ShowList removeItem = {this.RemoveItem} ind = {index} key={index}  name={x}/> )}</div>
            
        </div>
        )
    }
}

export default AddTask