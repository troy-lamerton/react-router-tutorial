import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render () {
    return (
      <div>
        <h2>Repos page!</h2>
        <ul>
          <li><NavLink to="/repos/troy-lamerton/mvc-2048">Troy's mvc-2048 repo</NavLink></li>
          <li><NavLink to="/repos/reactjs/redux">Redux with React</NavLink></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
})
