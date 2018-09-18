import React, {Component} from 'react';

class Pictures extends Component {
    render() {
        return (
            <div>

                <div dangerouslySetInnerHTML={{__html: this.props.pics[0]}}/>

            </div>
        );
    }
}

export default Pictures;