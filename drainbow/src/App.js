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
<<<<<<< HEAD

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

=======
          <Poems poems={this.state.poems}/>
          <Pictures pics={this.state.pics}/>

      </div>
>>>>>>> 526165b6c7c3f17fd9daf820ead2e11142a9a2e8
    );
  }}
}

export default App;
