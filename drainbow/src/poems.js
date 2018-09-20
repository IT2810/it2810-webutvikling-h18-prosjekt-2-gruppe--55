import React, {Component} from 'react';



class Poems extends Component {


    render() {
        return (
            <div>
                <form>
                        <input type="radio" id="radiohappypoem" name="poemradio" onClick={() =>this.props.checkRadio("happypoem")} defaultChecked/>
                        <label>happy</label>
                        <input type="radio" id="radiosadpoem"  name="poemradio" onClick={() =>this.props.checkRadio("sadpoem")}/>
                        <label>sad</label>
                        <input type="radio" id="radioangrypoem"  name="poemradio" onClick={() =>this.props.checkRadio("angrypoem")} />
                        <label>angry</label>
                </form>
                        <p id="happypoem" className="poems">{this.props.poems[this.props.catvalue]}</p>
                        <p id="sadpoem" className="poems">{this.props.poems[this.props.catvalue+4]}</p>
                        <p id="angrypoem" className="poems">{this.props.poems[this.props.catvalue+8]}</p>

            </div>
        );
    }
}

export default Poems;