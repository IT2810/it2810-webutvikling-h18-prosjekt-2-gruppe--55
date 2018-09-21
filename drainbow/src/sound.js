import React, {Component} from 'react';

class Sound extends Component {
    render() {
        const {sound, catvalue, } =this.props
        return (

            <div className="grid-sound">
                    <div className="sound"><audio id="happysound" type="audio/mpeg" src={sound[catvalue]} loop controls /></div>
                    <div className="sound"><audio id="sadsound" type="audio/mpeg" src={sound[catvalue+4]} loop controls /></div>
                    <div className="sound"><audio id="angrysound" type="audio/mpeg" src={sound[catvalue+8]} loop controls /></div>
            </div>
        );
    }
}

export default Sound;