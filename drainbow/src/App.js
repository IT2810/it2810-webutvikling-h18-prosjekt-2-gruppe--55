import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pictures from "./pictures";
import Poems from "./poems";
import Sound from "./sound";
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {

            poems: [],
            pics:[],
            catvalue: 0,
            sound:[],

        }
    }

    componentDidMount() {
        fetch('poem.json')
            .then(res => res.json())
            .then(json => {
                this.setState({

                    poems: json,
                })
            });
        fetch('pictures.json')
            .then(res => res.json())
            .then(json => {
                this.setState({

                    pics: json,
                })
            });
        fetch('sound.json')
            .then(res => res.json())
            .then(json => {
                this.setState({

                   sound: json,
                })
            });

    }
    handelTabs = (buttonID, catv) => {
        if(buttonID===0){
            catv=0 }
       else if(buttonID===1){
            catv=1
        }
        else if(buttonID===2){
            catv=2
        }
        else{
            catv=3
        }

        this.setState({catvalue: catv})

};


    handleradio = (categorytype)  =>{

        if(categorytype==="happypoem"){
            document.getElementById(categorytype).style.display = 'block';
            document.getElementById("sadpoem").style.display = 'none';
            document.getElementById("angrypoem").style.display = 'none';
        }
        else if(categorytype==="sadpoem"){
            document.getElementById(categorytype).style.display = 'block';
            document.getElementById("happypoem").style.display = 'none';
            document.getElementById("angrypoem").style.display = 'none';

        }else if (categorytype==="angrypoem"){
            document.getElementById(categorytype).style.display = 'block';
            document.getElementById("happypoem").style.display = 'none';
            document.getElementById("sadpoem").style.display = 'none';

        }
        else if(categorytype==="happyimg"){
            document.getElementById(categorytype).style.display = 'block';
            document.getElementById("sadimg").style.display = 'none';
            document.getElementById("angryimg").style.display = 'none';
        }
        else if(categorytype==="sadimg"){
            document.getElementById(categorytype).style.display = 'block';
            document.getElementById("happyimg").style.display = 'none';
            document.getElementById("angryimg").style.display = 'none';

        }else if (categorytype==="angryimg"){
            document.getElementById(categorytype).style.display = 'block';
            document.getElementById("happyimg").style.display = 'none';
            document.getElementById("sadimg").style.display = 'none';

        }

    };

    render() {



        return (

      <div className="App">
          <button onClick={()=>this.handelTabs(0,this.state.catvalue)}>1</button>
          <button onClick={()=>this.handelTabs(1,this.state.catvalue)}>2</button>
          <button onClick={()=>this.handelTabs(2,this.state.catvalue)}>3</button>
          <button onClick={()=>this.handelTabs(3,this.state.catvalue)}>4</button>
          <Poems poems={this.state.poems} catvalue={this.state.catvalue} checkRadio={this.handleradio}/>
          <Pictures pics={this.state.pics} catvalue={this.state.catvalue} checkRadio={this.handleradio}/>
          <Sound sound={this.state.sound} catvalue={this.state.catvalue}/>

      </div>
    );
  }
}

export default App;
