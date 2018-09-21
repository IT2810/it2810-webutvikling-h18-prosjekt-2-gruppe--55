import React, {Component} from 'react';



class Poems extends Component {


    render() {
        const {poems, catvalue, } =this.props
        return (
            <div className="poems">

                        <p id="happypoem" className="poems">{poems[catvalue]}</p>
                        <p id="sadpoem" className="poems">{poems[catvalue+4]}</p>
                        <p id="angrypoem" className="poems">{poems[catvalue+8]}</p>

            </div>
        );
    }
}

export default Poems;