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
        const a=document.getElementById(categorytype);

        if(categorytype==="happypoem"){
            a.style.display = 'block';
            document.getElementById("sadpoem").style.display = 'none';
            document.getElementById("angrypoem").style.display = 'none';
        }
        else if(categorytype==="sadpoem"){
            a.style.display = 'block';
            document.getElementById("happypoem").style.display = 'none';
            document.getElementById("angrypoem").style.display = 'none';

        }else if (categorytype==="angrypoem"){
            a.style.display = 'block';
            document.getElementById("happypoem").style.display = 'none';
            document.getElementById("sadpoem").style.display = 'none';

        }
        else if(categorytype==="happyimg"){
            a.style.display = 'block';
            document.getElementById("sadimg").style.display = 'none';
            document.getElementById("angryimg").style.display = 'none';
        }
        else if(categorytype==="sadimg"){
            a.style.display = 'block';
            document.getElementById("happyimg").style.display = 'none';
            document.getElementById("angryimg").style.display = 'none';

        }else if (categorytype==="angryimg") {
            a.style.display = 'block';
            document.getElementById("happyimg").style.display = 'none';
            document.getElementById("sadimg").style.display = 'none';

        }else if(categorytype==="happysound"){
                a.style.display = 'block';
                a.play();
                document.getElementById("sadsound").style.display = 'none';
                document.getElementById("sadsound").pause();
                document.getElementById("angrysound").style.display = 'none';
                document.getElementById("angrysound").pause();
        }else if(categorytype==="sadsound"){
                a.style.display = 'block';
                a.play();
                document.getElementById("happysound").style.display = 'none';
                document.getElementById("happysound").pause();
                document.getElementById("angrysound").style.display = 'none';
                document.getElementById("angrysound").pause();

        }else {
                a.style.display = 'block';
                a.play();
                document.getElementById("happysound").style.display = 'none';
                document.getElementById("happysound").pause();
                document.getElementById("sadsound").style.display = 'none';
                document.getElementById("sadsound").pause();

            }

    };


    render() {



        return (

      <div className="App">

          <div className="ImgWrap">

              <Pictures pics={this.state.pics} catvalue={this.state.catvalue}/>

              <div className="grid-container">
        <div className="grid-menu">
            <Menu checkRadio={this.handleradio}/>
        </div>
            <Sound sound={this.state.sound} catvalue={this.state.catvalue}/>
        <div className="grid-text"> <Poems poems={this.state.poems} catvalue={this.state.catvalue}/></div>
            <div className="grid-tab">
                <button onClick={()=>this.handelTabs(0,this.state.catvalue)}>page: 1</button>
                <button onClick={()=>this.handelTabs(1,this.state.catvalue)}>page: 2</button>
                <button onClick={()=>this.handelTabs(2,this.state.catvalue)}>page: 3</button>
                <button onClick={()=>this.handelTabs(3,this.state.catvalue)}>page: 4</button>
             </div>
        </div>
        </div>
      </div>

    );
  }
}

export default App;
