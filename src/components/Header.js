import React, { Component } from 'react';
// import Skills from './Skills';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    const { basics } = this.props.resumeObj;
  
    return (
      <div className="Header-Container">
        <div className="Header-content">
         
          <h1 className="Header-name">{basics.name}</h1>
          <h4 className="Header-label">Currently in {basics.location.city} 🗽</h4>
        {/*<img className="Header-image" src={basics.picture} alt="This is me!"/>*/} 
        <p className="Header-desc">{basics.summary}</p>
        {/*<h4>Skill Set:</h4>
        <ul className="Skills-list">
          {
            skills.keywords
              .map((key, index) => <Skills key={key} details={skills.keywords[index]}/>)
          }
        </ul>*/}
        
         <div className="made-with-react">
          <a href="https://github.com/carloschulo/react-resume" target="_blank">
            made with 
            <img src={logo} className="App-logo" alt="Made With React Logo"/>
            </a>
          </div>
          <a className="onlyforiphoneSE" href="mailto:carlos@carlosrh.com?subject=Resume%20Inquiry" style={{color: '#4a4a4a',textDecoration: 'none'}}>Contact me</a>
        
        </div>
      </div>
    );
  }
}

export default Header;
