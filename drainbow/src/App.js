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
        /* henter informasjon fra ajax*/
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
    /* skifter side*/
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

    /* bestemmer hva som vises av innhold */
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
    /* konstruerer siden */      
     <div className="App">
            <div className="grid-container">
                <div className="item1"> <p>Pages</p>
                <div>
                        <button onClick={()=>this.handelTabs(0,this.state.catvalue)}>1</button>
                        <button onClick={()=>this.handelTabs(1,this.state.catvalue)}>2</button>
                        <button onClick={()=>this.handelTabs(2,this.state.catvalue)}>3</button>
                        <button onClick={()=>this.handelTabs(3,this.state.catvalue)}>4</button>
                        </div> 
                    </div>
                <div className= "item2"><p>Categories</p><Menu checkRadio={this.handleradio}/> 
                    </div>
                <div className= "item3"><Pictures pics={this.state.pics} catvalue={this.state.catvalue}/> 
                    </div>  
                <div className="item4">
                    <Sound sound={this.state.sound} catvalue={this.state.catvalue}/>
                    </div>
                <div className="item5"> <Poems poems={this.state.poems} catvalue={this.state.catvalue}/>
                </div>
                </div> 
        </div>     
      );
  }
}

export default App;
