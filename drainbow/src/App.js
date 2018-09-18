import React, { Component } from 'react';
import logo from './logo.svg';
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
          <Poems poems={this.state.poems}/>
          <Pictures pics={this.state.pics}/>

      </div>
    );
  }}
}

export default App;
