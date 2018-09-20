import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return (
            <div>

                <form>Poems
                    <input type="radio" id="radiohappypoem" name="poemradio" onClick={() =>this.props.checkRadio("happypoem")} defaultChecked/>
                    <label>happy</label>
                    <input type="radio" id="radiosadpoem"  name="poemradio" onClick={() =>this.props.checkRadio("sadpoem")}/>
                    <label>sad</label>
                    <input type="radio" id="radioangrypoem"  name="poemradio" onClick={() =>this.props.checkRadio("angrypoem")} />
                    <label>angry</label>
                </form>
                <form>Picture
                    <input type="radio" id="radiohappyimg" name="imgradio" onClick={() =>this.props.checkRadio("happyimg")}defaultChecked/>
                    <label>happy</label>
                    <input type="radio" id="radiosadimg"  name="imgradio" onClick={() =>this.props.checkRadio("sadimg")}/>
                    <label>sad</label>
                    <input type="radio" id="radioangryimg"  name="imgradio" onClick={() =>this.props.checkRadio("angryimg")}/>
                    <label>angry</label>
                </form>
                <form>Sound
                    <input type="radio"  name="soundradio" onClick={() =>this.props.checkRadio("happysound")} defaultChecked/>
                    <label>happy</label>
                    <input type="radio"   name="soundradio" onClick={() =>this.props.checkRadio("sadsound")}/>
                    <label>sad</label>
                    <input type="radio"   name="soundradio" onClick={() =>this.props.checkRadio("angrysound")} />
                    <label>angry</label>
                </form>
            </div>
        );
    }
}

export default Menu;