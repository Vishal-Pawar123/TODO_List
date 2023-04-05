import React, { Component } from 'react'
import Complete from './Complete'
import Delete from './Delete'
import './ShowList.css';

class ShowList extends Component {

constructor(props) {
  super(props)

  this.state = {
     isComplete : false
  }
}

isCompleted = ()=> {
  if(this.state.isComplete){
      this.setState({
          isComplete : false
      })
  }
  else
  {
      this.setState({
          isComplete : true
      })
  }
}

 render() {
    return (
      <div className='p-2 ml-5 mr-5 mb-3 border border-secondary rounded bgColor'>
        {this.props.name}
        <Delete removeItem = {this.props.removeItem} index={this.props.ind}/>
        <button className='btn-primary' onClick={() => this.isCompleted()}>{this.state.isComplete?'Incomplete' : 'Complete'}</button>
      </div>
    )
  }
}

export default ShowList
