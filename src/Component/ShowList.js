import React, { Component } from 'react'
import Complete from './Complete'
import Delete from './Delete'

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
      <div>
        {this.props.name}
        <Delete removeItem = {this.props.removeItem} index={this.props.ind}/>
        <button onClick={() => this.isCompleted()}>{this.state.isComplete?'Incomplete' : 'Complete'}</button>
      </div>
    )
  }
}

export default ShowList
