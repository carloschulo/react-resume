import React, { Component } from 'react';
import Skills from './Skills';


class SkillList extends Component {
  render() {
    const { basics, skills } = this.props.resumeObj;
  
    return (
      <div className="Modal-Container" style={{background:'#fafafa', padding: '0 40px', display: 'flex', alignItems: 'flex-start'}}>
        
        <h1 className="Header-name">Skill Set:</h1>
        <ul className="Skills-list">
          {
            skills.keywords
              .map((key, index) => <Skills key={key} details={skills.keywords[index]}/>)
          }
        </ul>
        
      </div>
    );
  }
}

export default SkillList;
