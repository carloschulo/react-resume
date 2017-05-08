import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

class App extends Component {
  render() {
    const resume = this.props.resumeJson;
    return (
      <div className="App">
        <Header resumeObj={resume} className="Left"/>
        <Card resumeObj={resume} className="Right"/>
      </div>
    );
  }
}

export default App;
