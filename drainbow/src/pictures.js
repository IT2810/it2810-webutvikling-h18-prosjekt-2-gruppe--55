import React, {Component} from 'react';




class Pictures extends Component {
    render() {
        return (
            <div>
                <form>
                        <input type="radio" id="radiohappyimg" name="imgradio" onClick={() =>this.props.checkRadio("happyimg")} defaultChecked/>
                        <label>happy</label>
                        <input type="radio" id="radiosadimg"  name="imgradio" onClick={() =>this.props.checkRadio("sadimg")}/>
                        <label>sad</label>
                        <input type="radio" id="radioangryimg"  name="imgradio" onClick={() =>this.props.checkRadio("angryimg")} />
                        <label>angry</label>
                </form>
                        <div id="happyimg" className="pictures" dangerouslySetInnerHTML={{__html: this.props.pics[this.props.catvalue]}}/>
                        <div id="sadimg" className="pictures" dangerouslySetInnerHTML={{__html: this.props.pics[this.props.catvalue+4]}}/>
                        <div id="angryimg" className="pictures" dangerouslySetInnerHTML={{__html: this.props.pics[this.props.catvalue+8]}}/>

            </div>
        );
    }
}

export default Pictures;