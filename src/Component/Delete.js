import React, { Component } from 'react'

export class Delete extends Component {


    render() {
        return (
        <div className='m-1'>
                <button className='btn-danger' onClick={() => this.props.removeItem(this.props.index)}>Delete</button>
        </div>
        )
    }
}

export default Delete
