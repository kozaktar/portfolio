import React, { Component } from 'react';
import resumeData from './resumeData.json'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    
    this.state={
      resumeData:resumeData
    }


  }


  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
