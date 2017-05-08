import React, { Component } from 'react';

class Skills extends Component {
  render() {
    // console.log(this.props.details)
    return (
      <li className="Skills-chips">
        {this.props.details}
      </li>
    );
  }
}

export default Skills;
