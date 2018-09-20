import React, {Component} from 'react';

class Sound extends Component {
    render() {
        return (

            <div>
                <button onClick={()=>this.props.handlevalue(this.props.catvalue)}>test</button>
                <div className="sound"><audio type="audio/mpeg" src={this.props.sound[this.props.catvalue]} loop controls />
                </div>
            </div>
        );
    }
}

export default Sound;