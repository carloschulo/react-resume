import React, { Component } from 'react';
import Skills from './Skills';

class Header extends Component {
  render() {
    const { basics, skills } = this.props.resumeObj;
    
  
    return (
      <div className="Header-Container">
        <div className="Header-content">
          <h1 className="Header-name">{basics.name}</h1>
          <h4 className="Header-label">{basics.label}</h4>
        {/*<img className="Header-image" src={basics.picture} alt="This is me!"/>*/} <p className="Header-desc">{basics.summary}</p>
        <h4>Skill Set:</h4>
        <ul className="Skills-list">
          {
            skills.keywords
              .map((key, index) => <Skills key={key} details={skills.keywords[index]}/>)
          }
        </ul>
        </div>
      </div>
    );
  }
}

export default Header;
