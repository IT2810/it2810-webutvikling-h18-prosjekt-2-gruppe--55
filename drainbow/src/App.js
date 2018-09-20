import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <div className="ImgWrap">
      <img className="Image" src={"../img/1-1.jpg"} alt="happy1"/>
        <div className="grid-container">
        <div className="grid-menu">
          <img className="menu" src={"../img/menu.svg"} alt="menu"/>
        </div>
        <div className="grid-sound">
          <img className="sound" src={"../img/soundOn.svg"} alt="soundOn"/></div>
        <div className="grid-text"><p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p></div>
        <div className="grid-slider">
        <svg className="sliderImage">
          <circle className="1"  r="7" fill="#D3BDB0" cy="120" />
        </svg>
        </div>

        </div>




        </div>
        </div>

    );
  }
}

export default App;
