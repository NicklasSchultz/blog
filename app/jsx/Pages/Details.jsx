import React from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from '../components/Containers/ImageContainer/ImageContainer'
import ResponsiveGrid from '../components/Grid/ResponsiveGrid/ResponsiveGrid'
import TextLayout from '../Layouts/TextLayout/TextLayout'
import {getDetails} from '../services/ajax'

export default class Details extends React.Component {
    constructor(props) {
        super(props)
        let item = this.props.location.state.item;
        console.log(item);
        this.state = {
            item: item,
            collage: [],
            texts: []
        };
    }

    loadData() {
        getDetails(this.state.item.id).then(
            function(data) {
                this.setState({
                    data: data.data,
                    collage: data.collage
                });
            }.bind(this),
            function(reason) {
                console.error(reason);
            }.bind(this)
        )
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div className="main-content-area">
                <TextLayout texts={this.state.texts} data={this.state.texts} />
                <ResponsiveGrid data={this.state.collage} />
            </div>
        )
    }
}
