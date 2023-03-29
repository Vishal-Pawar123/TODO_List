import React, { Component } from 'react'

export class Complete extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.isComplete()}>{ this.props.status ? 'Incomplete' : 'Complete'}</button>
      </div>
    )
  }
}

export default Complete
