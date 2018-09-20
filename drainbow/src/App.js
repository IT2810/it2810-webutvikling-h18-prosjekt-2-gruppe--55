import React, { Component } from 'react';
import './App.css';
import Pictures from "./pictures";
import Poems from "./poems";
import Sound from "./sound";
import Menu from "./menu";
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

        }else if (categorytype==="angryimg") {
            document.getElementById(categorytype).style.display = 'block';
            document.getElementById("happyimg").style.display = 'none';
            document.getElementById("sadimg").style.display = 'none';

        }else if(categorytype==="happysound"){
                document.getElementById(categorytype).style.display = 'block';
                document.getElementById("sadsound").style.display = 'none';
                document.getElementById("sadsound").pause();
                document.getElementById("angrysound").style.display = 'none';
            document.getElementById("angrysound").pause();
        }else if(categorytype==="sadsound"){
                document.getElementById(categorytype).style.display = 'block';
                document.getElementById("happysound").style.display = 'none';
                document.getElementById("happysound").pause();
                document.getElementById("angrysound").style.display = 'none';
                document.getElementById("angrysound").pause();

        }else {
                document.getElementById(categorytype).style.display = 'block';
                document.getElementById("happysound").style.display = 'none';
                document.getElementById("happysound").pause();
                document.getElementById("sadsound").style.display = 'none';
                document.getElementById("sadsound").pause();

            }

    };
    handelCheck = (catv) => {
        console.log(catv)

    };

    render() {



        return (

      <div className="App">

          <div className="ImgWrap">

              <Pictures pics={this.state.pics} catvalue={this.state.catvalue}/>

              <div className="grid-container">
        <div className="grid-menu">

          <img className="menu" src={"../img/menu.svg"} alt="menu" onClick={()=>this.handelCheck("hei")}/>
        </div>
        <div className="grid-sound">
          <img className="sound" src={"../img/soundOn.svg"} alt="soundOn"/>
            <Sound sound={this.state.sound} catvalue={this.state.catvalue}/></div>
        <div className="grid-text"> <Poems poems={this.state.poems} catvalue={this.state.catvalue}/></div>
            <Menu checkRadio={this.handleradio}/>
            <div className="grid-slider">
             <div>
                <button onClick={()=>this.handelTabs(0,this.state.catvalue)}>1</button>
                <button onClick={()=>this.handelTabs(1,this.state.catvalue)}>2</button>
                <button onClick={()=>this.handelTabs(2,this.state.catvalue)}>3</button>
                <button onClick={()=>this.handelTabs(3,this.state.catvalue)}>4</button>
             </div>
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
