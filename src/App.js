import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
// import 'es6-promise';
// import 'whatwg-fetch';
/*<img src={logo} className="App-logo" alt="logo" />*/
class App extends Component {
  // constructor(){
  //   super();

  // }
  
  /*componentDidMount() {
    this.getData();
  }
  async getData () {
    const rawData = await fetch('http://headers.jsontest.com/');
    const data = await rawData.json();
    console.log('data', rawData.text());
  }*/
  
  render() {
    const resume = this.props.resumeJson;
    return (
      <div className="App">
        <Header resumeObj={resume} className="Left"/>
        <Card className="Right"/>
      </div>
    );
  }
}

export default App;
