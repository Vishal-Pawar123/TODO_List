import React, { Component } from 'react'

export class Delete extends Component {


    render() {
        return (
        <div>
                <button onClick={() => this.props.removeItem(this.props.index)}>Delete</button>
        </div>
        )
    }
}

export default Delete
