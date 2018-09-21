import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="">

                <select id="Categoryselect" onChange={()=>this.props.checkRadio(document.getElementById("Categoryselect").value)}>
                    <optgroup label="Poems">
                        <option value="happypoem">happy</option>
                        <option value="sadpoem">sad</option>
                        <option value="angrypoem">angry</option>
                    </optgroup>
                    <optgroup label="Pictures">
                            <option value="happyimg">happy</option>
                            <option value="sadimg">sad</option>
                            <option value="angryimg">angry</option>
                    </optgroup>
                    <optgroup label="Sound">
                        <option value="happysound">happy</option>
                        <option value="sadsound">sad</option>
                        <option value="angrysound">angry</option>
                    </optgroup>
                </select>


            </div>
        );
    }
}

export default Menu;