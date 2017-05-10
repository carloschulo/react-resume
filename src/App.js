import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import School from './components/School';
import Contact from './components/Contact';

class App extends Component {
  render() {
    const resume = this.props.resumeJson;
    return (
      <Router>  
        <div className="App">
          <Header resumeObj={resume} className="Left"/>
          
            <Route exact path={'/'} render={({ match }) => <Card resumeObj={resume} />}/>
            <Route exact path={'/🎒'} render={({ match }) => <School education={resume.education[0]} />}/>
            <Route exact path={'/📧'} render={({ match }) => <Contact info={resume.basics} />}/>
        
{/*          <Card resumeObj={resume} />
*/}          
            <ul className="App__pages">
              <li>
                <NavLink exact to={'/'} activeStyle={{fontWeight: 'bold',color: '#333'}}>Work</NavLink>
              </li>
              <li>
                <NavLink exact to={'/🎒'} activeStyle={{fontWeight: 'bold',color: 'red'}}>Education</NavLink>
              </li>
              <li>
                <NavLink exact to={'/📧'} activeStyle={{fontWeight: 'bold',color: 'red'}}>Contact</NavLink>
              </li>
            </ul>
           
        </div>
      </Router>
    );
  }
}

export default App;
