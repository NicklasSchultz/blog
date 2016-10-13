import React from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from '../components/Containers/ImageContainer/ImageContainer'
import PromoLayout from '../Layouts/PromoLayout/PromoLayout'
import PictureLayout from '../Layouts/PictureLayout/PictureLayout'
import {getPromoted, getFavorites} from '../services/ajax'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            favorites: []
        };
    }
    loadPromoted() {
        getPromoted().then(
            function(data) {
                this.setState({data: data});
            }.bind(this),
            function(reason) {
                console.error(reason);
            }.bind(this)
        );
    }
    loadFavorites() {
        getFavorites().then(
            function(data) {
                this.setState({favorites: data});
            }.bind(this),
            function(reason) {
                console.error(reason);
            }.bind(this)
        );
    }
    componentDidMount() {
        this.loadPromoted();
        this.loadFavorites();
    }
    render() {
        return (
            <div className="main-content-area">
                <ImageContainer src="http://media.istockphoto.com/photos/wooden-platform-under-coconut-palm-trees-on-beach-picture-id473796816"/>
                <PromoLayout label="Latest Blog Posts" data={this.state.data}/>
                <PictureLayout label="Our favorite destinations" data={this.state.favorites}/>
            </div>
        )
    }
}
