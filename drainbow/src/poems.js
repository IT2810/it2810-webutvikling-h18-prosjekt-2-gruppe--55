import React, {Component} from 'react';

class Poems extends Component {
    render() {
        return (
            <div>
                {this.props.poems[0]}
            </div>
        );
    }
}

export default Poems;