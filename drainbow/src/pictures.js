import React, {Component} from 'react';



/* spesifiserer bilder til websiden*/
class Pictures extends Component {
    render() {
        const {pics, catvalue, } =this.props;
        return (
            <div className="pictures">

                        <div id="happyimg" className="pictures" dangerouslySetInnerHTML={{__html: pics[catvalue]}}/>
                        <div id="sadimg" className="pictures" dangerouslySetInnerHTML={{__html: pics[catvalue+4]}}/>
                        <div id="angryimg" className="pictures" dangerouslySetInnerHTML={{__html: pics[catvalue+8]}}/>

            </div>
        );
    }
}

export default Pictures;