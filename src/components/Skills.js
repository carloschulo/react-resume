import React, { Component } from 'react';

class Skills extends Component {
  render() {
    // console.log(this.props.details)
    return (
      <li className="chips blue">
        {this.props.details}
      </li>
    );
  }
}

export default Skills;
