import React, { useState } from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }



  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Task title:
          <input type="text" value={this.props.value} onChange={this.props.handleChange} />
        </label>
        <input type="submit" value="Submit" onSubmit={this.props.handleSubmit} />
      </form>
    )
  }
}

export default Form