import React from 'react';
import {getDestinations} from '../services/ajax.js'
import PictureLayout from '../Layouts/PictureLayout/PictureLayout'

export default class Destinations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    loadDestinations() {
        getDestinations().then(
            function(data) { // Success
                console.error(data);
                this.setState({data: data});
            }.bind(this),
            function(reason) { // Failed
                console.error(reason);
            }.bind(this)
        );
    }
    componentDidMount() {
        this.loadDestinations();
    }

    render() {
        return (
            <div>
                <PictureLayout label="CAmillas" data={this.state.data}/>
            </div>
        )
    }
}
