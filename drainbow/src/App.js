import React, { Component } from 'react';
import './App.css';
import Pictures from "./pictures";
import Poems from "./poems";
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {

            poems: [],
            isLoaded: false,
            pics:[],



        }
    }

    componentDidMount() {
        fetch('document.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    poems: json,
                })
            });
        fetch('svgtest.json')
            .then(res => res.json())
            .then(json => {
                this.setState({

                    pics: json,
                })
            })
    }
    render() {

        let { isLoaded} = this.state;

        if(!isLoaded){
            return<div>Loading...</div>
        }else{


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
        <div className="grid-text"> <Poems poems={this.state.poems}/></div>
        <div className="grid-slider">
        <svg className="sliderImage">
          <circle className="1"  r="7" fill="#D3BDB0" cy="120" />
        </svg>
        </div>

        </div>





        </div>



          <Pictures pics={this.state.pics}/>

      </div>

    );
  }}
}

export default App;
