import React, { Component } from 'react';
import './App.css';
import Characters from './components/characters/Characters.js';

class App extends Component {
  constructor(){
  super();
  this.state= {
    routes:''
 }
}


  onImageClick =() => {
  alert('hello');
  }

  render() {
    return (
      <div >
        <div>
          <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Karma" rel="stylesheet"/>
        </div> 
        <header>
          <h1 className="Bd">The Dream Is Still Alive</h1> 
        </header>     
           <Characters onImageClick={this.onImageClick}/>       
      </div>
    );
  }
}


export default App;

