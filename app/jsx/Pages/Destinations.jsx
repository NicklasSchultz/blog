import React from 'react';
import {getDestinations} from '../services/ajax.js'
import PictureLayout from '../Layouts/PictureLayout/PictureLayout'
import {hashHistory} from 'react-router';

export default class Destinations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    onClick(item) {
        hashHistory.push({
            pathname: '/Details',
            query: {item}
        });
    }

    loadDestinations() {
        getDestinations().then(
            function(data) { // Success
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
                <PictureLayout label="CAmillas" data={this.state.data} callback={this.onClick}/>
            </div>
        )
    }
}
