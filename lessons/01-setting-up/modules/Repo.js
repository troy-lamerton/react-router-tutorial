import React from 'react'

export default React.createClass({
  render () {
    return (
      <div>
        <h3>{this.props.params.repoName}</h3>
        <p>All the data:</p>
        <p>{this.props.params.repoName} by <em>{this.props.params.userName}</em></p>
      </div>
    )
  }
})