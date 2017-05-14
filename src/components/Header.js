import React, { Component } from 'react';
// import Skills from './Skills';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    const { basics, skills } = this.props.resumeObj;
  
    return (
      <div className="Header-Container">
        <div className="Header-content">
          <div className="made-with-react">
            made with 
            <img src={logo} className="App-logo" alt="Made With React Logo"/>
          </div>
          <h1 className="Header-name">{basics.name}</h1>
          <h4 className="Header-label">{basics.label}, currently in {basics.location.city}🗽</h4>
        {/*<img className="Header-image" src={basics.picture} alt="This is me!"/>*/} 
        <p className="Header-desc">{basics.summary}</p>
        {/*<h4>Skill Set:</h4>
        <ul className="Skills-list">
          {
            skills.keywords
              .map((key, index) => <Skills key={key} details={skills.keywords[index]}/>)
          }
        </ul>*/}
        </div>
      </div>
    );
  }
}

export default Header;
